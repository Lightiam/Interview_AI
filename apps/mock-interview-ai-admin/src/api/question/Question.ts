export type Question = {
  content: string | null;
  createdAt: Date;
  difficulty?: "Option1" | null;
  id: string;
  updatedAt: Date;
};
