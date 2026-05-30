"use client";

import { useEffect, useState } from "react";
import { Physician } from "@/types/physician";
import { getPhysicians } from "@/services/physicianService";
import PhysicianCard from "@/components/PhysicianCard";

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {physicians.map((physician) => (
          <PhysicianCard
            key={physician.id}
            physician={physician}
          />
        ))}
      </div>
    </main>
  );
}