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

## Deploying Server
- `cd` into working directory
- Run `npm start-dep` will open on port 80
- Run `gulp` in the root of the project, this will open your default browser on port 3000

## Development Environment
- Stephen
  - Atom Text Editor
  - ITerm 2 (with zsh)
  - ESLint

## Global Dependancies
- `npm install --global gulp-cli`

## Project Structure
The structure of the project:
```

├── README.md
├── front_end_src
│   ├── images
│   │   ├── food.jpeg
│   │   ├── hero_img.JPG
│   │   └── zooop_title.svg
│   ├── javascripts
│   │   └── dependancies
│   └── scss
│       └── base_styles.scss
├── gulp_tasks
│   ├── images.js
│   ├── scss.js
│   └── tests.js
├── gulpfile.js
├── package.json
├── public
│   ├── images
│   │   ├── food.jpeg
│   │   ├── hero_img.JPG
│   │   └── zooop_title.svg
│   ├── javascripts
│   └── stylesheets
│       └── styles.css
├── routes
│   └── index.js
├── server.js
├── tests
│   └── server
│       └── index_tests.js
└── views
    └── index.hbs
```
<i>The file structure was created using `tree -I 'node_modules'`</i>

#### Gulpfile.js
- Build system for automating tasks
- Any tasks that you want to be run by default can be called here
- Any new tasks should be put into their own file and placed in the `gulp_tasks` folder.

#### Front End Src
- Contains all the static resources that are available to the client.  

#### Public
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
