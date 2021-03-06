var offline = false;

(function(){
  "use strict"
  var root = this,
      $ = root.jQuery;
  if(typeof root.matrix === 'undefined'){ root.matrix = {} }

  var manager = {
    init: function(){
      var $body = $('body');
      matrix.traffic.init();
      matrix.search.init();
    },
  };
  root.matrix.manager = manager;

  root.matrix.numberWithCommas = function(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
}).call(this);
