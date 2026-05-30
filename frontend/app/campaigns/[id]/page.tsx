"use client";

import {
  useEffect,
  useState
} from "react";
import { useParams } from "next/navigation";

import {
  getCampaignById
} from "@/services/campaignService";

export default function CampaignDetails() {

    const params = useParams();

const campaignId = params.id as string;

  const [campaign, setCampaign] =
    useState<any>(null);

  useEffect(() => {

    const fetchCampaign =
      async () => {

        const data =
          await getCampaignById(
            campaignId
          );

        setCampaign(data);

      };

    fetchCampaign();

  }, [campaignId]);

  if (!campaign)
    return <div>Loading...</div>;
  const physicianStatuses =
    campaign.enrolledPhysicianIds.map(
    (id: string, index: number) => ({

        id,

        status:
        index % 3 === 0
            ? "Contacted"
            : index % 3 === 1
            ? "Replied"
            : "Bounced",

    })
    );

  return (

    <main className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        {campaign.name}
      </h1>

      <p>
        Type:
        {" "}
        {campaign.type}
      </p>

      <p>
        Status:
        {" "}
        {campaign.status}
      </p>

      <p>
        Physicians:
        {" "}
        {
          campaign
          .enrolledPhysicianIds
          .length
        }
      </p>
      <div className="grid grid-cols-5 gap-4 my-8">

    <div
    className="
        bg-slate-800
        border
        border-slate-700
        rounded-xl
        p-4
        shadow-md
    "
    >
        <h3 className="text-sm text-slate-400">
            Enrolled
            </h3>
        <p className="text-3xl font-bold mt-2">
        {
            campaign
            .enrolledPhysicianIds
            .length
        }
        </p>
    </div>

    <div className="border p-4 rounded">
        <h3 className="text-sm text-slate-400">Messages Sent</h3>
        <p className="text-3xl font-bold mt-2">14</p>
    </div>

    <div className="border p-4 rounded">
        <h3 className="text-sm text-slate-400">Open Rate</h3>
        <p className="text-3xl font-bold mt-2">42%</p>
    </div>

    <div className="border p-4 rounded">
        <h3 className="text-sm text-slate-400">Replies</h3>
        <p className="text-3xl font-bold mt-2">3</p>
    </div>

    <div className="border p-4 rounded">
        <h3 className="text-sm text-slate-400">Meetings</h3>
        <p className="text-3xl font-bold mt-2">1</p>
    </div>

    </div>

    <h2 className="text-2xl mt-8 mb-4">
  Enrolled Physicians
</h2>

<table className="w-full border mb-8">

  <thead>

    <tr>

      <th className="border p-2">
        Physician ID
      </th>

      <th className="border p-2">
        Status
      </th>

    </tr>

  </thead>

  <tbody>

    {
      physicianStatuses.map(
        (physician:{ id: string; status: string }) => (

          <tr
            key={physician.id}
          >

            <td className="border p-2">
              {physician.id}
            </td>

            <td className="border p-2">
              {physician.status}
            </td>

          </tr>

        )
      )
    }

  </tbody>

</table>

      <h2 className="text-2xl mt-8 mb-4">
        Sequence Steps
      </h2>

      {
        campaign.sequences.map(
          (
            step: any
          ) => (

            <div
              key={
                step.stepNumber
              }
              className="
                border
                rounded
                p-4
                mb-4
              "
            >

              <h3>
                Step
                {" "}
                {step.stepNumber}
              </h3>

              <p>
                Delay:
                {" "}
                {step.delayDays}
                {" "}
                days
              </p>

              <p>
                Subject:
                {" "}
                {
                  step.subjectTemplate
                }
              </p>

              <p>
                Body:
                {" "}
                {
                  step.bodyTemplate
                }
              </p>

            </div>

          )
        )
      }

    </main>

  );

}