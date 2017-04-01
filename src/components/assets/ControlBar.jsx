import React from 'react';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandMore from 'react-material-icons/icons/navigation/menu';
import Search from 'react-material-icons/icons/action/search';
import TextField from 'material-ui/TextField';


class ControlBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      dialog: false,
      searchQuery: 'Search'
    };
  }
  handleSearchTouchTap = () => {
    const searchQuery = this.state.searchQuery ===  'Search' || 'search' ? '' : this.state.searchQuery;
    this.setState({dialog: true, searchQuery});
  }
  handleSearchChange = (event) => {
    this.setState({searchQuery: event.target.value});
  }
  handleDialoglose = () => {
    const searchQuery = this.state.searchQuery === '' ? 'Search' : this.state.searchQuery;
    this.setState({dialog: false, searchQuery});
  }
  render() {
    const styles = {
      wrapper: {
        height: '100%',
        width: '100%'
      },
      searchButton: {
        cursor: 'text'
      },
      searchLabel: {
        textTransform: 'none'
      },
      dialog: {
        position: 'fixed',
        top: 0
      },
      dialogContents: {
        position: 'fixed',
        top: -64,
        left: 0,
        height: 70,
        width: '100vw',
        maxWidth: '100vw'
      },
      dialogBody: {
        padding: '0px 24px 0px 24px'
      },
      searchField: {
        height: 64,
      },
      searchText: {
        textAlign: 'right'
      },
      hintText: {
        right: 0,
        bottom: 18
      }
    };

    return (
      <div style={styles.wrapper}>
        <Dialog
          modal={false}
          contentStyle={styles.dialogContents}
          bodyStyle={styles.dialogBody}
          open={this.state.dialog}
          onRequestClose={this.handleDialoglose}>
          <TextField style={styles.searchField} inputStyle={styles.searchText} hintStyle={styles.hintText} hintText="Search" onChange={this.handleSearchChange} value={this.state.searchQuery} fullWidth></TextField>
        </Dialog>
        <AppBar title="Reddit" onLeftIconButtonTouchTap={this.props.toggleNav.bind(this, undefined)}
          iconElementLeft={<IconButton><ExpandMore></ExpandMore></IconButton>}
          iconElementRight={
            <FlatButton style={styles.searchButton} labelStyle={styles.searchLabel} label={this.state.searchQuery} icon={<Search></Search>}
              hoverColor="transparent"
              disableTouchRipple
              onTouchTap={this.handleSearchTouchTap}>
            </FlatButton>
          }>
        </AppBar>
      </div>
    );
  }
}

ControlBarComponent.defaultProps = {};

export default ControlBarComponent;
