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
