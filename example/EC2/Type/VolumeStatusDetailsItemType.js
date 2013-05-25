var Modeler = require("../Modeler.js");
var className = 'TypeVolumeStatusDetailsItemType';

var TypeVolumeStatusDetailsItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  name: {
      type: "string",
      wsdlDefinition: {
        name: "name",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    status: {
      type: "string",
      wsdlDefinition: {
        name: "status",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeVolumeStatusDetailsItemType;
Modeler.register(TypeVolumeStatusDetailsItemType, "TypeVolumeStatusDetailsItemType");
