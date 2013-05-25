var Modeler = require("../Modeler.js");
var className = 'TypeDescribeTagsResponseType';

var TypeDescribeTagsResponseType = function(json, parentObj) {
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
    tagSet: {
      type: "TypeTagSetType",
      wsdlDefinition: {
        name: "tagSet",
        type: "tns:TagSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeTagsResponseType;
Modeler.register(TypeDescribeTagsResponseType, "TypeDescribeTagsResponseType");
