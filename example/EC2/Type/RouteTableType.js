var Modeler = require("../Modeler.js");
var className = 'TypeRouteTableType';

var TypeRouteTableType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  routeTableId: {
      type: "string",
      wsdlDefinition: {
        name: "routeTableId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    vpcId: {
      type: "string",
      wsdlDefinition: {
        name: "vpcId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    routeSet: {
      type: "TypeRouteSetType",
      wsdlDefinition: {
        name: "routeSet",
        type: "tns:RouteSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    associationSet: {
      type: "TypeRouteTableAssociationSetType",
      wsdlDefinition: {
        name: "associationSet",
        type: "tns:RouteTableAssociationSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    propagatingVgwSet: {
      type: "TypePropagatingVgwSetType",
      wsdlDefinition: {
        name: "propagatingVgwSet",
        type: "tns:PropagatingVgwSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    tagSet: {
      type: "TypeResourceTagSetType",
      wsdlDefinition: {
        name: "tagSet",
        type: "tns:ResourceTagSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRouteTableType;
Modeler.register(TypeRouteTableType, "TypeRouteTableType");
