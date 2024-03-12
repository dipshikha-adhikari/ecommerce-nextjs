"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "@/components/forms/input-field";
import { Button } from "@/components/elements/button";
import { signUp } from "../_actions/sign-up";
import toast from "react-hot-toast";
import { SignupSchema, SignupSchemaType } from "@/lib/zod-validation";

const SignupForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupSchemaType>({ resolver: zodResolver(SignupSchema) });

  const mutation = useMutation(signUp);
  const onSubmit: SubmitHandler<SignupSchemaType> = async (data) => {
    mutation.mutate(data, {
      onError: (error: any) => {
        toast.error(error.message);
      },
      onSuccess: (data) => {
        toast.success("Success");
        router.push("/");
      },
    });
  };

  return (
    <div className="grid gap-xs ">
      <form className="grid gap-xs" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          type="text"
          label="Full Name"
          error={errors["fullname"]}
          registration={register("fullname")}
        />
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
        <InputField
          type="password"
          label="Confirm Password"
          error={errors["confirmPassword"]}
          registration={register("confirmPassword")}
        />
        <div>
          <Button
            type="submit"
            className="w-full disabled:opacity-50"
            isLoading={mutation.isLoading}
          >
            Sign Up
          </Button>
        </div>
      </form>
      <div className="flex gap-1">
        <p>Already have an account?</p>
        <Link
          href="/auth/sign-in"
          className="font-medium text-blue-600 hover:text-blue-500"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;
