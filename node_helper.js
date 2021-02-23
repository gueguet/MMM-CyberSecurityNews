/*
Get news from RSS feed with JS
From : TheHackerNews
*/


var NodeHelper = require('node_helper');
const Parser = require("rss-parser");

module.exports = NodeHelper.create({

  getCyberSecNews: async function() {
    var self = this;

    let parser = new Parser();
    
    let cyberNewsfeed = await parser.parseURL('http://feeds.feedburner.com/TheHackersNews')
    .then(results => {
      self.sendSocketNotification("RECEIVED_CYBER_NEWS", results);
    })
    .catch((error) => {
      console.log(error);
    });

  },


  socketNotificationReceived: function (notification, payload) {
    if (notification === 'GET_CYBER_NEWS') {
      this.getCyberSecNews();
    }
  }



});