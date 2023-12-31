export const handler = async (event: any) => {
  console.log("Event: ", event);
  let responseMessage = "Hello, World!";

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: responseMessage,
    }),
  };
};
