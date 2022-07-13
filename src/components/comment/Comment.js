import React, {Component} from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {postId, id, name, email, body} = this.props.comment;
        return (
            <div>
                postId: {postId} __ id: {id}
                <br/>
                title: {name}
                <br/>
                email: {email}
                <br/>
                body: {body}
                <hr/>
            </div>
        );
    }
}

export {Comment};