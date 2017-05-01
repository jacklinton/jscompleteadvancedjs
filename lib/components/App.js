import React from 'react';
import ArticleList from './ArticleList';


class App extends React.Component {
    render() {
        return(
            <ArticleList articles={this.state.articles} />
        );
    }
}

export default App;
