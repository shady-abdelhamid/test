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
