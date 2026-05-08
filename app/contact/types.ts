export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: {
    name?: string;
    email?: string;
    message?: string;
  };
  values?: {
    name: string;
    email: string;
    message: string;
  };
};

export const initialContactState: ContactState = {
  status: "idle",
  message: "",
};
