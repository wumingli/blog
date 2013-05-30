module.exports = function(grunt) {
    var transport = require('grunt-cmd-transport');
    var style = transport.style.init(grunt);
    var text = transport.text.init(grunt);
    var script = transport.script.init(grunt);
    grunt.initConfig({
        pkg : grunt.file.readJSON("package.json"),
        transport: {
          options : {
              paths : ['.'],
              alias: '<%= pkg.spm.alias %>',
              parsers : {
                  '.js' : [script.jsParser],
                  '.css' : [style.css2jsParser],
                  '.html' : [text.html2jsParser]
              }
          },
          msPick : {
                options : {
                    idleading : 'dist/msPick/'
                },

                files : [
                    {
                        cwd : 'modules/msPick/src/',
                        src : '**/*.js',
                        filter : 'isFile',
                        dest : '.build/msPick'
                    }
                ]
            }
        },
        concat : {
            options : {
                paths : ['.'],
                include : 'relative'
            },
            msPick : {
                options : {
                    include : 'all'
                },
                files: [
                    {
                        expand: true,
                        cwd: '.build/',
                        src: ['msPick/*.js'],
                        dest: 'dist/',
                        ext: '.js'
                    }
                ]
            }
        },

        uglify : {
            msPick : {
                files: [
                    {
                        expand: true,
                        cwd: '.build/',
                        src: ['msPick/**/*.js', '!msPick/**/*-debug.js'],
                        dest: 'dist/',
                        ext: '.js'
                    }
                ]
            }
        },

        clean : {
            spm : ['.build']
        }
    })

  grunt.loadNpmTasks('grunt-cmd-transport');
  grunt.loadNpmTasks('grunt-cmd-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', ['transport', 'concat', 'uglify', 'clean']);
}