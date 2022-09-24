import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  content?: string | null;
  excerpt?: string | null;
  title?: string;
  userId?: UserWhereUniqueInput | null;
};
