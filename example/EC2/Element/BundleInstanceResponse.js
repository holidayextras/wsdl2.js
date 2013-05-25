var Modeler = require("../Modeler.js");
var className = 'ElementBundleInstanceResponse';

var ElementBundleInstanceResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  BundleInstanceResponse: {
      type: "TypeBundleInstanceResponseType",
      wsdlDefinition: {
        name: "BundleInstanceResponse",
        type: "tns:BundleInstanceResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBundleInstanceResponse;
Modeler.register(ElementBundleInstanceResponse, "ElementBundleInstanceResponse");
