/**************************************
 * GULP CONFIG
 **************************************/

/**
 * Required Packages
 **/
const gulp = require('gulp'),
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  rename = require('gulp-rename'),
  cleanCSS = require('gulp-clean-css'),
  notify = require('gulp-notify'),
  run = require('gulp-run-command').default,
  babel = require('gulp-babel'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  plumber = require('gulp-plumber'),
  tailwindcss = require('tailwindcss'),
  purgecss = require('@fullhuman/postcss-purgecss');
  del = require("del");

/**
 * Resources paths
 **/
const paths = {

  sass: {
    source: './site/includes/resources/sass/main.scss',
    dest: 'css/'
  },

  javascript: {
    source: [
      './site/includes/resources/js/utilities/*.js',
      './site/includes/resources/js/twitch/*.js'
    ],
    dest: 'javascript/'
  }

}

/**
 * Clean assets
 **/
gulp.task('clean', function() {
  del(['dist']);
});

/**
 * Errors function
 **/
const onError = function(err) {
  notify.onError({
    title: "Gulp Error - Compile Failed",
    message: "Error: <%= error.message %>"
  })(err);

  this.emit('end');
};

/**************************************
 * TAILWIND & CSS
 **************************************/

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || [];
  }
}

/**
 * Create the tailwind.config.js file.
 **/
gulp.task('tailwind:init', run('./node_modules/.bin/tailwind init tailwind.config.js'));

/**
 * Compile Tailwind
 **/
gulp.task('css:compile', function() {
  return gulp.src(paths.sass.source)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sass())
    .pipe(postcss([
      tailwindcss('./tailwind.config.js')
    ]))
    .pipe(rename({
      extname: '.css'
    }))
    .pipe(gulp.dest(paths.sass.dest))
    .pipe(notify({
      message: 'Tailwind - Compile Success'
    }));
});

/**
 * Minify the CSS
 **/
gulp.task('css:minify', ['css:compile'], function() {
  return gulp.src([
      './css/main.css',
      '!./css/*.min.css'
    ])
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./css'))
    .pipe(notify({
      message: 'CSS - Minify Success'
    }));
});

/**
 * Run all CSS tasks
 **/
gulp.task('css', ['css:minify']);

/**************************************
 * JAVASCRIPT
 **************************************/

/**
 * Concatenate and Compile Scripts
 **/
gulp.task('js:compile', function() {
  return gulp.src(paths.javascript.source)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(babel({
      presets: ['@babel/env'],
      sourceType: 'script'
    }))
    .pipe(concat('main.js'))
    .pipe(gulp.dest(paths.javascript.dest))
    .pipe(notify({
      message: 'Javascript - Compile Success'
    }));
});

/**
 * Minify Scripts
 * This will be ran as part of our preflight task
 **/
gulp.task('js:minify', ['js:compile'], function() {
  return gulp.src(paths.javascript.dest + 'main.js')
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/javascript'))
    .pipe(notify({
      message: 'Javascript - Minify Success'
    }));
});

/**
 * Run all JS tasks
 **/
gulp.task('js', ['js:minify']);

/**************************************
 * DEFAULT GULP TASK
 **************************************/

gulp.task('default', ['css', 'js']);

/**************************************
 * DEV TASK
 * This will run while you're building the theme and automatically compile any changes.
 * This includes any html changes you make so that the purgecss file will be updated.
 **************************************/

gulp.task('dev', ['css', 'js:compile'], function() {
  // Configure watch files.
  gulp.watch([
    // 'site/*.njk',
    // 'site/includes/**/*.njk',
    'dist/*.html',
    'dist/**/*.html'
  ], ['css']);
  gulp.watch('./tailwind.config.js', ['css']);
  gulp.watch('./includes/resources/sass/**/*.scss', ['css']);
  gulp.watch('./includes/resources/js/**/*.js', ['js:compile']);
});

/**************************************
 * CSS PREFLIGHT
 * Unfortunately, it isn't possible to pass in parameters to gulp tasks.
 * As such, we need to replicate the code.
 **************************************/

/**
 * Compile CSS [PREFLIGHT]
 **/
gulp.task('css:compile:preflight', function() {
  return gulp.src(paths.sass.source)
    .pipe(sass())
    .pipe(postcss([
      tailwindcss('./tailwind.config.js'),
      purgecss({
        content: [
          // 'site/*.njk',
          // 'site/includes/**/*.njk',
          './dist/*.html',
          './dist/**/*.html',
        ],
        extractors: [{
          extractor: TailwindExtractor,
          extensions: ['html', 'njk'],
        }],
        /**
         * You can whitelist selectors to stop purgecss from removing them from your CSS.
         * see: https://www.purgecss.com/whitelisting
         *
         * Any selectors defined below will not be stripped from the min.css file.
         * PurgeCSS will not purge the standard app.css file as this is useful for development.
         *
         * @since 1.0.0
         */
        whitelist: [
          'body',
          'html',
          'h1',
          'h2',
          'h3',
          'p',
          'blockquote',
          'intro'
        ],
      })
    ]))
    .pipe(rename({
      extname: '.css'
    }))
    .pipe(gulp.dest('css/'))
    .pipe(notify({
      message: 'Tailwind Preflight Success'
    }));
});

/**
 * Minify the CSS [PREFLIGHT]
 **/
gulp.task('css:minify:preflight', ['css:compile:preflight'], function() {
  return gulp.src([
      './css/*.css',
      '!./css/*.min.css'
    ])
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/css'))
    .pipe(notify({
      message: 'CSS Minify Success'
    }));
});

/**
 * Run all CSS tasks
 **/
gulp.task('css:preflight', ['css:minify:preflight']);

/**
 * BUILD TASK
 * Run this once you're happy with your site and you want to prep the files for production.
 * This will run the CSS and Minify Script functions + pass the CSS through purgecss to remove any unused CSS.
 **/
gulp.task('build', ['css:preflight', 'js:minify']);

/**
 * Purge /dist
 **/
gulp.task('build:clean', ['clean', 'build']);
