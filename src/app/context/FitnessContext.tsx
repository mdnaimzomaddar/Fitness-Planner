'use client'

import { createContext, ReactNode, useState } from "react";
import { IExercise } from "../types/IExercise";
export interface FitnessContextType {
  todayPlan: IExercise[];
  setTodayPlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
  savePlan: IExercise[];
  setSavePlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
}

export const FitnessContext = createContext<FitnessContextType |null>(null)

const FitnessProvider = ({children} : {children : ReactNode}) => {
    const [todayPlan, setTodayPlan] = useState<IExercise[]>([])
    const [savePlan, setSavePlan] = useState<IExercise[]>([])

    return (
        <FitnessContext.Provider value = {{todayPlan, setTodayPlan, savePlan, setSavePlan}}> 
            {children} 
        </FitnessContext.Provider>
        
    );
};

export default FitnessProvider;