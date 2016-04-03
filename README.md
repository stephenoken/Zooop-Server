# Zooop-Server
Sever Side Application
<a href="http://www.zooop.xyz/">Zooop</a>

## Perquisite  Technologies
- Requires an internet connection
- Install `MongoDB`
- Install `Node` and `NPM` (Node comes bundled with NPM)
- Install `GIT`
- Run ` $ npm i -g nodemon gulp-cli` to install and make `gulp` and `nodemon` globally available
- Clone the project `https://github.com/stephenoken/Zooop-Server.git`

## Run Server Locally
- Run `sudo mongod` or `mongod` to start the mongo server locally
- cd into Zooop-Server and run `npm i` to download project dependancies
- Run `gulp` or either the shell/bash scripts.

## Deploying Server
- Add a new git remote `heroku` and assign this url `https://git.heroku.com/nameless-escarpment-38075.git`
- Push the master branch of your local copy to the master of the `heroku` remote

## Development Environment
- Atom Text Editor
- Sublime Text Editor
- Unix Terminal (with zsh)
- ESLint

## Project Structure
The structure of the project:
```
.
├── Procfile
├── README.md
├── app
│   ├── controllers
│   │   ├── account.js
│   │   ├── adsController.js
│   │   ├── authentication.js
│   │   ├── client.js
│   │   ├── main.js
│   │   ├── product.js
│   │   └── retailer_product.js
│   ├── helpers
│   │   ├── catalogue.js
│   │   ├── cloud_messaging.js
│   │   ├── diggyBot.js
│   │   ├── master_product_helper.js
│   │   ├── password.js
│   │   └── req_body.js
│   ├── middleware
│   │   └── authentication.js
│   ├── models
│   │   ├── advertisment.js
│   │   ├── client.js
│   │   ├── master_product.js
│   │   ├── retailer_product.js
│   │   ├── schema.js
│   │   └── user.js
│   ├── routes
│   │   ├── advertisement.js
│   │   ├── api.js
│   │   ├── authentication.js
│   │   ├── client.js
│   │   ├── index.js
│   │   └── retailer_product.js
│   └── views
│       ├── addProduct.ejs
│       ├── dashboard.ejs
│       ├── index.ejs
│       └── login.ejs
├── config
│   ├── environments
│   │   ├── development.js
│   │   ├── production.js
│   │   └── test.js
│   ├── index.js
│   ├── models.js
│   ├── mongoose.js
│   ├── passport.js
│   ├── routes.js
│   ├── seed
│   │   ├── data
│   │   │   ├── products.js
│   │   │   └── user.js
│   │   └── seed_data.js
│   └── strategies
│       └── local.js
├── dist
│   ├── images
│   │   ├── Zooop-Logo.svg
│   │   ├── favicon.ico
│   │   └── header.jpg
│   ├── partials
│   │   └── components
│   │       ├── app.html
│   │       ├── create-ad.html
│   │       ├── home.html
│   │       ├── my-ads.html
│   │       ├── purch-advert.html
│   │       └── upload-catalogue.html
│   ├── scripts
│   │   ├── build.js
│   │   ├── build.js.map
│   │   └── vendor.js
│   └── stylesheets
│       ├── dashboard-styles.css
│       ├── index-styles.css
│       └── login-styles.css
├── gulp_tasks
│   ├── browserify.js
│   ├── public_tasks.js
│   ├── server.js
│   └── tests.js
├── gulpfile.js
├── package.json
├── public
│   ├── images
│   │   ├── Zooop-Logo.svg
│   │   ├── favicon.ico
│   │   └── header.jpg
│   ├── partials
│   │   └── components
│   │       ├── app.html
│   │       ├── create-ad.html
│   │       ├── home.html
│   │       ├── my-ads.html
│   │       ├── purch-advert.html
│   │       └── upload-catalogue.html
│   ├── scripts
│   │   ├── app.js
│   │   ├── build.js
│   │   ├── build.js.map
│   │   ├── components
│   │   │   ├── advertisement.js
│   │   │   ├── app.js
│   │   │   ├── createAd.js
│   │   │   ├── home.js
│   │   │   ├── index.js
│   │   │   ├── myAds.js
│   │   │   └── uploadCatalogue.js
│   │   └── controllers
│   │       ├── create_ad.js
│   │       ├── index.js
│   │       ├── my_ads.js
│   │       ├── ui
│   │       │   └── navbar_layout.js
│   │       └── upload_catalogue.js
│   ├── scss
│   │   ├── dashboard
│   │   │   └── base_styles.scss
│   │   ├── index
│   │   │   ├── base_styles.scss
│   │   │   └── material_styles.scss
│   │   └── login
│   │       └── base_styles.scss
│   ├── stylesheets
│   │   └── styles.css
│   └── vendor_scripts
│       ├── cbpAnimatedHeader.js
│       ├── classie.js
│       └── creative.js
├── server.js
├── tests
│   └── server
│       ├── fixtures
│       │   ├── advertisements.js
│       │   ├── clients.js
│       │   ├── routes_test_data.js
│       │   ├── sample_catalogue.txt
│       │   └── users.js
│       ├── integration
│       │   ├── advertisements.js
│       │   ├── api_routes.js
│       │   ├── authentication.js
│       │   ├── client.js
│       │   ├── discover_product_api.js
│       │   └── index_routes.js
│       └── unit_tests
│           ├── diggyBotTests.js
│           ├── helpers
│           │   ├── account.js
│           │   ├── catalogue.js
│           │   └── password.js
│           └── models
│               ├── advertisement.js
│               └── client.js
├── unix_deploy.sh
└── windowDeploy.bat
```
<i>The file structure was created using `tree -I 'node_modules'`</i>

