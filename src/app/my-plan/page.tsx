'use client'
import React, { useContext } from "react";
import { FitnessContext } from "../context/FitnessContext";
import { IExercise } from "../types/IExercise";
import FitnessListStyle from "../components/FitnessListStyle";
import Link from "next/link";

const MyPlanPage = () => {
    const context = useContext(FitnessContext)
    if(!context) return (<div className="text-center py-10">Loading context...</div>)
    
    const {todayPlan, savePlan} = context
  return (
    <div className="bg-black">
      <div className="container mx-auto py-20 flex flex-col gap-4 p-6">
        {/* title section */}
        <div>
          <h2 className="text-[30px] font-bold text-white">MY PLAN</h2>
          <p className="text-base md:text-lg text-[#9CA3AF] leading-relaxed">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>
        
        {/* dynamic part base on plan */}
        <div className="bg-[#13161d] rounded-2xl border-2 border-gray-800 p-10">

        </div>
        
        {/* list tab and listed exercises */}
        <div>
          {/* name of each tab group should be unique */}
          <div className="tabs tabs-lift">
            <input
              type="radio"
              name="my_tabs_3"
              className="tab bg-[#13161d] rounded-2xl text-white text-[16px] font-semibold border-2 border-gray-800 mb-10 mr-5"
              aria-label={`Today's Plan`}
              defaultChecked
            />
            <div className="tab-content rounded-2xl border-2 border-gray-800 p-10">
                {todayPlan.length > 0 ? (
                    <div className="flex flex-col gap-4">
                        {todayPlan.map((items : IExercise) => <FitnessListStyle key={items.id} items = {items}></FitnessListStyle>)}
                    </div>
                ) : (
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-[18px] font-medium text-center text-gray-500 py-10">
                           {` Ohh! Sorry plase add today plan from 'Home'`}
                        </p>
                        <Link href="/">
                                <button className="bg-[#C2F800] text-black px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-[#15171d] hover:text-[#C2F800] border-2 border-[#C2F800] transition-colors duration-200">
                                    Home
                                </button>
                        </Link>
                    </div>
                )}
            </div>

            <input
              type="radio"
              name="my_tabs_3"
              className="tab bg-[#13161d] rounded-2xl text-white text-[16px] font-semibold border-2 border-gray-800 mb-10 mr-5"
              aria-label={`Saved`}
              
            />
            <div className="tab-content rounded-2xl border-2 border-gray-800 p-10">
              {savePlan.length > 0 ? (
                <div className="flex flex-col gap-4">
                {savePlan.map((items) => <FitnessListStyle key={items.id} items={items}></FitnessListStyle>)}
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center">
                    <p className="text-[18px] font-medium text-center text-gray-500 py-10">
                           {` Ohh! Sorry plase add your preference exercises from 'Home'`}
                    </p>
                    <Link href="/">
                        <button className="bg-[#C2F800] text-black px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-[#15171d] hover:text-[#C2F800] border-2 border-[#C2F800] transition-colors duration-200">
                            Home
                        </button>
                    </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
