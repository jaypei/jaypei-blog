module.exports = function (grunt) {

    //env cfg
    var pkg = grunt.file.readJSON('package.json');
    var cfg = {
        livereload: 35729
    };
    var banner = '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n';

    // Project configuration.
    grunt.initConfig({

        pkg: pkg,
        cfg: cfg,

        watch: {
            options: {
                livereload: cfg.livereload,
            },
            server: {
                files: [
                    "jekyll/assets/**",
                    "jekyll/_posts/**"
                ],
                tasks: ['default'],
            },
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'jekyll/assets/css/c.css': 'jekyll/assets/sass/i.scss'
                }
            }
        }
    });

    //load all grunt tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    //define tasks
    grunt.registerTask('default', [
        'sass'
    ]);
    grunt.registerTask('reload-server', [
        'default',
        'watch:server'
    ]);
};
