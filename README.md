# Object-oriented-Programming-in-Javascript
Object-oriented Programming in Javascript

#Install Live Server
1- Install Live Server from extensions
2- Install NodeJS
3- Create folder mkdir es6-tooling
4- Inicialize npm init --yes
5- Install Babel: npm i babel-cli@6.26.0 babel-core@6.26.0 babel-present-env@1.6.1 --save-dev
6- Install Webpack: npm i -g webpack-cli@2.0.14
7- Run : webpack-cli init on terminal
Will your application have multiple bundles? No
 Which module will be the first to enter the application? [example: './src/index'] ./src/index
 Which folder will your generated bundles be in? [default: dist]:
 Are you going to use this in production? No
 Will you be using ES2015? Yes
 Will you use one of the below CSS solutions? No
 If you want to bundle your CSS files, what will you name the bundle? (press enter to skip)
 Name your 'webpack.[name].js?' [default: 'config']:
 8- Create json file and add: "build":"webpack"
 9- npm run build
 10- "build":"webpack -w" (watch files)
