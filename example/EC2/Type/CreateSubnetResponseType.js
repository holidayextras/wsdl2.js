var Modeler = require("../Modeler.js");
var className = 'TypeCreateSubnetResponseType';

var TypeCreateSubnetResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    subnet: {
      type: "TypeSubnetType",
      wsdlDefinition: {
        name: "subnet",
        type: "tns:SubnetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateSubnetResponseType;
Modeler.register(TypeCreateSubnetResponseType, "TypeCreateSubnetResponseType");
