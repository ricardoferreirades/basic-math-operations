const gulp = require('gulp');
const minify = require('gulp-minify');

const source = ['./app.js'];

gulp.task('minify', function() {
    gulp.src(source)
    .pipe(minify({
        ext: {
            src: '.js',
            min: '-min.js'
        }
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['minify']);   