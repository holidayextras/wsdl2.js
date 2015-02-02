var spawn = require('child_process').spawn;
var fs = require('fs');
var assert = require('assert');
var rimraf = require('rimraf');

var wsdl = __dirname + '/../wsdl2.js';
var serviceName = 'testService';
var servicePath = process.cwd() + '/' + serviceName;
var serviceStructurePaths = {
  element: '/Element/',
  mocks: '/Mocks/',
  type: '/Type/',
  index: '/index.js',
  modeler: '/Modeler.js',
  definition: '/ServiceDefinition.js'
};
var wsdlFile = __dirname + '/ec2.wsdl';

var tests = {
  'Check service generated properly': function() {
    if (fs.existsSync(servicePath)) {
      var result = true;
      for (var path in serviceStructurePaths) {
        if (fs.existsSync(servicePath + serviceStructurePaths[path]) == false) result = false;
      }
    }
    assert.ok(result, 'Service did not generate properly');
  },
  'Check service can be required': function() {
    assert.doesNotThrow(function() {
      var service = require(servicePath);
    });
  }
};


var generation = spawn(wsdl, [serviceName, wsdlFile]);

generation.on('close', function(code) {
  for (var test in tests) {
    console.log('RUNNING:', test);
    tests[test]();
  }
  if (fs.existsSync(servicePath)) rimraf.sync(servicePath);
  assert.equal(code, 0, 'WSDL exited with a code other than 0');
});
