import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="w-full py-4 bg-white">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://ext.same-assets.com/2758422361/449326041.svg"
            alt="ClarityCheck Logo"
            className="h-6"
          />
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/en/login">
            <Button variant="outline" className="rounded-full bg-gray-100 hover:bg-gray-200 text-accent border-0">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
