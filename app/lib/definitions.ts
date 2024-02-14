export type User = {
  username: string;
  display_name: string;
  password: string;
  access: string;
};

export type Post = {
  title: string;
  text: string;
  // author: mongoose.Schema.Types.ObjectId;
  date: Date;
  published: boolean;
};

export type Comment = {
  text: string;
  // author: mongoose.Schema.Types.ObjectId;
  date: Date;
  // post: mongoose.Schema.Types.ObjectId;
};
