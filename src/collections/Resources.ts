import { CollectionConfig } from "payload/types";

const Resources: CollectionConfig = {
  slug: "resources",
  fields: [
    {
      name: "hiddenField",
      type: "text",
      hidden: true,
    },
  ],
  versions: {
    drafts: true,
  },
  access: {
    read: ({ req: { user } }) => {
      return {
        hiddenField: {
          equals: "value",
        },
      };
    },
  },
};

export default Resources;
