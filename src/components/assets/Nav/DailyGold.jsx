import React from 'react';
import {grey800, yellowA700} from 'material-ui/styles/colors'
import Paper from 'material-ui/Paper';
import LinearProgress from 'material-ui/LinearProgress';

class DailyGoldComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      gold: 65
    };
  }
  render() {
    const styles = {
      paper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        padding: '0px 24px 0px 24px',
        borderRadius: 0,
        backgroundColor: grey800
      },
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100%',
        width: '85%'
      },
      meterLabel: {
        fontSize: '11px',
        color: 'white'
      },
      badge: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '24px',
        width: '24px',
        backgroundColor: yellowA700
      },
      meter: {
        backgroundColor: 'white'
      },
      badgeText: {
        fontSize: '11px',
        color: 'black'
      }
    }
    return (
      <Paper style={styles.paper}>
        <div style={styles.wrapper}>
          <span style={styles.meterLabel}>Reddit Gold</span>
          <LinearProgress style={styles.meter} color={yellowA700} mode="determinate" value={this.state.gold}></LinearProgress>
        </div>
        <Paper style={styles.badge} circle>
          <span style={styles.badgeText}>{`${this.state.gold}%`}</span>
        </Paper>
      </Paper>
    );
  }
}

DailyGoldComponent.defaultProps = {};

export default DailyGoldComponent;
