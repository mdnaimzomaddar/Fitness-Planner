
import FitnessCard from "../components/FitnessCard";
import HeroSection from "../components/HeroSection";

const getFitness = async() => {
    const respons = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const fitness = await respons.json()
    return fitness
}

const WorkoutsPage = async() => {
    const fitnessItems = await getFitness()
  return (
    <div className="bg-black">
        <HeroSection></HeroSection>
        <div>
            <div className="container mx-auto p-4">
                <h2 className="text-4xl md:text-5xl lg:text-4xl text-white font-black leading-tight tracking-tight">THE LIBRARY</h2>
                <p className="text-base md:text-lg text-[#9CA3AF] leading-relaxed">Twelve lifts covering every major muscle group.</p>
            </div>
            {/* Fitness */}
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-3 gap-6">
                    {fitnessItems.map((fitness) => <FitnessCard key={fitness.id} fitness = {fitness}></FitnessCard>)}
                </div>
            </div>
        </div>
    </div>
  );
};

export default WorkoutsPage;
