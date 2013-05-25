var Modeler = require("../Modeler.js");
var className = 'TypeReportInstanceStatusType';

var TypeReportInstanceStatusType = function(json, parentObj) {
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
    status: {
      type: "string",
      wsdlDefinition: {
        name: "status",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    startTime: {
      type: "date",
      wsdlDefinition: {
        name: "startTime",
        type: "xs:dateTime",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    endTime: {
      type: "date",
      wsdlDefinition: {
        name: "endTime",
        type: "xs:dateTime",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    reasonCodesSet: {
      type: "TypeReportInstanceStatusReasonCodesSetType",
      wsdlDefinition: {
        name: "reasonCodesSet",
        type: "tns:ReportInstanceStatusReasonCodesSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    description: {
      type: "string",
      wsdlDefinition: {
        name: "description",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeReportInstanceStatusType;
Modeler.register(TypeReportInstanceStatusType, "TypeReportInstanceStatusType");
