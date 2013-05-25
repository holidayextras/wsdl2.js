var Modeler = require("../Modeler.js");
var className = 'TypeRegionItemType';

var TypeRegionItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  regionName: {
      type: "string",
      wsdlDefinition: {
        name: "regionName",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    regionEndpoint: {
      type: "string",
      wsdlDefinition: {
        name: "regionEndpoint",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRegionItemType;
Modeler.register(TypeRegionItemType, "TypeRegionItemType");
