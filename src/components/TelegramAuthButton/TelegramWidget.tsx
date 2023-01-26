import React, { useEffect } from 'react';

const botUsername = 'OhMySubsBot';

declare global {
    interface Window {
        onTelegramAuth: (user: any) => void;
    }
}

const TelegramAuth: React.FC = () => {
    useEffect(() => {
        // Добавляем скрипт для виджета авторизации Telegram
        const script = document.createElement('script');
        script.src = 'https://telegram.org/js/telegram-widget.js?21';
        script.setAttribute('data-telegram-login', botUsername);
        script.setAttribute('data-size', 'large');
        script.setAttribute('data-onauth', 'onTelegramAuth(user)');
        script.setAttribute('data-request-access', 'write');
        script.async = true;
        document.body.appendChild(script);

        // Функция для обработки результата авторизации
        window.onTelegramAuth = (user: any) => {
            console.log(user)
            // console.log('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');
            // window.location.href="./channel"
        };
    }, []);

    return <div style={{textAlign: 'center'}}>

    </div>
};

export default TelegramAuth;


