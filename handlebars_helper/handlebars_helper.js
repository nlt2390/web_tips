Handlebars.registerHelper('forPage', function(from, length, max, incr, block) {
  var accum = '';
  for(var i = from; i < Math.ceil(length/max); i += incr){
    accum += block.fn(i);
  }
  return accum;
});

Handlebars.registerHelper('forPageIndex', function(pageIndex, max, incr, block) {
  var accum = '';

  for(var i = pageIndex * max; i < ((pageIndex*max)+max) ; i += incr)
      accum += block.fn(i);
  return accum;
});

Handlebars.registerHelper('getArrayAtIndex', function(array, index, options) {
  return options.fn(array[index]);
});