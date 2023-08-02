import axios from "axios";

export const customAxios = axios.create({
  baseURL: "https://api.github.com/search",
  headers: {
    "Content-type": "application/vnd.github+json",
    Accept: "application/vnd.github+json",
    Authorization: `Bearer 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`,
    "X-GitHub-Api-Version": "2022-11-28",
  },
});
