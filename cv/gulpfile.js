var gulp = require('gulp'),
		browserSync = require('browser-sync').create(),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify');

gulp.task('styles', function() {
  gulp.src('sass/**/*.?(s)css')
    .pipe(sass())
    .pipe(autoprefixer('last 2 version'))
    .pipe(cssnano())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('serve', () => {
  browserSync.init({
    files: ['./**'],
    port: 4000,
    server: {
      baseDir: './'
    }
  });

  gulp.watch('sass/**/*.?(s)css', ['styles']);
});

gulp.task('default', ['styles', 'serve']);