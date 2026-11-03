import * as z from "zod"; 
 
export const signUpSchema = z.object({ 
  username: z.string().min(3).max(30),
  email: z.email().min(8).max(30),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;