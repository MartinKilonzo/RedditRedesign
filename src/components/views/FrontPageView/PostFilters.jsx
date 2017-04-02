import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class PostFiltersComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      active: 0
    };
  }
  handleTouchTap = (buttonID) => {
    this.setState({active: buttonID});
  }
  render() {
    const styles = {
      wrapper: {
        display: 'flex',
        justifyContent: 'center'
      },
      button: {
        margin: '0px 10px'
      }
    };
    return (
      <div style={styles.wrapper}>
        <RaisedButton style={styles.button} label="Top" secondary={this.state.active === 0} onTouchTap={this.handleTouchTap.bind(this, 0)}></RaisedButton>
        <RaisedButton style={styles.button} label="Trending" secondary={this.state.active === 1} onTouchTap={this.handleTouchTap.bind(this, 1)}></RaisedButton>
        <RaisedButton style={styles.button} label="Best" secondary={this.state.active === 2} onTouchTap={this.handleTouchTap.bind(this, 2)}></RaisedButton>
      </div>
    );
  }
}

PostFiltersComponent.defaultProps = {};

export default PostFiltersComponent;
