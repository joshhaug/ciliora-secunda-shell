var gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    notify      = require('gulp-notify'),
    gutil       = require('gulp-util'),
    beep        = require('beepbeep'),
    shell       = require('gulp-shell'),
    fs          = require('fs'),
    sass        = require('gulp-sass');



// Error handler
var onError = function (err) {
    var errorLine   = (err.line) ? 'Line ' + err.line : '',
        errorTitle  = (err.plugin) ? 'Error: [ ' + err.plugin + ' ]' : 'Error';

    notify.logLevel(0);
    notify({
            title: errorTitle,
            message: errorLine
    }).write(err);
    beep();
    gutil.log(gutil.colors.red('\n'+errorTitle+'\n\n', err.message));
    this.emit('end');
};


// Compile sass
gulp.task('sass', function () {
    return gulp.src('sass/gnome-shell.scss')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(gulp.dest('.'));
});


// Wait for sass to compile & reload theme
gulp.task('reloadTheme', ['sass'], shell.task([
    'gsettings set org.gnome.shell.extensions.user-theme name default',
    'gsettings set org.gnome.shell.extensions.user-theme name Ciliora-Secunda'
]));


// Make zip backup (not used by default)
gulp.task('backup', shell.task([
    'zip -qr ~/Dropbox/secunda ../../../ciliora-secunda-shell -x "*node_modules*" "*.git*"'
]));


// Make a symlink in the ~/.themes dir
gulp.task('install', function () {
    try {
        fs.mkdirSync(process.env.HOME+'/.themes');
    } catch (err) {
        if (err.code !== 'EEXIST') throw err;
    }
    try {
        fs.unlinkSync(process.env.HOME+'/.themes/Ciliora-Secunda');
    } catch (err) {
        if (err.code !== 'ENOENT') throw err;
    }
        fs.symlinkSync(__dirname+'/../../Ciliora-Secunda', process.env.HOME+'/.themes/Ciliora-Secunda');
});


// Watch
gulp.task('watch', function () {
    gulp.watch(['sass/**/*',
                'background-assets/**/*',
                'button-assets/**/*',
                'misc-assets/**/*',
                'overview-assets/**/*',
                'panel-assets/**/*',
                'widget-assets/**/*',
                'menu-icons/**/*',
                'extensions/**/*'], ['reloadTheme']);
});


// Default task
gulp.task('default', ['install', 'watch'], function() {
    gulp.start('reloadTheme');
});
