var Modeler = require("../Modeler.js");
var className = 'TypeIpPermissionSetType';

var TypeIpPermissionSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeIpPermissionType",
      wsdlDefinition: {
        name: "item",
        type: "tns:IpPermissionType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeIpPermissionSetType;
Modeler.register(TypeIpPermissionSetType, "TypeIpPermissionSetType");
