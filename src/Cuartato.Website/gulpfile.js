/// <binding AfterBuild='main' />
var gulp = require("gulp"),
    del = require("del"),
    seq = require("run-sequence"),
    sass = require("gulp-sass"),
    minifyCss = require("gulp-minify-css"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),
    concat = require("gulp-concat");

/**
 * CSS
 */
gulp.task("compileSass", function (cb) {
    return gulp.src("wwwroot/sass/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("wwwroot/css"))
        .pipe(minifyCss({ compatibility: "ie8" }))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("wwwroot/css"));
});

gulp.task("bundle:css:layout", function (cb) {
    var files = [
        "wwwroot/libs/bootstrap/dist/css/bootstrap.css",
        "wwwroot/libs/angular-ui-router-anim-in-out/css/anim-in-out.css",
        "wwwroot/css/core.css"
    ];
    return gulp.src(files)
        .pipe(concat("layout.css"))
        .pipe(gulp.dest("wwwroot/css/"))
        .pipe(minifyCss({ compatibility: "ie8" }))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("wwwroot/css/"));
});

gulp.task("compile:allCss", function (cb) {
    seq("compileSass", "bundle:css:layout", cb);
});

/**
 * JS
 */

gulp.task("bundle:js:core", function (cb) {
    var files = [
        "wwwroot/libs/angular/angular.js",
        "wwwroot/libs/angular-touch/angular-touch.js",
        "wwwroot/libs/angular-animate/angular-animate.js",
        "wwwroot/libs/angular-ui-router/release/angular-ui-router.js",
        "wwwroot/libs/angular-ui-router-anim-in-out/anim-in-out.js",
        "wwwroot/libs/ng-template-carousel/ng-template-carousel.js",

        "wwwroot/angular/libs/key-trap/key-trap.directive.js",
        "wwwroot/angular/libs/modal/modal.directive.js",

        "wwwroot/angular/context/baseObserver.js",
        "wwwroot/angular/page-setup/website.setup.js"
    ];
    return gulp.src(files)
        .pipe(concat("core.js"))
        .pipe(gulp.dest("wwwroot/js/"))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(uglify())
        .pipe(gulp.dest("wwwroot/js/"));
});

gulp.task("bundle:js:services", function (cb) {
    var files = [
        "wwwroot/angular/services/article.service.js",
        "wwwroot/angular/services/cart.service.js"
    ];
    return gulp.src(files)
        .pipe(concat("services.js"))
        .pipe(gulp.dest("wwwroot/js/"))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(uglify())
        .pipe(gulp.dest("wwwroot/js/"));
});

gulp.task("bundle:js:controllers", function (cb) {
    var files = [
        "wwwroot/angular/context/article.gallery.context.js",

        "wwwroot/angular/widgets/highlight-slider/highlight-slider.controller.js",
        "wwwroot/angular/widgets/collection-picker/collection-picker.controller.js",
        "wwwroot/angular/widgets/article-slider/article-slider.controller.js",
        "wwwroot/angular/widgets/article-detail/article-detail.controller.js"
    ];
    return gulp.src(files)
        .pipe(concat("controllers.js"))
        .pipe(gulp.dest("wwwroot/js/"))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(uglify())
        .pipe(gulp.dest("wwwroot/js/"));
});

gulp.task("bundle:js:all", function (cb) {
    var files = [
        "wwwroot/js/core.js",
        "wwwroot/js/services.js",
        "wwwroot/js/controllers.js"
    ];
    return gulp.src(files)
        .pipe(concat("bundle.js"))
        .pipe(gulp.dest("wwwroot/js/"))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(uglify())
        .pipe(gulp.dest("wwwroot/js/"));
});

gulp.task("compile:allJs", function (cb) {
    seq(["bundle:js:core", "bundle:js:services", "bundle:js:controllers"], "bundle:js:all", cb);
});

/**
 * Watchers
 */

gulp.task("watch:js", function (cb) {
    gulp.watch("wwwroot/angular/**/*.js", ["compile:allJs"]);
});

gulp.task("watch:css", function (cb) {
    gulp.watch("wwwroot/sass/**/*.scss", ["compile:allCss"]);
});

/**
 * Main
 */
gulp.task("main", function (cb) {
    seq("compileSass", ["compile:allCss", "compile:allJs"], cb);
});