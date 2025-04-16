import React from 'react';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  date: string;
  rating: number;
  verified: boolean;
}

export default function TestimonialCard({
  name,
  location,
  text,
  date,
  rating,
  verified
}: TestimonialCardProps) {
  const fullStars = Math.floor(rating);
  const stars = Array(5).fill(0).map((_, i) => i < fullStars);

  return (
    <Card className="p-5 border rounded-lg shadow-sm">
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center">
          {verified && (
            <div className="text-xs font-medium bg-green-100 text-green-700 px-2 py-0.5 rounded">
              Verified Customer
            </div>
          )}
        </div>
        <div className="flex gap-0.5">
          {stars.map((isFull, i) => (
            <Star
              key={`star-${i}-${isFull ? 'full' : 'empty'}`}
              className={`h-4 w-4 ${isFull ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <p className="text-sm text-gray-700 line-clamp-3">{text}</p>
        <div className="flex justify-between items-center text-xs text-gray-500 mt-auto">
          <span>{name}, {location}</span>
          <span>{date}</span>
        </div>
      </div>
    </Card>
  );
}
