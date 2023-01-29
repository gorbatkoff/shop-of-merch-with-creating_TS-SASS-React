import React, { useState } from 'react';

import { useForm, SubmitHandler } from "react-hook-form";

import { ErrorMessage } from "@hookform/error-message";

import UserIcon from '../../Images/UserIcon.svg';

import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';


import Title from '../UI/Title';
import Reward from './Reward/Reward';
import styles from './Create.module.scss';
import MyDropzone from '../Dropzone/MyDropzone';
import Checkbox from '@mui/material/Checkbox';

type FormValues = {
  nameOfReward: string;
  price: number;
  kindOfDelivery: string;
  typeOfDelivery: string;
  isHaveSizeRange: string;
  isHaveDivisionByGender: string;
  note: string;
  isPrivate: string;
  countOfItems: number;
  isDivisionByGender: string;
  sizes: Array<string>;
  singleErrorInput: string
};

type Props = {}

function Create({ }: Props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);

  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

      <MyDropzone />

      <Title header="Название вознаграждения" title="Введите название вознаграждения, отражающее то, что получит пользователь" />

      <input {...register("nameOfReward", { required: "* Поле с названием обязательно!" })} type="text" id="nameOfReward" placeholder='Худи с красивой надписью' />

      <ErrorMessage
        errors={errors}
        name="nameOfReward"
        render={({ message }) => <p className={styles.warning}>{message}</p>}
      />

      <Title header="Цена в количестве приведённых пользователей" title="Введите цену исходя из того, что 1 приведённый пользователь = 1 монета" />


      <div className={styles.referral}>
        <img src={UserIcon} alt="" />
        <input {...register('price', { required: "* Укажите цену в количестве приведённых пользователей.", max: 1000000, min: 1 })} id="price" type="number" style={{ width: "35%" }} placeholder='1 000' />
        <p>Максимум 1 000 000</p>
      </div>

      <ErrorMessage
        errors={errors}
        name="price"
        render={({ message }) => <p className={styles.warning}>{message}</p>}
      />

      <Title header="Вид доставки" title="Укажите вид доставки, где виртуальная — через интернет (видео или аудиозаписи), где оффлайн — доставка почтой до дома получателя." />

      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel {...register("kindOfDelivery", { required: "* Выберите тип доставки" })} value="virtual" control={<Radio />} label="Виртуальная доставка" />
          <FormControlLabel {...register("kindOfDelivery", { required: "* Выберите тип доставки" })} value="offline" control={<Radio />} label="Офлайн доставка" />
        </RadioGroup>
      </FormControl>

      <ErrorMessage
        errors={errors}
        name="kindOfDelivery"
        render={({ message }) => <p className={styles.warning}>{message}</p>}
      />

      {watch('kindOfDelivery') === "offline"
        ?
        <>
          <Title header="У вознаграждения есть размерный ряд?" title="Есть ли у вознаграждения размерный ряд? Если Нет — ваш товар унисекс, если Да, пожалуйста, — укажите это." />

          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={true}
              name="radio-buttons-group"
            >
              <FormControlLabel {...register("isHaveSizeRange", { required: true })} value="No" control={<Radio />} label="Нет (единый размер)" />
              <FormControlLabel {...register("isHaveSizeRange", { required: true })} value="Yes" control={<Radio />} label="Да" />
            </RadioGroup>
          </FormControl>

          {watch('isHaveSizeRange') === "Yes"
            ?
            <>
              <Title header="Отметьте доступный размерный ряд" title="" />

              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  style={{ display: "grid", gridTemplateColumns: "repeat(4, 25%)", justifyContent: "space-between", width: "400px" }}
                >
                  <FormControlLabel {...register("sizes", { required: '* Укажите размерный ряд' })} value="XXXL" control={<Checkbox />} label="XXXL" />
                  <FormControlLabel {...register("sizes", { required: '* Укажите размерный ряд' })} value="XXL" control={<Checkbox />} label="XXL" />
                  <FormControlLabel {...register("sizes", { required: '* Укажите размерный ряд' })} value="XL" control={<Checkbox />} label="XL" />
                  <FormControlLabel {...register("sizes", { required: '* Укажите размерный ряд' })} value="L" control={<Checkbox />} label="L" />
                  <FormControlLabel {...register("sizes", { required: '* Укажите размерный ряд' })} value="M" control={<Checkbox />} label="M" />
                  <FormControlLabel {...register("sizes", { required: '* Укажите размерный ряд' })} value="S" control={<Checkbox />} label="S" />
                  <FormControlLabel {...register("sizes", { required: '* Укажите размерный ряд' })} value="XS" control={<Checkbox />} label="XS" />
                  <FormControlLabel {...register("sizes", { required: '* Укажите размерный ряд' })} value="XXS" control={<Checkbox />} label="XXS" />
                </RadioGroup>
              </FormControl>

              <ErrorMessage
                errors={errors}
                name="sizes"
                render={({ message }) => <p className={styles.warning}>{message}</p>}
              />

              <Title header="Есть ли деление на мужской и женский?" title="Укажите, пожалуйста, к какому гендеру относится ваш товар." />

              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={"Yes"}
                  name="radio-buttons-group"
                >
                  <FormControlLabel {...register("isDivisionByGender", { required: true })} value="No" control={<Radio />} label="Нет (Унисекс или не требуется)" />
                  <FormControlLabel {...register("isDivisionByGender", { required: true })} value="Yes" control={<Radio />} label="Да (Мужской или женский)" />
                </RadioGroup>
              </FormControl>
            </>
            :
            <></>
          }
        </>
        :
        watch('kindOfDelivery') === "virtual" ?
          <>
            <Title header="Тип вознаграждения" title="Тип вознаграждения — это то, что получит пользователь после оплаты товара: ссылка, аудио, текст. Где кастомизированный — это товар (мерч) который отправляется до получателя (кроссовки, худи, толстовка, предмет)" />

            <select {...register("typeOfDelivery", { required: true })} className={styles.select}>
              <option value="image" key={1}>Изображение</option>
              <option value="video" key={2}>Видеофайл</option>
              <option value="audio" key={3}>Аудиофайл</option>
              <option value="file" key={4}>Файл</option>
              <option value="link" key={5}>Ссылка</option>
              <option value="text" key={6}>Текстовая строка</option>
              <option value="custom" key={7}>Кастомизированный (обязательства)</option>
            </select>

            <Reward reward={watch("typeOfDelivery")} />
          </>

          :

          <></>
      }

      <Title header="Укажите количество товара" title="Пожалуйста, укажите количество единиц вашего товара. После достижения ограничения по выдаче товар будет помечен как неактивный." />

      <input {...register("countOfItems")} type="number" id="nameOfReward" placeholder='Количество товаров ед. (необязательно)' />


      <Title header="Примечание для пользователя" title="Примечание — это сообщение, которое получит пользователь после покупки товара. Например благодарность или просьба сообщить адрес доставки. " />


      <p className={styles.paragraph}>
        Сообщение, которое пользователь увидит после обмена накопленных пользователей на вознаграждения. Например, инструкцию как получить</p>

      <textarea {...register("note")} className={styles.note} placeholder='Привет дорогой подписчик! Я очень благодарен тебе за твою помощь, скажи мне свой адрес доставки, чтоб я смог отправить тебе мой мерч :)'>
      </textarea>

      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="No"
          name="radio-buttons-group"
        >
          <FormControlLabel {...register("isPrivate", { required: "* Уточните, куда направить товар?" })} value={'Yes'} control={<Radio />} label="Черновик (видите только вы)" />
          <FormControlLabel {...register("isPrivate", { required: "* Уточните, куда направить товар?" })} value={'No'} control={<Radio />} label="Опубликовать" />
        </RadioGroup>
      </FormControl>

      <ErrorMessage
        errors={errors}
        name="isPrivate"
        render={({ message }) => <p className={styles.warning}>{message}</p>}
      />
      <br />

      <input type="submit" style={{ cursor: 'pointer', width: '80%' }} value={watch('isPrivate') === 'Yes' ? 'Сохранить в черновик' : 'Отправить'} />

    </form>
  )
}

export default Create