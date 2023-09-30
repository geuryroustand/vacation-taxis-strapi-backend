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
  // ...
});
