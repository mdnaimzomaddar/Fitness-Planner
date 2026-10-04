'use client'
import React, { useContext } from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import { IExercise } from '../types/IExercise';
import { FitnessContext } from '../context/FitnessContext';
import { toast } from 'react-toastify';

export interface FitnessContextType {
  todayPlan: IExercise[];
  setTodayPlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
  savePlan: IExercise[];
  setSavePlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
}

const SavePlanButton = ({fitness} : {fitness : IExercise}) => {
    const context = useContext(FitnessContext)
    if(!context) return null
    const {savePlan, setSavePlan} = context

    const hendelSavePlanButton = () =>{
        const isExist = savePlan.find((items) => items.id === fitness.id)

        if(isExist){
            toast.warning(`This exercises"${fitness?.name || 'Exersises'} is alrady save."`)
        } else{
            setSavePlan((prevPlan : IExercise[]) => [...prevPlan, fitness])
            toast.success(`Successfull add "${fitness?.name || 'Exercises'} save plan."`)
        }
    }

    return (
        <div>
            <button className="border border-gray-700 bg-[#1e2129] text-gray-300 hover:text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
            onClick={hendelSavePlanButton}
            >
                <span><FaRegBookmark /></span> Save for later
            </button>
        </div>
    );
};

export default SavePlanButton;