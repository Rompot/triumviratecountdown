import babel from 'gulp-babel';
import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';
import nodemon from 'gulp-nodemon';

gulp.task('build:server', () =>
  gulp.src('./server.js')
    .pipe(babel())
    .pipe(gulp.dest('dist')),
);
