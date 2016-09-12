var gulp  = require('gulp');
var shell = require('gulp-shell');

gulp.task('test', shell.task([
    'mocha --compilers js:babel-register --colors */test.js'
]));

