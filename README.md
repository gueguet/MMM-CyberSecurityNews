# Module : MMM-CyberSecurityNews

**This module will display some news about CyberSecurity**  
*All data coming from RSS Feed of TheHackerNews : http://feeds.feedburner.com/TheHackersNews*

## Table of contents
- [Prerequisites](#prerequisites)
- [Installing the module](#installing-the-module)
- [Using the module](#using-the-module)

## Prerequisities

To use this module, you'll need to install the package **rss-parser**  
*More info : https://www.npmjs.com/package/rss-parser*
> npm i rss-parser  

## Installing the module

Inside your modules folder, execute : 
> git clone https://github.com/gueguet/MMM-CyberSecurityNews

## Using the module

In the `config/config.js` file, just add this to the `modules` array :

```js
{
  module: "MMM-CyberSecurityNews",
  position: "top_right",
  config: {
    numberOfArticles: <INT_NUMBER_OF_ARTICLES_TO_DISPLAY>
  }
}
```