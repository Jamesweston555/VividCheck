import React from 'react';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface UseCaseProps {
  title: string;
}

export default function UseCase({ title }: UseCaseProps) {
  return (
    <Card className="p-4 border rounded-lg shadow-sm bg-white">
      <div className="flex gap-3 items-start">
        <div className="flex-shrink-0 rounded-full bg-primary/10 p-1">
          <Check className="h-4 w-4 text-primary" />
        </div>
        <p className="text-sm text-gray-700">{title}</p>
      </div>
    </Card>
  );
}
