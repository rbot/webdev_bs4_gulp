const gulp = require('gulp'),
      sass = require('gulp-sass'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      browserSync = require('browser-sync').create();

function style() {
  // find scss file
  return gulp.src('./app/assets/styles/*.scss')
  .pipe(postcss([ autoprefixer() ]))
  // pass through sass compiler
  .pipe(sass().on('error', sass.logError))
  // save location for compiled CSS
  .pipe(gulp.dest('./app/temp/styles'))

  // browsersync
  .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './app'
    }
  });

  gulp.watch('./app/assets/styles/*.scss', style);
  gulp.watch('./app/*.html').on('change', browserSync.reload);
  gulp.watch('./app/assets/scripts/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
    




