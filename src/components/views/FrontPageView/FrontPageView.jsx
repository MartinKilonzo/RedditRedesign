import React from 'react';
import Moment from 'moment';

import Post from './Post';
import Search from './Search';

let testImage = require('../../../images/cat.jpg');

class FrontPageViewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
  const styles = {
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      margin: '5% 20% 5% 20%'
    }
  };
    return (
      <div style={styles.wrapper}>
        {this.state.posts.map((post, key) => {
          return <Post key={key} {...post}></Post>;
        })}
      </div>
    );
  }
}



const getVoteCount = () => {
  const minVotes = -20;
  const maxVotes = 2000;

  return Math.floor(Math.random() * (maxVotes - minVotes) + minVotes);
};

const getDate = () => {
  const minDays = -45;
  const maxDays = 45;
  const date = new Moment().add((Math.random() * (maxDays - minDays)) + minDays, 'days');

  if (date.days() === 0)
    date.add(1, 'days');
  return date;
};

FrontPageViewComponent.defaultProps = {
  posts: [{
    votes: getVoteCount(),
    title: 'testTitle',
    author: 'testAuthor',
    link: 'testLink',
    content: testImage,
    date: getDate(),
    subreddit: 'r/cats'
  }, {
    votes: getVoteCount(),
    title: 'testTitle',
    author: 'testAuthor',
    link: 'testLink',
    content: testImage,
    date: getDate(),
    subreddit: 'r/cats'
  }, {
    votes: getVoteCount(),
    title: 'testTitle',
    author: 'testAuthor',
    link: 'testLink',
    content: testImage,
    date: getDate(),
    subreddit: 'r/cats'
  }, {
    votes: getVoteCount(),
    title: 'testTitle',
    author: 'testAuthor',
    link: 'testLink',
    content: testImage,
    date: getDate(),
    subreddit: 'r/cats'
  }, {
    votes: getVoteCount(),
    title: 'testTitle',
    author: 'testAuthor',
    link: 'testLink',
    content: testImage,
    date: getDate(),
    subreddit: 'r/cats'
  }, {
    votes: getVoteCount(),
    title: 'testTitle',
    author: 'testAuthor',
    link: 'testLink',
    content: testImage,
    date: getDate(),
    subreddit: 'r/cats'
  }]
};

export default FrontPageViewComponent;
