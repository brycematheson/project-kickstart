/**********************************************
****************** Modules ********************
***********************************************/
var gulp = require('gulp'), 
  sass = require('gulp-ruby-sass'), //Compiles SASS
  autoprefix = require('gulp-autoprefixer'), //Automatically throws in browser prefixes
  minifycss = require('gulp-minify-css'), //Minifies CSS
  rename = require("gulp-rename"), //Renames files to .min after minifying
  minifyhtml = require('gulp-minify-html'), //Minifies the HTML
  concat = require('gulp-concat'), //Concatenates all source files into one file
  uglify = require('gulp-uglify'), //Minifies JavaScript
  imagemin = require('gulp-imagemin'), //Compresses images
  livereload = require('gulp-livereload'), //Live reload
  jshint = require('gulp-jshint'), //JS Linting
  notify = require('gulp-notify'), //Used to throw notifications in terminal
  beep = require('beepbeep'), //Make a beep on error
  gutil = require('gulp-util'); //Ooooh! Pretty colors. :)

/**********************************************
****************** Functions ********************
***********************************************/
var errorHandling = function (err) {
  beep([0]);
  gutil.log(gutil.colors.red(err));
};

// css auto-prefix, minify, and rename
gulp.task('styles', function() {
    return sass('src/styles/', {style:'expanded'}).on('error', errorHandling)
         .pipe(autoprefix('last 2 versions'))
             .pipe(minifycss())
             	.pipe(rename({suffix:'.min'}))
                  .pipe(gulp.dest('build/styles/'))
                      .pipe(livereload());
});

// minify new images
gulp.task('imagemin', function() {
      gulp.src('src/images/*.jpg')
          .pipe(imagemin()).on('error', errorHandling)
              .pipe(gulp.dest('build/images/'));
});

// minify new or changed HTML pages
gulp.task('html', function() {
        gulp.src('src/*.html')
            .pipe(minifyhtml())
                .pipe(gulp.dest('build/'))
                  .pipe(livereload());
});

// JS concat, strip debugging and minify
gulp.task('scripts', function() {
    	gulp.src('src/scripts/*.js')
        	.pipe(concat('scripts.js'))
                .pipe(uglify()).on('error', errorHandling)
	                .pipe(rename({suffix:'.min'}))
	                	.pipe(gulp.dest('build/scripts/'))
                      .pipe(livereload());
});

/**********************************************
************ Watch & Build Tasks **************
***********************************************/
gulp.task('default', ['styles', 'html', 'scripts', 'imagemin'], function() {
        // watch for CSS changes & minify
        gulp.watch('./src/styles/*.scss', function() {
          livereload.listen();
        	     gulp.run('styles');
                 });

        // watch for html & minify
        gulp.watch('./src/*.html', function() {
          livereload.listen();
            gulp.run('html');
            	});

        // watch for JS changes
        gulp.watch('./src/scripts/*.js', function() {
          livereload.listen();
            gulp.run('scripts');
        	    });

        // watch for new images
        gulp.watch('./src/images/*.jpg', function() {
            gulp.run('imagemin');
              });
});