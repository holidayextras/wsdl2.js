var Modeler = require("../Modeler.js");
var className = 'TypeDescribeAccountAttributesResponseType';

var TypeDescribeAccountAttributesResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    accountAttributeSet: {
      type: "TypeAccountAttributeSetType",
      wsdlDefinition: {
        name: "accountAttributeSet",
        type: "tns:AccountAttributeSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeAccountAttributesResponseType;
Modeler.register(TypeDescribeAccountAttributesResponseType, "TypeDescribeAccountAttributesResponseType");
