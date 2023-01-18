import React from 'react';

import styles from './RewardByType.module.scss'

type Props = {}

function Video({}: Props) {
  return (
    <div className={styles.file}>
    <h3>Загрузите видеофайл</h3>
    <h4>Будет доставлен через Телеграм-бот в сжатом виде.</h4>
    <h4>Поддерживается MPEG до 200 Мб</h4>
  </div>
  )
}

export default Video