"use client";
import { useState, useRef, FormEvent } from "react";
// import { BellIcon, CheckIcon } from "@radix-ui/react-icons";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


type CardProps = React.ComponentProps<typeof Card>;

export function NewReport({ className, ...props }: CardProps) {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [reportCause, setReportCause] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const file = fileInputRef.current?.files?.[0];
    if (!vehicleNumber || !reportCause || !file) {
      //   toast.error("Please fill all the fields!", {
      //     position: "bottom-right",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "colored",
      //   });
      return;
    }
    const formData = new FormData();
    formData.append("vehicleNumber", vehicleNumber);
    formData.append("reportCause", reportCause);
    formData.append("file", file);

    // Handle form submission, e.g., send the formData to an API
    // fetch('/api/report', {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error('Error:', error));
    // toast.success("Form submitted successfully!", {
    //   position: "bottom-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "colored",
    // });
    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-[66px]">
      <Card
        className={cn("w-[300px] lg:w-[800px] ml-3 mt-8 rounded-xl", className)}
        {...props}
      >
        <CardHeader>
          <CardTitle className="text-center font-bold border-b p-2">
            Report Vehicle
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
            <Label htmlFor="vehicleNumber">Enter Vehicle Number</Label>
            <Input
              id="vehicleNumber"
              type="text"
              placeholder="Vehicle Number"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" ref={fileInputRef} />
          </div>
          <div>
            <Label htmlFor="vehicleNumber">Enter Vehicle Number</Label>
            <Select onValueChange={setReportCause}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Report Cause" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Rash Driving">Rash Driving</SelectItem>
                <SelectItem value="Triple Driving">Triple Driving</SelectItem>
                <SelectItem value="Signal Jump">Signal Jump</SelectItem>
                <SelectItem value="No Parking">No Parking</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </CardFooter>
      </Card>
      {/* <ToastContainer /> */}
    </form>
  );
}
