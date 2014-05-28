var timer = require("grunt-timer");
var remFallback = require("rework-rem-fallback");
module.exports = function(grunt) {
  timer.init(grunt, {friendlyTime: true});

  grunt.initConfig({
    watch: {
      sass: {
        files: ['src/*.scss'],
        tasks: ['build'],
        options: {
          spawn: false,
        },
      },
    },
    sass: {
      main: {
        files: {
          'dist/main.css': 'src/main.scss'
        }
      }
    },
    autoprefixer: {
      main: {
        src: 'dist/main.css',
        dest: 'dist/main.css'
      },
    },
    rework: {
      'dist/main.css': 'dist/main.css',
      options: {
        use: [
          [remFallback],
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-rework');

  grunt.registerTask('build', ['sass', 'autoprefixer', 'rework']);
  grunt.registerTask('default', ['watch']);
};