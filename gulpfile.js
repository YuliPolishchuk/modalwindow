var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

gulp.task('sass', function() {
  return gulp.src('src/scss/style.scss')
    .pipe(plumber())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
});

gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);