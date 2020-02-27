const { DateTime } = require('luxon')

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
    return DateTime.fromJSDate(dateObj, {zone: 'UTC-6'}).toFormat('yyyy-LL-dd');
  },

  fromIso: function(timestamp) {
    return DateTime.fromISO(timestamp, { zone: 'UTC-6' }).toJSDate();
  },

  dateToIso: function(dateObj) {
    return DateTime.fromJSDate(dateObj).toISO({ includeOffset: true, suppressMilliseconds: true});
  }
}
