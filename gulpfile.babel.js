import babel from 'gulp-babel';
import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';
import nodemon from 'gulp-nodemon';

gulp.task('build:server', () =>
  gulp.src('./server.js')
    .pipe(babel())
    .pipe(gulp.dest('dist')),
);

gulp.task('nodemon', () =>
  nodemon({
    script: 'dist/server.js',
    execMap: {
      js: 'node --harmony',
    },
    verbose: true,
    ext: 'js html json',
    env: { NODE_ENV: 'development' },
  }),
);

gulp.task('default', gulpSequence(
  'build:server',
  'nodemon',
));
