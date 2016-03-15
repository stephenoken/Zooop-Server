"use strict";

const gulp = require("gulp");
const requireDir = require("require-dir");
/*eslint-disable */
const _tasks = requireDir('./gulp_tasks');
/*eslint-enable */

function testTasks(){
  gulp.watch("tests/**/*.js",["test"]);
  gulp.watch("app/**/*",["test"]);
  gulp.watch("public/**/*",["test"]);
}
function gulpTasks() {
  gulp.start("vendor_scripts");
  gulp.start("browser-sync");
  testTasks();
  gulp.watch("public/scss/**/*.scss",["styles"]);
  gulp.watch("public/scripts/**/*.js",["watch-js"]);
  gulp.watch("public/partials/**/*.html",["html"]);
}
gulp.task('default',["start-nodemon-server","styles","build-js","html"],()=>{
  gulpTasks();
});

gulp.task('prod',["styles","images","prod-build-js","vendor_scripts","html"],()=>{
  process.nextTick(function() {
    process.exit(0);
  });
});

gulp.task('front-end',["start-node-server","styles","build-js","html"],()=>{
  gulpTasks();
});

gulp.task('watch-tests',["test"],()=>{
  testTasks();
});
