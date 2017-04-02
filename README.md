# Reddit, Redesigned

## Installation

### Setup
You will need node.js (v6.10.1+) to build and run the server [Get Node](https://nodejs.org/en/download/current/).  
You will need Node Package Manager (v3.10.10+) to install this project:  
After installing node.js, open your favorite terminal:
```bash
$ npm install -g npm
$ npm --version
3.10.10
```
If you do not get node 3.7+, download it from: [npm v3.7.1](https://registry.npmjs.org/npm/-/npm-3.10.10.tgz) and extract it to the `node_modules` folder of your node.js installation directory.

You are now ready to begin installing the program!


### Installing
1. Open your terminal, and navigate to the directory where you would like the project:

  ```bash
  $ cd Desired-Path-Here
  ```
2. Clone the repo

  ``` bash
  $ git clone https://github.com/MartinKilonzo/RedditRedesign/tree/reactDesign
  ```
3. Install dependencies:

  ```bash
  $ npm install
  ```
4. Build and host the application:

  ```bash
  $ npm run-script serve:dist
  ```
5. You will need to use a browser that has [CORS](http://stackoverflow.com/a/28848096) enabled.  
The easiest way is to download this chrome extension: [Allow CORS](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en-US)  
Alternatively, for Windows users, with Chrome, try entering this into the run window:
  ```run.exe
  chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
  ```

6. Once done, navigate to [localhost:8000](localhost:8000)

There you have it!
