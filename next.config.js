// next.config.js
const withNextIntl = require('next-intl/plugin')('./src/i18n/request.js');

module.exports = withNextIntl({
  // Otras configuraciones de Next.js
});