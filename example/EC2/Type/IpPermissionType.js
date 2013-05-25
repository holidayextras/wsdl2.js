var Modeler = require("../Modeler.js");
var className = 'TypeIpPermissionType';

var TypeIpPermissionType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ipProtocol: {
      type: "string",
      wsdlDefinition: {
        name: "ipProtocol",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    fromPort: {
      type: "number",
      wsdlDefinition: {
        name: "fromPort",
        type: "xs:int",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    toPort: {
      type: "number",
      wsdlDefinition: {
        name: "toPort",
        type: "xs:int",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    groups: {
      type: "TypeUserIdGroupPairSetType",
      wsdlDefinition: {
        name: "groups",
        type: "tns:UserIdGroupPairSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ipRanges: {
      type: "TypeIpRangeSetType",
      wsdlDefinition: {
        name: "ipRanges",
        type: "tns:IpRangeSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeIpPermissionType;
Modeler.register(TypeIpPermissionType, "TypeIpPermissionType");
