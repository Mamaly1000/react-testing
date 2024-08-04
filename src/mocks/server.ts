import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users", () => {
    return HttpResponse.json(
      [
        { name: "john", id: "1" },
        { name: "sam", id: "2" },
      ],
      {
        status: 200,
      }
    );
  }),
];

export const server = setupServer(...handlers);
server.events.on("request:start", ({ request }) => {
  console.log("MSW intercepted:", request.method, request.url);
});
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
