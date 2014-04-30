grunt-test
==========
Repository used to implement and test the grunt.

Plugins used
==========
 1. grunt-contrib-uglify
 2. grunt-contrib-sass
 3. grunt-contrib-watch

Environment Setup
==========
Starting the grunt -- This command will generate a referency on devDependencies in the package.json file.

Install grunt  
1 - `npm install grunt --save-dev`  

Install plugin for minify the files.  
2 - `npm install grunt-contrib-uglify --save-dev`  

Compile the SASS file.  
3 - `npm install grunt-contrib-sass --save-dev`  

Install the watch plugin. -- This plugin will run the tasks: [ 'uglify', 'sass' ] declared on the Gruntfile.js  
4 - `npm install grunt-contrib-watch --save-dev`

Up And Running
==========
Enter on the project folder and type on the terminal the following command:
grunt default
