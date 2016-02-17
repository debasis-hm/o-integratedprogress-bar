'use strict';
var gulp = require('gulp');
var obt = require('origami-build-tools');

gulp.task('build', function() {
	obt.build(gulp, {
		js: './main.js',
		sass: './main.scss',
		buildJs: 'bundle.js',
		buildCss: 'bundle.css',
		buildFolder: 'public'
	});
});

gulp.task('verify', function() {
	obt.verify(gulp);
});

gulp.task('watch', function() {
	gulp.watch('./src/js/*', ['verify', 'build']);
});

gulp.task('default', ['verify', 'build', 'watch']);