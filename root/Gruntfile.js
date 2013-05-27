'use strict';
var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

var folderMount = function folderMount(connect, point) {
  return connect.static(path.resolve(point));
};

module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      livereload: {
        options: {
          port: 9002,
          middleware: function(connect, options) {
            return [lrSnippet, folderMount(connect, '.')]
          }
        }
      }
    },

    // Configuration to be run (and then tested)
    regarde: {
      project: {
        files: ['*.js', '*.css', '*.html'],
        tasks: ['livereload']
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      js: {
        files: {
          // make sure to add other js files your project depends on to the array:
          'release/<%= pkg.name %>.min.v<%= pkg.version %>.js': ['app.js'],
          'release/html5shiv.js': ['components/html5shiv/dist/html5shiv.js']
        }
      }
    },

    cssmin: {
      combine: {
        files: {
          // make sure to add other css files your project depends on to the array:
          'release/<%= pkg.name %>.min.v<%= pkg.version %>.css': ['components/normalize-css/normalize.css', 'style.css']
        }
      }
    },

    clean: ['release']
  });

  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-livereload');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['livereload-start', 'connect', 'regarde']);
  grunt.registerTask('release', ['clean', 'cssmin', 'uglify']);
};