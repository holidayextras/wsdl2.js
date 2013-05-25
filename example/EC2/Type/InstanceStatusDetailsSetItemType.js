var Modeler = require("../Modeler.js");
var className = 'TypeInstanceStatusDetailsSetItemType';

var TypeInstanceStatusDetailsSetItemType = function(json, parentObj) {
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
    },
    impairedSince: {
      type: "date",
      wsdlDefinition: {
        name: "impairedSince",
        type: "xs:dateTime",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInstanceStatusDetailsSetItemType;
Modeler.register(TypeInstanceStatusDetailsSetItemType, "TypeInstanceStatusDetailsSetItemType");
