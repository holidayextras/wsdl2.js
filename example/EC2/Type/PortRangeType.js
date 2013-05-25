var Modeler = require("../Modeler.js");
var className = 'TypePortRangeType';

var TypePortRangeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  from: {
      type: "number",
      wsdlDefinition: {
        name: "from",
        type: "xs:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    to: {
      type: "number",
      wsdlDefinition: {
        name: "to",
        type: "xs:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePortRangeType;
Modeler.register(TypePortRangeType, "TypePortRangeType");
