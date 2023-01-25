import React, { useEffect } from 'react';

interface TelegramWidgetProps {
    onAuth: (user: any) => void;
}

const TelegramWidget: React.FC<TelegramWidgetProps> = ({ onAuth }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://telegram.org/js/telegram-widget.js?21';
        script.setAttribute('data-telegram-login', 'subs_web_app_bot');
        script.setAttribute('data-size', 'large');
        script.setAttribute('data-radius', '20');
        script.setAttribute('data-onauth', `onTelegramAuth(${onAuth})`);
        script.setAttribute('data-request-access', 'write');
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return <div id="telegram-login"></div>;
}

export default TelegramWidget;