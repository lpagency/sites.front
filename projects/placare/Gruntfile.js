
(function()
{
    'use strict';

    module.exports = function(grunt)  //jshint ignore: line
    {
        require('load-grunt-tasks')(grunt);  //jshint ignore: line

        grunt.initConfig({

            "babel": {
                options: {
                    sourceMap: true
                },
                dist: {
                    files: {
                        'static/css/style.es5.css': 'static/css/style.css',
                        'static/css/header.es5.css': 'static/css/header.css',
                    }
                }
            },

            uglify: {
                my_target: {
                    files: {
                        'static/css/style.min.css': ['static/css/style.es5.css'],
                        'static/css/header.min.css': ['static/css/header.es5.css']
                    }
                }
            }

        });

        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-babel');

        grunt.registerTask('build', ['babel', 'uglify']);
    };
})();
