var Modeler = require("../Modeler.js");
var className = 'TypeInstanceEbsBlockDeviceType';

var TypeInstanceEbsBlockDeviceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  volumeId: {
      type: "string",
      wsdlDefinition: {
        name: "volumeId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    deleteOnTermination: {
      type: "boolean",
      wsdlDefinition: {
        name: "deleteOnTermination",
        type: "xs:boolean",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInstanceEbsBlockDeviceType;
Modeler.register(TypeInstanceEbsBlockDeviceType, "TypeInstanceEbsBlockDeviceType");
