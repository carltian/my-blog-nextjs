import z from "zod";

/**
 * 注册表单校验：字段规则 + 两次密码一致。
 */
export const signUpSchema = z.object({
    name: z.string().min(3).max(30),
    email: z.email(),
    password: z.string().min(8).max(30),
    confirmPassword: z.string().min(8).max(30),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
