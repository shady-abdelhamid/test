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
