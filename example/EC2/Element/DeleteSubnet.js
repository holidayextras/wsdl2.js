var Modeler = require("../Modeler.js");
var className = 'ElementDeleteSubnet';

var ElementDeleteSubnet = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteSubnet: {
      type: "TypeDeleteSubnetType",
      wsdlDefinition: {
        name: "DeleteSubnet",
        type: "tns:DeleteSubnetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteSubnet;
Modeler.register(ElementDeleteSubnet, "ElementDeleteSubnet");
