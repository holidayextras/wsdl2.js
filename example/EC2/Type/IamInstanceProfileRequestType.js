var Modeler = require("../Modeler.js");
var className = 'TypeIamInstanceProfileRequestType';

var TypeIamInstanceProfileRequestType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  arn: {
      type: "string",
      wsdlDefinition: {
        name: "arn",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    name: {
      type: "string",
      wsdlDefinition: {
        name: "name",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeIamInstanceProfileRequestType;
Modeler.register(TypeIamInstanceProfileRequestType, "TypeIamInstanceProfileRequestType");
