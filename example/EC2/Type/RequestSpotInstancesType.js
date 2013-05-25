var Modeler = require("../Modeler.js");
var className = 'TypeRequestSpotInstancesType';

var TypeRequestSpotInstancesType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  spotPrice: {
      type: "string",
      wsdlDefinition: {
        name: "spotPrice",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    instanceCount: {
      type: "Typeinteger",
      wsdlDefinition: {
        name: "instanceCount",
        type: "xs:integer",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    type: {
      type: "string",
      wsdlDefinition: {
        name: "type",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    validFrom: {
      type: "date",
      wsdlDefinition: {
        name: "validFrom",
        type: "xs:dateTime",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    validUntil: {
      type: "date",
      wsdlDefinition: {
        name: "validUntil",
        type: "xs:dateTime",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    launchGroup: {
      type: "string",
      wsdlDefinition: {
        name: "launchGroup",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    availabilityZoneGroup: {
      type: "string",
      wsdlDefinition: {
        name: "availabilityZoneGroup",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    launchSpecification: {
      type: "TypeLaunchSpecificationRequestType",
      wsdlDefinition: {
        name: "launchSpecification",
        type: "tns:LaunchSpecificationRequestType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRequestSpotInstancesType;
Modeler.register(TypeRequestSpotInstancesType, "TypeRequestSpotInstancesType");
