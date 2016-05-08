/**
 * Created by shikokuyt on 2016/5/7 0007.
 */
/**
 * Created by zhouyutao on 2016/4/25 0025.
 */
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify');

gulp.task('sass', function () {
    return sass('sass/*.scss')
        .pipe(minifyCSS({keepBreaks: false}))
        .pipe(gulp.dest('css'))
        .pipe(reload({stream: true}))
        .on('error', sass.logError);
});

gulp.task('browserSync', ['sass'], function () {
    browserSync.init({
        server: "./",
        files: ['css/*.css', '*.html', 'js/*.js']
    });
    gulp.watch('sass/*.scss', ['sass']);
    gulp.watch('*.html').on('change', reload);
    gulp.watch('js/*.js').on('change', reload);
});

gulp.task('default', ['browserSync']);