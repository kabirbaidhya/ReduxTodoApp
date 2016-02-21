var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var webpack = require('webpack-stream');
var cssnano = require('gulp-cssnano');

// Webpack
gulp.task('webpack', function() {
    var config = require('./webpack.config.js');

    return gulp.src('src/app.js')
        .pipe(webpack(config))
        .pipe(gulp.dest('public/build/js'));
});

gulp.task('webpack-uglify', ['webpack'], function() {
    gulp.src('public/build/js/bundle.js')
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('public/build/js'));
});

gulp.task('sass', function() {
    gulp.src('./resources/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/build/css'));
});

gulp.task('sass-uglify', ['sass'], function() {
    gulp.src('public/build/css/app.css')
        .pipe(rename({suffix: '.min'}))
        .pipe(cssnano())
        .pipe(gulp.dest('public/build/css'));
});

gulp.task('default', [
    'webpack', 'webpack-uglify',
    'sass', 'sass-uglify'
]);

gulp.task('watch', ['default'], function() {
    gulp.watch('src/**/*.js*', ['webpack', 'webpack-uglify']);
    gulp.watch('resources/**/*.scss', ['sass', 'sass-uglify']);
});
