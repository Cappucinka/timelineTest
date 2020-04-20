var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var sassInput = ['./css/*.{sass,scss}'];
var sassOptions = {
  errLogToConsole: true
};

gulp.task('sass', function() {
  return gulp.src(sassInput, { base: '.' })
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write('.', {
      includeContent: false
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
  gulp.watch(sassInput, gulp.series('sass'));
});
