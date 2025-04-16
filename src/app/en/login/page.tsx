import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-sm border">
        <h1 className="text-2xl font-bold text-center text-accent mb-8">
          Sign Up
        </h1>

        <div className="mb-4">
          <Input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-md"
          />
        </div>

        <Button className="w-full bg-secondary hover:bg-secondary/90 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          Continue with Email
        </Button>

        <div className="border-t pt-6">
          <p className="text-center text-gray-600 mb-4">
            Don&apos;t have an account? <Link href="/" className="text-primary hover:underline">Start your first lookup</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
