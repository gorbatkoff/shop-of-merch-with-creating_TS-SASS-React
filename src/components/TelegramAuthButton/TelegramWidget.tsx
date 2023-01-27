import axios from 'axios';
import React, { useEffect } from 'react';

const botUsername = 'OhMySubsBot';

declare global {
    interface Window {
        onTelegramAuth: (user: any) => void;
    }
}

const API = 'https://1cde-31-173-85-60.eu.ngrok.io/auth/by_telegram/';

const sendDataToApi = async (url: string) => {
    try {
        let request = await axios.get(API + url);

        console.log(request);
    } catch (error) {
        console.log(error);
    }
}

const TelegramAuth: React.FC = () => {
    useEffect(() => {
        // Добавляем скрипт для виджета авторизации Telegram
        const script = document.createElement('script');
        script.src = 'https://telegram.org/js/telegram-widget.js?21';
        script.setAttribute('data-telegram-login', botUsername);
        script.setAttribute('data-size', 'large');
        script.setAttribute('data-auth-url', 'https://17a1-95-174-105-255.eu.ngrok.io/');
        // script.setAttribute('data-onauth', 'onTelegramAuth(user)');
        script.setAttribute('data-request-access', 'write');
        script.async = true;
        document.body.appendChild(script);

        // Функция для обработки результата авторизации
        // window.onTelegramAuth = (user: any) => {
            
        //     console.log(user)
        //     console.log('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');
        //     window.location.href="./channel"
        //     <script async src="https://telegram.org/js/telegram-widget.js?21" data-telegram-login="samplebot" data-size="large" data-auth-url="https://17a1-95-174-105-255.eu.ngrok.io/" data-request-access="write"></script>
        // };
    }, []);

    console.log(window.location.href)

    if(window.location.href.indexOf('?id=') > -1) {
        let temp = window.location.href.indexOf('?id=')
        let length = window.location.href.length;
        let url = window.location.href.slice(temp, length)

        sendDataToApi(url);
    }

    return <div style={{textAlign: 'center'}}>
    </div>
};

export default TelegramAuth;


