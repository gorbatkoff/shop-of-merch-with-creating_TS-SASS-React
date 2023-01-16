import React from 'react';

import { Link } from "react-router-dom";

import AddIcon from '@mui/icons-material/Add';

import styles from './Rewards.module.scss'

type Props = {}

export default function Rewards({ }: Props) {
    return (
        <Link to='/create'>
            <div className={styles.reward}>
                <AddIcon />
                <p>Добавить вознаграждение</p>
            </div>
        </Link>
    )
}