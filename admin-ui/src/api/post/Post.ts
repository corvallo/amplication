import { User } from "../user/User";

export type Post = {
  content: string | null;
  createdAt: Date;
  excerpt: string | null;
  id: string;
  title: string;
  updatedAt: Date;
  userId?: User | null;
};
