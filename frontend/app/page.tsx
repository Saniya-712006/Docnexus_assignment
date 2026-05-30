"use client";

import { useEffect, useState } from "react";
import { Physician } from "@/types/physician";
import { getPhysicians } from "@/services/physicianService";

export default function Home() {
  const [physicians, setPhysicians] = useState<Physician[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPhysicians();
      setPhysicians(data);
    };

    fetchData();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Physician Discovery
      </h1>

      <p>
        Total Physicians: {physicians.length}
      </p>
    </main>
  );
}