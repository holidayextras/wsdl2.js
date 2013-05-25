var Modeler = require("../Modeler.js");
var className = 'TypeImportInstanceGroupItemType';

var TypeImportInstanceGroupItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  groupId: {
      type: "string",
      wsdlDefinition: {
        name: "groupId",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    groupName: {
      type: "string",
      wsdlDefinition: {
        name: "groupName",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeImportInstanceGroupItemType;
Modeler.register(TypeImportInstanceGroupItemType, "TypeImportInstanceGroupItemType");
