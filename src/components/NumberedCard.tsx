import React from 'react';
import { Card } from '@/components/ui/card';

interface NumberedCardProps {
  number: number;
  title: string;
  description: string;
}

export default function NumberedCard({ number, title, description }: NumberedCardProps) {
  return (
    <Card className="relative p-6 pt-12 border rounded-xl shadow-sm h-full bg-white">
      <div className="absolute -top-6 left-6 bg-white rounded-full w-12 h-12 border-2 border-gray-100 flex items-center justify-center text-lg font-semibold text-primary">
        {number}
      </div>
      <h3 className="font-medium text-accent mb-3">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </Card>
  );
}
