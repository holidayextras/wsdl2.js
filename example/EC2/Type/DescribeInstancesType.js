var Modeler = require("../Modeler.js");
var className = 'TypeDescribeInstancesType';

var TypeDescribeInstancesType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  instancesSet: {
      type: "TypeDescribeInstancesInfoType",
      wsdlDefinition: {
        name: "instancesSet",
        type: "tns:DescribeInstancesInfoType"
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

module.exports = TypeDescribeInstancesType;
Modeler.register(TypeDescribeInstancesType, "TypeDescribeInstancesType");
