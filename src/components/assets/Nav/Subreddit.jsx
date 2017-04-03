import React from 'react';
import MenuItem from 'material-ui/MenuItem'

import icon from '../../../images/redditIcon.png'

class SubredditComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleTouchTap = () => {
    this.props.toggleNav();
    // TODO: Take user to subreddit
    // window.load(this.props.link);
    // console.log(this.props.link);
  }
  render() {
    return (
      <MenuItem leftIcon={
          <img src={icon} alt="R"></img>
        } onTouchTap={this.handleTouchTap}>{this.props.title}</MenuItem>
    );
  }
}

SubredditComponent.defaultProps = {};

export default SubredditComponent;
