import request from "supertest";
import { Application } from "express";
import App from "../src/config/app";
describe("Graphql", () => {
  let appServer: Application;
  beforeAll(() => {
    appServer = App;
  });

  it("[Query] Root", async (done) => {
    request(appServer)
      .post("/gql")
      .set("Accept", "application/json")
      .send({ query: "{ hello }" })
      .expect("Content-Type", /json/)
      .expect(200)
      .expect({
        data: {
          hello: "Olá Conta Simples",
        },
      })
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("[Query] me", async (done) => {
    request(appServer)
      .post("/gql")
      .set("Accept", "application/json")
      .send({ query: "{ me { username } }" })
      .expect("Content-Type", /json/)
      .expect(200)
      .expect({
        data: {
          me: {
              username: "hector"
          },
        },
      })
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
//   it("[Mutation] Login", async (done) => {
//     request(appServer)
//       .post("/gql")
//       .set("Accept", "application/json")
//       .send({ query: "{ hello }" })
//       .expect("Content-Type", /json/)
//       .expect(200)
//       .expect({
//         data: {
//           hello: "Olá Conta Simples",
//         },
//       })
//       .end((err) => {
//         if (err) return done(err);
//         done();
//       });
//   });
});