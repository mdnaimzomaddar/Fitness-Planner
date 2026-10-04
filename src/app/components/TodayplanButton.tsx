'use client'
import React, { useContext } from 'react';
import { MdDateRange } from 'react-icons/md';
import { IExercise } from '../types/IExercise';
import { FitnessContext } from '@/app/context/FitnessContext';
import { toast } from 'react-toastify';

export interface FitnessContextType {
  todayPlan: IExercise[];
  setTodayPlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
  savePlan: IExercise[];
  setSavePlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
}

const TodayplanButton = ({fitness} : {fitness : IExercise}) => {

    const context = useContext(FitnessContext)
    if (!context) return null;
    const { todayPlan, setTodayPlan } = context;
    

    const hendelAddTodayPlan = () =>{
        const isExist = todayPlan.find((items : IExercise) => items.id === fitness.id)
        if(isExist){
            toast.warning(`This exercises "${fitness?.name || 'Exercise'}" is alrady add your plan`)
        } else{
            setTodayPlan((prevPlan : IExercise[]) => [...prevPlan, fitness])
            toast.success(`Successfull save your plan and exercises is "${fitness?.name}`)
        }
    }

    return (
        <button className="bg-[#C2F800] text-black font-bold text-sm px-6 py-3 rounded-lg hover:bg-lime-400 transition-colors flex items-center gap-2"
        onClick={hendelAddTodayPlan}
        >
            <span><MdDateRange /></span> Add to todays plan
        </button>
    );
};

export default TodayplanButton;