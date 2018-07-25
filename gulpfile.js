const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const gutil = require('gulp-util');
const ftp = require('vinyl-ftp');

gulp.task('serve', ['sass'], () => {
  browserSync.init({
    server: './src',
  });

  gulp.watch('src/sass/*.sass', ['sass']);
  gulp.watch('src/*.html').on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', () => {
  return gulp
    .src('src/sass/*.sass')
    .pipe(plumber()) // plumber
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: false }))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

gulp.task('deploy', () => {
  const conn = ftp.create({
    host: '89.108.85.65',
    user: 'alexp139',
    password: 'vBtV09NCIY',
    log: gutil.log,
  });

  const globs = ['src/**'];

  // using base = '.' will transfer everything to /public_html correctly
  // turn off buffering in gulp.src for best performance

  return gulp
    .src(globs, {base: '.', buffer: false})
    .pipe(conn.newer('/www/alpavlov.ru/lesson10/')) // only upload newer files
    .pipe(conn.dest('/www/alpavlov.ru/lesson10/'));
});
