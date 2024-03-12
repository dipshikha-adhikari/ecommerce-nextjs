"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "@/components/forms/input-field";
import { Button } from "@/components/elements/button";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { LoginSchema, LoginSchemaType } from "@/lib/zod-validation";

const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) });

  const mutation = useMutation(async (data: any) => {
    const response = await signIn("credentials", { ...data, redirect: false });

    if (!response?.ok) {
      throw new Error(response?.error || "Error occured"); // Throw error with the message from the server
    }

    return response;
  });

  const onSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    mutation.mutate(data, {
      onError: (error: any) => {
        toast.error(error.message);
      },
      onSuccess: () => {
        toast.success("Success");
        router.push("/account");
      },
    });
  };

  return (
    <div className="grid gap-xs ">
      <form className="grid gap-xs" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          type="email"
          label="Email Address"
          error={errors["email"]}
          registration={register("email")}
        />
        <InputField
          type="password"
          label="Password"
          error={errors["password"]}
          registration={register("password")}
        />
        <div>
          <Button
            type="submit"
            className="w-full disabled:opacity-50"
            // disabled={mutation.isLoading}
            isLoading={mutation.isLoading}
          >
            Log in
          </Button>
        </div>
      </form>
      <div className="flex gap-1">
        <p>Don't have an account?</p>
        <Link
          href="/auth/sign-up"
          className="font-medium text-blue-600 hover:text-blue-500"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
