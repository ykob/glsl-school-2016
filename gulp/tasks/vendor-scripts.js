const gulp = require('gulp');

const $ = require('../plugins');
const conf = require('../conf').vendor_scripts;

gulp.task('vendor-scripts', () => {
  return gulp.src(conf.src)
    .pipe($.concat(conf.concat))
    .pipe(gulp.dest(conf.dest));
});
