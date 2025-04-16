'use client';

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

interface Result {
  id: string;
  name: string;
  time: string;
  countryCode: string;
  phoneCode: string;
  phoneNumber: string;
}

function DynamicResults() {
  const [results, setResults] = React.useState<Result[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [slideKey, setSlideKey] = React.useState(0);

  const fetchResults = React.useCallback(async () => {
    try {
      const response = await fetch('/api/latest-results');
      const data = await response.json();
      setResults(prevResults => {
        // Keep track of shown IDs to avoid duplicates
        const shownIds = new Set(prevResults.map((r: Result) => r.id));
        const newResults = data.results.filter((r: Result) => !shownIds.has(r.id));
        
        // Combine old and new results, keeping most recent 6
        const combined = [...prevResults, ...newResults];
        return combined.slice(-6);
      });
      setSlideKey(prev => prev + 1);
    } catch (error) {
      console.error('Failed to fetch results:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchResults();
    // Fetch new results every 3-5 seconds
    const interval = setInterval(() => {
      fetchResults();
    }, 3000 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, [fetchResults]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
      {isLoading ? (
        // Show loading state
        Array.from({ length: 6 }).map((_, index) => (
          <ResultCard
            key={`loading-${index}`}
            name="Loading..."
            time="A minute ago"
            countryCode="us"
            phoneCode="+1"
            phoneNumber="XXX"
            isLoading={true}
          />
        ))
      ) : (
        results.map((result, index) => (
          <div
            key={`${result.id}-${slideKey}-${index}`}
            className="transform transition-all duration-500 ease-in-out"
            style={{
              animation: `slideIn 0.5s ease-out ${index * 0.1}s both`
            }}
          >
            <ResultCard
              name={result.name}
              time={result.time}
              countryCode={result.countryCode}
              phoneCode={result.phoneCode}
              phoneNumber={result.phoneNumber}
            />
          </div>
        ))
      )}
    </div>
  );
}

// Add the animation keyframes to your globals.css
const animationStyles = `
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

// Add the styles to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
if (typeof document !== 'undefined') {
  document.head.appendChild(styleSheet);
}

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

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-background/80 py-16">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl font-bold text-accent">
                Reverse Phone <span className="text-primary">Lookup</span>
              </h1>
              <p className="text-lg text-gray-600">
                Look up private any phone number to reveal its owner. Uncover full name, address, family members, social media profiles, email address, and location history.
              </p>
              <PhoneSearchForm />
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://ext.same-assets.com/2758422361/1039623347.svg"
                alt="Phone Lookup Illustration"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logo Bar */}
      <section className="py-8 border-t border-b border-gray-100 bg-white">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <img src="https://ext.same-assets.com/2758422361/3299597553.svg" alt="Fox Logo" className="h-5" />
            <img src="https://ext.same-assets.com/2758422361/1879644111.svg" alt="The Globe and Mail Logo" className="h-5" />
            <img src="https://ext.same-assets.com/2758422361/3538535022.svg" alt="Benzinga Logo" className="h-5" />
            <img src="https://ext.same-assets.com/2758422361/3073708953.svg" alt="Barchart Logo" className="h-5" />
            <img src="https://ext.same-assets.com/2758422361/1879644111.svg" alt="The Globe and Mail Logo" className="h-5" />
          </div>
        </div>
      </section>

      {/* What You Could Discover Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-accent mb-12">What You Could Discover</h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            A reverse phone lookup is a powerful online tool that allows you to uncover information associated with a phone number. By entering a number, you can access a detailed report compiled from various sources.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<User className="h-6 w-6" />}
              title="Full Name"
              description="Identify names potentially associated with the phone number."
            />
            <FeatureCard
              icon={<Home className="h-6 w-6" />}
              title="Home Address"
              description="Discover possible current and historical address information."
            />
            <FeatureCard
              icon={<User className="h-6 w-6" />}
              title="Family Members"
              description="Discover potential family members and relatives."
            />
            <FeatureCard
              icon={<Globe className="h-6 w-6" />}
              title="Social Media Profiles"
              description="Find associated social media profiles."
            />
            <FeatureCard
              icon={<Mail className="h-6 w-6" />}
              title="Email Addresses"
              description="Reveal any publicly available contact information."
            />
            <FeatureCard
              icon={<MapPin className="h-6 w-6" />}
              title="Location History"
              description="See information about potential prior locations and travel."
            />
            <FeatureCard
              icon={<Globe className="h-6 w-6" />}
              title="Web Activity"
              description="Collect real-time information from across the web."
            />
          </div>
        </div>
      </section>

      {/* Why Use Reverse Phone Lookup Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-accent mb-4">
            Why Use Reverse Phone <span className="text-primary">Lookup?</span>
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
            In today's digital world, having more information can help you make informed personal decisions. Our reverse phone lookup service can help you:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
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
              description="Get more control about individuals you're interacting with online for personal reasons."
            />
            <NumberedCard
              number={4}
              title="Investigate Suspicious Activity"
              description="Concerned about mysterious numbers? Our service can help you understand who might be trying to reach you."
            />
            <NumberedCard
              number={5}
              title="Monitor Your Online Presence"
              description="Search your own number to see what information is available about you online and identify potential leaks."
            />
          </div>
        </div>
      </section>

      {/* Additional Use Cases Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-wider">
              EXTRAS
            </span>
          </div>
          <h2 className="text-3xl font-bold text-center text-accent mb-12">
            Additional Use Cases
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <UseCase title="Verify sellers or buyers in personal online marketplace transactions." />
            <UseCase title="Research potential roommates." />
            <UseCase title="Identify the source of bothersome calls or messages." />
            <UseCase title="Verify the identity of your children's new friends' parents." />
            <UseCase title="Investigate potential catfishing in online communities." />
          </div>
        </div>
      </section>

      {/* 7-Day Trial Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-accent mb-12">
            Start Your 7-Day Trial
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="text-gray-600">
              <p>Get a 7-day trial for just $1.00. After trial, we'll charge $14.99/week until you cancel.</p>
              <a href="/en/pricing" className="text-primary hover:underline flex items-center mt-2">
                See our detailed pricing <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
            <Button className="rounded-full bg-secondary hover:bg-secondary/90 px-6">
              Try ClarityCheck
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-accent mb-3">
            <span className="text-primary">Thousands</span> Are Finding Clarity with Us
          </h2>
          <div className="flex justify-center items-center gap-2 mb-12">
            <span className="text-sm">Excellent</span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((num) => (
                <svg key={`star-${num}`} className="w-4 h-4 text-yellow-400 fill-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                </svg>
              ))}
            </div>
            <span className="text-sm">4.75 based on 338 reviews</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                location={testimonial.location}
                text={testimonial.text}
                date={testimonial.date}
                rating={testimonial.rating}
                verified={testimonial.verified}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Results Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Latest Results
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            Here are some of the latest results from our reverse phone lookup service in your region.
          </p>
          <DynamicResults />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold text-accent mb-4">
                Frequently<br />Asked<br />Questions
              </h2>
            </div>
            <div className="md:w-2/3">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
