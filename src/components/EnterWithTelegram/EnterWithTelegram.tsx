import React from 'react';

import TelegramIcon from '@mui/icons-material/Telegram';

import styles from './EnterWithTelegram.module.scss'

type Props = {
    setIsEntered: Function
}

export default function EnterWithTelegram({ setIsEntered }: Props) {

    return (
        <div>
            <button className={styles.button} onClick={() => setIsEntered(true)}>
                <TelegramIcon />
                <span>Войти через Telegram</span>
            </button>
        </div>
    )
}