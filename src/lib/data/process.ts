export interface ProcessStep {
  id: string;
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: "01",
    step: "01",
    title: "Discovery",
    description: "We immerse ourselves in your vision, brand, and objectives to craft the perfect event strategy.",
  },
  {
    id: "02",
    step: "02",
    title: "Planning",
    description: "Detailed logistics, vendor coordination, and creative direction — every detail mapped.",
  },
  {
    id: "03",
    step: "03",
    title: "Production",
    description: "Sets, staging, AV, talent — we build the physical and digital experience.",
  },
  {
    id: "04",
    step: "04",
    title: "Execution",
    description: "Flawless on-ground delivery with our experienced event conductors leading every moment.",
  },
  {
    id: "05",
    step: "05",
    title: "Celebration",
    description: "Your event goes live. We celebrate the experience you've created together.",
  },
];
