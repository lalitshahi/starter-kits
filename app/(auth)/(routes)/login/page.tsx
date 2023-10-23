"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/form-input";
import Link from "next/link";

const Login = () => {
  return (
    <Card className="w-[350px] md:w-[400px] shadow-[0_0px_200px_rgba(5,_205,_85,_0.3)] md:p-5 py-10">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email and password to login
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <FormInput
              name={"email"}
              label={"Email"}
              placeholder={"John@snow.watch"}
            />
            <FormInput
              name={"password"}
              label={"Password"}
              placeholder={"Brothers of watch"}
            />
            <Link
              href="/forgot-password"
              className="text-sm font-semibold text-muted-foreground hover:text-black dark:hover:text-white w-fit"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex">
        <Button className="w-full">Login</Button>
      </CardFooter>
      <CardHeader>
        <CardDescription className="text-center flex items-center">
          <span className="w-1/4 bg-slate-300 h-[1px]" />
          <span className="flex-1">Or Continue With</span>
          <span className="w-1/4 bg-slate-300 h-[1px]" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-evenly">
          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-lg cursor-pointer">
            <Image
              className="hidden dark:block"
              src={"/google-light.png"}
              alt={"Google Login"}
              width={40}
              height={40}
            />
            <Image
              className="block dark:hidden"
              src={"/google-dark.png"}
              alt="Google Login"
              width={40}
              height={40}
            />
          </div>
          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-lg cursor-pointer">
            <Image
              className="hidden dark:block"
              src={"/github-light.png"}
              alt={"GitHub Login"}
              width={40}
              height={40}
            />
            <Image
              className="block dark:hidden"
              src={"/github-dark.png"}
              alt="Github Login"
              width={40}
              height={40}
            />
          </div>
          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-lg cursor-pointer">
            <Image
              className="hidden dark:block"
              src={"/twitter-light.png"}
              alt={"Twitter Login"}
              width={40}
              height={40}
            />
            <Image
              className="block dark:hidden"
              src={"/twitter-dark.png"}
              alt="Twitter Login"
              width={40}
              height={40}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center space-x-1">
        <p className="text-sm">Not a member?</p>
        <Link
          href="/register"
          className="text-sm font-semibold text-muted hover:text-primary w-fit"
        >
          Start a 14 day free trial
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Login;
