export interface IFeedPost {
  id?: string;
  likes: number;
  video?: string;
  userName: string;
  images?: string[];
  createdAt: string;
  userImage: string;
  comments: IComments[];
  postDescription: string;
  numberOfComments: number;
}

export type IComments = Pick<IFeedPost, 'id'> & {
  user: string;
  comment: string;
  avatar?: string;
};

export type IPost = Pick<IFeedPost, 'id'> & {
  bio: string;
  avatar: string;
  images: string[];
  followers: number;
  following: number;
};

export type IUser = Pick<IFeedPost, 'id' | 'userName'> & {
  name: string;
  image: string;
};
