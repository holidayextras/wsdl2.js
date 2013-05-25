var Modeler = require("../Modeler.js");
var className = 'ElementBundleInstance';

var ElementBundleInstance = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  BundleInstance: {
      type: "TypeBundleInstanceType",
      wsdlDefinition: {
        name: "BundleInstance",
        type: "tns:BundleInstanceType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBundleInstance;
Modeler.register(ElementBundleInstance, "ElementBundleInstance");
