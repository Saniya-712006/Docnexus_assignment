"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Campaign }
from "@/types/campaign";

import { getCampaigns }
from "@/services/campaignService";

export default function CampaignsPage() {

  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {

    const fetchCampaigns =
      async () => {

        const data =
          await getCampaigns();

        setCampaigns(data);

      };

    fetchCampaigns();

  }, []);

  return (

    <main className="p-8">

      <h1 className="text-5xl font-bold mb-8">
        Campaign Dashboard
      </h1>

     
      <div className="grid gap-4">

        {campaigns.map((campaign) => (
        <Link
  href={`/campaigns/${campaign._id}`}
  key={campaign._id}
>
          <div
          key={campaign._id}
          className="
            bg-slate-800
            border
            border-slate-700
            rounded-xl
            p-6
            shadow-lg

            hover:border-cyan-500
            hover:scale-[1.01]
            hover:shadow-xl

            transition
            duration-200

            cursor-pointer
          "
        >

            <h2 className="text-2xl font-bold mb-3">
              {campaign.name}
            </h2>

            <p className="text-slate-300 mb-2">
              Type: {campaign.type}
            </p>

            <div className="mt-2">

              {campaign.status === "active" ? (

                <span
                  className="
                    bg-green-600
                    text-white
                    px-2
                    py-1
                    rounded
                    text-sm
                  "
                >
                  Active
                </span>

              ) : (

                <span
                  className="
                    bg-yellow-600
                    text-white
                    px-2
                    py-1
                    rounded
                    text-sm
                  "
                >
                  Draft
                </span>

              )}

            </div>

            <p className="mt-4">
              👨‍⚕️ Physicians:
              {" "}
              {
                campaign
                .enrolledPhysicianIds
                .length
              }
            </p>

            <p>
              📧 Sequence Steps:
              {" "}
              {
                campaign
                .sequences
                .length
              }
            </p>

          </div>
          </Link>

        ))}

      </div>


    </main>

  );

}