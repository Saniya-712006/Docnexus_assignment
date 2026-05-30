// PhysicianCard.tsx
import { Physician } from "@/types/physician";

interface Props {
  physician: Physician;
  isSelected: boolean;
  onToggle: (id: string) => void;
}

export default function PhysicianCard({ physician, isSelected, onToggle }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
        
      <h2 className="text-lg font-semibold">
        Dr. {physician.firstName} {physician.lastName} 
         {" "}
        <input
        type="checkbox"
        checked={isSelected}
        onChange={() => onToggle(physician.id)}
        />
        
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