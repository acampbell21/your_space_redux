import React, { Component } from 'react';
import { Header, Card, Grid } from 'semantic-ui-react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends Component {
  state = { posts: [], profiles: [] }

  componentDidMount() {
    axios.get('/api/posts')
      .then( res => {
        this.setState({ posts: res.data })
        this.props.dispatch({ type: 'HEADERS', headers: res.headers });
    });
  }

  componentDidMount() {
    axios.get('/api/profiles')
      .then( res => {
        this.setState({ profiles: res.data })
        this.props.dispatch({ type: 'HEADERS', headers: res.headers });
      });
  }

  profiles = () => {
    return this.state.props.map( post => {
      return(
        <Card.Group>
          <Card>
            <Card.Header>
              <h2>{profile.}
      )
    })
  }

  posts = () => {
    return this.state.posts.map( post => {
      return(
          <Card.Group>
            <Card>
              <Card.Header>
                <h2>{post.title}</h2>
              </Card.Header>
              <Card.Description>
                <h3>{post.description}</h3>
              </Card.Description>
            </Card>
          </Card.Group>
      )
    })
  }

  render() {
    return(
      <div>
        {this.posts()}
      </div>

    )
  }

}

export default connect()(Home);
