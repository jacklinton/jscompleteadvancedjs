import React from 'react';
import axios from 'axios';
import App from './App';


class AppWithData extends React.Component {
    state = { articles: [] };

    fetchInitialData = async () => {
        const resp = await axios.get('/api/data');
        this.setState(prevState => {
            return { articles: resp.data.articles };
        });
    };
    componentWillMount() {

    }
    componentDidMount() {
        this.fetchInitialData();
    }
    render() {
        return(
            <App articles={this.state.articles} />
        );
    }
}

export default AppWithData;
