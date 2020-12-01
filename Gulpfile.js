const gulp =require('gulp');
const sass=require('gulp-sass');
const cleanCss =require('gulp-clean-css');
const concatCss=require('gulp-concat-css');
const rename =require('gulp-rename')

function styles(done){
   gulp.src([
       './src/main.scss'
   ])
   .pipe(sass().on('error',sass.logError))
   .pipe(concatCss('styles.css',{
       'rebaseUrls':false}))
    .pipe(cleanCss())
    .pipe(rename({
        basename:'styles',
        suffix:'.min'
    }))
    .pipe(gulp.dest('./dest/'));
    done();
}

function watch(done){
    gulp.watch('./src/**/*.scss',gulp.series(styles));
    done();
}


exports.styles=styles;
exports.watch=watch;
exports.default=gulp.series(styles);
