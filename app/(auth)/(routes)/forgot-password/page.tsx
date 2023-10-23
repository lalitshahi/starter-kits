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

const ForgotPassword = () => {
  return (
    <Card className="w-[350px] md:w-[500px] shadow-[0_0px_90px_rgba(8,_112,_184,_0.3)] md:p-5 py-10">
      <CardHeader>
        <CardTitle>Forgot Password</CardTitle>
        <CardDescription>
          Enter your email to recover your password
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
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex">
        <Button className="w-full">Recover Password</Button>
      </CardFooter>
    </Card>
  );
};

export default ForgotPassword;
