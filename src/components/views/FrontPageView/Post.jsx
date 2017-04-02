import React from 'react';
import Paper from 'material-ui/Paper';

import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostFooter from './PostFooter';

class PostComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const styles = {
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '300px',
        width: '300px',
        margin: '10px 15px 10px 15px'
      },
      tile: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '300px',
        width: '300px',
        margin: '15px 15px 15px 15px'
      }
    };
    return (
      <Paper style={styles.tile} zDepth={2}>
        <div style={styles.wrapper}>
          <PostHeader {...this.props}></PostHeader>
          <PostContent {...this.props}></PostContent>
          <PostFooter {...this.props}></PostFooter>
        </div>
      </Paper>
    );
  }
}

PostComponent.defaultProps = {};

export default PostComponent;
