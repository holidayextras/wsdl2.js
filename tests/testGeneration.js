var spawn = require('child_process').spawn;
var fs = require('fs');
var assert = require('assert');
var rimraf = require('rimraf');

var wsdl = __dirname + '/../wsdl2.js';
var serviceName = 'testService';
var servicePath = process.cwd() + '/' + serviceName;
var wsdlFile = __dirname + '/ec2.wsdl';

var _serviceFolderExists = function() {
  return fs.existsSync(servicePath);
};

var _checkServiceFolder = function() {
  var paths = {
    element: '/Element',
    type: '/Type',
    index: '/index.js',
    modeler: '/modeler.js',
    definition: '/ServiceDefinition.js'
  };

  var result = true;
  for (var path in paths) {
    if (!fs.existsSync(servicePath + path)) result = false;
  }

  return result;
};

var _deleteServiceFolder = function() {
  rimraf(servicePath, function() { });
};

var generation = spawn(wsdl, [serviceName, wsdlFile]);

generation.stdout.on('data', function(data) {
  console.log('STDOUT:', data.toString())
});

generation.stderr.on('data', function(data) {
  console.log('STDERR:', data.toString())
});

generation.on('error', function(err) {
  console.log('ERROR:', err);
});

generation.on('close', function(code) {
  if (_serviceFolderExists()) {
    _checkServiceFolder();
    _deleteServiceFolder();
  }

  assert.equal(code, 0, 'WSDL exited with a code other than 0');
  console.log('Tests passed');
});
