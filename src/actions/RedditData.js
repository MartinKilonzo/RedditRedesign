import Moment from 'moment';


const PROXY = 'https://cors-anywhere.herokuapp.com/';
const REDDIT_URL = 'reddit.com/';



const Post = function Post(post) {
  if (typeof post === 'undefined')
    return;
  // const div = post.getElementsByTagName

  // Get content data
  const content = post.getElementsByClassName('title')[1];
  this.title = content.innerText;
  this.content = post.getAttribute('data-url');
  this.contentHost = content.host;

  const a = post.getElementsByTagName('a');

  if (a[0].children.length === 0)
    this.thumbnail = false;
  else
    this.thumbnail = a[0].children[0].getAttribute('src');

    this.postLink = a[1].href || a[5].href;
  // this.postLink = a[0].getAttribute('href');

  // Get author data
  this.author = a[3].innerText;
  this.authorLink = a[3].href;

  // Get subreddit data
  this.subreddit = a[4].innerText;
  this.subredditLink = a[4].href;

  // Get time data
  this.timestamp = new Moment(parseInt(post.getAttribute('data-timestamp')));
  this.timeString = post.getElementsByTagName('time')[0].innerText;

  // Get vote data
  this.votes = parseInt(post.getElementsByClassName('unvoted')[1].title) || 0;
};


const Subreddit = function Subreddit(subreddit) {
  this.link = subreddit.href;
  this.title = subreddit.innerText;
};


const makeRequest = (method, url) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, PROXY + url, false);
  xhr.setRequestHeader('X-Requested-With', window.location.protocol + '//' + window.location.host);
  xhr.send(null);
  return xhr.responseText;
}

const RedditData = function RedditData() {
  const ret = {
    posts: [],
    subreddits: []
  };
  this.getData = () => {
    const views = ['', 'rising', 'top'];
    views.forEach((view) => {
      const data = [];
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(makeRequest('GET', REDDIT_URL + view), 'text/html');
      const htmlPosts = htmlDoc.getElementsByClassName('thing');
      let posts = [];
      for (var post of htmlPosts)
        posts.push(post);

      posts.forEach((post) => {
        data.push(new Post(post));
      });

      ret.posts.push(data);
    });

    const data = [];
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(makeRequest('GET', REDDIT_URL), 'text/html');
    const htmlSubreddits = htmlDoc.getElementsByClassName('drop-choices srdrop');
    let subreddits = [];
    for (var subredit of htmlSubreddits[0].children)
      subreddits.push(subredit);

    subreddits.forEach((subredit) => {
      data.push(new Subreddit(subredit));
    });

    ret.subreddits = data;
    return ret;
  };
};

export default RedditData;
