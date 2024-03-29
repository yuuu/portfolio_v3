export const schema = {
  models: {
    App: {
      name: "App",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        link: {
          name: "link",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        image: {
          name: "image",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        title: {
          name: "title",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        category: {
          name: "category",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        description: {
          name: "description",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        order: {
          name: "order",
          isArray: false,
          type: "Int",
          isRequired: true,
          attributes: [],
        },
        type: {
          name: "type",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "Apps",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "key",
          properties: {
            fields: ["type", "order"],
          },
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["read"],
                provider: "iam",
              },
            ],
          },
        },
      ],
    },
    Article: {
      name: "Article",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        link: {
          name: "link",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        imageUrl: {
          name: "imageUrl",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        title: {
          name: "title",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        body: {
          name: "body",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        publishedAt: {
          name: "publishedAt",
          isArray: false,
          type: "AWSTimestamp",
          isRequired: true,
          attributes: [],
        },
        type: {
          name: "type",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "Articles",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "key",
          properties: {
            fields: ["type", "publishedAt"],
          },
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["read"],
                provider: "iam",
              },
            ],
          },
        },
      ],
    },
    Book: {
      name: "Book",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        link: {
          name: "link",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        image: {
          name: "image",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        title: {
          name: "title",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        description: {
          name: "description",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        order: {
          name: "order",
          isArray: false,
          type: "Int",
          isRequired: true,
          attributes: [],
        },
        type: {
          name: "type",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "Books",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "key",
          properties: {
            fields: ["type", "order"],
          },
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["read"],
                provider: "iam",
              },
            ],
          },
        },
      ],
    },
    Profile: {
      name: "Profile",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        introduction: {
          name: "introduction",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        residence: {
          name: "residence",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        birthplace: {
          name: "birthplace",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        birthday: {
          name: "birthday",
          isArray: false,
          type: "AWSTimestamp",
          isRequired: true,
          attributes: [],
        },
        hobby: {
          name: "hobby",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "Profiles",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["read"],
                provider: "iam",
              },
            ],
          },
        },
      ],
    },
    Skill: {
      name: "Skill",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        image: {
          name: "image",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        title: {
          name: "title",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        category: {
          name: "category",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        order: {
          name: "order",
          isArray: false,
          type: "Int",
          isRequired: true,
          attributes: [],
        },
        type: {
          name: "type",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "Skills",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "key",
          properties: {
            fields: ["type", "order"],
          },
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["read"],
                provider: "iam",
              },
            ],
          },
        },
      ],
    },
    Slide: {
      name: "Slide",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        link: {
          name: "link",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        imageUrl: {
          name: "imageUrl",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        title: {
          name: "title",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        body: {
          name: "body",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        publishedAt: {
          name: "publishedAt",
          isArray: false,
          type: "AWSTimestamp",
          isRequired: true,
          attributes: [],
        },
        type: {
          name: "type",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "Slides",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "key",
          properties: {
            fields: ["type", "publishedAt"],
          },
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["read"],
                provider: "iam",
              },
            ],
          },
        },
      ],
    },
  },
  enums: {},
  nonModels: {},
  codegenVersion: "3.4.3",
  version: "6480769dcc7745582fde3f85d1df14a6",
};
