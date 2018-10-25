var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function () {
  return gulp.src('./assets/sass/**/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('browser-sync', function() {
    browserSync.init(['./dist/css/**', './dist/js/**', './**/*.html', './**/*.php'], {
        proxy: 'http://works.test/luz-azul/dist/',
        browser: 'chrome'
    });
});

gulp.task('default', ['browser-sync', 'sass'], function () {
    gulp.watch('./assets/sass/**/*.sass', ['sass']);
});
