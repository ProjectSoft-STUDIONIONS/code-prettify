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
							"lang-Splus.js",
							"lang-aea.js",
							"lang-agc.js",
							"lang-apollo.js",
							"lang-basic.js",
							"lang-cbm.js",
							"lang-cl.js",
							"lang-clj.js",
							"lang-css.js",
							"lang-dart.js",
							"lang-el.js",
							"lang-erl.js",
							"lang-erlang.js",
							"lang-ex.js",
							"lang-exs.js",
							"lang-fs.js",
							"lang-go.js",
							"lang-hs.js",
							"lang-kotlin.js",
							"lang-lasso.js",
							"lang-lassoscript.js",
							"lang-latex.js",
							"lang-lgt.js",
							"lang-lisp.js",
							"lang-ll.js",
							"lang-llvm.js",
							"lang-logtalk.js",
							"lang-ls.js",
							"lang-lsp.js",
							"lang-lua.js",
							"lang-matlab.js",
							"lang-ml.js",
							"lang-mumps.js",
							"lang-n.js",
							"lang-nemerle.js",
							"lang-pascal.js",
							"lang-proto.js",
							"lang-r.js",
							"lang-rd.js",
							"lang-rkt.js",
							"lang-rust.js",
							"lang-s.js",
							"lang-scala.js",
							"lang-scm.js",
							"lang-sql.js",
							"lang-ss.js",
							"lang-swift.js",
							"lang-tcl.js",
							"lang-tex.js",
							"lang-vb.js",
							"lang-vbs.js",
							"lang-vhd.js",
							"lang-vhdl.js",
							"lang-wiki.js",
							"lang-xq.js",
							"lang-xquery.js",
							"lang-yaml.js",
							"lang-yml.js",
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
