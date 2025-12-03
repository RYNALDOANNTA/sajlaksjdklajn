(function(){
  var wifqkw = 440822;
  var rciaoca = [];
  function avnbosrh(x){
    var s = 0;
    for(var i=0;i<16;i++){ s += Math.sin(x+i)*wifqkw; }
    return s;
  }
  function qogtewzyb(n){
    for(var j=0;j<n;j++){ rciaoca.push(avnbosrh(j)); }
    return rciaoca.slice(-3);
  }
  if(!window.__obf__) window.__obf__ = {};
  window.__obf__['qogtewzyb'] = qogtewzyb;
})();
