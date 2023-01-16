import React from 'react';

import LinkIcon from '@mui/icons-material/Link';

import styles from './ChannelInfo.module.scss';

type Props = {}

export default function ChannelInfo({ }: Props) {
    return (
        <div className={styles.channel}>
            <div className={styles.avatar}>
                <p>Аватар загрузится
                    автоматически</p>
            </div>

            <div className={styles.bind}>
                <LinkIcon />
                <p>Свяжите аккаунт c Telegram-каналом</p>
            </div>
        </div>
    )
}