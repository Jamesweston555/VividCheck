import React from 'react';
import PhoneSearchForm from '@/components/PhoneSearchForm';
import FeatureCard from '@/components/FeatureCard';
import NumberedCard from '@/components/NumberedCard';
import UseCase from '@/components/UseCase';
import FAQAccordion from '@/components/FAQAccordion';
import TestimonialCard from '@/components/TestimonialCard';
import ResultCard from '@/components/ResultCard';
import { Button } from '@/components/ui/button';
import {
  User,
  Home,
  Mail,
  MapPin,
  Globe,
  FileText,
  Search,
  ChevronRight
} from 'lucide-react';

export default function HomePage() {
  // Sample data for FAQ
  const faqItems = [
    {
      id: 'faq-1',
      question: 'Is it free to use?',
      answer: 'ClarityCheck offers a 7-day trial for just $1.00. After this trial period, you will be charged a subscription fee unless you cancel during the trial period.',
    },
    {
      id: 'faq-2',
      question: 'How do I cancel my Subscription?',
      answer: 'You can cancel your subscription at any time by visiting your account settings or contacting our customer support team at 24/7/365.',
    },
    {
      id: 'faq-3',
      question: 'What is a reverse phone lookup?',
      answer: 'A reverse phone lookup is a service that allows you to find information about the owner of a phone number. By entering a phone number, you can access various details such as the owner\'s name, address, and more.',
    },
    {
      id: 'faq-4',
      question: 'How does a reverse phone lookup work?',
      answer: 'When you enter a phone number, our system searches through various databases and public records to gather information associated with that number. We compile this data into a comprehensive report for you.',
    },
    {
      id: 'faq-5',
      question: 'Is a reverse phone lookup legal?',
      answer: 'Yes, reverse phone lookups are legal when used for legitimate purposes. However, the information should not be used to make decisions about consumer credit, employment, insurance, tenant screening, or any purpose that would require FCRA compliance.',
    },
    {
      id: 'faq-6',
      question: 'What information can I find with a reverse phone lookup?',
      answer: 'With our service, you can potentially find the owner\'s name, address, email addresses, social media profiles, family members, and location history associated with the phone number.',
    },
  ];

  // Sample testimonials
  const testimonials = [
    {
      id: 'testimonial-1',
      name: 'Jennifer H.',
      location: 'United States',
      text: 'Some time ago, I discovered that contacting a company directly is the most efficient way to resolve issues. With ClarityCheck, I have access to everything I need to reach everything in one place.',
      date: '2 days ago',
      rating: 5,
      verified: true,
    },
    {
      id: 'testimonial-2',
      name: 'Michael F.',
      location: 'United States',
      text: "This service has been a game changer for verifying people's contact information before any searches, refunds, or for background checks. It's a huge time-saver.",
      date: '1 day ago',
      rating: 5,
      verified: true,
    },
    {
      id: 'testimonial-3',
      name: 'Sarah L.',
      location: 'United Kingdom',
      text: 'I wanted to praise and thank you for the exceptional service that Clarity Check provides. This is by far my favorite tool for managing and finding accurate information.',
      date: '3 days ago',
      rating: 5,
      verified: true,
    },
  ];

  // Sample latest results
  const latestResults = [
    {
      id: 'result-1',
      name: 'Hernandez Margarita',
      time: 'A minute ago',
      countryCode: 'mx',
      phoneCode: '+52',
      phoneNumber: '157',
    },
    {
      id: 'result-2',
      name: 'Brown William',
      time: 'A minute ago',
      countryCode: 'ca',
      phoneCode: '+1',
      phoneNumber: '372',
    },
    {
      id: 'result-3',
      name: 'Perez Veronica',
      time: 'A minute ago',
      countryCode: 'mx',
      phoneCode: '+52',
      phoneNumber: '510',
    },
    {
      id: 'result-4',
      name: 'Smith Elijah',
      time: 'A minute ago',
      countryCode: 'us',
      phoneCode: '+1',
      phoneNumber: '282',
    },
    {
      id: 'result-5',
      name: 'Davis Emma',
      time: 'A minute ago',
      countryCode: 'us',
      phoneCode: '+1',
      phoneNumber: '621',
    },
    {
      id: 'result-6',
      name: 'Jones Noah',
      time: 'A minute ago',
      countryCode: 'gb',
      phoneCode: '+44',
      phoneNumber: '907',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-background/80 py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8">
              <h1 className="text-4xl md:text-6xl font-bold text-accent leading-tight">
                Reverse Phone <span className="text-primary">Lookup</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Look up any phone number to reveal its owner. Uncover full name, address, family members, social media profiles, email address, and location history.
              </p>
              <div className="w-full max-w-lg">
                <PhoneSearchForm />
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://ext.same-assets.com/2758422361/1039623347.svg"
                alt="Phone Lookup Illustration"
                className="max-w-full h-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logo Bar */}
      <section className="py-12 border-t border-b border-gray-100 bg-white">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <img src="https://ext.same-assets.com/2758422361/3299597553.svg" alt="Fox Logo" className="h-6 hover:opacity-100 transition-opacity" />
            <img src="https://ext.same-assets.com/2758422361/1879644111.svg" alt="The Globe and Mail Logo" className="h-6 hover:opacity-100 transition-opacity" />
            <img src="https://ext.same-assets.com/2758422361/3538535022.svg" alt="Benzinga Logo" className="h-6 hover:opacity-100 transition-opacity" />
            <img src="https://ext.same-assets.com/2758422361/3073708953.svg" alt="Barchart Logo" className="h-6 hover:opacity-100 transition-opacity" />
            <img src="https://ext.same-assets.com/2758422361/1879644111.svg" alt="The Globe and Mail Logo" className="h-6 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>

      {/* What You Could Discover Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-accent mb-6">What You Could Discover</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
            A reverse phone lookup is a powerful online tool that allows you to uncover information associated with a phone number. By entering a number, you can access a detailed report compiled from various sources.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<User className="h-8 w-8" />}
              title="Full Name"
              description="Identify names potentially associated with the phone number."
            />
            <FeatureCard
              icon={<Home className="h-8 w-8" />}
              title="Home Address"
              description="Discover possible current and historical address information."
            />
            <FeatureCard
              icon={<User className="h-8 w-8" />}
              title="Family Members"
              description="Discover potential family members and relatives."
            />
            <FeatureCard
              icon={<Globe className="h-8 w-8" />}
              title="Social Media Profiles"
              description="Find associated social media profiles."
            />
            <FeatureCard
              icon={<Mail className="h-8 w-8" />}
              title="Email Addresses"
              description="Reveal any publicly available contact information."
            />
            <FeatureCard
              icon={<MapPin className="h-8 w-8" />}
              title="Location History"
              description="See information about potential prior locations and travel."
            />
          </div>
        </div>
      </section>

      {/* Why Use Reverse Phone Lookup Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-accent mb-6">
            Why Use Reverse Phone <span className="text-primary">Lookup?</span>
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
            In today's digital world, having more information can help you make informed personal decisions. Our reverse phone lookup service can help you:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            <NumberedCard
              number={1}
              title="Identify Unknown Callers"
              description="Put a name to those mystery numbers in your call log."
            />
            <NumberedCard
              number={2}
              title="Reconnect with Lost Contacts"
              description="Find current information about old acquaintances and friends with outdated phone numbers."
            />
            <NumberedCard
              number={3}
              title="Verify Online Identities"
              description="Confirm the identity of people you meet online before meeting in person."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-accent mb-16">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-accent mb-16">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Latest Results Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-accent mb-16">Latest Lookups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestResults.map((result) => (
              <ResultCard key={result.id} {...result} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
