module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "info@vacationstaxis.com",
        defaultReplyTo: "info@vacationstaxis.com",
      },
    },
  },
  seo: {
    enabled: true,
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  sitemap: {
    enabled: true,
    config: {
      cron: "0 0 0 * * *",
      limit: 7000,
      xsl: true,
      autoGenerate: false,
      caching: true,
      allowedFields: ["id", "uid"],
      excludedTypes: [],
    },
  },
});
