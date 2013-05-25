var Modeler = require("../Modeler.js");
var className = 'TypeAvailabilityZoneItemType';

var TypeAvailabilityZoneItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  zoneName: {
      type: "string",
      wsdlDefinition: {
        name: "zoneName",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    zoneState: {
      type: "string",
      wsdlDefinition: {
        name: "zoneState",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    regionName: {
      type: "string",
      wsdlDefinition: {
        name: "regionName",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    messageSet: {
      type: "TypeAvailabilityZoneMessageSetType",
      wsdlDefinition: {
        name: "messageSet",
        type: "tns:AvailabilityZoneMessageSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAvailabilityZoneItemType;
Modeler.register(TypeAvailabilityZoneItemType, "TypeAvailabilityZoneItemType");
