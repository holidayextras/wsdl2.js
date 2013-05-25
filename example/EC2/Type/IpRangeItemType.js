var Modeler = require("../Modeler.js");
var className = 'TypeIpRangeItemType';

var TypeIpRangeItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  cidrIp: {
      type: "string",
      wsdlDefinition: {
        name: "cidrIp",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeIpRangeItemType;
Modeler.register(TypeIpRangeItemType, "TypeIpRangeItemType");
