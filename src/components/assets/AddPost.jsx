import React from 'react';
import Add from 'react-material-icons/icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TextField from 'material-ui/TextField';

class AddPostComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
  }
  handleTitleChange = (event, postTitle) => {
    this.setState({postTitle});
  }
  handleTextInput = (event, postText) => {
    this.setState({postText})
  }
  handleClose = () => {
    this.setState({
      postTitle:  this.props.postTitle,
      postText: this.props.postText,
      open:  this.props.open
    })
  }
  render() {
    const styles = {
      button: {
        position: 'fixed',
        right: '30px',
        bottom: '20px'
      },
      modalWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
      }
    }
    const actions = [ <FlatButton label = "Cancel" primary = {
        true
      }
      onTouchTap = {
        this.handleClose
      } />, < FlatButton label = "Submit" primary = {
        true
      }
      disabled = {
        this.state.postText
      }
      onTouchTap = {
        this.handleClose
      } />
    ];
    return (
      <div>
        <FloatingActionButton style={styles.button} onTouchTap={() => this.setState({open: true})}>
          <Add></Add>
        </FloatingActionButton>
        <Dialog title={this.state.postTitle} modal={false} open={this.state.open} onRequestClose={this.handleClose} actions={actions}>
          <div style={styles.modalWrapper}>
          <TextField floatingLabelText='Post Title' multiLine={false} onChange={this.handleTitleChange}></TextField>
          <TextField floatingLabelText='Write something about your new post' multiLine={true} fullWidth={true}></TextField>
          </div>
        </Dialog>
      </div>
    );
  }
}

AddPostComponent.defaultProps = {
  postTitle: 'New Post',
  postText: undefined,
  open: false
};

export default AddPostComponent;
