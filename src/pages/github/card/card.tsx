import { FC } from "react";
import { RepositoryCard } from "./repository-card";
import { UserCard } from "./user-card";
import { RepositoryItem } from "../../../interfaces/github/repositories.interface";
import { UserItem } from "../../../interfaces/github/users.interface";

export type CardProps = {
  type: "users" | "repositories";
  item: UserItem | RepositoryItem;
};

export const Card: FC<CardProps> = ({ type, item }) => {
  const cards = {
    users: <UserCard item={item as UserItem} />,
    repositories: <RepositoryCard item={item as RepositoryItem} />,
  };

  return cards[type];
};
