// 获取 gulp
var gulp = require('gulp');
// 获取 uglify 模块（用于压缩 JS）
var uglify = require('gulp-uglify');
// 获取 cleancss 模块（用于压缩 CSS）
var cleanCSS = require('gulp-clean-css');
// 获取 gulp-rename 模块（用于重命名文件）
var rename = require("gulp-rename");
// 获取 gulp-util 模块（用于打印错误)
var gutil = require('gulp-util');
// 获取 gulp-babel 模块（用于ES6转化ES5)
var babel = require("gulp-babel"); 
// 获取 gulp-imagemin，pump 模块（用于压缩图片)
var imagemin = require('gulp-imagemin'), pump = require('pump');

// 在命令行使用 gulp toes5 启动此任务
gulp.task("to-es5", function () {
    return gulp.src("./src/js/*.js")// ES6 源码存放的路径
      .pipe(babel()) 
      .pipe(gulp.dest("dist/es5")); //转换成 ES5 存放的路径
  });


// 在命令行使用 gulp js-ys 启动此任务
gulp.task('js-ys', function() {
    // 1. 找到文件
//    return gulp.src('./dist/es5/*.js')
   return gulp.src("./src/js/*.js")
        // 2 修改名称
        .pipe(rename({suffix: '.min'}))
        // 3. 压缩文件
        .pipe(uglify())
        .on('error', function(err) {
            gutil.log('Error!', err.toString());
            this.end();
        })
        // 4. 另存压缩后的文件
        .pipe(gulp.dest('dist/js'));
});

// 在命令行使用 gulp css-ys 启动此任务
gulp.task('css-ys', function() {
    // 1. 找到文件
  return  gulp.src('./src/css/*.css')
        // 2 修改名称
        .pipe(rename({suffix: '.min'}))
        // 3. 压缩文件
        .pipe(cleanCSS())
        // 4. 另存压缩后的文件
        .pipe(gulp.dest('dist/css'));
});

// 在命令行使用 gulp auto 启动此任务
gulp.task('img-ys', function (cb) {
    pump([
        gulp.src('src/img/*.{png,jpg,gif,ico}'),
        imagemin(),
        gulp.dest('dist/img')
    ], cb);
});

// 在命令行使用 gulp auto 启动此任务
// gulp.task('auto', function () {
//     // 监听文件修改，当文件被修改则执行 script 任务
//     gulp.watch('./src/js/integral.js', ['js-ys']);
//     gulp.watch('./src/css/integral.css', ['css-ys']);
// });
// gulp.task('default', ['auto']);