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
  const [specialty, setSpecialty] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [registrationYear, setRegistrationYear] = useState("");
  const availableYears = [
  ...new Set(
    physicians.map(
      (p) => p.npiRegistrationYear
    )
  ),
].sort();
  useEffect(() => {

  const fetchData = async () => {

    const data = await getPhysicians(
      specialty,
      stateFilter,
      affiliation,
      registrationYear
    );

    setPhysicians(data);

  };

  fetchData();

}, [specialty, stateFilter, affiliation,registrationYear]);

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
      <div className="flex gap-4 mb-6">

      <select
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
        className="border p-2 rounded"
        style={{ color: "yellow", backgroundColor: "black" }}
      >
        <option value="">All Specialties</option>
        <option value="Oncology">Oncology</option>
        <option value="Cardiology">Cardiology</option>
        <option value="Neurology">Neurology</option>
        <option value="Dermatology">Dermatology</option>
        <option value="Pediatrics">Pediatrics</option>
      </select>

      <input
        type="text"
        placeholder="State (CA)"
        value={stateFilter}
        onChange={(e) => setStateFilter(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="text"
        placeholder="Affiliation"
        value={affiliation}
        onChange={(e) => setAffiliation(e.target.value)}
        className="border p-2 rounded"
      />
      <select
        value={registrationYear}
        onChange={(e) =>
          setRegistrationYear(e.target.value)
        }
        className="border p-2 rounded "
        style={{ color: "yellow", backgroundColor: "black" }}
      >
        <option value="">
          All Registration Years
        </option>

        {availableYears.map((year) => (
          <option
            key={year}
            value={year}
          >
            {year}
          </option>
        ))}
      </select>

</div>
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