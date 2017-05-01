import React from 'react';

import Author from './Author';

class Article extends React.Component {
    render() {
        const { article } = this.props;
        return (
            <div>
                <div>{article.title}</div>
                <div>{article.date}</div>
                <Author author={article.author} />
                <div>{article.body}</div>
            </div>
        );
    }
}

export default Article;
