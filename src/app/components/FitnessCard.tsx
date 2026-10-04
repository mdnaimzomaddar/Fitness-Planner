import React from "react";
import { IExercise } from "../types/IExercise";
import Image from "next/image";
import { FaRegClock, FaRegStar } from "react-icons/fa";
import { TbFlameFilled } from "react-icons/tb";
import Link from "next/link";

const FitnessCard = ({fitness} : {fitness : IExercise}) => {
    const {name, image, muscleGroups, equipment, difficulty, duration, caloriesBurned, sets, reps, rating,} = fitness
  return (
    <div className="card bg-[#15171d] shadow-sm border-2 border-gray-800 overflow-hidden">
  {/* Image Container */}
  <figure className="w-full h-48 relative overflow-hidden">
    <Image
      src={image}
      alt={name}
      fill
      className="object-cover"
    />
  </figure>

  <div className="card-body p-6">
    <div className="flex justify-start items-center gap-2">
      {muscleGroups.map((items: string, inx: number) => (
        <span
          key={inx}
          className="bg-[#C2F800] text-[#111111] px-3 py-1 rounded-full text-[12px] font-bold uppercase tracking-wider"
        >
          {items}
        </span>
      ))}
    </div>

      <Link href={`/workouts/${fitness.id}`}>
            <h2 className="card-title text-2xl font-black text-white tracking-wide mt-1">{name}</h2>
      </Link>
    <p className="text-sm text-[#9CA3AF]">{equipment}</p>

    <div className="border-t border-gray-800 my-4"></div>


    <div className="flex items-center gap-4 text-xs sm:text-sm text-[#9CA3AF]">
      <div className="flex items-center gap-1.5">
        <span><FaRegClock /></span>
        <span>{duration} min</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span><TbFlameFilled /></span>
        <span>{caloriesBurned} kcal</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span><FaRegStar /></span>
        <span>{rating}</span>
      </div>
    </div>
  </div>
</div>
  );
};

export default FitnessCard;
