import React from 'react';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import styles from './RewardByType.module.scss'

type Props = {}

function Custom({ }: Props) {
  return (
    <div className={styles.custom}>
      <h3>Условия кастомизированного вознаграждения:</h3>

      <p>
        Внимание! Выбрав этот тип вознаграждения вы берете на себя обязательства, выполнение которых мы не можем проконтролировать. Например, участие вас с роли Cameo в шоу, на голосовых или видеозвонках, встречи, вручение ценных подарков или автографов. Вам нужно будет контролировать процесс передачи вознаграждения. А вы сами публично заявляете, что исполните обязательство в течении 14 дней после обналичивания подарка.
      </p>


      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Я понял и прочитал свои обязательства перед подписчиками" />
      </FormGroup>
    </div>
  )
}

export default Custom