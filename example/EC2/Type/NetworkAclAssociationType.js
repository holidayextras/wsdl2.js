var Modeler = require("../Modeler.js");
var className = 'TypeNetworkAclAssociationType';

var TypeNetworkAclAssociationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  networkAclAssociationId: {
      type: "string",
      wsdlDefinition: {
        name: "networkAclAssociationId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    networkAclId: {
      type: "string",
      wsdlDefinition: {
        name: "networkAclId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    subnetId: {
      type: "string",
      wsdlDefinition: {
        name: "subnetId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeNetworkAclAssociationType;
Modeler.register(TypeNetworkAclAssociationType, "TypeNetworkAclAssociationType");
