var Modeler = require("../Modeler.js");
var className = 'TypeIpRangeSetType';

var TypeIpRangeSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeIpRangeItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:IpRangeItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeIpRangeSetType;
Modeler.register(TypeIpRangeSetType, "TypeIpRangeSetType");
