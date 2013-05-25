var Modeler = require("../Modeler.js");
var className = 'TypeReportInstanceStatusReasonCodeSetItemType';

var TypeReportInstanceStatusReasonCodeSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  reasonCode: {
      type: "string",
      wsdlDefinition: {
        name: "reasonCode",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeReportInstanceStatusReasonCodeSetItemType;
Modeler.register(TypeReportInstanceStatusReasonCodeSetItemType, "TypeReportInstanceStatusReasonCodeSetItemType");
