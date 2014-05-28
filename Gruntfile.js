var timer = require("grunt-timer");

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
    px_to_rem: {
      dist: {
        options: {
          base: 16,
          fallback: true
        },
        files: {
          'dist/main.css': ['dist/main.css'],
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-px-to-rem');

  grunt.registerTask('build', ['sass', 'autoprefixer', 'px_to_rem']);
  grunt.registerTask('default', ['watch']);
};