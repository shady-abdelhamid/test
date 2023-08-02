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
