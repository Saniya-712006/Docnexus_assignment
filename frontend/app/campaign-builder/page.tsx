"use client";

import { useEffect, useState } from "react";

export default function CampaignBuilder() {

  const [selectedPhysicians, setSelectedPhysicians] = useState<string[]>([]);
  const [campaignName, setCampaignName] = useState("");

  const [campaignType, setCampaignType] = useState("cold_outbound");

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

    </main>

  );

}