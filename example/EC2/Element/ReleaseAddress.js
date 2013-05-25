var Modeler = require("../Modeler.js");
var className = 'ElementReleaseAddress';

var ElementReleaseAddress = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ReleaseAddress: {
      type: "TypeReleaseAddressType",
      wsdlDefinition: {
        name: "ReleaseAddress",
        type: "tns:ReleaseAddressType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementReleaseAddress;
Modeler.register(ElementReleaseAddress, "ElementReleaseAddress");
