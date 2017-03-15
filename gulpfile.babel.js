import babel from 'gulp-babel';
import babelify from 'babelify';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';
import nodemon from 'gulp-nodemon';
import rename from 'gulp-rename';
import source from 'vinyl-source-stream';

// Hey Tom, fuck yourself

gulp.task('build:server', () =>
  gulp.src('./server.js')
    .pipe(babel())
    .pipe(rename('_server.js'))
    .pipe(gulp.dest('.')),
);

gulp.task('build:app', () =>
  browserify({
    entries: './src/app.js',
    debug: true,
  })
    .transform(babelify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./public/javascript')),
);

gulp.task('nodemon', () =>
  nodemon({
    script: '_server.js',
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
  'build:app',
  'nodemon',
));
