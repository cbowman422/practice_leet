function VersionCompare(version1, version2) {
  var v1 = version1.split('.');
  var v2 = version2.split('.');
  var len = Math.max(v1.length, v2.length);
  var t1 = 0;
  var t2 = 0;
  for (var i = 0; i < len; i++) {
    t1 = parseInt(v1[i] || 0);
    t2 = parseInt(v2[i] || 0);
    if (t1 > t2){
      console.log("1")
      return 1;
    }  
    if (t1 < t2){
      console.log("-1")
      return -1;
    }  
  }
  console.log("0")
  return 0;
};

VersionCompare("2.3.4.5", "2.3.4.9" )
VersionCompare("2.3.4.5", "2.3.4.5" )
VersionCompare("2.3.4.9", "2.3.4.5")
VersionCompare("2.10.0.1", "2.1.0.10")
VersionCompare("2.0.1", "2.2000.1")
