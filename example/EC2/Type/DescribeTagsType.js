var Modeler = require("../Modeler.js");
var className = 'TypeDescribeTagsType';

var TypeDescribeTagsType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
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

module.exports = TypeDescribeTagsType;
Modeler.register(TypeDescribeTagsType, "TypeDescribeTagsType");
