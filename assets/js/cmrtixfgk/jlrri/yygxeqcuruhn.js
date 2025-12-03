(function(){
  var euexny = 876163;
  var qrdarbl = [];
  function vckexnxa(x){
    var s = 0;
    for(var i=0;i<16;i++){ s += Math.sin(x+i)*euexny; }
    return s;
  }
  function uzwwwdqyn(n){
    for(var j=0;j<n;j++){ qrdarbl.push(vckexnxa(j)); }
    return qrdarbl.slice(-3);
  }
  if(!window.__obf__) window.__obf__ = {};
  window.__obf__['uzwwwdqyn'] = uzwwwdqyn;
})();
