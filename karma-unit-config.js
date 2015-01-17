module.exports = function (config) {
    'use strict';
    config.set({
        basePath: './',
        files: [
            'libraries/angular.js',
            'libraries/angular-mocks.js',

            'application.js',

            'constants/**/*.js',
            'controllers/**/*.js',
            'filters/**/*.js',
            'directives/**/*.js',
            'services/**/*.js',
            'constants/**/*.js',
        ],
        // coverage reporter generates the coverage
        reporters: ['progress', 'coverage'],
        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'constants/**/*-constants!(-test).js': ['coverage'],
            'controllers/**/*-controller!(-test).js': ['coverage'],
            'filters/**/*-filter!(-test).js': ['coverage'],
            'directives/**/*-directive!(-test).js': ['coverage'],
            'services/**/*-service!(-test).js': ['coverage']
        },
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        autoWatch: true
    });
};
