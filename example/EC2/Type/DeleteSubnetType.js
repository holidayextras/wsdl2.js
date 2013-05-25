var Modeler = require("../Modeler.js");
var className = 'TypeDeleteSubnetType';

var TypeDeleteSubnetType = function(json, parentObj) {
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
    }
	}, parentObj, json);
};

module.exports = TypeDeleteSubnetType;
Modeler.register(TypeDeleteSubnetType, "TypeDeleteSubnetType");
