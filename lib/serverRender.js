import ReactDOMServer from 'react-dom/server';
import React from 'react';
import App from './components/App';


const serverRender = ({ endPoint }) => {
    return ReactDOMServer.renderToString(
        <App />
    );
};

export default serverRender;
