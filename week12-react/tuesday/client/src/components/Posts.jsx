import React from 'react';
import Post from './Post';

export default class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = { posts: [] }
    }
    
    componentDidMount(){
        fetch("/posts")
            .then(res => res.json())
            .then(data => {
                this.setState({ posts: data })
            });
    }
    
    render(){
        let posts = this.state.posts.map(post => {
            return (
                <>
                    <Post title={post.name}
                          content= {post.last}
                          createdAt={post.createdAt} />   
                
                </>
            )
        })
        return posts;
    }
}