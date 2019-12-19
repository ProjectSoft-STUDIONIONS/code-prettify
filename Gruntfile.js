'use strict';

module.exports = function (grunt) {
	
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	var project = {
		svn: 'https://github.com/google/code-prettify/raw/master/loader/',
		src: __dirname + '\\src'
	};
	grunt.initConfig({

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			grunt: 'Gruntfile.js'
		},

		shell: {
			setup: {
				command: 'mkdir ' + project.src
			},
			latest: {
				command: (function buildCommand(){
					var command = [],
						scripts = [
							"prettify.css",
							"prettify.js"
						];

					scripts.forEach(function (script) {
						var cmd = "bitsadmin /transfer 'JobName' " + 
								project.svn + script + " " + 
								project.src + "\\" + script;
						command.push(cmd);
					});
					var rt = command.join(" && ");
					console.log(rt);
					return rt;
				}())
			}
		},

		clean: {
			options: {
				force: true
			},
			setup: 'src/'
		}

	});

	grunt.registerTask('default', ['clean:setup', 'shell:setup', 'shell:latest']);

};
