import React from 'react';
import IconButton from 'material-ui/IconButton';
import KeyboardArrowUp from 'react-material-icons/icons/hardware/keyboard-arrow-up';
import KeyboardArrowDown from 'react-material-icons/icons/hardware/keyboard-arrow-down';

class VotingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...props};
  }
  upvote = () => {
    let newVotes = this.state.votes;
    let newColor = 'green'
    // If the upvote button is active, undo it
    if (this.state.upvoteColor === 'green') {
      newVotes--;
      newColor =// If the downvote button is active, undo it and apply an upvote
      undefined;
    } else if (this.state.downvoteColor === 'red')
      newVotes = newVotes + 2; // Otherwise, apply the upvote
    else
      newVotes--;

    // Save changes to state
    this.setState({votes: newVotes, downvoteColor: undefined, upvoteColor: newColor});
  }
  downvote = () => {
    let newVotes = this.state.votes;
    let newColor = 'red'
    // If the downvote button is active, undo it
    if (this.state.downvoteColor === 'red') {
      newVotes++;
      newColor =// If the upvote button is active, undo it and apply an upvote
      undefined;
    } else if (this.state.upvoteColor === 'green')
      newVotes = newVotes - 2; // Otherwise, apply the upvote
    else
      newVotes--;

    // Save changes to state
    this.setState({votes: newVotes, downvoteColor: newColor, upvoteColor: undefined});
  }
  render() {
    const styles = {
      wrapper: {
        display: 'flex',
        justifyContent: 'center',
        textTransform: 'uppercase'
      }
    };
    return (
      <div style={styles.wrapper}>
        <IconButton onTouchTap={this.upvote} style={styles.button} tooltip="Upvote" tooltipPosition="top-center" touch={true}>
          <KeyboardArrowUp hoverColor="green" color={this.state.upvoteColor}></KeyboardArrowUp>
        </IconButton>
        <p>{this.state.votes}</p>
        <IconButton onTouchTap={this.downvote} style={styles.button} tooltip="Downvote" tooltipPosition="top-center" touch={true}>
          <KeyboardArrowDown hoverColor="red" color={this.state.downvoteColor}></KeyboardArrowDown>
        </IconButton>
      </div>
    );
  }
}

VotingComponent.defaultProps = {};

export default VotingComponent;
