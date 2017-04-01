import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class NavComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.subredditList
    };
  }
  render() {
    return (
      <Drawer docked={false} width={200} open={this.props.open} onRequestChange={this.props.toggleNav}>
        <MenuItem onTouchTap={this.props.toggleNav}>Menu Item</MenuItem>
        <MenuItem onTouchTap={this.props.toggleNav}>Menu Item 2</MenuItem>
      </Drawer>
    );
  }
}

NavComponent.defaultProps = {};

export default NavComponent;
