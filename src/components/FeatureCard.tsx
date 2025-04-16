import type React from 'react';
import { Card } from '@/components/ui/card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="flex gap-4 items-start">
        <div className="flex-shrink-0 text-primary">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-accent mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </Card>
  );
}
