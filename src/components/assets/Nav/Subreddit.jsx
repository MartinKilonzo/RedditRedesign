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
    window.location.assign(this.props.link)
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
