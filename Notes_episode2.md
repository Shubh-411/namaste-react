# BUNDLERS: Vite, Parcel and Webpack(React by default uses webpack- bundler is #create-react-app and it uses bable)

--> Bundler - Bundler is used to minify, bundle and optimize the code. Also remove console.logs.
--> Webpack(React by default uses webpack- bundler is #create-react-app and it uses bable)

# We use PARCEL-Bundler in this course

--> Parcel is easy to setup and build

# Steps:

1. npm install -D or --save-dev parcel // for developer dependencies in our local machine
   - when we install using -D or --save-dev, So it is installed as devDependencies
   - it have
     {
     (^ -carat) : auto-upgrade minor version ex 2.8.2 --> 2.8.3 automatically upgrade
     (~ - tilde) : major upgrade ex. 2.8.2 -- 3.4.1
     }
2. package-lock.json :- is used to know what exact version we use on production. Also will exactly tell what version of library we are using. It locks the version for production. Basically, it takes the snapshot of currently using package and stores it on package-lock.json file.
   ~ (FUN-Fact: "it is working on local but not working on production", caused by package-lock.json missing file)
   ~ it is very important file.
   ~ It locks the pckg. version.
   ~ Never keep it(package-lock.json) file in gitignore, if you keep it in gitignore then it causes issues on production.
   ~ it helps to regenerate node_modules on server.
3. package.json :- is a configuration file which npm uses for managing dependencies.

4. npm install react : We will remove react-cdn links because if version changes link will crash so we need permanent solution.We are doing (npm install react) because we want react in both "development and production"

5. npm i react-dom
6. npx parcel index.html : By this cmd we'll ignite our App. (index.html is entry point & npx - is execute using npm).When we run this it creates fastest development version of our project and serves it on server.
7. import react and react-dom on App.js file.
8. WE WILL GET ERROR : # Browser scripts cannot have imports or exports(<script src="./App.js"></script>) because in our index.html file has <script></script> tag App.js and it contains import. When our browser runs App.js file, it gets import and browser doesn't understand import.
   ~ So we need to tell, this is not a normal .js file. This is "module" in js file.
   ~ We have to write, <script type=module src=./App.js></script> type is module, we need to add is attribute, so that browser can understand this is module file.
9. Need to change on import react-dom as "react-dom/client", because of upgrade in react.

10. HMR (Hot Module Replacement) :- It means that parcel will keeps the track of which file is updating and It automatically refreshes and reloads the pages with new changes.
    ~ How HMR works : Because Parcel uses "file wathcher" algorithm in HMR.
11. (.parcel-cache) folder ?? : When parcel doing all above things, watching file and HMR reloading, ##then it needed some space. For HMR, minifying, bundling, PARCEL uses all file from .parcel-cache.
12. dist folder : It basically, keeps the files minified for us.
13. npx parcel build index.html- it is command for production build.(it will give error, So remove {main: "App.js"} from pckg.json file)
14. Transitive dependencies: Dependency that uses the dependency (D->D->D hierarchical way )
15. Browser-list : is the thing which will make our code compatible for all the browsers.
16. node_module : contains library from npm pckg manager. It works on localhost.
