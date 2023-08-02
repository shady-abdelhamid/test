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
