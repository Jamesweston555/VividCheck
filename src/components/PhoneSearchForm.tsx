import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronDown } from 'lucide-react';

export default function PhoneSearchForm() {
  return (
    <div className="w-full max-w-md">
      <div className="flex gap-4 mb-4 items-center">
        <div className="flex-shrink-0 flex items-center gap-1 bg-gray-100 px-3 py-1 rounded cursor-pointer">
          <img
            src="https://ext.same-assets.com/2758422361/3645396687.svg"
            alt="US Flag"
            className="h-5 w-6"
          />
          <span className="text-sm">US</span>
          <ChevronDown className="h-4 w-4 ml-1" />
        </div>
        <div className="flex-1">
          <Input
            type="tel"
            placeholder="Phone Number"
            className="w-full border-2 focus-visible:ring-primary rounded-full pl-5"
          />
        </div>
      </div>
      <Button className="w-full rounded-full bg-secondary hover:bg-secondary/90">
        Lookup
      </Button>
    </div>
  );
}
