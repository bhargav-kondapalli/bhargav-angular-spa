module.exports = function(grunt) {
// Gruntfile.js
grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // configure uglify to minify js files -------------------------------------
    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n',
        mangle: false
      },
      build: {
        files: {
          'js/build/production.min.js': ['js/libs/app.js']
        }
      }
    },
    
    cssmin: {
       dist: {
          options: {
             banner: '/*! Portfolio CSS | Bhargav Kondapalli */'
          },
          files: {
             'css/style.min.css': ['css/*.css', '!css/*.min.css']
          }
      }
    },

    jshint: {
      files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
});
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
 grunt.loadNpmTasks('grunt-contrib-jshint');


grunt.registerTask('test', ['jshint']);
grunt.registerTask('default', ['uglify', 'cssmin']);
};