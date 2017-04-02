import React from 'react';

import PostFilters from './PostFilters';
import Post from './Post/Post';
import Search from './Search';

class FrontPageViewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    return (
      <div style={styles.wrapper}>
        <PostFilters></PostFilters>
        <div style={styles.postWrapper}>
          {this.props.posts.map((post, key) => {
            return <Post key={key} {...post}></Post>;
          })}
        </div>
      </div>
    );
  }
}

FrontPageViewComponent.defaultProps = {};

export default FrontPageViewComponent;
