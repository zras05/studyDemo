# gulp 压缩

## gulp 压缩 css

    gulp css-ys

## gulp 压缩 js

    1.gulp to-es5
    2.gulp js-ys

## gulp 压缩图片

    gulp img-ys

## 文件目录

    src
    |
    |—— js  // 原始js
    |
    |—— css // 原始css
    |
    |—— img // 原始img

    dist
    |
    |—— js   // 压缩后js
    |
    |—— css  // 压缩后css
    |
    |—— img  // 压缩后img
    |
    |—— es5  // es6转换为es5

## 依赖

     // 获取 uglify 模块（用于压缩 JS）
        gulp-uglify

     // 获取 cleancss 模块（用于压缩 CSS）
        gulp-clean-css

     // 获取 gulp-rename 模块（用于重命名文件）
        gulp-rename

     // 获取 gulp-util 模块（用于打印错误)
        gulp-util

     // 获取 gulp-babel 模块（用于ES6转化ES5)
        gulp-babel

     // 获取 gulp-imagemin，pump 模块（用于压缩图片)
        gulp-imagemin
        pump