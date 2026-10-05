import Image from 'next/image';
import Link from 'next/link';
import { FaRegClock, FaRegStar } from 'react-icons/fa';
import { TbFlameFilled } from 'react-icons/tb';
import { IoClose } from 'react-icons/io5';
import { FiCheck } from 'react-icons/fi';
import { IExercise } from '../types/IExercise';

type Props = {
  items: IExercise;
  onMarkDone?: (id: IExercise['id']) => void;
  onRemove?: (id: IExercise['id']) => void;
};

export default function FitnessListStyle({ items, onMarkDone, onRemove }: Props) {
  const { id, name, equipment, image, duration, caloriesBurned, rating } = items;

  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/5 bg-[#13161d] p-3">
      {/* Left: thumbnail + info */}
      <div className="flex min-w-0 items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={110}
          height={55}
          className="h-[55px] w-[110px] shrink-0 rounded-xl object-cover"
        />

        <div className="flex min-w-0 flex-col gap-1">
          <h2 className="truncate text-base font-bold uppercase tracking-wide text-white">
            {name}
          </h2>
          <p className="text-xs font-medium text-gray-500">{equipment}</p>

          <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
            <span className="flex items-center gap-1.5">
              <FaRegClock className="text-[#C2F800]" />
              {duration} min
            </span>
            <span className="flex items-center gap-1.5">
              <TbFlameFilled className="text-[#C2F800]" />
              {caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1.5">
              <FaRegStar className="text-[#C2F800]" />
              {rating}
            </span>
          </div>
        </div>
      </div>

      {/* Right: actions */}
      <div className="flex shrink-0 items-center gap-3">
        <Link href={`/workouts/${id}`}>
          <button className="rounded-full border border-white/20 px-5 py-2 text-xs font-medium text-gray-300 transition-colors duration-200 hover:border-[#C2F800] hover:text-[#C2F800]">
            View Details
          </button>
        </Link>

        {onMarkDone && (
          <button
            onClick={() => onMarkDone(id)}
            className="flex items-center gap-1.5 rounded-full bg-[#C2F800] px-5 py-2 text-xs font-semibold text-black transition-colors duration-200 hover:bg-[#d6ff3a]"
          >
            <FiCheck className="text-sm" />
            Mark as Done
          </button>
        )}

        {onRemove && (
          <button
            onClick={() => onRemove(id)}
            aria-label="Remove workout"
            className="text-gray-500 transition-colors hover:text-white"
          >
            <IoClose size={16} />
          </button>
        )}
      </div>
    </div>
  );
}