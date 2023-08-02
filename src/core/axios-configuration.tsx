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
