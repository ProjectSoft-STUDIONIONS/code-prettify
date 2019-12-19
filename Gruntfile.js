'use strict';

module.exports = function (grunt) {
	
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	var project = {
		svn: 'https://github.com/google/code-prettify/raw/master/src/',
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
							"lang-apollo.js",
							"lang-basic.js",
							"lang-clj.js",
							"lang-css.js",
							"lang-dart.js",
							"lang-erlang.js",
							"lang-ex.js",
							"lang-go.js",
							"lang-hs.js",
							"lang-kotlin.js",
							"lang-lasso.js",
							"lang-lisp.js",
							"lang-llvm.js",
							"lang-logtalk.js",
							"lang-lua.js",
							"lang-matlab.js",
							"lang-ml.js",
							"lang-mumps.js",
							"lang-n.js",
							"lang-pascal.js",
							"lang-proto.js",
							"lang-r.js",
							"lang-rd.js",
							"lang-rust.js",
							"lang-scala.js",
							"lang-sql.js",
							"lang-swift.js",
							"lang-tcl.js",
							"lang-tex.js",
							"lang-vb.js",
							"lang-vhdl.js",
							"lang-wiki.js",
							"lang-xq.js",
							"lang-yaml.js",
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
