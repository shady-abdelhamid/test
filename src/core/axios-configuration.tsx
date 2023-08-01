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
