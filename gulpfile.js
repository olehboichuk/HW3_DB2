const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

function style() {
    return gulp.src('./src/style/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./src/public/style'))
}

async function build(){
    await style();
}

exports.style = style;
exports.build = build;
exports.default = build;