#### Gulpfile.js
- Build system for automating tasks
- Any tasks that you want to be run by default can be called here
- Any new tasks should be put into their own file and placed in the `gulp_tasks` folder.

#### Public
- Contains all the static resources that are available to the client. Including the angular component  

#### Dist
- All the processed resources are to be deposited here.

#### App
- Contains all the code that runs on the server side

#### App/Routes
- All routes that are to be made available should be placed here

#### App/Views
- Files are are dynamically rendered using EJS before being sent to the client.

#### App/Helpers
- Contains provides the business logic

#### App/Models
- Contains the schemas for the mongoDB and the custom queries

#### Config
- Contains the configuration for the server. Depending on the environment the server will load different configurations eg. connecting to a different mongoDB

#### Tests
- Tests for both the server and client should be placed here.
- The testing libraries being uses are:
  - Mocha
  - Chai


#### Server.js
- Main hook for initialising our application

## Project Dependancies
- <a href="http://expressjs.com/">ExpressJS</a>
- <a href="http://gulpjs.com/">Gulp.js</a>
- <a href="https://mochajs.org/">Mocha</a>
- <a href="http://chaijs.com/">Chai</a>
- <a href="https://www.npmjs.com/">NpmJS</a>
- <a href="http://www.embeddedjs.com/">EJS (.ejs)</a>
- <a href="https://angularjs.org/">AngularJS (1.5.x)</a>
- <a href="https://material.angularjs.org/latest/">Angular Material</a>
- <a href="http://www.getmdl.io/">MDL</a>
- <a href="https://www.browsersync.io/">BrowserSync</a>

## BrowserSync
- This allows you to perform live reloading of the public resources and html files.

## Interesting Articles
- Testing <a href="http://mherman.org/blog/2015/09/10/testing-node-js-with-mocha-and-chai/#.VqvXA7CLSHo">Express</a>
- <a href="http://www.cyberciti.biz/tips/nohup-execute-commands-after-you-exit-from-a-shell-prompt.html">Ubuntu VM stuff</a>
- <a href="http://www.restapitutorial.com/lessons/httpmethods.html">Restful Methods</a>


### Schema Information
- Product schema is the master collection for every product
- Discover Product is schema is for the products maintained in various collections based on their origin/ethnicity

## Quirks with the build
- If you've got tabs in your browser pointing to localhost:3000, close them when your finished as they keep trying to connect to port 5001
