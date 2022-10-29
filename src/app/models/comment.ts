import { UserProfile } from "./user-profile";

export interface Comment {
  author: UserProfile,
  comment: string,
  timestamp: Date
}
