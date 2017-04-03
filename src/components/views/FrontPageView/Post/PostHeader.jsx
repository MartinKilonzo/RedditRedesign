import React from 'react';

import Voting from './Voting';

class PostHeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      subreddit: {
        margin: 0
      },
      firstLine: {
        margin: 0,
        whiteSpace: 'nowrap'
      },
      secondLine: {
        margin: 0,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        maxWidth: '135px'
      }
    };
    let firstLine = '';
    let secondLine = '';
    const words = this.props.title.split(' ');
    let length = 0;
    for (var i = 0; i < words.length; i++) {
      length += words[i].length;
      if (length > 15) {
        let temp = [];
        for (var j = 0; j < i; j++) {
          temp.push(words[j])
        }
        firstLine = temp.join(' ');
        secondLine = words.slice(i).join(' ');
        break;
      }
    }
    return (
      <div style={styles.wrapper}>
        <div style={styles.detailsWrapper}>
          <p style={styles.subreddit}>{this.props.subreddit}</p>
          <h2 style={styles.firstLine}>{firstLine}</h2>
          <h2 style={styles.secondLine}>{secondLine}</h2>
        </div>
        <Voting {...this.props}></Voting>
      </div>
    );
  }
}

PostHeaderComponent.defaultProps = {};

export default PostHeaderComponent;
