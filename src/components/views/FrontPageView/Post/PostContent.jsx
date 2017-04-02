import React from 'react';
import Texture from 'react-material-icons/icons/image/texture'

class PostContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const styles = {
      wrapper: {
        display: 'flex',
        justifyContent: 'center',
        height: '90%',
        overflow: 'hidden'
      },
      image: {
        maxWidth: '100%',
        height: 'auto'
      },
      texture: {
        width: '100%',
        height: 'auto'
      }
    };
    const isImage = () => {
      const extension = this.props.content.slice(-4).toLowerCase();
      switch (extension) {
        case '.jpg': break;
        case 'jpeg': break;
        case 'webp': break;
        case '.gif': break;
        case '.png': break;
        case 'apng': break;
        case '.mng': break;
        case 'tiff': break;
        case '.svg': break;
        case '.bmp': break;
        case '.ico': break;
        default: return false;
      }
      return true;
    }
    return (
      <div style={styles.wrapper}>
        {isImage() && <img style={styles.image} src={this.props.content} alt="Content Image"/>}
        {!isImage() && <Texture style={styles.texture} ></Texture>}
      </div>
    );
  }
}

PostContent.defaultProps = {};

export default PostContent;
