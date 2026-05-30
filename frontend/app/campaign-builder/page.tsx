"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  createCampaign,
  launchCampaign
} from "@/services/campaignService";

import Link from "next/link";

export default function CampaignBuilder() {

  const [selectedPhysicians, setSelectedPhysicians] = useState<string[]>([]);
  const [campaignName, setCampaignName] = useState("");
  const [campaignType, setCampaignType] = useState("cold_outbound");
  const [step1Subject, setStep1Subject] = useState("");
  const [step1Body, setStep1Body] = useState("");
  const [step2Delay, setStep2Delay] = useState(5);
  const [step2Subject, setStep2Subject] = useState("");
  const [step2Body, setStep2Body] = useState("");
  const [campaignId, setCampaignId] = useState("");
  const previewDoctor = {
  firstName: "Sarah",
  specialty: "Oncology",
  affiliation: "Stanford Health"
};
const router = useRouter();
const generatePreview = (text: string) => {

  return text
    .replace(
      /{{doctor_name}}/g,
      previewDoctor.firstName
    )
    .replace(
      /{{specialty}}/g,
      previewDoctor.specialty
    )
    .replace(
      /{{affiliation}}/g,
      previewDoctor.affiliation
    );

};

const handleSaveDraft = async () => {

  const campaignData = {

    name: campaignName,

    type: campaignType,

    enrolledPhysicianIds:
      selectedPhysicians,

    sequences: [

      {
        stepNumber: 1,
        delayDays: 0,
        subjectTemplate: step1Subject,
        bodyTemplate: step1Body
      },

      {
        stepNumber: 2,
        delayDays: step2Delay,
        subjectTemplate: step2Subject,
        bodyTemplate: step2Body
      }

    ]

  };

  try {

    const result =
      await createCampaign(
        campaignData
      );

    console.log(result);

    setCampaignId(
      result._id
    );

    alert(
      "Campaign saved successfully!"
    );

  } catch (error) {

    console.error(error);

    alert(
      "Failed to save campaign"
    );

  }

};

const handleLaunchCampaign =
  async () => {

    try {

      await launchCampaign(
        campaignId
      );

      alert(
        "Campaign launched!"
      );

    } catch (error) {

      console.error(error);

      alert(
        "Launch failed"
      );

    }

  };
  useEffect(() => {

    const stored =
      localStorage.getItem(
        "selectedPhysicians"
      );

    if (stored) {

      setSelectedPhysicians(
        JSON.parse(stored)
      );

    }

  }, []);

  return (

    <main className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Campaign Builder
      </h1>

      <p>
        Selected Physicians:
        {" "}
        {selectedPhysicians.length}
      </p>
    <div className="mt-6">

        <input
            type="text"
            placeholder="Campaign Name"
            value={campaignName}
            onChange={(e) =>
            setCampaignName(e.target.value)
            }
            className="
            border
            p-2
            rounded
            w-full
            mb-4
            "
        />
        
        <select
            value={campaignType}
            onChange={(e) =>
            setCampaignType(e.target.value)
            }
            className=" border p-2 rounded w-full"
            style={{ color: "yellow", backgroundColor: "black" }}
        >

            <option value="cold_outbound">
            Cold Outreach
            </option>

            <option value="reengagement">
            Re-engagement
            </option>

            <option value="conference_followup">
            Conference Follow-up
            </option>

        </select>
            
        </div>
        <br/>

        <div className="border rounded p-4 mb-6">

        <h3 className="font-semibold mb-2">
            Available Template Variables
        </h3>

        <div className="flex gap-2 flex-wrap">

            <span className="border px-2 py-1 rounded">
            {"{{doctor_name}}"}
            </span>

            <span className="border px-2 py-1 rounded">
            {"{{specialty}}"}
            </span>

            <span className="border px-2 py-1 rounded">
            {"{{affiliation}}"}
            </span>

        </div>

        </div>
 

        <div className="mt-8">

        <h2 className="text-xl font-semibold mb-4">
            Step 1 Email
        </h2>

        <input
            type="text"
            placeholder="Subject"
            value={step1Subject}
            onChange={(e) =>
            setStep1Subject(e.target.value)
            }
            className="
            border
            p-2
            rounded
            w-full
            mb-4
            "
        />

        <textarea
            placeholder="Email Body"
            value={step1Body}
            onChange={(e) =>
            setStep1Body(e.target.value)
            }
            className="
            border
            p-2
            rounded
            w-full
            h-32
            mb-6
            "
        />

        </div>

        <div>

        <h2 className="text-xl font-semibold mb-4">
            Step 2 Follow-up
        </h2>

        <input
            type="number"
            value={step2Delay}
            onChange={(e) =>
            setStep2Delay(Number(e.target.value))
            }
            className="
            border
            p-2
            rounded
            mb-4
            "
        />

        <input
            type="text"
            placeholder="Subject"
            value={step2Subject}
            onChange={(e) =>
            setStep2Subject(e.target.value)
            }
            className="
            border
            p-2
            rounded
            w-full
            mb-4
            "
        />

        <textarea
            placeholder="Email Body"
            value={step2Body}
            onChange={(e) =>
            setStep2Body(e.target.value)
            }
            className="
            border
            p-2
            rounded
            w-full
            h-32
            "
        />

        </div>

        <div className="mt-8 border rounded p-4">

  <h2 className="text-xl font-semibold mb-4">
    Email Preview
  </h2>

  <p className="font-semibold">
    Subject:
  </p>

  <p className="mb-4">
    {generatePreview(step1Subject)}
  </p>

  <p className="font-semibold">
    Body:
  </p>

  <p>
    {generatePreview(step1Body)}
  </p>

</div>

<div className="mt-6">

  <button
    onClick={handleSaveDraft}
    className="
      bg-green-600
      text-white
      px-4
      py-2
      rounded
    "
  >
    Save Draft
  </button>

  <button
  onClick={handleLaunchCampaign}
  disabled={!campaignId}
  className="
    bg-red-600
    text-white
    px-4
    py-2
    rounded
    ml-4
  "
>
  Launch Campaign
</button>

<button
  onClick={() =>
    router.push("/campaigns")
  }
  className="
    bg-blue-600
    text-white
    px-4
    py-2
    rounded
    ml-4
  "
>
  View Campaigns
</button>

</div>

    </main>

  );

}