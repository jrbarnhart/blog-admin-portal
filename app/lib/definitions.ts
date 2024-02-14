export type UserLogin = {
  username: string;
  password: string;
};

export type Post = {
  title: string;
  text: string;
  author: string;
  date: Date;
  published: boolean;
};

export type Comment = {
  text: string;
  author: string;
  date: Date;
  post: string;
};
