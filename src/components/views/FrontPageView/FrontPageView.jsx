import React from 'react';

import PostFilters from './PostFilters';
import Post from './Post/Post';

class FrontPageViewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 0
    };
  }
  setView = (view) => {
    this.setState({view});
  }
  render() {
    const styles = {
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '20px'
      },
      postWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '10px 10% 10px 10%'
      }
    };
    const posts = this.props.posts[this.state.view];
    return (
      <div style={styles.wrapper}>
        <PostFilters setView={this.setView}></PostFilters>
        <div style={styles.postWrapper}>
          {posts.map((post, key) => {
            return <Post key={key} {...post}></Post>;
          })}
        </div>
      </div>
    );
  }
}

FrontPageViewComponent.defaultProps = {};

export default FrontPageViewComponent;
