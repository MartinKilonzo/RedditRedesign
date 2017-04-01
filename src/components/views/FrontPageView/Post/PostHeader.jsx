import React from 'react';

import Voting from './Voting';

class PostHeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    const styles = {
      wrapper: {
        display: 'flex',
        alignSelf: 'flex-start',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'no-wrap',
        height: '18%',
        width: '100%',
        marginBottom: '5px'
      },
      detailsWrapper: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginLeft: '24px',
        fontSize: '8pt',
        lineHeight: '11pt'
      },
      details: {
        margin: '0 0 0 0'
      }
    };
    return (
      <div style={styles.wrapper}>
        <div style={styles.detailsWrapper}>
          <p style={styles.details}>{this.props.subreddit}</p>
          <h2 style={styles.details}>{this.props.title}</h2>
        </div>
        <Voting {...this.props}></Voting>
      </div>
    );
  }
}

PostHeaderComponent.defaultProps = {};

export default PostHeaderComponent;
