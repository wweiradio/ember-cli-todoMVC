# Tryit

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Notes 
This project is following the [Ember getting started tutorial](http://guides.emberjs.com/v1.10.0/getting-started/) but using the ember-cli to build the project. The directory organization and the naming convension are quite different when using ember-cli, comparing with the introduction in the tutorial. 
Some notes for your information:

* Open terminal using admin permission on windows
* Try alwasy restart ember server after changing Brocfiles.js. 
* Issues related to magic method can be resolved by update glob package: npm update glob
* npm install ember-cli-windows -g ; ember-cli-windows to have better performance on windows
* Refer [ember-cli document](www.ember-cli.com/) for details about the convensions
* sublime user setting to ignore some files and directories 
        Sublime Text -> Preferences -> Settings - User
        // folder_exclude_patterns and file_exclude_patterns control which files
        // are listed in folders on the side bar. These can also be set on a per-
        // project basis.
        "folder_exclude_patterns": [".svn", ".git", ".hg", "CVS", "tmp/class-*", "tmp/es_*", "tmp/jshinter*", "tmp/replace_*", "tmp/static_compiler*", "tmp/template_compiler*", "tmp/tree_merger*", "tmp/coffee_script*", "tmp/concat-tmp*", "tmp/export_tree*", "tmp/sass_compiler*"]

* if you find issue saying that "Cannot call `compile` without the template compiler loaded. Please load `ember-template-compiler.js` prior to calling `compile ember-cli`", you need to add the following line in Brocfile.js  
    app.import('bower_components/ember/ember-template-compiler.js');
then ember server    

* if you are going to use local storage adapter, use the following command to install it: 
    ember install:bower ember-localstorage-adapter
then add the following line in Brockfile.js
app.import("bower_components/ember-localstorage-adapter/localstorage_adapter.js");

    run : ember server 

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

