/**
 * Created by nisum-user on 5/6/15.
 */

grunt.loadNpmTasks('grunt-handlebars-compiler');

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /*uglify: {
            build: {
                src: 'public/myHandleBar.hbs',//input
                dest: 'public/build/myHandleBar.min.js'//output
            }
        }*/


        handlebars: {
            all: {
                /*
                 The output will be formatted as a Common JS module, using a require()
                 statement where the argument is the Handlebars path provided in the option.
                 */
                files: {
                    'public/build/myHandleBar.js': 'public/template/myHandleBar.hbs'
                }
                /*options: {
                    exportCommonJS: 'handlebars'
                }*/
            }
          /* some: {

                files: {
                    'pkg/template-compile-test2.js': [
                        'template/webApp-template1.handlebars',
                        'template/webApp-template2.handlebars'
                    ]
                },
                options: {
                    namespace: 'myApp.templates',
                    templateRoot: 'webApp-',
                    knownHelpers: ['if', 'each']
                }
            }*/
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-handlebars-compiler');

    // Default task(s).
    grunt.registerTask('default', ['handlebars']);

};