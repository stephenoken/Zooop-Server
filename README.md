# Zooop-Server
Sever Side Application
<a href="http://www.zooop.xyz/">Zooop</a>
## Ubuntu VM
To connect to the VM you'll need the zooom.pem file, which is available on the #server channel on slack.

<i>This section will be updated as we continue to develop the application</i>
### VM Commands
- Authenticate zooop.pem => `chmod 400 ./zooop.pem`
- Access the VM `ssh -i "~/path to/zooop.pem" ubuntu@ec2-52-49-107-62.eu-west-1.compute.amazonaws.com`  
- Exit VM `exit`

## Run Server Locally
- Install node
- Run `npm install --global gulp-cli`
- Run `npm i` to download project dependancies
- Run `gulp` or either the shell/bash scripts.

## Deploying Server
- `cd` into working directory
- Run `npm startProd` will open on port 80
- Run `gulp` in the root of the project, this will open your default browser on port 3000

## Development Environment
- Stephen
  - Atom Text Editor
  - ITerm 2 (with zsh)
  - ESLint

## Project Structure
The structure of the project:
```
├── Procfile
├── README.md
├── app
│   ├── controllers
│   │   ├── account.js
│   │   ├── adsController.js
│   │   ├── authentication.js
│   │   ├── discover_product.js
│   │   ├── main.js
│   │   └── product.js
│   ├── helpers
│   │   ├── master_product_helper.js
│   │   └── password.js
│   ├── middleware
│   │   └── authentication.js
│   ├── models
│   │   ├── advertisment.js
│   │   ├── discover_product.js
│   │   ├── product.js
│   │   ├── schema.js
│   │   └── user.js
│   ├── routes
│   │   ├── api.js
│   │   ├── authentication.js
│   │   ├── discover_product.js
│   │   └── index.js
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
│   │   ├── favicon.ico
│   │   ├── food.jpeg
│   │   ├── hero_img.JPG
│   │   ├── user.jpg
│   │   ├── zooop_title.png
│   │   └── zooop_title.svg
│   ├── scripts
│   │   ├── build.js
│   │   └── build.js.map
│   └── stylesheets
│       └── styles.css
├── gulp_tasks
│   ├── browserify.js
│   ├── front_end_tasks.js
│   ├── server.js
│   └── tests.js
├── gulpfile.js
├── package.json
├── public
│   ├── images
│   │   ├── favicon.ico
│   │   ├── food.jpeg
│   │   ├── hero_img.JPG
│   │   ├── user.jpg
│   │   ├── zooop_title.png
│   │   └── zooop_title.svg
│   ├── scripts
│   │   └── app.js
│   └── scss
│       ├── base_styles.scss
│       ├── dashboard_page.scss
│       └── login_page.scss
├── server.js
├── tests
│   └── server
│       ├── fixtures
│       │   ├── routes_test_data.js
│       │   └── users.js
│       └── integration
│           ├── api_routes.js
│           ├── authentication.js
│           ├── discover_product_api.js
│           └── index_routes.js
├── unix_deploy.sh
└── windowDeploy.bat
```
<i>The file structure was created using `tree -I 'node_modules'`</i>

#### Gulpfile.js
- Build system for automating tasks
- Any tasks that you want to be run by default can be called here
- Any new tasks should be put into their own file and placed in the `gulp_tasks` folder.

#### Public
- Contains all the static resources that are available to the client.  

#### Dist
- All the processed resources are to be deposited here.
#### Routes
- All routes that are to be made available should be placed here

#### Tests
- Tests for both the server and client should be placed here.
- The testing libraries being uses are:
  - Mocha
  - Chai
  - Chai Http

#### Views
- Files are are dynamically rendered using Handlebars before being sent to the client.

#### Server.js
- Main hook for initialising our application

<i>Document is not set in stone and is subject to change.</i>

## Project Dependancies
- <a href="http://expressjs.com/">ExpressJS</a>
- <a href="http://gulpjs.com/">Gulp.js</a>
- <a href="https://mochajs.org/">Mocha</a>
- <a href="http://chaijs.com/">Chai</a>
- <a href="https://www.npmjs.com/">NpmJS</a>
- <a href="http://handlebarsjs.com/">HandlebarsJs (.hbs)</a>
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
