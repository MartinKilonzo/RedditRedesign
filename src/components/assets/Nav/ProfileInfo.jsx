import React from 'react';
import {grey600, grey700, grey800, amber400} from 'material-ui/styles/colors'
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import ArrowDropDown from 'react-material-icons/icons/navigation/arrow-drop-down';
import Help from 'react-material-icons/icons/action/help';

class ProfileInfoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const styles = {
      topWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
      },
      helpButton: {
        top: '-20px'
      },
      helpIcon: {
        height: '16px',
        width: '16px'
      },
      userData: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: '144px',
        width: '100%',
        padding: '20px 10px 24px 24px',
        borderRadius: '0px',
        backgroundColor: grey800
      },
      karma: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60px',
        width: '60px',
        backgroundColor: amber400
      },
      karmaText: {
        fontSize: '18px',
        color: 'white',
        fontWeight: '500'
      },
      profileWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-end',
        width: '100%',
        height: '16px'
      },
      badge: {
        padding: 0
      },
      badgeText: {
        height: '20px',
        width: '20px',
        top: '-1px',
        right: '-35px',
        fontSize: '10px',
        color: 'white',
        backgroundColor: grey600
      },
      profileName: {
        color: 'white',
        fontSize: '13px',
        fontWeight: '500'
      },
      dropdownButton: {
        alignSelf: 'flex-end',
        top: '14px'
      }
    }
    return (
      <Paper style={styles.userData}>
        <div style={styles.topWrapper}>
          <Paper style={styles.karma} zDepth={1} circle>
            <span style={styles.karmaText}>3029</span>
          </Paper>
          <IconButton style={styles.helpButton} iconStyle={styles.helpIcon} tooltip='Help'>
            <Help color={grey700}></Help>
          </IconButton>
        </div>
        <div style={styles.profileWrapper}>
          <Badge style={styles.badge} badgeStyle={styles.badgeText} badgeContent={3} secondary={true}>
            <span style={styles.profileName}>HolyMolyACow</span>
          </Badge>
          <IconButton style={styles.dropdownButton} tooltip='Options' tooltipPosition='top-center'>
            <ArrowDropDown color='white'></ArrowDropDown>
          </IconButton>
        </div>
      </Paper>
    );
  }
}

ProfileInfoComponent.defaultProps = {};

export default ProfileInfoComponent;
