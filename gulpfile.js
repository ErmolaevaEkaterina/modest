var browserSync = require('browser-sync'),
  gulp = require('gulp'),
  gulpClean = require('gulp-clean-css'),
  gulpConcat = require('gulp-concat'),
  gulpDest = require('gulp-dest'),
  gulpIf = require('gulp-if'),
  gulpRmRf = require('gulp-rimraf'),
  gulpLess = require('gulp-less'),
  gulpSourceMaps = require('gulp-sourcemaps'),
  gulpUglify = require('gulp-uglify');

var normalize = 'node_modules/normalize.css/normalize.css';

  gulp.task('html', function() {
  return gulp.src('./src/*.html')
      .pipe(gulp.dest('build/'))
      .pipe(browserSync.stream());
  });

  gulp.task('run:server', function () {
    browserSync.init({
      server: './build',
      port: 8080
    });
  });

  gulp.task('css:build', function() {
    return gulp.src([normalize, './src/css/index.less'])
        .pipe(gulpSourceMaps.init())
        .pipe(gulpLess())
        .pipe(gulpConcat('index.css'))
        //.pipe(gulpClean())
        .pipe(gulpSourceMaps.write())
        .pipe(gulp.dest('build/css/'))
        .pipe(browserSync.stream());
  });

  gulp.task('js:build', function() {
    return gulp.src('./src/js/**/*.js')
    .pipe(gulpSourceMaps.init())
    //.pipe(gulpUglify())
    .pipe(gulpSourceMaps.write())
    .pipe(gulp.dest('build/js/'))
    .pipe(browserSync.stream());
});

  gulp.task('images', function() {
   return gulp.src('./src/images/**/*.{jpg,png,gif,svg}')
    .pipe(gulp.dest('build/images/'))
    .pipe(browserSync.stream());
});

  gulp.task('fonts', function() {
   return gulp.src('./src/fonts/**/*.{eot,woff,woff2,svg,ttf,otf}')
    .pipe(gulp.dest('build/fonts/'))
    .pipe(browserSync.stream());
});
  //Вотч смотрит за изменениями в указанных директориях и в зависимости от этого запускает таски на сборку
  gulp.task('watch', function(){
    gulp.watch('./src/*.html', ['html']);
    gulp.watch('./src/**/*.less', ['css:build']);
    gulp.watch('./src/js/**/*.js', ['js:build']);
    gulp.watch('./src/images/**/*.{jpg,png,gif,svg}', ['images']);
  });

 //Удаляем папку билд
  gulp.task('clean:build', function () {
    gulpRmRf('./build');
  });

 //Делаем свежую сборку, запускаем по порядку уже написанные таски

  gulp.task('build',
    [
        'clean:build',
        'fonts',
        'images',
        'js:build',
        'css:build',
        'html'
    ]
  );
  //для режима разработки делаем билд, запускаем сервер, и следим за изменениями и перезагружемся автоматически

   gulp.task('default',
    [
        'build',
        'run:server',
        'watch'
    ]
  );