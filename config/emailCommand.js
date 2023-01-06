const { SendEmailCommand }  = require("@aws-sdk/client-ses")

const createSendEmailCommand = (toAddress, fromAddress) => {
    return new SendEmailCommand({
      Destination: {
        /* required */
        CcAddresses: [
          /* more items */
        ],
        ToAddresses: [
          toAddress,
          /* more To-email addresses */
        ],
      },
      Message: {
        /* required */
        Body: {
          /* required */
          Html: {
            Charset: "UTF-8",
            Data: "<a href='https://github.com/Axitvadi'>click here to visit profile</a>",
          },
        //   Text: {
        //     Charset: "UTF-8",
        //     Data: "TEXT_FORMAT_BODY",
        //   },
        },
        Subject: {
          Charset: "UTF-8",
          Data: "IT services",
        },
      },
      Source: fromAddress,
      ReplyToAddresses: [
        /* more items */
      ],
    });
  };

  module.exports = createSendEmailCommand