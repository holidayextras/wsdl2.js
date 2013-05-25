var Modeler = require("../Modeler.js");
var className = 'TypeInstanceStatusType';

var TypeInstanceStatusType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  status: {
      type: "string",
      wsdlDefinition: {
        name: "status",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    details: {
      type: "TypeInstanceStatusDetailsSetType",
      wsdlDefinition: {
        name: "details",
        type: "tns:InstanceStatusDetailsSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInstanceStatusType;
Modeler.register(TypeInstanceStatusType, "TypeInstanceStatusType");
