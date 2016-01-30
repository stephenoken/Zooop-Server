const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task("images",()=>{
  return gulp.src('front_end_src/images/*')
    	.pipe(imagemin({
        		progressive: true
      }))
      .pipe(gulp.dest('./public/images'));
});
