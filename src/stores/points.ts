import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
    score: number;
    showScore: boolean;
  }
  
  interface Actions {
    setShowScore: (showScore: boolean) => void;
    setScore: (score: number) => void;
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
      showScore: false,
      score: 0,
    }),
    {
      name: "points",
    },
  ),
);

export default usePointsStore;
