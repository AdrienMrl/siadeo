export interface Upload {
  url: string;
  title: string;
  description?: string;
}

export interface UserModel {
  uploads: Upload[];
}
