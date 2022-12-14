# 1. Set Up Project

    * - create github issues
    * - create homepage file
        - public/styleshttes/style.css
    * - server.js
        - const path = require('path');
        - app.use(express.static(path.join(__dirname, 'public')));

# 2. Set Up Template Engine

    * - set up handlebars template engine
        - npm install express-handlebars
        - add some codes for handlebars
            - const exphbs = require('express-handlebars');
            - const hbs = exphbs.create({});

            - app.engine('handlebars', hbs.engine);
            - app.set('view engine', 'handlebars');
    * - create a file main.handlebars under folder views/layouts (this is for html)
    * - create a file homepage.handlebars under folder views
    //file/folder structure MUST be set up this way for Handlebars.js to work correctly
    // MVC is a popular software-design pattern that organizes app into the three following separate concerns:
        * Models: the core data of your app
            - Models via the Sequelize ORM
        * Views: the UI components, such as your HTML layouts
            - Views, represented by Handlebar templates
        * Controllers: the link between your models and views
            - Express.js routes(controllers) take requests, communicate with the Models, and respond with a View

## Installations

    - npm init (follow instructions)
    - npm i inquirer@8.2.4 (if needed)
    - npm install jest –-save-dev
    - npm install -g npm (both dependencies)
    - npm install express –dev (node_modules)
    - npm i express
    - npm install express mysql2
    - npm install -g nodemon (either 1/2)
    - npm install --save-dev nodemon (either 2/2)
    - npm install --save sequelize
    - npm install --save mysql2
    - npm install --save mysql3
    - npm install bcrypt
    - npm install dotenv --save
    - npm install express-handlebars
    - mysql -u root -p (password)
    - mysql> source db/schema.sql
    - terminal: npm run seeds (index.js)
    - node server.js
    -hello

## for heroku deploy

    - sequelize init:config
    - npm install express mysql2
    - npm install jest --save-dev
    - heroku addons:create jawsdb
    - heroku config:get JAWSDB_URL
    - heroku restart
    - git add .
    - git commit -m "update readme"
    - git push
    - git push heroku main
    - heroku open

* open mongodb atlas acc
    - create new project
    - create new app at heroku
        - connect to Github under deploy
        - use heroku cli under deploy
        - click reveal config vars under settings
        - KEY: MONGODB_URI, VALUE: add from mongodb atlas
        - KEY: JAWSDB_URL, VALUE: mysql://etc... (it will be added after jawsdb installation)
