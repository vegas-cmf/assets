module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-vegas-assets-prepare');
    grunt.loadNpmTasks('grunt-vegas-assets-copy');
    grunt.loadNpmTasks('grunt-bower-task');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        "vegas-assets-prepare": {
            default: {
                files: {
                    "bower.json": ["bower_base.json", "vendor/vegas-cmf/*/vegas.json", 'vegas.json']
                }
            }
        },
        bower: {
            install: {
                options: {
                    layout: 'byComponent',
                    targetDir: 'public/assets/vendor'
                }
            },
            update: {
                options: {
                    layout: 'byComponent',
                    targetDir: 'public/assets/vendor'
                }
            }
        },
        "vegas-assets-copy": {
            main: {
                expand: true,
                cwd_truncate: true,
                cwd: 'vendor/vegas-cmf',
                src: '*/assets/**',
                dest: 'public/assets/',
                filter: function (filepath) {
                    var path = require('path');
                    filepath = filepath.replace(grunt.config('vegas-assets-copy.main.cwd') + '/', '');
                    filepath = filepath.replace(/[a-zA-Z0-9\.\-\_]*\/assets\//gmi, '');

                    var dest = path.join(grunt.config('vegas-assets-copy.main.dest'), filepath);

                    return !(grunt.file.exists(dest));
                }
            }
        }


    });

    // Update dependencies tasks
    grunt.registerTask('update', ['vegas-assets-prepare', 'vegas-assets-copy', 'bower:update']);

    // Default tasks.
    grunt.registerTask('default', ['vegas-assets-prepare', 'vegas-assets-copy', 'bower:install']);

};