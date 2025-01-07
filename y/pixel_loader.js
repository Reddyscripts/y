(function(w,d,u,n) {
  w['__to'] = n;
  w[n] = w[n] || {
    __queue161: [],
    track: function(id, params = {}) {
      params.id = id;
      if(this.__queue161){
        this.__queue161.push(params)
      } else {
        this.__queue161 = [params]
      }
    }
  };
  if (!w[n].loaded) {
    var s = d.createElement("script");
    s.async = true;
    s.src = u;
    d.getElementsByTagName("head")[0].appendChild(s);
    w[n].loaded = true;
  }
})(window, document, "https://static2.creative-serving.org/pixel.js", "p161");