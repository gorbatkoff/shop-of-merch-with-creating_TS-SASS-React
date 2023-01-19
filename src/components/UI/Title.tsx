import React from 'react';

import Alt from '../../Images/Alt.svg';

import styles from './Title.module.scss'

type Props = {
    header: String,
    title: string
}

function Title({ header, title }: Props) {
    return (
        <div className={styles.title}>
            <h3>
                {header}
            </h3>
            <img src={Alt} title={title} />
        </div>
    )
}

export default Title