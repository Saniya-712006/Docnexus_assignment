// page.tsx
"use client";

import { useEffect, useState } from "react";
import { Physician } from "@/types/physician";
import { getPhysicians } from "@/services/physicianService";
import PhysicianCard from "@/components/PhysicianCard";

export default function Home() {
  const [physicians, setPhysicians] = useState<Physician[]>([]);
  const [selectedPhysicians, setSelectedPhysicians] =
  useState<string[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPhysicians();
      setPhysicians(data);
    };

    fetchData();
  }, []);

  const togglePhysician = (id: string) => {
  setSelectedPhysicians((prev) =>
    prev.includes(id)
      ? prev.filter((p) => p !== id)
      : [...prev, id]
  );
};

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Physician Discovery
      </h1>
      <div className="mb-4 font-medium">
          {physicians.length} Physicians |
          {" "}
          {selectedPhysicians.length} Selected
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        
        {physicians.map((physician) => (
          <PhysicianCard
            key={physician.id}
            physician={physician}
            isSelected={selectedPhysicians.includes(
              physician.id
            )}
            onToggle={togglePhysician}
          />
        ))}
      </div>
    </main>
  );
}