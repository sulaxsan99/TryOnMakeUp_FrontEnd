
import React, { useEffect } from 'react';

function Chatbot() {
    useEffect(() => {
        window.__be = window.__be || {};
        window.__be.id = "64d33f766081b90007503400";

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';

        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);

        return () => {
            firstScript.parentNode.removeChild(script);
        };
    }, []);



}

export default Chatbot