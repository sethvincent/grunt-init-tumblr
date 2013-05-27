# grunt-init-html

> Create a simple html/css/js project that uses grunt and bower.

### Template overview:
 - app.js (empty)
 - style.css (basic styles included, including media queries that make the .container proper sizes for different devices)
 - index.html (links to bower dependencies, basic html structure)
 - Gruntfile.js (watches *.js, *.css, and *.html files and automatically rebuilds dev server on file save)
 - component.json (default browser dependencies: normalize.css, html5shiv, jquery)

## Installation

###If you haven't already done so, install grunt-init.  
```
npm install grunt-init -g
```

Once grunt-init is installed, place this template in your ~/.grunt-init/ directory. 

###Use git to clone this template into that directory, as follows:

```
git clone git@github.com:sethvincent/grunt-init-html.git ~/.grunt-init/html
```

## Usage

At the command-line, cd into an empty directory, run this command and follow the prompts.

```
grunt-init html
```

_Note that this template will generate files in the current directory, so be sure to change to a new directory first if you don't want to overwrite existing files._