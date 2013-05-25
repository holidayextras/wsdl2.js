var Modeler = require("../Modeler.js");
var className = 'ElementImportInstanceResponse';

var ElementImportInstanceResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ImportInstanceResponse: {
      type: "TypeImportInstanceResponseType",
      wsdlDefinition: {
        name: "ImportInstanceResponse",
        type: "tns:ImportInstanceResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementImportInstanceResponse;
Modeler.register(ElementImportInstanceResponse, "ElementImportInstanceResponse");
