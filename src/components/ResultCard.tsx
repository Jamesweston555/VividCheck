import React from 'react';
import { Card } from '@/components/ui/card';

interface ResultCardProps {
  name: string;
  time: string;
  countryCode: string;
  phoneCode: string;
  phoneNumber: string;
}

export default function ResultCard({
  name,
  time,
  countryCode,
  phoneCode,
  phoneNumber
}: ResultCardProps) {
  return (
    <Card className="flex items-center justify-between p-3 border rounded-lg shadow-sm">
      <div className="flex items-center gap-3">
        <img
          src={`https://ext.same-assets.com/2758422361/${countryCode === 'us' ? '3645396687' : countryCode === 'ca' ? '662621210' : countryCode === 'mx' ? '466320698' : '3144875524'}.svg`}
          alt={`${countryCode.toUpperCase()} Flag`}
          className="h-5 w-6"
        />
        <div>
          <p className="font-medium text-sm">{name}</p>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-secondary">{phoneCode}</span>
        <span className="text-sm text-gray-600">{phoneNumber}</span>
      </div>
    </Card>
  );
}
