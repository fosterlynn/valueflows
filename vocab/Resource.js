module.exports = {
  id: "Resource",
  type: 'object',
  prefixes: {
    "": "http://schema.org/",
    "ovn": "http://vocab.ovn.is/",
  },
  context: "ovn:Resource",
  description: "Something of value to some economic Agents.",
  properties: {
    resourceType: {
      context: "resourceType",
      description: "The type of economic resource.",
      $ref: "ResourceType",
    },
    name: {
      context: "name",
      description: "The primary name of the resource.",
      type: "string",
    },
    description: {
      context: "description",
      description: "A short description of the resource.",
      type: "string",
    },
    image: {
      context: "image",
      description: "An image of the resource.",
      type: "uri",
    },
    location: {
      context: "ovn:location",
      description: "The location of the resource.",
      $ref: "Location",
    },
    quantity: {
      context: "ovn:quantity",
      description: "Unit and magnitude of resource.",
      $ref: "Quantity",
    },
    quality: {
      context: "ovn:quality",
      description: "Quality of resource.",
      type: "number",
    },
  },
};
module.exports.dependencies = {
  ResourceType: require('./ResourceType'),
  Quantity: require('./Quantity'),
  Location: require('./Location'),
};
