import React from 'react';

class PostContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    const styles = {
      wrapper: {
        display: 'flex',
        justifyContent: 'center',
        height: '90%',
        overflow: 'hidden'
      },
      image: {
        maxWidth: '100%',
        height: 'auto'
      }
    };
    return (
      <div style={styles.wrapper}>
        <img style={styles.image} src={this.props.content} alt="Yeoman Generator" />
      </div>
    );
  }
}

PostContent.defaultProps = {};

export default PostContent;
