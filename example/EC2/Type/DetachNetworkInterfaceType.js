var Modeler = require("../Modeler.js");
var className = 'TypeDetachNetworkInterfaceType';

var TypeDetachNetworkInterfaceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  attachmentId: {
      type: "string",
      wsdlDefinition: {
        name: "attachmentId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    force: {
      type: "boolean",
      wsdlDefinition: {
        name: "force",
        type: "xs:boolean",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDetachNetworkInterfaceType;
Modeler.register(TypeDetachNetworkInterfaceType, "TypeDetachNetworkInterfaceType");
