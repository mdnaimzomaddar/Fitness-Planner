'use client'
import React, { useContext, useState } from "react";
import Link from "next/link";
import { FitnessContext } from "../context/FitnessContext";
import { IExercise } from "../types/IExercise";
import FitnessListStyle from "../components/FitnessListStyle";
import PlanSummary from "../components/PlanSummary";

type Tab = "today" | "saved";
type SortKey = "duration" | "calories" | "rating";

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "duration", label: "Duration" },
  { value: "calories", label: "Calories" },
  { value: "rating", label: "Rating" },
];

const MyPlanPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("today");
  const [sortBy, setSortBy] = useState<SortKey>("duration");
  const context = useContext(FitnessContext);

  if (!context) return <div className="text-center py-10">Loading context...</div>;

  const { todayPlan, savePlan, removeFromPlan, markDone } = context;

  const currentPlan: IExercise[] = activeTab === "today" ? todayPlan : savePlan;

  const sortedPlan = [...currentPlan].sort((a, b) => {
    switch (sortBy) {
      case "duration":
        return Number(a.duration) - Number(b.duration);
      case "calories":
        return Number(b.caloriesBurned) - Number(a.caloriesBurned);
      case "rating":
        return Number(b.rating) - Number(a.rating);
      default:
        return 0;
    }
  });

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

        {/* summary */}
        <PlanSummary plan={currentPlan} />

        {/* tabs + sort */}
        <div className="flex items-center justify-between">
          {/* tab */}
          <div className="flex w-fit gap-1 rounded-xl border border-gray-800 bg-[#13161d] p-1">
            <button className={tabClass("today")} onClick={() => setActiveTab("today")}>
              {`Today's Plan`}
            </button>
            <button className={tabClass("saved")} onClick={() => setActiveTab("saved")}>
              Saved
            </button>
          </div>

          {/* sort */}
          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="text-xs text-gray-500">
              Sort By
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortKey)}
              className="rounded-xl border border-gray-800 bg-[#13161d] px-4 py-2 text-xs font-medium text-white outline-none transition-colors hover:border-[#C2F800] focus:border-[#C2F800]"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* list */}
        {sortedPlan.length > 0 ? (
          <div className="flex flex-col gap-4">
            {sortedPlan.map((items: IExercise) => (
              <FitnessListStyle
                key={items.id}
                items={items}
                onMarkDone={activeTab === "today" ? markDone : undefined}
                onRemove={(id) => removeFromPlan(id, activeTab)}
              />
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