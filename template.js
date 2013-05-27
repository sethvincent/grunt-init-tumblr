'use strict';

exports.description = 'Create a basic tumblr theme.';

exports.notes = 'tumblr is fun. make a theme!';

exports.after = 'Now you need to install project and dev dependencies by running:' +
  '\n\n' +
  'npm install && bower install';

exports.warnOn = '*';

exports.template = function(grunt, init, done){

  init.process({ type: 'html'}, [
    init.prompt('name'),
    init.prompt('description'),
    init.prompt('repository'),
    init.prompt('homepage'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url'),
    init.prompt('licenses', 'MIT'),
    init.prompt('version', '0.1.0'),
    init.prompt('node_version', '>= 0.10.0'),
  ], function(err, props){
    props.keywords = [];
    props.devDependencies = {
      'grunt': '~0.4.0',
      'grunt-contrib-qunit': '~0.2.0',
      'grunt-contrib-jshint': '~0.1.1',
      'grunt-contrib-connect': '~0.1.2',
      'grunt-contrib-livereload': '~0.1.2',
      'grunt-regarde': '~0.1.1',
      'grunt-contrib-cssmin': '~0.6.1',
      'grunt-contrib-uglify': '~0.2.1',
      'grunt-contrib-clean': '~0.4.1'
    };

    var files = init.filesToCopy(props);

    init.addLicenseFiles(files, props.licenses);

    init.copyAndProcess(files, props);

    init.writePackageJSON('package.json', props);

    done();
  });
};
