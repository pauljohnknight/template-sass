var gulp = require ('gulp'),
    uglify = require ('gulp-uglify'),
    sass = require ('gulp-sass'),
    browserSync = require('browser-sync').create();

// Sass compiling
gulp.task('styles', function(){
  gulp.src('./scss/stylesheet.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'))
      .pipe(browserSync.reload({stream:true}));
  });


// Init browserSync
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

//watches styles files
gulp.task('watch', function(){
  gulp.watch('./scss/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'watch', 'serve']);
