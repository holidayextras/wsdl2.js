var Modeler = require("../Modeler.js");
var className = 'TypeRebootInstancesInfoType';

var TypeRebootInstancesInfoType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeRebootInstancesItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:RebootInstancesItemType",
        minOccurs: 1,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: true
    }
	}, parentObj, json);
};

module.exports = TypeRebootInstancesInfoType;
Modeler.register(TypeRebootInstancesInfoType, "TypeRebootInstancesInfoType");
