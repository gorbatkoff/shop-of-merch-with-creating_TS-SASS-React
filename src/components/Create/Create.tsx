import React from 'react';

import Radio from '@mui/material/Radio';

import { useForm, SubmitHandler } from "react-hook-form";

import UserIcon from '../../Images/UserIcon.svg';

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
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);
  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

      <MyDropzone />

      <h3>Название вознаграждения</h3>
      <input {...register("nameOfReward")} type="text" id="nameOfReward" />

      <h4>Цена в количестве приведённых пользователей</h4>

      <div className={styles.referral}>
        <img src={UserIcon} alt="" />
        <input {...register('price', { required: true, max: 1000000, min: 0 })} id="price" type="number" style={{ width: "20%" }} />
        <p>Максимум 1 000 000</p>
      </div>
      Radio
      <h3>Вид доставки</h3>
      <Radio {...register("kindOfDelivery", { required: true })} value="virtual" id='kindOfDelivery' />
      <label htmlFor="kindOfDelivery">Виртуальная доставка</label>
      <Radio {...register("kindOfDelivery", { required: true })} value="offline" id='kindOfDelivery' />
      <label htmlFor="kindOfDelivery">Оффлайн доставка</label>

      <h3>Тип вознаграждения</h3>

      <select {...register("typeOfDelivery", { required: true })}>
        <option value="image" key={1}>Изображение</option>
        <option value="video" key={2}>Видеофайл</option>
        <option value="audio" key={3}>Аудиофайл</option>
        <option value="file" key={4}>Файл</option>
        <option value="link" key={5}>Ссылка</option>
        <option value="text" key={6}>Текстовая строка</option>
        <option value="custom" key={7}>Кастомизированный (обязательства)</option>
      </select>

      <h3>Вознаграждение</h3>

      

      <h3>Примечание для пользователей</h3>

      <p className={styles.paragraph}>
        Сообщение, которое пользователь увидит после обмена накопленных пользователей на вознаграждения. Например, инструкцию как получить</p>


      <textarea {...register("note")} className={styles.note}>
      </textarea>

      <br />

      <Radio {...register("isPrivate", { required: true })} value="true" id="isPrivate" />
      <label htmlFor="isPrivate">Черновик (видите только вы)</label>
      <Radio {...register("isPrivate", { required: true })} value="false" id="isPrivate" />
      <label htmlFor="isPrivate">Опубликовать</label>
      <input type="submit" />
    </form>
  )
}

export default Create