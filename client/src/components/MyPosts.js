import React from 'react';
import { Card, Image, Grid, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';

class MyPosts extends React.Component {
  state = { posts: [] }

  componentDidMount() {
    axios.get('/api/my_posts')
      .then( res => {
        this.setState({ posts: res.data })
        this.props.dispatch({ type: 'HEADERS', headers: res.headers })
      });
  }

  render() {
    let { posts } = this.state;
    return (
      <Card.Group itemsPerRow={4}>
        { posts.map( post =>
          <Card key={post.id}>
            <Card.Content>
              <Card.Header>
                {post.title}
              </Card.Header>
            </Card.Content>
          </Card>
          )
        }
      </Card.Group>
    )
  }
}

export default connect()(MyPosts)
