var gulp = require('gulp');
var run = require('gulp-run');
const del = require("del");


gulp.task("del", function(){
    return del(["css"]);
});

gulp.task('watchtask', function () {
    console.log("command will execute");
    gulp.watch('./scss/light/theme/*.scss', gulp.series("del","css"));
});

gulp.task("css",() => {
    console.log("Compling sass > css");
    run('npm run scss').exec();
});

