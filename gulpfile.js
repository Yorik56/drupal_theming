var gulp = require('gulp');
var livereload = require('gulp-livereload')
var uglify = require('gulp-uglifyjs');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('imagemin', function () {
    return gulp.src('./themes/custom/montheme/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
    .pipe(gulp.dest('./themes/custom/montheme/images'));
});


gulp.task('sass', function () {
  return gulp.src('./themes/custom/montheme/sass/*.scss')
    .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./themes/custom/montheme/css'))
});


gulp.task('uglify', function() {
  return gulp.src('./themes/custom/montheme/lib/*.js')
    .pipe(uglify('main.js'))
    .pipe(gulp.dest('./themes/custom/montheme/js'))
});

gulp.task('watch', function(){
    livereload.listen();

    gulp.watch('./themes/custom/montheme/sass/*.scss', gulp.series('sass'));
    gulp.watch('./themes/custom/montheme/lib/*.js',gulp.series('uglify'));
    gulp.watch(['./themes/custom/montheme/css/style.css', './themes/custom/montheme/**/*.twig', './themes/custom/montheme/js/main.js'], function (files){
        livereload.changed(files)
    });
    // gulp.task('build', function (done) { 
    //     console.log('Working!'); 
    //     done();
    // });    
});