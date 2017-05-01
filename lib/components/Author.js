import React from 'react';

class Author extends React.Component {
    render() {
        const { author } = this.props;
        return (
            <div>
                <div>{author.firstName} {author.lastName}</div>
                <div>{author.website}</div>
            </div>
        );
    }
}

export default Author;
