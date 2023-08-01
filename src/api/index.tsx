import { customAxios } from "../core/axios-configuration";
import { Repositories } from "../interfaces/github/repositories.interface";
import { Users } from "../interfaces/github/users.interface";

export const getRepositories = async (query: string) => {
  return await customAxios.get<Repositories>(`/repositories?q=${query}`);
};
export const getUsers = async (query: string) => {
  return await customAxios.get<Users>(`/users?q=${query}`);
};
