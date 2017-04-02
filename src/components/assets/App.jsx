import 'normalize.css/normalize.css';
import 'styles/App.css';

import React from 'react';
import {deepOrange500, amber900, grey700} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Moment from 'moment';

import Nav from './Nav/Nav';
import ControlBar from './ControlBar';
import RedditData from '../../actions/RedditData';

let testImage = require('../../images/cat.jpg');

const theme = getMuiTheme({
  palette: {
    primary1Color: deepOrange500,
    accent1Color: amber900
  }
});

injectTapEventPlugin();
class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewNav: false,
      posts: []
    };
  }
  componentDidMount = () => {
    this.setState({posts: new RedditData().getData()});
  }
  getRedditData = () => {
    return new RedditData().getData();
  }
  toggleNav = () => {
    this.setState({
      viewNav: !this.state.viewNav
    });
  }
  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {
      posts: this.state.posts
    }));
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div>
          <ControlBar toggleNav={this.toggleNav}></ControlBar>
          <Nav open={this.state.viewNav} toggleNav={this.toggleNav} subreddits={this.props.subreddits}></Nav>
          {childrenWithProps}
        </div>
      </MuiThemeProvider>
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

AppComponent.defaultProps = {
  posts: [
    {
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
    }
  ],
  subreddits: [
    {
      title: 'TIFU',
      link: 'testLink'
    }, {
      title: 'TIFU',
      link: 'testLink'
    }, {
      title: 'TIFU',
      link: 'testLink'
    }, {
      title: 'TIFU',
      link: 'testLink'
    }, {
      title: 'TIFU',
      link: 'testLink'
    }, {
      title: 'TIFU',
      link: 'testLink'
    }, {
      title: 'TIFU',
      link: 'testLink'
    }, {
      title: 'TIFU',
      link: 'testLink'
    }, {
      title: 'TIFU',
      link: 'testLink'
    }, {
      title: 'TIFU',
      link: 'testLink'
    }, {
      title: 'TIFU',
      link: 'testLink'
    }
  ]
};

export default AppComponent;
