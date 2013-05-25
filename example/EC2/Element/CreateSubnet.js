var Modeler = require("../Modeler.js");
var className = 'ElementCreateSubnet';

var ElementCreateSubnet = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateSubnet: {
      type: "TypeCreateSubnetType",
      wsdlDefinition: {
        name: "CreateSubnet",
        type: "tns:CreateSubnetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateSubnet;
Modeler.register(ElementCreateSubnet, "ElementCreateSubnet");
