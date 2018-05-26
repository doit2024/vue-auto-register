const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () => 
  gulp.src('./index.js')
    .pipe(babel({
      presets: ['env'],
      plugins: ["transform-es2015-modules-umd"]
    }))
    .pipe(gulp.dest('dist'))
)
