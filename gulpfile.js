"use strict";

const gulp = require("gulp");
const requireDir = require("require-dir");
/*eslint-disable */
const _tasks = requireDir('./gulp_tasks');
/*eslint-enable */

gulp.task('default',["start-server","styles","images","build-js"],()=>{
  gulp.start("test");
  gulp.start("browser-sync");
  gulp.watch("tests/**/*.js",["test"]);
  gulp.watch("app/**/*",["test"]);
  gulp.watch("public/scss/**/*.scss",["styles"]);
  gulp.watch("public/scripts/**/*.js",["watch-js"]);
  gulp.watch("public/images/*",["clean:public/images","images"]);
});

gulp.task('prod',["styles","images"],()=>{});
