var Modeler = require("../Modeler.js");
var className = 'ElementCancelBundleTaskResponse';

var ElementCancelBundleTaskResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CancelBundleTaskResponse: {
      type: "TypeCancelBundleTaskResponseType",
      wsdlDefinition: {
        name: "CancelBundleTaskResponse",
        type: "tns:CancelBundleTaskResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCancelBundleTaskResponse;
Modeler.register(ElementCancelBundleTaskResponse, "ElementCancelBundleTaskResponse");
