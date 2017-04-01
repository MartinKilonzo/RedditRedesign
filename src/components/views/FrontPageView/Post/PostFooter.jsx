import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';
import Moment from 'moment';

class PostFooterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      autoHideDuration: 2000,
      snackbar: false,
      message: ''
    };
  }
  savePost = (event) => {
    const message = 'Post saved';
    this.setState({message, snackbar: true});
  }
  sharePost = (event) => {
    const message = `Copy link: ${this.state.link}`;
    this.setState({message, snackbar: true, autoHideDuration: 10000});
  }
  handleSnackbarAction = () => {
    let message = '';
    if (this.state.message === 'Post saved')
      message = 'Post removed from your saved posts';
    else
      message = 'Undone';
    this.setState({message, snackbar: true});
  }
  handleSnackbarClose = () => {
    this.setState({snackbar: false, autoHideDuration: 2000});
  }
  render() {
    const styles = {
      wrapper: {
        display: 'flex',
        alignSelf: 'flex-end',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'no-wrap',
        height: '18%',
        width: '100%',
        marginTop: '5px'
      },
      detailsWrapper: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginLeft: '24px',
        fontSize: '8pt',
        lineHeight: '9pt'
      },
      details: {
        margin: '0'
      },
      buttonWrapper: {
        display: 'flex',
        justifyContent: 'center',
        textTransform: 'uppercase'
      }
    };
    return (
      <div style={styles.wrapper}>
        <div style={styles.detailsWrapper}>
          <p style={styles.details}>{this.props.author}</p>
          <p style={styles.details}>{this.props.date.format('d MMMM')}</p>
        </div>
        <div style={styles.buttonWrapper}>
          <FlatButton label="save" primary={true} onTouchTap={this.savePost}></FlatButton>
          <FlatButton label="share" primary={true} onTouchTap={this.sharePost}></FlatButton>
        </div>
        <Snackbar open={this.state.snackbar} message={this.state.message} action="undo" autoHideDuration={this.state.autoHideDuration} onActionTouchTap={this.handleSnackbarAction} onRequestClose={this.handleSnackbarClose}></Snackbar>
      </div>
    );
  }
}

PostFooterComponent.defaultProps = {};

export default PostFooterComponent;
