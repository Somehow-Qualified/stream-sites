class WebAppManifest {
  data() {
    return {
      permalink: "/site.webmanifest"
    };
  }

  render(data) {
    const tailwind = require('../../tailwind.config.js');
    const mainColor = tailwind.theme.colors[data.site.colors.main]['700'];
    const content = {
      "short_name": data.site.name,
      "name": data.site.name,
      "description": "Weather forecast information",
      "icons": [
        {
          "src": data.site.favicon,
          "type": "image/png",
          "sizes": "512x512"
        }
      ],
      "start_url": "/?source=pwa",
      "background_color": mainColor,
      "display": "standalone",
      "scope": "/",
      "theme_color": mainColor
    };
    return JSON.stringify(content);
  }
}

module.exports = WebAppManifest;
