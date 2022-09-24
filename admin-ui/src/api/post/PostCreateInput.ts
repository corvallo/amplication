import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  content?: string | null;
  excerpt?: string | null;
  title: string;
  userId?: UserWhereUniqueInput | null;
};
