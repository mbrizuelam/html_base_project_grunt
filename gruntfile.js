//Grunt File Init - This file Will Run the Automated Task To Support HTML Base Project
module.exports = function (grunt) {
	grunt.initConfig({
		/*---------------------------------------------Misc Taks---------------------------------------------*/
		//Creates and Connects a Local Server for both DEV and Dist folders
		connect: {
			//Dev Server --> localhost:3000
			server_dev: {
				options: {
					hostname: 'localhost',
					port: 3000,
					base: 'dev/',
					livereload: true
				}
			},
			//Prod Server --> localhost:3001
			server_prod: {
				options: {
					hostname: 'localhost',
					port: 3001,
					base: 'dist/',
					livereload: true
				}
			}
		},
		//This Taks is the Watcher of any file changes, this task will wait for changes and apply the selected tasks to the files
		watch: {
			options: {
				spawn: true, //Set to True for Faster load times.
				livereload: true //Set to true to reload the files on the static server.
			},
			scripts: {
				files: ['dev/**/*.html', 'dev/js/**/*.js', 'dev/sass/**/*.scss'], //List of files or folders that will be watched.
				tasks: ['concat', 'sass', 'jshint'] //List of tasks that will run after every file change.
			}
		},
		/*---------------------------------------------Misc Taks---------------------------------------------*/

		/*---------------------------------------------DEV Compiling and Validating Taks---------------------------------------------*/
		//Processess SASS into CSS.
		sass: {
			dist: {
				options: {
					style: 'expanded' //This method doesn't minify the CSS created.
				},
				files: [{
					src: 'dev/sass/styles.scss', //Sass source file.
					dest: 'dev/css/styles.css' //Output CSS file.
				}]
			}
		},
		//Concatenates Files on Selected Folders.
		concat: {
			//Adds a comment before and after every file to help identify them.
			options: {
				separator: '\n\n/*---------------------------------------------------------*/\n',
				banner: '/*---------------------------------------------------------*/\n'
			},
			//JS user generated files.
			main_js: {
				src: ['dev/js/components/*.js', 'dev/js/global/*.js'],
				dest: 'dev/js/main.js'
			},
			//JS framework files.
			bundle_js: {
				src: ['bower_components/jquery/dist/jquery/jquery.js', 'bower_components/bootstrap-css/js/bootstrap.min.js'],
				dest: 'dev/js/bundle.js'
			},
			//CSS framework files.
			components_css: {
				src: ['bower_components/normalize-css/normalize.css', 'bower_components/bootstrap-css/css/bootstrap.min.css'],
				dest: 'dev/css/bundle.css'
			}
		},
		//JSHint for Main JS files.
		jshint: {
			//JSHint options to validate JS files.
			options: {
				reporter: require('jshint-stylish'), //JSHint presentation override to beautity warnings.
				force: true,
				"bitwise": true, //This option prohibits the use of bitwise operators such as ^ (XOR), | (OR) and others.
				"curly": true, //This option requires you to always put curly braces around blocks in loops and conditionals.
				"eqeqeq": true, //This options prohibits the use of == and != in favor of === and !==.
				"forin": true, //This option requires all for in loops to filter object's items.
				"freeze": true, //This options prohibits overwriting prototypes of native objects such as Array, Date and so on.
				"futurehostile": true, //This option enables warnings about the use of identifiers which are defined in future versions of JavaScript.
				"latedef": true, //This option prohibits the use of a variable before it was defined.
				"noarg": true, //This option prohibits the use of arguments.caller and arguments.callee.
				"nocomma": true, //This option prohibits the use of the comma operator.
				"nonew": true, //This option prohibits the use of constructor functions for side-effects.
				"undef": true, //This option prohibits the use of explicitly undeclared variables.
				"unused": true //This option warns when you define and never use your variables.
			},
			//JS File where JSHint will be applied.
			files: ['dev/js/components/*.js', 'dev/js/global/*.js']
		},
		/*---------------------------------------------DEV Compiling and Validating Taks---------------------------------------------*/

		/*---------------------------------------------Prod Build Compiling Tasks---------------------------------------------*/
		//This tasks will minify and copy all Project files to the dist folder, this will create a cleaner version to deploy to PROD environment.

		//Minifies JS files for better performance
		uglify: {
			options: {
				mangle: false
			},
			//JS framework files --> bundle.js.
			bundle_js: {
				files: {
					'dist/js/bundle.js': ['dev/js/bundle.js']
				}
			},
			//JS user generated files files --> main.js.
			main_js: {
				files: {
					'dist/js/main.js': ['dev/js/main.js']
				}
			}
		},
		//Minifies CSS files
		cssmin: {
			options: {
				mergeIntoShorthands: false,
				roundingPrecision: -1
			},
			//CSS framework files --> bundle.css.
			bundle_css: {
				files: {
					'dist/css/bundle.css': ['dev/css/bundle.css']
				}
			},
			//CSS user generated files --> bundle.css.
			styles_css: {
				files: {
					'dist/css/styles.css': ['dev/css/styles.css']
				}
			}
		},
		//Clean the dist folder to avoid issues on production code
		clean: {
			dist: ['dist/']
		},
		//Copy minified and global files to the dist folder
		copy: {
			copy_index: {
				expand: true,
				cwd: 'dev',
				src: '*.html',
				dest: 'dist/'
			},
			copy_html: {
				expand: true,
				cwd: 'dev/html',
				src: '**',
				dest: 'dist/html/'
			},
			copy_img: {
				expand: true,
				cwd: 'dev/img',
				src: '**',
				dest: 'dist/img/'
			},
			copy_video: {
				expand: true,
				cwd: 'dev/video',
				src: '**',
				dest: 'dist/video/'
			},
			copy_bootstrap_fonts: {
				expand: true,
				cwd: 'bower_components/bootstrap-css/fonts',
				src: '**',
				dest: 'dist/fonts/'
			},
			copy_user_fonts: {
				expand: true,
				cwd: 'dev/fonts',
				src: '**',
				dest: 'dist/fonts/'
			}
		}
		/*---------------------------------------------Prod Build Compiling Tasks---------------------------------------------*/

	});

	//List of task loaded by grunt, this is required to access the installed tasks.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');

	//List of task to Run via CMD or Internal Grunt Loader
	//grunt.registerTask('Task Name for CMD', [Task 1, Task 2, Task n]);
	grunt.registerTask('default', ['concat', 'sass', 'jshint', 'connect:server_dev','watch']);
	grunt.registerTask('dev_build', ['concat', 'sass', 'jshint', 'connect:server_dev','watch']);
	grunt.registerTask('prod_build', ['clean', 'concat', 'sass', 'uglify', 'cssmin', 'copy', 'connect:server_prod', 'watch']);
};
