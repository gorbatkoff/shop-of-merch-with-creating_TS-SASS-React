import React from 'react';

import styles from './RewardByType.module.scss'


type Props = {}

function Text({ }: Props) {
  return (
      <input className={styles.input} type="text" placeholder='Текст после получения приза'/>
  )
}

export default Text