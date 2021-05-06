module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        webdriver: {            
            'test-local': {
                configFile: './test/config/wdio.local.conf.js'
            },
            'test': {
                configFile: './test/config/wdio.local.conf.js'
            },
        },
    });

    grunt.loadNpmTasks('grunt-cucumberjs');
    grunt.loadNpmTasks('grunt-webdriver');
    grunt.registerTask('default', ['webdriver:test-local']);  
};
