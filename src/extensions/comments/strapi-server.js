module.exports = (plugin) => {
  const originalPost = plugin.controllers.client.post;

  plugin.controllers.client.post = async (ctx) => {
    try {
      const { request, params } = ctx;

      const postId = params.relation.split(":")[3];

      // Retrieve the post associated with the comment

      const postQuery = await strapi.entityService.findOne(
        "api::share-ride.share-ride",
        postId,
        {
          populate: "*",
        }
      );

      const comment = await originalPost.call(plugin.controllers.client, ctx);

      if (comment && postQuery) {
        const { user } = postQuery;

        // Compose email message

        const emailMessage = `

    <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <h5 style="color: #333;">Hi ${user.username}</h5>
    <p style="color: #666;">A new comment has been posted on your ride share post!</p>
    <div style="background-color: #f9f9f9; border-left: 5px solid #007bff; padding: 10px; margin-bottom: 20px;">
      <p style="margin: 0;"><strong>User Comment:</strong></p>
      <p style="margin: 0;">${comment.content}</p>
    </div>
    <p style="color: #666; margin-bottom: 10px;">Click the button below to view the post:</p>
    <a  href="https://www.vacationstaxis.com/rideshare/${postId}" "style="display: inline-block; background-color: #007bff; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 5px; margin-top: 20px;">View Post</a>
    <p style="color: #666;">Regards,<br>vacationsTaxis.com</p>
    </div>

      `;

        // Send email notification
        await strapi.plugins["email"].services.email.send({
          to: `${user.email}`,
          subject: "New Comment Notification",
          html: emailMessage,
        });
      }

      return comment;
    } catch (error) {
      console.error("Error creating comment:", error);
      throw error;
    }
  };

  return plugin;
};
