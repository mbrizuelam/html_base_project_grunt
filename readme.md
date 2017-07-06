HTML Base Project
Author: Maynemer Brizuela

*Software Dependencies*

Please install this apps before using the Base Project:

- NodeJs. --> https://nodejs.org/en/
- Ruby. --> http://rubyinstaller.org/
- SASS --> gem install sass
- Git for Windows. --> https://git-for-windows.github.io/
- Brackets (optional). --> http://brackets.io/
- Grunt for Brackets (Optional Brackets Plug In). --> http://brackets.io/
- Bower --> npm install -g bower

After installing the software above, go to the root folder, open CMD and run:

*npm install*
*bower install*

This will install all the DEV and GULP dependencies on your folder based on the package.json and the bower.json configuration.

*-----------------------------------------------------------------------------------*

Or Manually download the following files:

*Grunt Dependencies*
 
- grunt --> npm install grunt --save-dev 
- grunt-contrib-concat --> npm install grunt-contrib-concat --save-dev
- grunt-contrib-connect --> npm install grunt-contrib-connect --save-dev
- grunt-sass --> npm install --save-dev grunt-sass
- grunt-contrib-watch --> npm install grunt-contrib-watch --save-dev
- grunt-contrib-jshint --> npm install grunt-contrib-jshint --save-dev
- jshint-stylish --> npm install --save-dev jshint-stylish
- grunt-contrib-uglify --> npm install grunt-contrib-uglify --save-dev
- grunt-contrib-cssmin --> npm install grunt-contrib-cssmin --save-dev
- grunt-contrib-copy --> npm install grunt-contrib-copy --save-dev
- grunt-contrib-clean --> npm install grunt-contrib-clean --save-dev

*Bower Dependencies*

Or Manually download the following files:

- bootstrap-css --> bower install bootstrap-css --save
- normalize-css --> bower install normalize-css --save
- jquery --> bower install jquery --save

*-----------------------------------------------------------------------------------*

*Folder Structure*

- + bower_components
-  -- boostrap-css  
-  -- normalize-css
-  -- jquery  
- + node_modules
  -- (grunt files)  
- + dev
-   -- css  
-  -- fonts  
-  -- html  
-  -- img  
-  -- js  
-  -- sass  
-  -- video  
-  -- index.html  
- + dist
-  -- (Automaticaly generated files and folders based on DEV)  
- + bower.json (required)
- + gruntfiles.js (required)
- + package.json (required)
- + readme.md

*-----------------------------------------------------------------------------------*

*Files Usage*

*CSS*

For user generated CSS files please use the Sass Folder.

- Partials --> Use this folder to create the _partials.scss files (examples: _vars.scss, _media.scss and any other files you need to create).
- Components --> Use this folder to crete the scss file for any new component needed.
- styles.scss --> Use this file to import the partials and components scss files and also to host global CSS styles.

********Do not modify any file under the CSS folder, it will be replaced by grunt.********

*JS*

For user generated JS files please use the Components and Global folders.

- Components --> Use this js folder to add any js individual component code.
- Global --> Use this folder to add the main js code of your project.

********Do not modify the bundle.js and the main.js files, they will be replaced by grunt.********

*Dist Folder*

Use this folder only for Production Deployment.

********Do not modify any files or folders in here, they will get deleted and  replaced by grunt.********

*-----------------------------------------------------------------------------------*

*Grunt Commands*

On CMD or in Grunt for Brackets use the following:

*grunt dev_build*

Runs: 

- concat --> Concatenates JS and CSS files.
- sass --> Processes Sass Files.
- jshint --> Validates JS files.
- connect:server_dev --> Creates a local server https://localhost/3000
- watch --> Watches for changes on DEV and reloads server.

*grunt prod_build*

Runs: 

- clean --> Cleans the dist folder.
- concat --> Concatenates JS and CSS files.
- sass --> Processes Sass files.
- uglify --> Minifies JS files.
- cssmin --> Minifies CSS files.
- connect:server_prod --> Creates a local server https://localhost/3001
- watch --> Watches for changes and reloads server.