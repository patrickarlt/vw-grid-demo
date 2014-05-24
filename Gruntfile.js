module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      sass: {
        files: ['*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },
    },
    sass: {
      dist: {
        files: {
          'main.css': 'main.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass']);
}