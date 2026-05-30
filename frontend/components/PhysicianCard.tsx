import { Physician } from "@/types/physician";

interface Props {
  physician: Physician;
}

export default function PhysicianCard({ physician }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h2 className="text-lg font-semibold">
        Dr. {physician.firstName} {physician.lastName}
      </h2>

      <p>{physician.specialty}</p>

      <p className="text-sm text-gray-600">
        {physician.affiliation}
      </p>

      <p className="text-sm">
        {physician.city}, {physician.state}
      </p>
    </div>
  );
}