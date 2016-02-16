var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var webpack = require('webpack-stream');

// Webpack
gulp.task('webpack', function() {
    var config = require('./webpack.config.js');

    return gulp.src('src/app.js')
        .pipe(webpack(config))
        .pipe(gulp.dest('public/build'));
});

gulp.task('webpack-uglify', ['webpack'], function() {
    gulp.src('public/build/bundle.js')
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('public/build'));
});

gulp.task('default', ['webpack', 'webpack-uglify']);

gulp.task('watch', ['default'], function() {
    gulp.watch('src/**/*.js*', ['default']);
});
