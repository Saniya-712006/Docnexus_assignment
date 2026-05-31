"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  createCampaign,
  launchCampaign
} from "@/services/campaignService";
import { getPhysicians }
from "@/services/physicianService";
import Link from "next/link";
import { Physician } from "@/types/physician";
// import {
//   generateAIEmail
// }
// from "@/services/campaignService";
import {
  generateAIEmail
}
from "@/services/aiService";


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
const [allPhysicians, setAllPhysicians] =
  useState<Physician[]>([]);
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

    localStorage.setItem(
  "campaignDraft",
  JSON.stringify({

    campaignId: result._id,

    campaignName,

    campaignType,

    step1Subject,

    step1Body,

    step2Delay,

    step2Subject,

    step2Body

  })
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

localStorage.removeItem(
  "campaignDraft"
);

localStorage.removeItem(
  "selectedPhysicians"
);

setSelectedPhysicians([]);

setCampaignName("");

setCampaignType(
  "cold_outbound"
);

setStep1Subject("");

setStep1Body("");

setStep2Delay(5);

setStep2Subject("");

setStep2Body("");

setCampaignId("");

alert(
  "Campaign launched!"
);

 router.push(
    "/campaigns"
  );

    } catch (error) {

      console.error(error);

      alert(
        "Launch failed"
      );

    }

  };
  useEffect(() => {

  const fetchData =
    async () => {

      const physicians =
        await getPhysicians();

      setAllPhysicians(
        physicians
      );

      const stored =
        localStorage.getItem(
          "selectedPhysicians"
        );

      if (stored) {

        setSelectedPhysicians(
          JSON.parse(stored)
        );

      }

    };

  fetchData();

}, []);

useEffect(() => {

  const savedDraft =
    localStorage.getItem(
      "campaignDraft"
    );

  if (savedDraft) {

  const draft =
    JSON.parse(savedDraft);

  setCampaignId(
    draft.campaignId || ""
  );

  setCampaignName(
    draft.campaignName || ""
  );

  setCampaignType(
    draft.campaignType ||
    "cold_outbound"
  );

  setStep1Subject(
    draft.step1Subject || ""
  );

  setStep1Body(
    draft.step1Body || ""
  );

  setStep2Delay(
    draft.step2Delay || 5
  );

  setStep2Subject(
    draft.step2Subject || ""
  );

  setStep2Body(
    draft.step2Body || ""
  );

}

}, []);

const handleGenerateAI =
  async () => {

     if (!campaignName || !campaignType) {

    alert(
      "Please enter Campaign Name and Campaign Type first."
    );

    return;
  }

    const result =
      await generateAIEmail(
        campaignName,
        campaignType
      );

    const email =
      result.email;

    const subjectMatch =
      email.match(
        /SUBJECT:\s*([\s\S]*?)BODY:/
      );

    const bodyMatch =
      email.match(
        /BODY:\s*([\s\S]*)/
      );

    if (subjectMatch)
      setStep1Subject(
        subjectMatch[1].trim()
      );

    if (bodyMatch)
      setStep1Body(
        bodyMatch[1].trim()
      );

  };
  
  const selectedPhysicianData =
  allPhysicians.filter(
    (physician) =>
      selectedPhysicians.includes(
        physician.id
      )
  );
  return (

    <main className="p-8">

      <h1 className="text-5xl font-bold mb-8">
        Campaign Builder
      </h1>

      <div
        className="
          bg-cyan-600
          text-white
          inline-block
          px-4
          py-2
          rounded-lg
          mb-6
          font-semibold
        "
      >
        Selected Physicians:
        {" "}
        {selectedPhysicians.length}
      </div>
    <div
      className="
        bg-slate-800
        border
        border-slate-700
        rounded-xl
        p-6
        mt-6
      "
    >

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
        <div
  className="
    mt-6
    bg-slate-800
    border
    border-slate-700
    rounded-xl
    p-6
  "
>

  <h2 className="text-xl font-semibold mb-4">
    Personalized Preview
  </h2>

  {
    selectedPhysicianData.map(
      (doctor) => {

        const subject =
          generatePreview(
            step1Subject
          )
            .replace(
              "Sarah",
              doctor.firstName
            );

        const body =
          step1Body
            .replace(
              /{{doctor_name}}/g,
              doctor.firstName
            )
            .replace(
              /{{specialty}}/g,
              doctor.specialty
            )
            .replace(
              /{{affiliation}}/g,
              doctor.affiliation
            );

        return (

          <div
            key={doctor.id}
            className="
              border
              border-slate-600
              rounded-lg
              p-4
              mb-4
            "
          >

            <h3 className="font-semibold mb-2">
              Dr. {doctor.firstName} {doctor.lastName}
            </h3>

         

            <p>
              <strong>Subject:</strong>
              {" "}
              {subject}
            </p>

            <p>
              <strong>Body:</strong>
              {" "}
              {body}
            </p>

          </div>

        );

      }
    )
  }

</div>
        <br/>

        <div
          className="
            bg-slate-800
            border
            border-slate-700
            rounded-xl
            p-6
            mb-6
          "
        >

        <h3 className="font-semibold mb-2">
            Available Template Variables
        </h3>

        <div className="flex gap-2 flex-wrap">

            <span className="
              bg-cyan-700
              text-white
              px-3
              py-1
              rounded-full
              text-sm
            ">
            {"{{doctor_name}}"}
            </span>

            <span className="
              bg-cyan-700
              text-white
              px-3
              py-1
              rounded-full
              text-sm
            ">
            {"{{specialty}}"}
            </span>

            <span className="
              bg-cyan-700
              text-white
              px-3
              py-1
              rounded-full
              text-sm
            ">
            {"{{affiliation}}"}
            </span>

        </div>

        </div>
 

        <div
          className="
            bg-slate-800
            border
            border-slate-700
            rounded-xl
            p-6
            mt-8
          "
        >

        <h2 className="text-xl font-semibold mb-4">
            Step 1 Email
        </h2>
           <button
  onClick={handleGenerateAI}
  className="
    bg-purple-600
    hover:bg-purple-700
    text-white
    px-4
    py-2
    rounded
    mb-4
  "
>

  Generate with AI

</button>
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

        <div
          className="
            bg-slate-800
            border
            border-slate-700
            rounded-xl
            p-6
            mt-6
          "
        >

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

       

<div className="mt-6">

  <button
    onClick={handleSaveDraft}
    className="
      bg-green-600 hover:bg-green-700
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
    bg-orange-600 hover:bg-orange-700
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
    bg-cyan-600 hover:bg-cyan-700
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