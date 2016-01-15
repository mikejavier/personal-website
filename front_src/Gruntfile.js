"use strict";

module.exports = function( grunt ) {
	// Definição dos arquivos js
	var filesJS = ['bower_components/modernizr/modernizr.js', 'bower_components/waves/src/js/waves.js','src/js/**/*'];
	// Definição dos arquivos css
	var sassconcat = ['bower_components/normalize-css/normalize.css', 'src/css/sprite/sprite.css','src/css/main_sass.css'];
	var postcssconcat = ['bower_components/normalize-css/normalize.css', 'src/css/sprite/sprite.css','src/css/main_postcss.css'];

	// Load all tasks
	require('time-grunt')(grunt);
	require('jit-grunt')(grunt,{
		cmq: 'grunt-combine-media-queries',
	});

	grunt.initConfig({
		// Watch
		watch: {		
			precss: {
				files: [ 'src/sass/**/*' ],
				tasks: [ 'sass', 'concat:sass' ]
			},

			postcss: {
				files: [ 'src/postcss/**/*.css' ],
				tasks: [ 'postcss', 'concat:postcss' ]
			},

			js: {
				files: 'src/js/**/*',
				tasks: [ 'concat:js' ]
			},

			jade: {
				files: 'views/**/*',
				tasks: [ 'jade' ]
			}
		},

		postcss: {
	      options: {
	        map: true,
	        parser: require('postcss-scss'),
	        processors: [
	        	require('precss'),
	        	require('postcss-responsive-type')(),
          		require('autoprefixer')({browsers: ['last 2 versions']}),
        		require('pixrem')({rootValue:10, html:false}),
        		require('lost')
	        ]
	      },
	      dist: {
	        src: 'src/postcss/main.css',
	        dest: 'src/css/main_postcss.css'
	      }
	    },

	    sass: {
	        options: {
	            sourceMap: true
	        },
	        dist: {
	            files: {
	                'src/css/main_sass.css': 'src/sass/main.scss'
	            }
	        }
	    },

	    jade: {
	        compile: {
	            options: {
	                client: false,
	                pretty: true
	            },
	            // Create a singles pages  
	            files: [ {
	              cwd: "views/",
	              src: "**/*.jade",
	              dest: "../",
	              expand: true,
	              ext: ".html"
	            } ]
            	/*
            	= Create a templates =
	            files: {
			      "path/to/dest.html": "path/to/templates/*.jade"
			    }
			    */
	        }
	    },

		// Concateção dos arquivos CSS e JS
		concat: {
			sass: {
				src: sassconcat,
				
				dest: '../dist/css/styles.combined.min.css'
			},

			postcss: {
				src: postcssconcat,
				
				dest: '../dist/css/styles.combined.min.css'
			},

			js: {
				src: filesJS,

				dest: '../dist/js/scripts.combined.min.js'
			}
		},

		// Concateção e minificação dos arquivos e JS
		uglify: {
			options: {
				mangle: false
			},
			
			dist: {
				files: {
					'../dist/js/scripts.combined.min.js': filesJS
				}
			}
		},

		cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: '../dist/css',
		      src: ['*.css'],
		      dest: '../dist/css',
		      ext: '.combined.min.css'
		    }]
		  }
		},

		// Otimização das imagens
		imagemin: {
		    dynamic: {
		    	files: [{
		        	expand: true,
		        	cwd: 'src/images',
		        	src: ['**/*.{png,jpg,gif}'],
		        	dest: '../dist/images'
		    	}]
		    }
		},

		cmq: {
			target:{
		      files: {
		        '../dist/css': ['../dist/css/*.css']
		      }
		    }	  
	    },

		browserSync: {
            files: {

                // Aplicando o recurso de Live Reload nos seguintes arquivos
                src : [
                	'../dist/css/styles.combined.min.css',
                	'../**/*.html',
                	'../**/*.php',
                ]

            },

            options: {

                // Integrando com a tarefa "watch"
                watchTask: true,
                proxy: "localhost:8888/devframework",


                // Sincronizando os eventos entre os dispositívos
                ghostMode: {
                	clicks: true,
                    scroll: true,
                    links: true,
                    forms: true
                }
            }
        },

		sprity: {
			options: {
			'cssPath': '../images',
			'processor': 'css',
			'orientation': 'vertical',
			'margin': 4,
			'prefix':'sprite'
			},
			sprite: {
				options: {
				  'style': '../css/sprite/sprite.css'
				},
				src: 'src/images/sprite/*',
				dest: 'src/images/sprite',
			}
	    },

        devUpdate: {
	        main: {
	            options: {
	                updateType: 'force', //just report outdated packages 
	                reportUpdated: false, //don't report up-to-date packages 
	                semver: false, //stay within semver when updating 
	                packages: {
	                    devDependencies: true, //only check for devDependencies 
	                    dependencies: false
	                },
	                packageJson: null, //use matchdep default findup to locate package.json 
	                reportOnlyPkgs: [] //use updateType action on all packages 
	            }
	        }
	    }
	});

	// registrando tarefa default
	grunt.registerTask( 'default', [ 'browserSync', 'watch' ] );
	grunt.registerTask( 'dist', [ 'uglify:dist', 'cmq', 'cssmin', 'imagemin' ] );
	grunt.registerTask( 'img', [ 'sprity', 'imagemin' ] );
	grunt.registerTask( 'update', [ 'devUpdate' ] );
};