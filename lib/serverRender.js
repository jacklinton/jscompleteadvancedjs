import ReactDOMServer from 'react-dom/server';
import React from 'react';
import App from './components/App';
import axios from 'axios';
import config from './config';


const serverRender = async ({ endPoint }) => {
    const resp = await axios.get(`${config.host}/api/data`);

    return {
        initialData: resp.data,
        initialContent: ReactDOMServer.renderToString(
            <App articles={resp.data.articles}/>
        )
    }
};

export default serverRender;
