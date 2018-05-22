
<h1 align="center">
  <br>
  <a href="https://github.com/bencevans/hacker-news-reading-time"><img src="assets/logo.svg" alt="hacker-news-reading-time logo" width="200"></a>
  <br>
  <br/>
  Hacker News Reading Time
  <br>
  <br>
</h1>

<p align="center">
  <b>Browser extension adding a reading time metric to each <a href="https://news.ycombinator.com">Hacker News</a> story.</b>
</p>



## Install

Available from the [Mozilla Firefox Addon Store](https://addons.mozilla.org/en-US/firefox/addon/hacker-news-reading-time/) or [Chrome Webstore](https://chrome.google.com/webstore/detail/hacker-news-reading-time/oepadbhedpegnnijmhcobkenjhijkmal).

## Development

Autoreloading plugin for development

* `git clone git@github.com:bencevans/hacker-news-reading-time.git`
* `npm install`
* `npm run start:firefox`

Building a bundle for publishing

* `npx web-ext build --source-dir src`

Publishing for Chrome

* https://chrome.google.com/webstore/developer/

Publishing for Firefox

* https://addons.mozilla.org/en-GB/developers/

## Licence

MIT &copy; [Ben Evans](https://bencevans.io)
