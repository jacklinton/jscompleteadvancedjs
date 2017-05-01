import React from 'react';
import axios from 'axios';

//import data from '../fakedata';

import ArticleList from './ArticleList';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            articles: []
        };
    }
    fetchInitialData = async() => {
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
            <ArticleList articles={this.state.articles} />
        );
    }
}

export default App;
