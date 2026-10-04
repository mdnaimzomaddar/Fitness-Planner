import TodayplanButton from '@/app/components/TodayplanButton';
import { IExercise } from '@/app/types/IExercise';
import Image from 'next/image';
import SavePlanButton from '../../components/SavePlanButton';

const getFitnessID = async (fitnessId: number | string) => {
  const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${fitnessId}`);
  
  if (!response.ok) {
    return null;
  }

  const singleItem: IExercise = await response.json();
  return singleItem;
};

const DetailsPage = async ({ params }: { params: Promise<{ fitenssid: string }> }) => {
  const { fitenssid } = await params;
  
  const singleFitness: IExercise | null= await getFitnessID(fitenssid);

  if (!singleFitness) {
    return <div className="text-white text-center py-20">Exercise not found!</div>;
  }

  return (
    <div className="bg-[#0e1015] min-h-screen text-white py-10 px-4">
      <div className="container mx-auto max-w-6xl bg-[#15171d] p-6 md:p-10 rounded-2xl border border-gray-800">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Left Column: Image */}
          <div className="w-full h-[450px] md:h-[550px] relative rounded-2xl overflow-hidden border border-gray-800">
            <Image
              src={singleFitness.image}
              alt={singleFitness.name}
              fill
            />
          </div>

          {/* Right Column: Details */}
          <div className="space-y-6">   
            <div>
              <h1 className="text-3xl md:text-4xl font-black uppercase tracking-wide">
                {singleFitness.name}
              </h1>
              <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                {singleFitness.description}
              </p>
            </div>

            {/* Muscle Groups Badges */}
            <div className="flex gap-2">
              {singleFitness.muscleGroups?.map((group, idx) => (
                <span
                  key={idx}
                  className="bg-[#C2F800] text-black font-bold text-xs px-3 py-1 rounded-full uppercase"
                >
                  {group}
                </span>
              ))}
            </div>

            {/* Table Spec Box */}
            <div className="bg-[#1a1d24] rounded-xl border border-gray-800/60 p-4 divide-y divide-gray-800/60 text-sm">
              <div className="flex justify-between py-2.5">
                <span className="text-gray-400 uppercase text-xs font-semibold">Equipment</span>
                <span className="font-medium text-gray-200">{singleFitness.equipment}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-gray-400 uppercase text-xs font-semibold">Difficulty</span>
                <span className="font-medium text-gray-200">{singleFitness.difficulty}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-gray-400 uppercase text-xs font-semibold">Sets</span>
                <span className="font-medium text-gray-200">{singleFitness.sets}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-gray-400 uppercase text-xs font-semibold">Reps</span>
                <span className="font-medium text-gray-200">{singleFitness.reps}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-gray-400 uppercase text-xs font-semibold">Duration</span>
                <span className="font-medium text-gray-200">{singleFitness.duration} min</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-gray-400 uppercase text-xs font-semibold">Calories</span>
                <span className="font-medium text-gray-200">{singleFitness.caloriesBurned} kcal</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-gray-400 uppercase text-xs font-semibold">Rating</span>
                <span className="font-medium text-gray-200">{singleFitness.rating}</span>
              </div>
            </div>

            {/* Instructions */}
            {singleFitness.instructions && (
              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">Instructions</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300 leading-relaxed">
                  {singleFitness.instructions.map((step, idx) => (
                    <li key={idx} className="pl-1">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <TodayplanButton fitness={singleFitness}></TodayplanButton>
              <SavePlanButton fitness={singleFitness}></SavePlanButton>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default DetailsPage;