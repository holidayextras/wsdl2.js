var Modeler = require("../Modeler.js");
var className = 'TypeUnavailableResultSetType';

var TypeUnavailableResultSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeUnavailableResultType",
      wsdlDefinition: {
        name: "item",
        type: "tns:UnavailableResultType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeUnavailableResultSetType;
Modeler.register(TypeUnavailableResultSetType, "TypeUnavailableResultSetType");
