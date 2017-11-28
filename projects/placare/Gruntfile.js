
(function()
{
    'use strict';

    module.exports = function(grunt)  //jshint ignore: line
    {
        require('load-grunt-tasks')(grunt);  //jshint ignore: line

        grunt.initConfig({

            uglify: {
                my_target: {
                    files: {
                        'static/css/style.min.css': ['static/css/style.css'],
                        'static/css/header.min.css': ['static/css/header.css']
                    }
                }
            }

        });

        grunt.loadNpmTasks('grunt-contrib-uglify');

        grunt.registerTask('build', ['uglify']);
    };
})();
