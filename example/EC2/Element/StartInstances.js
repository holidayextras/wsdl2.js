var Modeler = require("../Modeler.js");
var className = 'ElementStartInstances';

var ElementStartInstances = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  StartInstances: {
      type: "TypeStartInstancesType",
      wsdlDefinition: {
        name: "StartInstances",
        type: "tns:StartInstancesType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementStartInstances;
Modeler.register(ElementStartInstances, "ElementStartInstances");
