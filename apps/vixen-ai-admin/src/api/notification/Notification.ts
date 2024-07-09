export type Notification = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  message: string | null;
  read: boolean | null;
  typeField?: "Option1" | null;
  user: string | null;
};
