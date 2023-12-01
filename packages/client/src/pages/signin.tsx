import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { z } from "zod";
import Head from "next/head";
import { useSignIn } from "@/features/auth/api/signin";
import CoverImage from "../assets/images/cover.jpg";
import Image from "next/image";

const SignInSchema = z.object({
  email: z.string({ required_error: "Username is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export type SignInInput = z.infer<typeof SignInSchema>;

const SignInForm = () => {
  const [apiError, setApiError] = useState("");
  const { mutateAsync: signIn, isLoading } = useSignIn();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInput>({
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit = async (input: SignInInput) => {
    const { data } = await signIn(input);
    if (data.data) {
      router.push("/");
    }
  };

  return (
    <>
      <Head>
        <title>Daily Strive</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-full p-5">
        <section className="mt-12 p-6 pt-0 text-center">
          <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900  md:text-5xl lg:text-6xl">
            Sign In
          </h1>
          <Image className="m-auto w-3/4" src={CoverImage} alt="Cover image" />
          <p className="mb-2 text-sm font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
            <span className="font-semibold">Daily Strive</span> aims to minimize dropout rates in personal growth
            missions with its user-friendly habit-building app, striving to
            excel in the habit-tracking market.
          </p>
        </section>

        <form
          className="flex-col-center w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            className="input input-bordered mb-3 w-full max-w-xs"
            placeholder="Username"
            {...register("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <input
            type="password"
            className="input input-bordered mb-3 w-full max-w-xs"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <button className="btn btn-primary btn-wide" type="submit">
            Submit
          </button>
        </form>
        {/* {mutation.isLoading && <p>Loading...</p>} */}
        {apiError && <p>{apiError}</p>}
      </main>
    </>
  );
};

export default SignInForm;
