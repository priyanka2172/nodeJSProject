/**
 * Created by Priyanka Acharya on 5/8/15.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        handlebars: {

            compile: {
                files: {
                    'build/myHandleBar.js': 'template/myHandleBar.hbs'
                }
            },
            options: {
                namespace: false,
                amd: true

            }

            /*all: {

                files: {
                    'build/myHandleBar.js': 'public/template/myHandleBar.hbs'
                },
                options: {

                    exportAMD: true, returnAMD: true
                }

                /*options: {
                 exportCommonJS: 'handlebars'
                 }
            }*/
        }


    });
// Load the plugin that provides the "uglify" task.
   // grunt.loadNpmTasks('grunt-handlebars-compiler');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
// Default task(s).
    grunt.registerTask('default', ['handlebars']);

};