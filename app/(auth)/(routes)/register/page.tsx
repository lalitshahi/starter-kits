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

const Register = () => {
  return (
    <Card className="w-[350px] md:w-[400px] shadow-[0_0px_90px_rgba(8,_112,_184,_0.3)] md:p-5 py-10">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Register to enjoy the benefits</CardDescription>
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
            <FormInput
              name={"confirmPassword"}
              label={"Confirm Password"}
              placeholder={"Say it again!"}
            />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex">
        <Button className="w-full">Register</Button>
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
          <div className="w-[40px] h-[40px] bg-black dark:bg-white flex justify-center items-center rounded-lg cursor-pointer">
            <Image
              className="hidden dark:block"
              src={"/google-dark.png"}
              alt={"Google Register"}
              width={30}
              height={30}
            />
            <Image
              className="block dark:hidden"
              src={"/google-light.png"}
              alt="Google Register"
              width={30}
              height={30}
            />
          </div>
          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-lg cursor-pointer">
            <Image
              className="hidden dark:block"
              src={"/github-light.png"}
              alt={"GitHub Register"}
              width={40}
              height={40}
            />
            <Image
              className="block dark:hidden"
              src={"/github-dark.png"}
              alt="Github Register"
              width={40}
              height={40}
            />
          </div>
          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-lg cursor-pointer">
            <Image
              className="hidden dark:block"
              src={"/twitter-light.png"}
              alt={"Twitter Register"}
              width={40}
              height={40}
            />
            <Image
              className="block dark:hidden"
              src={"/twitter-dark.png"}
              alt="Twitter Register"
              width={40}
              height={40}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Register;
