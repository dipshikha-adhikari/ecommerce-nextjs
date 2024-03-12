import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().min(1, { message: "Email is required" }).email({
        message: "Must be a valid email",
    }),
    password: z
        .string()
        .min(6, { message: "Password must be atleast 6 characters" }),
});
0;

export type LoginSchemaType = z.infer<typeof LoginSchema>;

export const SignupSchema = z
    .object({
        email: z.string().min(1, { message: "Email is required" }).email({
            message: "Must be a valid email",
        }),
        fullname: z.string().min(1, { message: "Name is required" }),
        password: z
            .string()
            .min(6, { message: "Password must be atleast 6 characters" }),

        confirmPassword: z
            .string()
            .min(6, { message: "Password must be atleast 6 characters" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Password does not match",
        path: ["confirmPassword"],
    });

export type SignupSchemaType = z.infer<typeof SignupSchema>;