import React from 'react'

import Logo from '../../Images/HappyLogo.svg';

import styles from './Header.module.scss'

type Props = {}

export default function Header({ }: Props) {
    return (
        <div className={styles.header}>
            <img src={Logo} alt="На главную" />
        </div>
    )
}