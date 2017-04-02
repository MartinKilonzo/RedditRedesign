import Moment from 'moment';


const REDDIT_URL = 'https://www.reddit.com';



const Post = function Post(post) {
  if (typeof post === 'undefined')
    return;
  // const div = post.getElementsByTagName

  // Get content data
  const content = post.getElementsByClassName('title')[1];
  this.title = content.innerText;
  this.postLink = content.href;
  this.content = post.getAttribute('data-url');
  this.contentHost = content.host;

  const a = post.getElementsByTagName('a');

  if (a[0].children.length === 0)
    this.thumbnail = false;
  else
    this.thumbnail = a[0].children[0].getAttribute('src');

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
  this.votes = post.getElementsByClassName('unvoted')[1].title;
};


const makeRequest = (method, url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onload = () => {
    callback(null, xhr.response);
  };
  xhr.onerror = () => {
    callback(xhr.response);
  };
  xhr.send()
};


const makeSyncRequest = (method, url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url, false);
  xhr.send( null );
  return xhr.responseText;
}

const RedditData = function RedditData() {

  this.getData = () => {
    const data = [];
    // makeRequest('GET', REDDIT_URL, (err, res) => {
    //   if (err) {
    //     console.error(err);
    //     return;
    //   }
    //     // Parse data
    //     const parser = new DOMParser();
    //     const htmlDoc = parser.parseFromString(res, "text/html");
    //
    //     const htmlPosts = htmlDoc.getElementsByClassName('thing');
    //     let posts = [];
    //     for (var post of htmlPosts)
    //       posts.push(post);
    //
    //
    //     posts.forEach((post) => {
    //       data.push(new Post(post));
    //     });
    // });
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(makeSyncRequest('GET', REDDIT_URL), "text/html");
    const htmlPosts = htmlDoc.getElementsByClassName('thing');
    let posts = [];
    for (var post of htmlPosts)
      posts.push(post);

    posts.forEach((post) => {
      data.push(new Post(post));
    });
    return data;
  }
};

export default RedditData;
