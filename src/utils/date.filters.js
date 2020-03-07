// Notes:
// Timezones - https://www.npmjs.com/package/countries-and-timezones

const { DateTime } = require('luxon');

module.exports = {
  format: function(date, format) {
    return DateTime.fromJSDate(date).toFormat(String(format))
  },

  iso: function(date) {
    return DateTime.fromJSDate(date).toISO({
      includeOffset: false,
      suppressMilliseconds: true
    })
  },

  readableDate: function(date, format) {
    // default to America/Chicago Timezone
    if (!format) {
      format = 'dd MMMM yyyy';
    }
    return DateTime.fromJSDate(date, { zone: 'America/Chicago' }).toFormat(format);
  },

  fromIso: function(timestamp) {
    return DateTime.fromISO(timestamp, { zone: 'America/Chicago' }).toJSDate();
  },

  dateToIso: function(dateObj) {
    return DateTime.fromJSDate(dateObj).toISO({ includeOffset: true, suppressMilliseconds: true});
  }
}
