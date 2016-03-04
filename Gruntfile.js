module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-vegas-assets-prepare');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-copy');

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
        copy: {
            main: {
                expand: true,
                src: 'vendor/vegas-cmf/*/assets/',
                dest: 'public/assets/',
                filter: function (filepath) {

                    var path = require('path');

                    var dest = path.join(
                        grunt.config('copy.main.dest'),
                        path.basename(filepath)
                    );

                    return !(grunt.file.exists(dest));
                }
            }
        }


    });

    // Update dependencies tasks
    grunt.registerTask('update', ['vegas-assets-prepare', 'bower:update']);

    // Default tasks.
    grunt.registerTask('default', ['vegas-assets-prepare', 'bower:install']);

};