import React from 'react';

import { useForm, SubmitHandler } from "react-hook-form";

import UserIcon from '../../Images/UserIcon.svg';

import styles from './Create.module.scss';

type FormValues = {
  nameOfReward: string;
  price: number;
  kindOfDelivery: string;
  typeOfDelivery: string;
  isHaveSizeRange: boolean;
  isHaveDivisionByGender: boolean;
  note: string;
};

type Props = {}

function Create({ }: Props) {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

      <h4>Название вознаграждения</h4>
      <input {...register("nameOfReward")} type="text" id="nameOfReward" />

      <h4>Цена в количестве приведённых пользователей</h4>

      <div className={styles.referral}> 
        <img src={UserIcon} alt="" />
        <input {...register("price")} type="number" id="price" style={{ width: "20%" }} />
        <p>Максимум 1 000 000</p>
      </div>

      <h4>Вид доставки</h4>
      <input {...register("kindOfDelivery", { required: true })} type="radio" value="virtual" id='kindOfDelivery' />
      <input {...register("kindOfDelivery", { required: true })} type="radio" value="offline" id='kindOfDelivery' />

      <h4>Тип вознаграждения</h4>

      <select {...register("typeOfDelivery", { required: true })}>
        <option value="image" key={1}>Изображение</option>
        <option value="video" key={2}>Видеофайл</option>
        <option value="audio" key={3}>Аудиофайл</option>
        <option value="link" key={4}>Ссылка</option>
        <option value="text" key={5}>Текстовая строка</option>
        <option value="file" key={6}>Файл</option>
        <option value="custom" key={7}>Кастомизированный (обязательства)</option>
      </select>

      <input {...register("isHaveDivisionByGender", { required: true })} type="radio" value="false" />
      <input {...register("isHaveDivisionByGender", { required: true })} type="radio" value="true" />

      <input {...register("note")} />

      <input type="submit" />
    </form>
  )
}

export default Create