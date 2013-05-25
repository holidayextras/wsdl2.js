var Modeler = require("../Modeler.js");
var className = 'TypeIamInstanceProfileResponseType';

var TypeIamInstanceProfileResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  arn: {
      type: "string",
      wsdlDefinition: {
        name: "arn",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    id: {
      type: "string",
      wsdlDefinition: {
        name: "id",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeIamInstanceProfileResponseType;
Modeler.register(TypeIamInstanceProfileResponseType, "TypeIamInstanceProfileResponseType");
