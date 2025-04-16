import React from 'react';
import { Card } from '@/components/ui/card';

interface ResultCardProps {
  name: string;
  time: string;
  countryCode: string;
  phoneCode: string;
  phoneNumber: string;
  isLoading?: boolean;
}

export default function ResultCard({
  name,
  time,
  countryCode,
  phoneCode,
  phoneNumber,
  isLoading = false,
}: ResultCardProps) {
  return (
    <Card className={`p-4 transition-opacity duration-200 ${isLoading ? 'opacity-50' : ''}`}>
      <div className="flex items-center gap-3">
        <img
          src={`https://flagcdn.com/${countryCode}.svg`}
          alt={`${countryCode} flag`}
          className="w-6 h-4 object-cover rounded"
        />
        <div className="flex-1">
          <h3 className="font-medium text-sm">{name}</h3>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
        <div className="text-sm text-gray-600">
          {phoneCode} {phoneNumber}
        </div>
      </div>
    </Card>
  );
}
