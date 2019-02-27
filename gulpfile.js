var gulp = require("gulp");
var babel = require("gulp-babel");
var uglify = require('gulp-uglify');

gulp.task("doit", function () {
  return gulp.src("./src/js-is-webview.js")
    .pipe(babel(
      {
        "presets": ["@babel/env"]
      }
    )).pipe(uglify())
    .pipe(gulp.dest("./dist"));
});