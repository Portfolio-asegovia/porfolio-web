const { execSync } = require('child_process');
const config = require('./config.json');

const envVars = {
  BROWSERSYNC_PROXY: config.browsersync.proxy,
  BROWSERSYNC_PORT: config.browsersync.port,
  CSS_SRC: config.css.src,
  CSS_DIST: config.css.dist,
  CSS_STYLE: config.css.style,
  CSS_MAP: config.css.map,
  IMAGE_SRC: config.image.src,
  IMAGE_DIST: config.image.dist,
  JS_ENTRY: config.js.entry,
  JS_OUTPUT: config.js.output,
  TAILWIND_SRC: config.tailwind.src,
  TAILWIND_DIST: config.tailwind.dist,
  TWIG_SRC: config.twig.src,
};

const envString = Object.entries(envVars)
  .map(([key, value]) => `${key}="${value}"`)
  .join(' ');

execSync(`${envString} pnpm run _dev`, { stdio: 'inherit' });
