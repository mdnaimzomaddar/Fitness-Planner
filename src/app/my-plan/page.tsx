'use client'
import React, { useContext, useState } from "react";
import Link from "next/link";
import { FitnessContext } from "../context/FitnessContext";
import { IExercise } from "../types/IExercise";
import FitnessListStyle from "../components/FitnessListStyle";
import PlanSummary from "../components/PlanSummary";

type Tab = "today" | "saved";

const MyPlanPage = () => {

  const [activeTab, setActiveTab] = useState<Tab>("today");
  const context = useContext(FitnessContext);

  if (!context) return <div className="text-center py-10">Loading context...</div>;

  const { todayPlan, savePlan } = context;

  const currentPlan: IExercise[] = activeTab === "today" ? todayPlan : savePlan;

  const emptyMessage =
    activeTab === "today"
      ? "Ohh! Sorry please add today plan from 'Home'"
      : "Ohh! Sorry please add your preference exercises from 'Home'";

  const tabClass = (tab: Tab) =>
    `rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
      activeTab === tab
        ? "bg-[#1f2430] text-white"
        : "text-gray-500 hover:text-white"
    }`;

  return (
    <div className="bg-black">
      <div className="container mx-auto flex flex-col gap-6 p-6 py-20">
        {/* title */}
        <div>
          <h2 className="text-[30px] font-bold text-white">MY PLAN</h2>
          <p className="text-base leading-relaxed text-[#9CA3AF] md:text-lg">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* summary: active tab er plan onujayi change hobe */}
        <PlanSummary plan={currentPlan} />

        {/* tabs */}
        <div className="flex w-fit gap-1 rounded-xl border border-gray-800 bg-[#13161d] p-1">
          <button className={tabClass("today")} onClick={() => setActiveTab("today")}>
            Today&apos;s Plan
          </button>
          <button className={tabClass("saved")} onClick={() => setActiveTab("saved")}>
            Saved
          </button>
        </div>

        {/* list */}
        {currentPlan.length > 0 ? (
          <div className="flex flex-col gap-4">
            {currentPlan.map((items: IExercise) => (
              <FitnessListStyle key={items.id} items={items} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <p className="py-10 text-center text-[18px] font-medium text-gray-500">
              {emptyMessage}
            </p>
            <Link href="/">
              <button className="rounded-lg border-2 border-[#C2F800] bg-[#C2F800] px-6 py-3 text-sm font-bold uppercase tracking-wider text-black transition-colors duration-200 hover:bg-[#15171d] hover:text-[#C2F800]">
                Home
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPlanPage;