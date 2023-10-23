"use client";

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

const ResetPassword = () => {
  return (
    <Card className="w-[350px] md:w-[500px] shadow-[0_0px_90px_rgba(8,_112,_184,_0.3)] md:p-5 py-10">
      <CardHeader>
        <CardTitle>Reset Password</CardTitle>
        <CardDescription>Enter your new password</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <FormInput
              name={"password"}
              label={"New Password"}
              placeholder={"Your new oath!"}
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
        <Button className="w-full">Reset Password</Button>
      </CardFooter>
    </Card>
  );
};

export default ResetPassword;
