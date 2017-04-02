import React from 'react';
import Drawer from 'material-ui/Drawer';

import DailyGold from './DailyGold';
import Subreddit from './Subreddit';
import ProfileInfo from './ProfileInfo'

class NavComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const styles = {
      profileWrapper: {
        position: 'relative',
        height: '144px',
        width: '100%'
      },
      subredditWrapper: {
        position: 'relative',
        width: '100%',
        height: 'calc(100% - 144px - 35px)',
        overflowY: 'scroll'
      },
      dailyGoldWrapper: {
        position: 'relative',
        height: '35px'
      }
    }
    return (
      <Drawer docked={false} width={256} open={this.props.open} onRequestChange={this.props.toggleNav}>
        <div style={styles.profileWrapper}>
          <ProfileInfo></ProfileInfo>
        </div>
        <div style={styles.subredditWrapper}>{
          this.props.subreddits.map((subreddit, key) => {
          return <Subreddit key={key} {...subreddit} {...this.props}></Subreddit>
          })
        }</div>
        <div style={styles.dailyGoldWrapper}>
          <DailyGold></DailyGold>
        </div>
      </Drawer>
    );
  }
}

NavComponent.defaultProps = {};

export default NavComponent;
