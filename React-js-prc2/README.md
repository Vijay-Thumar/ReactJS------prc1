# First React js Prc 2

### First Practical using Web-Pack
# Commands

## Step 1 - Create the Root Folder
    mkdir reactApp
    cd reactApp
    npm init -y

## Step 2 - install React and react dom
    npm install react react-dom --save
##### or
    npm install react --save
    npm install react-dom --save

## Step 3 - Install webpack
    npm install webpack webpack-dev-server webpack-cli --save
##### or
    npm install webpack --save
    npm install webpack-dev-server --save
    npm install webpack-cli --save

## Step 4 - Install babel
    npm install babel-core babel-loader babel-preset-env babel-preset-react html-webpack-plugin --save-dev
##### or 
    npm install babel-core --save-dev
    npm install babel-loader --save-dev
    npm install babel-preset-env --save-dev
    npm install babel-preset-react --save-dev
    npm install html-webpack-plugin --save-dev

## Step 5 - Create the Files
    ./reactApp/index.html
    ./reactApp/App.js
    ./reactApp/main.js
    ./reactApp/webpack.config.js
    ./reactApp/.babelrc

#### webpack.config.js --> past code
    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
       entry: './main.js',
       output: {
          path: path.join(__dirname, '/bundle'),
          filename: 'index_bundle.js'
       },
       devServer: {
        //   inline: true,
        //   port: 8001
       },
       module: {
          rules: [
             {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                    }
             }
          ]
       },
       plugins:[
          new HtmlWebpackPlugin({
             template: './index.html'
          })
       ]
    }

#### .babelrc ---> past code
        {
        "presets": [
        "@babel/preset-env", "@babel/preset-react"
        ]
        }
### vv Run This command vv
        npm i --save-dev @babel/preset-env @babel/preset-react

#### Open the package.json 
    And delete "test" "echo \"Error: no test specified\" && exit 1"
                            Past 
    "start": "webpack-dev-server --mode development --open --hot",
    "build": "webpack --mode production"

#### Index.html
        <!DOCTYPE html>
        <html lang = "en">
        <head>
            <meta charset = "UTF-8">
            <title>React App</title>
        </head>
        <body>
            <div id = "app"></div>
            <script src = 'index_bundle.js'></script>
        </body>
        </html>
#### App.js and main.js
##### App.js
        import React, { Component } from 'react';
        class App extends Component{
        render(){
            return(
                <div>
                    <h1>Hello World</h1>
                </div>
            );
        }
        }
        export default App;
        
##### main.js
        import React from 'react';
        import ReactDOM from 'react-dom';
        import App from './App.js';

        ReactDOM.render(<App />, document.getElementById('app'));
    
## Step 9 - Running the Server
    npm start
    
## Error solution for Cannot find module '@babel/core'
    npm install @babel/core --save

## Error solution for configration object
    Replace the boiler code with step 5 webpack config file and .babelrc then run command
        npm i --save-dev @babel/preset-env @babel/preset-react
