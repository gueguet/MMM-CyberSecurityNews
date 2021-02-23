/* Magic Mirror
 *
 * By gueguet57
 * MIT Licensed.
*/

// const Parser = require("rss-parser");

Module.register("MMM-CyberSecurityNews", {

    defaults: {
      numberOfArticles: 5,
    },

    // CSS
    getStyles: function() {
        return ['MMM-CyberSecurityNews.css'];
    },

    getLastestCyberNews: function() {
      var self = this;
      self.sendSocketNotification('GET_CYBER_NEWS');
    },

    scheduleUpdate: function() {
      var self = this;
      // Refresh every hour
      var delay = 3600000;
      setInterval(function() {
          self.getLastestCyberNews()
      }, delay)
    },


    // Override dom generator.
  	getDom: function() {
  		let cyberNewsDiv = document.createElement("div");
      cyberNewsDiv.className = "cyber-news-ctn";
      cyberNewsDiv.id = "cyber-news";
  		return cyberNewsDiv;
    },


    // upodate DOM with latest cybersecurity news
    updateDom: function (items) {
      let self = this;

      let cyberNewsDiv = document.getElementById("cyber-news");
      cyberNewsDiv.innerHTML = "";

      // for now display only the last 5 cybersecurity news
      items.slice(0, self.config.numberOfArticles).forEach(news => {
        let newsRow = document.createElement("div");
        newsRow.className = "cyber-news-row";
        
        let newsTitle = document.createElement("h8");
        let newsSnippet = document.createElement("p");

        newsTitle.innerHTML = news.title;
        newsSnippet.innerHTML = news.contentSnippet + "...";

        newsRow.appendChild(newsTitle);
        newsRow.appendChild(newsSnippet);
        cyberNewsDiv.appendChild(newsRow);
      });
    },

    // TODO --> allorw a click on external link to read the whole article ?

    // start
    start: function() {
      this.getLastestCyberNews();
      this.scheduleUpdate();
    },


    // notifications
    socketNotificationReceived: function(notification, payload) {
      if (notification === "RECEIVED_CYBER_NEWS") {
        this.updateDom(payload.items);
      }
    }


})