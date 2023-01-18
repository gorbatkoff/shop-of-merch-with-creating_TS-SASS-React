import React from 'react';

import styles from './RewardByType.module.scss'

type Props = {}

function Image({ }: Props) {
  return (
    <div className={styles.file}>
      <h3>Загрузите изображение</h3>
      <h4>Будет доставлен в максимальном разрешении</h4>
      <h4>Поддерживается GIF, PNG, JPG, SVG до 30 мб</h4>
    </div>
  )
}

export default Image