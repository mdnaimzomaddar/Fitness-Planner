import { IExercise } from "../types/IExercise";

const PlanSummary = ({ plan }: { plan: IExercise[] }) => {
  const totalDuration = plan.reduce((sum, item) => sum + item.duration, 0);
  const totalCalories = plan.reduce((sum, item) => sum + item.caloriesBurned, 0);

  return (
    <div className="grid grid-cols-3 rounded-2xl border border-gray-800 bg-[#13161d] p-6">
      <div className="pr-6">
        <p className="text-xs text-gray-500">Exercises</p>
        <p className="text-4xl font-bold text-[#C2F800]">{plan.length}</p>
      </div>

      <div className="border-l border-gray-800 px-6">
        <p className="text-xs text-gray-500">Minutes</p>
        <p className="text-4xl font-bold text-white">{totalDuration}</p>
      </div>

      <div className="border-l border-gray-800 pl-6">
        <p className="text-xs text-gray-500">Calories</p>
        <p className="text-4xl font-bold text-white">{totalCalories}</p>
      </div>
    </div>
  );
};

export default PlanSummary;