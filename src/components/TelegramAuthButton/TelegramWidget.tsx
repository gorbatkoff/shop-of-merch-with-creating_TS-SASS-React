import React, { useEffect } from 'react';

function onTelegramAuth(user: { first_name: string; last_name: string; id: string; username: string; }) {
    alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');
}

const TelegramWidget: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://telegram.org/js/telegram-widget.js?21';
        script.setAttribute('data-telegram-login', 'subs_web_app_bot');
        script.setAttribute('data-size', 'large');
        script.setAttribute('data-radius', '20');
        script.setAttribute('data-onauth', `onTelegramAuth(${onTelegramAuth})`);
        script.setAttribute('data-request-access', 'write');
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return <div id="telegram-login"></div>;
}

export default TelegramWidget;