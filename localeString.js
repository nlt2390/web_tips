function localeString(x, sep, grp) {
  var sx = (''+x).split('.'), s = '', i, j;
  
  sep || (sep = ','); // default seperator
  grp || grp === 0 || (grp = 3); // default grouping
  i = sx[0].length;
  while (i > grp) {
    j = i - grp;
    s = sep + sx[0].slice(j, i) + s;
    i = j;
  }
  s = sx[0].slice(0, i) + s;
  sx[0] = s;

  return sx.join('.');
}

// source http://stackoverflow.com/questions/16157762/tolocalestring-not-supported-in-all-browsers
