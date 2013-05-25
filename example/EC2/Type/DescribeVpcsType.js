var Modeler = require("../Modeler.js");
var className = 'TypeDescribeVpcsType';

var TypeDescribeVpcsType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  vpcSet: {
      type: "TypeVpcIdSetType",
      wsdlDefinition: {
        name: "vpcSet",
        type: "tns:VpcIdSetType",
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

module.exports = TypeDescribeVpcsType;
Modeler.register(TypeDescribeVpcsType, "TypeDescribeVpcsType");
