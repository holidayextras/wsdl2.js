var Modeler = require("../Modeler.js");
var className = 'TypeSubnetType';

var TypeSubnetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  subnetId: {
      type: "string",
      wsdlDefinition: {
        name: "subnetId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    state: {
      type: "string",
      wsdlDefinition: {
        name: "state",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    vpcId: {
      type: "string",
      wsdlDefinition: {
        name: "vpcId",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    cidrBlock: {
      type: "string",
      wsdlDefinition: {
        name: "cidrBlock",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    availableIpAddressCount: {
      type: "number",
      wsdlDefinition: {
        name: "availableIpAddressCount",
        type: "xs:int",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    availabilityZone: {
      type: "string",
      wsdlDefinition: {
        name: "availabilityZone",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    defaultForAz: {
      type: "boolean",
      wsdlDefinition: {
        name: "defaultForAz",
        type: "xs:boolean",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    mapPublicIpOnLaunch: {
      type: "boolean",
      wsdlDefinition: {
        name: "mapPublicIpOnLaunch",
        type: "xs:boolean",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    tagSet: {
      type: "TypeResourceTagSetType",
      wsdlDefinition: {
        name: "tagSet",
        type: "tns:ResourceTagSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSubnetType;
Modeler.register(TypeSubnetType, "TypeSubnetType");
