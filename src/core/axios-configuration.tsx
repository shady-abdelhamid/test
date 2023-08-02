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
