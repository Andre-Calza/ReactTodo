var moment = require('moment');

console.log(moment().format());

var now  = moment();

console.log('Current timestamp ', now.unix());
var timestamp = 1488497020;
var CurrentMoment = moment.unix(timestamp);
console.log('Current moment ',CurrentMoment.format('MMM D, YY @ HH:mm a'));
