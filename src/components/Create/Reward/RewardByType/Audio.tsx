import React from 'react';

import styles from './RewardByType.module.scss'

type Props = {}

function Audio({ }: Props) {
  return (
    <div className={styles.file} style={{ height: "135px" }}>
      <h3>Загрузите аудиофайл</h3>
      <h4>Поддерживается WAV, MP3 до 100 Мб</h4>
    </div>
  )
}

export default Audio