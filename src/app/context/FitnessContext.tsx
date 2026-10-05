'use client'

import { createContext, ReactNode, useState } from "react";
import { IExercise } from "../types/IExercise";

export type PlanType = "today" | "saved";

export interface FitnessContextType {
  todayPlan: IExercise[];
  setTodayPlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
  savePlan: IExercise[];
  setSavePlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
  completedPlan: IExercise[];
  markDone: (id: IExercise["id"]) => void;
  removeFromPlan: (id: IExercise["id"], type: PlanType) => void;
}

export const FitnessContext = createContext<FitnessContextType | null>(null);

const FitnessProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<IExercise[]>([]);
  const [savePlan, setSavePlan] = useState<IExercise[]>([]);
  const [completedPlan, setCompletedPlan] = useState<IExercise[]>([]);

  const markDone = (id: IExercise["id"]) => {
    const item = todayPlan.find((i) => i.id === id);
    if (!item) return;
    setCompletedPlan((prev) => [...prev, item]);
    setTodayPlan((prev) => prev.filter((i) => i.id !== id));
  };

  const removeFromPlan = (id: IExercise["id"], type: PlanType) => {
    if (type === "today") {
      setTodayPlan((prev) => prev.filter((i) => i.id !== id));
    } else {
      setSavePlan((prev) => prev.filter((i) => i.id !== id));
    }
  };

  return (
    <FitnessContext.Provider
      value={{
        todayPlan,
        setTodayPlan,
        savePlan,
        setSavePlan,
        completedPlan,
        markDone,
        removeFromPlan,
      }}
    >
      {children}
    </FitnessContext.Provider>
  );
};

export default FitnessProvider;