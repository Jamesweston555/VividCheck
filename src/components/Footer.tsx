import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 pt-12 mt-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-8 pb-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="https://ext.same-assets.com/2758422361/449326041.svg"
                alt="ClarityCheck Logo"
                className="h-6"
              />
            </Link>
            <p className="text-sm text-gray-600 max-w-xs">
              Copyright © 2024-2025 ClarityCheck™
              <br />
              ClarityCheck Inc, 8 The Green, Ste R, Dover, DE 19901, USA
              <br />
              Wtech Europe Ltd, Villa Malitah The Village, Triq Il-Mediterran, San Ġiljan STJ 1870 Malta
            </p>
            <div className="flex gap-3">
              <Link href="https://instagram.com" aria-label="Instagram">
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </Link>
              <Link href="https://facebook.com" aria-label="Facebook">
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-medium text-accent">Customer Support</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/en/how-to-cancel" className="text-sm text-gray-600 hover:text-primary">
                    How to Cancel
                  </Link>
                </li>
                <li className="flex gap-2 items-center">
                  <div className="bg-gray-200 p-1 rounded-full w-8 h-8 flex items-center justify-center text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm">Customer Support</span>
                    <span className="text-xs text-gray-500">24/7/365</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-medium text-accent">Legal</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/en/privacy-policy-eu" className="text-sm text-gray-600 hover:text-primary">
                    Privacy Policy (EU & UK Customers)
                  </Link>
                </li>
                <li>
                  <Link href="/en/privacy-policy-us" className="text-sm text-gray-600 hover:text-primary">
                    Privacy Policy (US Customers)
                  </Link>
                </li>
                <li>
                  <Link href="/en/terms" className="text-sm text-gray-600 hover:text-primary">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/en/cookie-policy" className="text-sm text-gray-600 hover:text-primary">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/en/refund-policy" className="text-sm text-gray-600 hover:text-primary">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-medium text-accent">General</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/en/help-center" className="text-sm text-gray-600 hover:text-primary">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/en/pricing" className="text-sm text-gray-600 hover:text-primary">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/en/reviews" className="text-sm text-gray-600 hover:text-primary">
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-medium text-accent">Services</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/en" className="text-sm text-gray-600 hover:text-primary">
                    Phone Lookup
                  </Link>
                </li>
                <li>
                  <Link href="/en/email-lookup" className="text-sm text-gray-600 hover:text-primary">
                    Email Lookup
                  </Link>
                </li>
                <li>
                  <Link href="/en/image-lookup" className="text-sm text-gray-600 hover:text-primary">
                    Image Lookup
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t py-6">
          <p className="text-xs text-gray-500 mb-4">
            Disclaimer: You may not use ClarityCheck.com or the information we provide to make decisions about consumer credit, employment, insurance, tenant screening, or any other purpose that would require FCRA compliance. ClarityCheck.com does not provide consumer credit reports and is not a consumer credit reporting agency. (These terms have special meanings under the Fair Credit Reporting Act, 15 USC 1681 et seq., ("FCRA"), which are incorporated herein by reference.) While we do pride ourselves on our thoroughness, the information available on our website or that you receive from us at times may not be 100% accurate, complete, or up to date, so do not use it as a substitute for your own due diligence, especially if you have concerns about a person's criminal history. ClarityCheck.com does not make any representation or warranty about the character or the integrity of the person, business, or entity about which you inquire, or the information available through our website or that you receive from us or any of our representatives.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              All rights reserved. All trademarks referenced herein are the properties of their respective owners.
            </p>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <button className="flex items-center gap-1 text-sm text-gray-600 py-1 px-3 border rounded">
                  English <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            <img src="https://ext.same-assets.com/3844046773/1463066018.svg" alt="Visa" className="h-8" />
            <img src="https://ext.same-assets.com/3844046773/2733478665.svg" alt="Mastercard" className="h-8" />
            <img src="https://ext.same-assets.com/3844046773/3183551982.svg" alt="PayPal" className="h-8" />
            <img src="https://ext.same-assets.com/3844046773/1275407963.svg" alt="Apple Pay" className="h-8" />
            <img src="https://ext.same-assets.com/3844046773/1696603795.svg" alt="Google Pay" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
}
