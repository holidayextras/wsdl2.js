var Modeler = require("../Modeler.js");
var className = 'TypeDescribeInstanceStatusType';

var TypeDescribeInstanceStatusType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  instancesSet: {
      type: "TypeInstanceIdSetType",
      wsdlDefinition: {
        name: "instancesSet",
        type: "tns:InstanceIdSetType"
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
    },
    nextToken: {
      type: "string",
      wsdlDefinition: {
        name: "nextToken",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    maxResults: {
      type: "number",
      wsdlDefinition: {
        name: "maxResults",
        type: "xs:int",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    includeAllInstances: {
      type: "boolean",
      wsdlDefinition: {
        name: "includeAllInstances",
        type: "xs:boolean",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeInstanceStatusType;
Modeler.register(TypeDescribeInstanceStatusType, "TypeDescribeInstanceStatusType");
