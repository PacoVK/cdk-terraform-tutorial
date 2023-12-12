import { handler } from "../../functions/hello-world";

describe("helloWorld", () => {
  it("should return hello world", async () => {
    const response = await handler({
      type: "sample",
    });
    expect(response.statusCode).toEqual(200);
    expect(JSON.parse(response.body).message).toEqual("Hello, World!");
    expect(response.headers["Content-Type"]).toEqual("application/json");
  });
});
