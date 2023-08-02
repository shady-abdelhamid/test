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
