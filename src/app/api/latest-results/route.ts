import { NextResponse } from 'next/server';

// Sample data organized by regions
const resultsByRegion = {
  northAmerica: [
    {
      id: 'result-1',
      name: 'Brown William',
      time: 'A minute ago',
      countryCode: 'ca',
      phoneCode: '+1',
      phoneNumber: '372',
    },
    {
      id: 'result-2',
      name: 'Smith Elijah',
      time: 'A minute ago',
      countryCode: 'us',
      phoneCode: '+1',
      phoneNumber: '282',
    },
    {
      id: 'result-3',
      name: 'Davis Emma',
      time: 'A minute ago',
      countryCode: 'us',
      phoneCode: '+1',
      phoneNumber: '621',
    },
  ],
  europe: [
    {
      id: 'result-1',
      name: 'Jones Noah',
      time: 'A minute ago',
      countryCode: 'gb',
      phoneCode: '+44',
      phoneNumber: '907',
    },
    {
      id: 'result-2',
      name: 'Schmidt Hans',
      time: 'A minute ago',
      countryCode: 'de',
      phoneCode: '+49',
      phoneNumber: '155',
    },
    {
      id: 'result-3',
      name: 'Dubois Marie',
      time: 'A minute ago',
      countryCode: 'fr',
      phoneCode: '+33',
      phoneNumber: '644',
    },
  ],
  latinAmerica: [
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
      name: 'Perez Veronica',
      time: 'A minute ago',
      countryCode: 'mx',
      phoneCode: '+52',
      phoneNumber: '510',
    },
    {
      id: 'result-3',
      name: 'Silva João',
      time: 'A minute ago',
      countryCode: 'br',
      phoneCode: '+55',
      phoneNumber: '321',
    },
  ],
  asia: [
    {
      id: 'result-1',
      name: 'Wang Wei',
      time: 'A minute ago',
      countryCode: 'cn',
      phoneCode: '+86',
      phoneNumber: '135',
    },
    {
      id: 'result-2',
      name: 'Kim Min-ji',
      time: 'A minute ago',
      countryCode: 'kr',
      phoneCode: '+82',
      phoneNumber: '445',
    },
    {
      id: 'result-3',
      name: 'Tanaka Yuki',
      time: 'A minute ago',
      countryCode: 'jp',
      phoneCode: '+81',
      phoneNumber: '789',
    },
  ],
};

export async function GET(request: Request) {
  try {
    // Get IP from request headers
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip');
    
    // Call IP geolocation API
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await response.json();
    
    // Determine region based on country code
    let region = 'northAmerica'; // default
    const countryCode = data.country_code?.toLowerCase();
    
    if (['gb', 'de', 'fr', 'es', 'it', 'nl'].includes(countryCode)) {
      region = 'europe';
    } else if (['mx', 'br', 'ar', 'co', 'pe'].includes(countryCode)) {
      region = 'latinAmerica';
    } else if (['cn', 'jp', 'kr', 'in', 'sg'].includes(countryCode)) {
      region = 'asia';
    }
    
    return NextResponse.json({
      results: resultsByRegion[region as keyof typeof resultsByRegion],
    });
  } catch (error) {
    // Return North American results as fallback
    return NextResponse.json({
      results: resultsByRegion.northAmerica,
    });
  }
} 