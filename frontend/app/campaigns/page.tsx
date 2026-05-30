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

      <h1 className="text-3xl font-bold mb-6">
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
              border
              rounded-lg
              p-4
              shadow
            "
          >

            <h2 className="text-xl font-semibold">
              {campaign.name}
            </h2>

            <p>
              Type:
              {" "}
              {campaign.type}
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

            <p>
              Physicians:
              {" "}
              {
                campaign
                .enrolledPhysicianIds
                .length
              }
            </p>

            <p>
              Sequence Steps:
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