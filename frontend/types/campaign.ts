export interface Sequence {
  stepNumber: number;
  delayDays: number;
  subjectTemplate: string;
  bodyTemplate: string;
}

export interface Campaign {
  _id: string;
  id: string;
  name: string;
  type: string;
  status: string;
  createdAt: string;
  enrolledPhysicianIds: string[];
  sequences: Sequence[];
}