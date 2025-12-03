(function(){
  var wdeeeg = 660311;
  var chvnhbs = [];
  function inqfhwld(x){
    var s = 0;
    for(var i=0;i<16;i++){ s += Math.sin(x+i)*wdeeeg; }
    return s;
  }
  function wbyzedwve(n){
    for(var j=0;j<n;j++){ chvnhbs.push(inqfhwld(j)); }
    return chvnhbs.slice(-3);
  }
  if(!window.__obf__) window.__obf__ = {};
  window.__obf__['wbyzedwve'] = wbyzedwve;
})();
