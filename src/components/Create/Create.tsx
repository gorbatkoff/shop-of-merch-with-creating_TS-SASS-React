import React from 'react';

import { useForm, SubmitHandler } from "react-hook-form";

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

type FormValues = {
  nameOfReward: string;
  price: number;
  kindOfDelivery: string;
  typeOfDelivery: string;
  isHaveSizeRange: boolean;
  isHaveDivisionByGender: boolean;
  note: string;
  isPrivate: boolean;
};

type Props = {}

function Create({ }: Props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);
  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

      <MyDropzone />

      <Title header="Название вознаграждения" title="Введите название вознаграждения отражающее то, что получит пользователь" />

      <input {...register("nameOfReward")} type="text" id="nameOfReward" placeholder='Худи с красивой надписью' />

      <Title header="Цена в количестве приведённых пользователей" title="Введите цену исходя из того, что 1 приведённый пользователь = 1 монета" />


      <div className={styles.referral}>
        <img src={UserIcon} alt="" />
        <input {...register('price', { required: true, max: 1000000, min: 0 })} id="price" type="number" style={{ width: "35%" }} placeholder='1 000' />
        <p>Максимум 1 000 000</p>
      </div>

      <Title header="Вид доставки" title="Укажите тип доставки, где виртуальная — через интернет (видео или аудиозаписи), где оффлайн — доставка почтой до дома получателя." />

      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel {...register("kindOfDelivery", { required: true })} value="virtual" control={<Radio />} label="Виртуальная доставка" />
          <FormControlLabel {...register("kindOfDelivery", { required: true })} value="offline" control={<Radio />} label="Офлайн доставка" />
        </RadioGroup>
      </FormControl>

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


      <Title header="Примечание для пользователя" title="Примечание — это сообщение, которое получит пользователь после покупки товара. Например благодарность или просьба сообщить адрес доставки. " />


      <p className={styles.paragraph}>
        Сообщение, которое пользователь увидит после обмена накопленных пользователей на вознаграждения. Например, инструкцию как получить</p>


      <textarea {...register("note")} className={styles.note} placeholder='Привет дорогой подписчик! Я очень благодарен тебе за твою помощь, скажи мне свой адрес доставки, чтоб я смог отправить тебе мой мерч :)'>
      </textarea>

      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel {...register("isPrivate", { required: true })} value="true" control={<Radio />} label="Черновик (видите только вы)" />
          <FormControlLabel {...register("isPrivate", { required: true })} value="false" control={<Radio />} label="Опубликовать" />
        </RadioGroup>
      </FormControl>
      <br />
      <input type="submit" style={{cursor: 'pointer'}} />
    </form>
  )
}

export default Create