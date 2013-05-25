var Modeler = require("../Modeler.js");
var className = 'TypeDeregisterImageType';

var TypeDeregisterImageType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  imageId: {
      type: "string",
      wsdlDefinition: {
        name: "imageId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDeregisterImageType;
Modeler.register(TypeDeregisterImageType, "TypeDeregisterImageType");
