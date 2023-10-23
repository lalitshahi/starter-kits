"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";

interface InputProps {
  name: string;
  label: string;
  placeholder: string;
  className?: string;
}
const FormInput = ({ name, label, placeholder, className }: InputProps) => {
  const [value, setValue] = useState("");
  return (
    <div className={cn("flex flex-col space-y-1.5", className)}>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default FormInput;
