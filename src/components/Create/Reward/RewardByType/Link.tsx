import React from 'react';

import styles from './RewardByType.module.scss'


type Props = {}

function Link({}: Props) {
  return (
    <input className={styles.input} type="text" placeholder='Ссылка после получения приза'/>
  )
}

export default Link