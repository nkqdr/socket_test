export interface Message {
    content: string;
    senderId?: string;
    type: "join" | "leave" | "admin" | "message";
  }