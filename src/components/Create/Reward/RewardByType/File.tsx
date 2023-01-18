import React from 'react';

import styles from './RewardByType.module.scss'


type Props = {}

function File({ }: Props) {
  return (
    <div className={styles.file} style={{height: "135px"}}>
      <h3>Загрузите любой файл</h3>
      <h4>Поддерживается любые файлы до 100 Мб</h4>
    </div>
  )
}

export default File