
const gulp = require('gulp');
const gulp_ts = require('gulp-typescript');
const shell = require('gulp-shell');

const ts_project = gulp_ts.createProject('tsconfig.json');


gulp.task('default', function () {
    return ts_project.src()
    .pipe(ts_project())
    .js.pipe(gulp.dest('dist'));
});

gulp.task('ts2js',
    shell.task('tsc', { 'verbose': true })
);

gulp.task('watch_ts', function () {
    gulp.watch('src/**/*.ts', ['default', 'ts2js']);
});
