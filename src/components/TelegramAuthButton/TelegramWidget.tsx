import React, { useEffect } from 'react';

const TelegramWidget: React.FC = () => {

    function onTelegramAuth(){
        console.log('Success!')
    }

    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://telegram.org/js/telegram-widget.js?21';
        script.setAttribute('data-telegram-login', 'subs_web_app_bot');
        script.setAttribute('data-size', 'large');
        script.setAttribute('data-radius', '20');
        script.setAttribute('data-onauth', `${onTelegramAuth}`);
        script.setAttribute('data-request-access', 'write');
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return <div id="telegram-login"></div>;
}

export default TelegramWidget;