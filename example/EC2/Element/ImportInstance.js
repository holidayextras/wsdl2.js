var Modeler = require("../Modeler.js");
var className = 'ElementImportInstance';

var ElementImportInstance = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ImportInstance: {
      type: "TypeImportInstanceType",
      wsdlDefinition: {
        name: "ImportInstance",
        type: "tns:ImportInstanceType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementImportInstance;
Modeler.register(ElementImportInstance, "ElementImportInstance");
