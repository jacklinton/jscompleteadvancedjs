import React from 'react';

import Article from './Article';

class ArticleList extends React.Component {
    render() {
        return (
            <div>
                {this.props.articles.map(article =>
                    <Article key={article.id} article={article}/>
                )}
            </div>
        );
    }
}

export default ArticleList;
