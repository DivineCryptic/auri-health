/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/exROoGtFTlU
 */
import { Button } from "@/components/ui/button";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  CameraIcon,
  FileIcon,
  FilePlusIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { MdCameraFront } from "react-icons/md";
import AddDialogVitals from "./add-dialog-vitals";
import AddDialogHistory from "./add-dialog-history";

export function PatientView({
  name,
  age,
  gender,
  regId,
  id
}: {
  name: string;
  age: number;
  gender: string;
  regId: string;
  id: number;
}) {
  const patientName = name ? name : "No Name";

  return (
    <Card key={regId} className="mx-auto relative mt-10">
      <div className="absolute top-0 left-0 p-2">
        <Button variant="outline">
          <Link href={`/patients/${regId}/view-patient-details`}>View</Link>
        </Button>
      </div>
      <CardHeader className="pb-3 flex justify-between items-center">
        <p className="font-semibold">{patientName}</p>
        <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
          ID: {regId}
        </span>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col gap-1">
            <Label className="text-sm">Age</Label>
            <p>{age} years</p>
          </div>
          <div className="flex flex-col gap-1">
            <Label className="text-sm" htmlFor="gender">
              Gender
            </Label>
            <p>{gender}</p>
          </div>
          <div className="flex flex-col gap-1">
            <Label className="text-sm" htmlFor="status">
              Status
            </Label>
            <span className="font-semibold text-green-500">Active</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-2">
              <AddDialogVitals id={id}/>
            {/* <Button>
              <Link href={`/patients/${regId}/newvitals`}>Add Vitals</Link>
            </Button> */}

            <Button>View Vitals</Button>
            <Button>Add Comorbidities</Button>
            <Button>View Comorbidities</Button>
            <Button>Add Disabilities</Button>
            <Button>View Disabilities</Button>
            <Button>Add Comments</Button>
            <Button>View Comments</Button>
            <AddDialogHistory id={id}/>
            <Button>View History</Button>
          </div>
        
        </div>
      </CardContent>
      <div className="absolute top-0 right-0 flex flex-col gap-4 p-2">
        <Button className="p-4">
          <CameraIcon className="h-6 w-6" />
        </Button>
        <Button>
          <VideoIcon className="w-6 h-6" />
        </Button>
        <Button>
          <FileIcon className="w-6 h-6" />
        </Button>
      </div>
    </Card>
  );
}
