var Modeler = require("../Modeler.js");
var className = 'TypeDescribeAccountAttributesType';

var TypeDescribeAccountAttributesType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  accountAttributeNameSet: {
      type: "TypeAccountAttributeNameSetType",
      wsdlDefinition: {
        name: "accountAttributeNameSet",
        type: "tns:AccountAttributeNameSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    filterSet: {
      type: "TypeFilterSetType",
      wsdlDefinition: {
        name: "filterSet",
        type: "tns:FilterSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeAccountAttributesType;
Modeler.register(TypeDescribeAccountAttributesType, "TypeDescribeAccountAttributesType");
