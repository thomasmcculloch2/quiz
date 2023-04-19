import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
    score: number;
    showScore: boolean;
    firstStep: boolean;
  }
  
  interface Actions {
    setShowScore: (showScore: boolean) => void;
    setScore: (score: number) => void;
    setFirstStep: (firstStep: boolean) => void;
  }

const usePointsStore = create(
  persist<State & Actions>(
    (set) => ({
      setScore: (score:number) =>
        set(() => ({
          score,
        })),
      setShowScore: (showScore:boolean) =>
        set(() => ({
          showScore,
        })),
      setFirstStep: (firstStep:boolean) =>
        set(() => ({
          firstStep,
        })),
      showScore: false,
      score: 0,
      firstStep: true,
    }),
    {
      name: "points",
    },
  ),
);

export default usePointsStore;
