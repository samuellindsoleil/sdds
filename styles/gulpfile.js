var gulp = require('gulp');
var run = require('gulp-run');

// import gulp from 'gulp'
// import run from 'gulp-run-command' 

// const outputFolder = 'dist';
// const build = series(clean);
// const start = series(build, serve, watchtask);

// function clean() {
//     return del(outputFolder);
//   }

gulp.task('clean', run('rm -rf build'))
gulp.task('build', ['clean'], run('npm run scss', {
    env: { NODE_ENV: 'production' }
  }))

gulp.task('watchtask', function () {
    console.log("command will execute");
    // watch for scss file (*.scss) changes, in current directory (./)
    gulp.watch('./scss/light/theme/*.scss', function () {

        console.log("command will execute here after changes saved in Scss file");

        // run an npm command called `test`, when above scss file changes
        // return run('npm run scss').exec();
        run('npm run scss').exec();

    });


});

