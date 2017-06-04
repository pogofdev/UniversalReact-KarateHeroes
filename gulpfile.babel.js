import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';
import rimraf from 'rimraf';

const plugins = loadPlugins();

import webpackConfig from './webpack.config';


//bundle to bundle.js file with webpack
gulp.task('app-client-js', ['clean'], (cb) => {
    webpack(webpackConfig, (err, stats) => {
        if(err) throw new plugins.util.PluginError('webpack', err);

        plugins.util.log('[webpack]', stats.toString());

        cb();
    });
});

gulp.task('copy-static-folder', ['clean'], () => {
    return gulp.src('./src/static/**/*')
        .pipe(gulp.dest('./build/static'));
});

gulp.task('copy-views-folder', ['clean'], () => {
    return gulp.src('./src/views/**/*')
        .pipe(gulp.dest('./build/views'));
});

gulp.task('copy-server-js', ['clean'], () => {
    return gulp.src('./src/server.js')
        .pipe(gulp.dest('./build'));
});


gulp.task('clean', (cb) => {
    rimraf('./build', cb);
});

gulp.task('build', ['app-client-js', 'copy-static-folder', 'copy-views-folder', 'copy-server-js']);

gulp.task('watch', ['default'], () => {
    gulp.watch('src/**/*', ['build']);
});

gulp.task('default', ['build']);

