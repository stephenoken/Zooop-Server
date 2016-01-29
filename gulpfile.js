"use strict";

const gulp = require("gulp");
const requireDir = require("require-dir");
const _tasks = requireDir('./gulp_tasks');

gulp.task('default',['test'],()=>{
  gulp.watch("tests/**/*.js",["test"]);
});
