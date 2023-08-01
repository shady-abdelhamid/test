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
