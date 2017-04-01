import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Moment from 'moment';

class PostFooterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
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
        margin: '0 0 0 0'
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
          <FlatButton label="save" primary={true}></FlatButton>
          <FlatButton label="share" primary={true}></FlatButton>
        </div>
      </div>
    );
  }
}

PostFooterComponent.defaultProps = {};

export default PostFooterComponent;
