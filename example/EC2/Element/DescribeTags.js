var Modeler = require("../Modeler.js");
var className = 'ElementDescribeTags';

var ElementDescribeTags = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeTags: {
      type: "TypeDescribeTagsType",
      wsdlDefinition: {
        name: "DescribeTags",
        type: "tns:DescribeTagsType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeTags;
Modeler.register(ElementDescribeTags, "ElementDescribeTags");
