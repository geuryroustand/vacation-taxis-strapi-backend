"use strict";
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::request-shared-ride.request-shared-ride"
);

// module.exports = createCoreController(
//   "api::request-shared-ride.request-shared-ride",
//   ({ strapi }) => ({
//     async create(ctx) {
//       try {
//         const emailOptions = {
//           from: "your-email@example.com",
//           subject: "Subject of the Email",
//           text: "This is the content of the email",
//         };
//         const { email } = ctx.state.user;

//         const result = await strapi.services[
//           "api::request-shared-ride.request-shared-ride"
//         ].create(ctx.request.body);

//         await strapi.plugins["email"].services.email.send({
//           to: `${email}`,
//           from: "info@vacationstaxis.com",
//           replyTo: "info@vacationstaxis.com",
//           subject: "The Strapi Email plugin worked successfully",
//           text: "Hello world!",
//           html: "Hello world!",
//         });

//         return result;
//       } catch (error) {
//         // Handle errors appropriately
//         console.error("Error:", error.toString());
//         throw error; // or return an error response
//       }
//     },
//   })
// );
