// Gulpfile
var gulp = require('gulp'),
    connect = require('gulp-connect')



gulp.task('copy', function() {
  gulp.src('app/index.html')
  .pipe(gulp.dest(outputDir))
});



gulp.task('watch', function () {
  gulp.watch(['app/*.html'], ['html']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  })
});

gulp.task('html', function () {
  gulp.src('app/*.html')
    .pipe(gulp.dest('app/*.html'))
    .pipe(connect.reload());
});

gulp.task('default', gulp.series('connect', 'watch'));