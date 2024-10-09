import { GraphQLClient } from "graphql-request";

const ANILIST_API_URL = "https://graphql.anilist.co";

const anilistClient = new GraphQLClient(ANILIST_API_URL, {
  headers: {
    "Content-Type": "application/json",
  },
});

export default anilistClient;
