Episode 02 Igniting our App

Theory

Q. What is 'NPM'?
A. NPM is a tool to instal packages for Node Package.

npm init

Q. What is Parcel/Webpack? Why do we need it?
A. Parcel/WebPack is a web application bundler used for development and production with our application with different functionalities and features. Parcel has many features.

npm install -D parcel

Q. What is 'parcel-cache'?
A. parcel-cache is for store information about your project.

Q. What is npx?
A. npx is a tool that is used for execution a package. when it build it doesn't have to re-parse.

Q. What is difference between dependencies vs devDependencies?
A. Dependencies should contain library and framework in which your app is build. DevDependencies should contain modules/package need during development.

npm install --save-dev

npm install --save

Q. What is Tree Shaking?
A. Tree Shaking is a trem within Javascript to describe the removal of dead code.

Q. What is Hot Module Replacement?
A. Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload.

Q. List down your favorite 5 superpowers of Parcel and describe any 3 of them in your own words.
A. There are 5 superpower of parcel.

    1.  HMR = Hot Module Replacement
    2.  Image Optimization
    3.  Minification
    4.  Bundling
    5. Compressing

Q. What is the difference between package.json and package-lock.json?

- package.json: It is typically tracked in version control systems like Git and serves as a shared configuration file among project contributors.
- package-lock.json: It is also tracked in version control systems to ensure consistent dependency installations across different development environments.

Q. Why should I not modify package-lock.json?
A. package-lock.json is used for contain the information about the dependencies and their version.

Q. What is node_modules ? Is it a good idea to push that on git?
A. node_modules is a folder that contain all project depends upon. When you npm install they are downloaded from the web and copied in the node_module. Do not push in github because it contains lots of files.

Q. What is the dist folder?
A. The /dist stands for distributable. The /dist folder contains the minimized version of the source code.

Q. What is browserslist?
A. The browserslist configuration controls the outputted JavaScript so that the emitted code will be compatible with the browsers specified. The production list will be used when creating a production build by running the build script, and the development list will be used when running the start script.
