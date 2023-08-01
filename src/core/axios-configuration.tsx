import axios from "axios";

export const customAxios = axios.create({
  baseURL: "https://api.github.com/search",
  headers: {
    // "Content-type": "application/vnd.github+json",
    // Accept: "application/vnd.github+json",
    Authorization: `Bearer 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`,
    // "X-GitHub-Api-Version": "2022-11-28",

    // "Content-type": "application/vnd.github+json",
    // Accept: "application/vnd.github+json",
    // Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
    // "X-GitHub-Api-Version": "2022-11-28",
  },
});
