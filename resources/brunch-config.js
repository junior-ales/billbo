module.exports = {
  config: {
    files: {
      javascripts: {
        joinTo: {
          'scripts/app.js': /^app\//,
          'scripts/libs.js': /^vendor\/scripts\//,
          'scripts/libs-header.js': /^vendor\/headerScripts\//
        },
        order: {
          before: [
            'vendor/scripts/react.js',
            'vendor/scripts/react-dom.js',
            'vendor/scripts/jquery.js',
            'vendor/scripts/fastclick.js',
            'vendor/scripts/foundation.js'
          ]
        }
      },
      stylesheets: {
        joinTo: {
          'styles/app.css': /^app\//,
          'styles/libs.css': /^vendor\/styles\//
        },
        order: {
          before: [ 'vendor/styles/normalize.css' ]
        }
      },
      templates: {
        joinTo: 'scripts/app.js'
      }
    }
  }
};
