module.exports = {
  id: "ResourceType",
  type: 'object',
  prefixes: {
    "": "http://schema.org/",
    "ovn": "http://vocab.ovn.is/",
  },
  context: "ovn:ResourceType",
  description: "A definition of economic resource behavior.",
  properties: {
    name: {
      context: "name",
      description: "The primary name of the resource type.",
      type: "string",
    },
    description: {
      context: "description",
      description: "A short description of the resource type.",
      type: "string",
    },
    image: {
      context: "image",
      description: "An image of the resource type.",
      type: "uri",
    },
    parent: {
      context: "ovn:parent",
      description: "A reference to another economic resource type.",
      $ref: "ResourceType",
    },
    unit: {
      context: "ovn:unit",
      description: "If this resource type has different units of use and inventory, this is the unit of inventory.",
      $ref: "Unit",
    },
    unitOfUse: {
      context: "ovn:unitOfUse",
      description: "If this resource type has different units of use and inventory, this is the unit of use.",
      $ref: "Unit",
    },
    valuePerUnit: {
      context: "ovn:valuePerUnit",
      description: ""
    },
    valuePerUnitOfUse: {

    },
    substitutable: {
      context: "ovn:substitutable",
      description: "Can any resource of this type be substituted for any other resource of this type?",
      type: "boolean",
    },
    agent: {
      context: "ovn:resourceAgent",
      description: "An optional agent associated with this resource type.",
      $ref: "Agent",
    },

  },
};
module.exports.dependencies = {
  Unit: require('./Unit'),
};
