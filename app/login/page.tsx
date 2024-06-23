"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { InputOTPForm } from "./InputOtp";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
// import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

const SignUp: React.FC = () => {
  const router = useRouter();
  const [phone, setphone] = useState("");
  const [phoneError, setphoneError] = useState("");
  const [showOTPForm, setShowOTPForm] = useState(false);

  const handleNumberSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!phone) {
      setphoneError("Please enter your phone number.");
    } else {
      setphoneError("");
      setShowOTPForm(true);
      console.log("OTP sent to:", phone);
      // Simulate sending OTP
      toast("OTP sent!");
    }
  };

  //   const handleSubmitOTP = (otpDigits: string[]) => {
  //     const enteredOTP = otpDigits.join("");
  //     if (enteredOTP === "123456") {
  //       toast.success("OTP verified! Redirecting to dashboard...");
  //       setTimeout(() => {
  //         router.push("/dashboard");
  //       }, 1500); // Redirect after 1.5 seconds
  //     } else {
  //       toast.error("Invalid OTP. Please try again.");
  //     }
  //   };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const enteredOTP = data.pin;
    if (enteredOTP === "123456") {
      toast.success("OTP verified! Redirecting to dashboard...");
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500); // Redirect after 1.5 seconds
    } else {
      toast.error("Invalid OTP. Please try again.");
      data.pin = '';
    }
  }

  return (
    <div className="relative flex flex-col items-center bg-white">
      <ToastContainer />
      <div className="relative bg-[#8b68f7] border border-black rounded-lg shadow-lg p-6 sm:p-8 mt-0 sm:mt-8 w-9/12 max-w-md z-30">
        <div className="absolute inset-0 border-2 border-black bg-white rounded-lg transform -translate-x-2 translate-y-2 -z-10"></div>
        <div className="relative rounded-lg lg:p-2">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Login:</h2>
          <form onSubmit={handleNumberSubmit}>
            <div className="mb-4 sm:mb-6">
              <label
                htmlFor="mobile"
                className="block text-sm sm:text-base font-medium text-gray-700"
              >
                Phone Number
              </label>
              {phoneError && (
                <p className="text-red-500 text-xs sm:text-sm mb-1">
                  {phoneError}
                </p>
              )}
              <input
                type="tel"
                id="mobile"
                value={phone}
                placeholder="Enter your Mobile number"
                onChange={(e) => setphone(e.target.value)}
                name="mobile"
                className="mt-1 block w-full py-2 px-4 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            {!showOTPForm && (
              <div className="text-right">
                <button
                  type="submit"
                  className="w-auto sm:w-auto px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                  aria-label="Submit"
                >
                  Send OTP
                </button>
              </div>
            )}
          </form>
          {showOTPForm && (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-2/3 space-y-2"
              >
                <FormField
                  control={form.control}
                  name="pin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>One-Time Password</FormLabel>
                      <FormControl>
                        <InputOTP maxLength={6} {...field}>
                          <InputOTPGroup className="flex justify-between gap-2">
                            <InputOTPSlot index={0} className="rounded-lg" />
                            <InputOTPSlot index={1} className="rounded-lg" />
                            <InputOTPSlot index={2} className="rounded-lg" />
                            <InputOTPSlot index={3} className="rounded-lg" />
                            <InputOTPSlot index={4} className="rounded-lg" />
                            <InputOTPSlot index={5} className="rounded-lg" />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                      <FormDescription>
                        Please enter the one-time password sent to your phone.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button>Submit</Button>
              </form>
            </Form>
          )}
          <div className="text-center mt-4">
            <p className="mt-8 sm:mt-16 text-xs sm:text-sm text-gray-700">
              Dont have an account?{" "}
              <Link href="/signup" className="text-[#3DB0F1] font-medium">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
