var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:00am -> 0
// January 1st 1970 @ 12:01am -> -60

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1499562023;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YY @ h:mm a'));

// July 8th, 2017 @ 8:08 PM

console.log('current moment', currentMoment.format('MMMM Do, YYYY @ hh:mm A'));
