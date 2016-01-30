const gulp = require("gulp");
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

gulp.task("styles",()=>{
  return gulp.src("./front_end_src/scss/**/*.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.init())
    .pipe(concat("styles.css"))
    .pipe(gulp.dest("./public/stylesheets"));
});
