var Modeler = require("../Modeler.js");
var className = 'ElementCreateNetworkInterface';

var ElementCreateNetworkInterface = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateNetworkInterface: {
      type: "TypeCreateNetworkInterfaceType",
      wsdlDefinition: {
        name: "CreateNetworkInterface",
        type: "tns:CreateNetworkInterfaceType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateNetworkInterface;
Modeler.register(ElementCreateNetworkInterface, "ElementCreateNetworkInterface");
