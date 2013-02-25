/**
 * Created with JetBrains WebStorm.
 * User: tm
 * Date: 2/14/13
 * Time: 12:33 AM
 * To change this template use File | Settings | File Templates.
 */

module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: { 
            options:{
                curly:   true,
                eqeqeq:  true,
                immed:   true,
                latedef: true,
                newcap:  true,
                noarg:   true,
                sub:     true,
                undef:   true,
                boss:    true,
                eqnull:  true,
                browser: true,
                node: true, 
                es5: true
                },
            globals:{
                jQuery: true,
            },
            all: [
                'package.json',
                '*.js', 
                'src/**/*.js', 
                'test/**/*.js', 
                'public/**/*.js'
            ]
        },
        sass: {
            dist: {
                options: {
                    style: 'compact'
                },
                src: 'src/scss/bqs.scss',  
                dest: 'public/css/bqs.css'
            }
        },
        watch: {
            files: [ '<%= jshint.all %>', 'src/scss/*.scss'],
            tasks: ['default']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch'),
    grunt.loadNpmTasks('grunt-contrib-sass'),
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-compass');
    
    grunt.registerTask('default', ['sass', 'jshint']);
};