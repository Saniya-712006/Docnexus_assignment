// PhysicianCard.tsx
import { Physician } from "@/types/physician";

interface Props {
  physician: Physician;
  isSelected: boolean;
  onToggle: (id: string) => void;
}

export default function PhysicianCard({ physician, isSelected, onToggle }: Props) {
  return (
    <div className={`
  rounded-xl
  p-4
  shadow-md
  transition-all
  duration-200
  hover:scale-[1.02]
  hover:shadow-xl
  cursor-pointer
  ${
    isSelected
      ? "border-2 border-cyan-400 bg-slate-800"
      : "border border-slate-700 bg-slate-900"
  }
`}>
        
      <h2 className="text-lg font-semibold">
        Dr. {physician.firstName} {physician.lastName} 
         {" "}
        <input
        type="checkbox"
        checked={isSelected}
        onChange={() => onToggle(physician.id)}
        />
        
      </h2>
      

      <span
        className="
        inline-block
        bg-cyan-600
        text-white
        text-xs
        px-2
        py-1
        rounded-full
        mb-2
        "
      >
        {physician.specialty}
      </span>

      <p className="text-sm text-gray-600">
        {physician.affiliation}
      </p>

      <p className="text-sm">
        {physician.city}, {physician.state}
      </p>
      <p className="text-sm text-gray-500">
        NPI Registration Year: {" "} {physician.npiRegistrationYear}
      </p>

      
    </div>
  );
}