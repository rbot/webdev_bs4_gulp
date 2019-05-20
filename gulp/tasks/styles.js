const gulp = require('gulp'),
      sass = require('gulp-sass'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      cssvars = require('postcss-simple-vars'),
      nestedcss = require('postcss-nested'),
      cssImport = require('postcss-import');

// gulp.task('styles', function() {
//   return gulp.src('./app/assets/styles/styles.css')
//     .pipe(postcss([cssImport, cssvars, nestedcss, autoprefixer]))
//     .on('error', function(errorInfo) {
//       console.log(errorInfo.toString());
//       this.emit('end');
//     })
//     .pipe(gulp.dest('./app/temp/styles'));
// });

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.scss')
    .pipe(sass(autoprefixer))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});