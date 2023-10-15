import ctxDashboard from "./graphqlMocks/_ctxDashboard";
import menuRoot from "./graphqlMocks/_menuRoot";

const auth = (req, res) => {
  if (req.url.startsWith("/api/auth/me"))
    return res.json({
      name: "Harrison Cross",
      picture:
        "https://gravatar.com/avatar/bef68c820137296a1f4e862cfd44c58c?s=480&r=pg",
    });
  console.log(`REQ AUTH (unknown): ${req.url}`);
  return res.send("OK");
};

const graphql = (req, res) => {
  const mocks = {
    "/api/graphql?menu%3Aroot": menuRoot,
    "/api/graphql?ctx%3Adashboard": ctxDashboard,
  };
  if (mocks[req.url]) return res.json(mocks[req.url]);
  console.log(`REQ GRAPHQL (unknown): ${req.url}`);
  return res.json({ error: "page not mocked" });
};

export default async function handler(req, res) {
  if (req.url.startsWith("/api/auth")) return auth(req, res);
  if (req.url.startsWith("/api/graphql")) return graphql(req, res);
  console.log(`REQ (unknown): ${req.url}`);
  return res.send("OK");
}
