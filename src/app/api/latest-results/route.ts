import { NextResponse } from 'next/server';

// Sample data organized by regions with more variety and neighboring countries
const resultsByRegion = {
  seAsia: [
    { id: '1', name: 'Tan Wei Ming', countryCode: 'sg', phoneCode: '+65', phoneNumber: '9123' },
    { id: '2', name: 'Somchai Patel', countryCode: 'th', phoneCode: '+66', phoneNumber: '8234' },
    { id: '3', name: 'Nguyen Van Minh', countryCode: 'vn', phoneCode: '+84', phoneNumber: '7345' },
    { id: '4', name: 'Lee Jin Tao', countryCode: 'my', phoneCode: '+60', phoneNumber: '6456' },
    { id: '5', name: 'Maria Santos', countryCode: 'ph', phoneCode: '+63', phoneNumber: '5567' },
    { id: '6', name: 'Siti Rahman', countryCode: 'id', phoneCode: '+62', phoneNumber: '4678' },
  ],
  eastAsia: [
    { id: '1', name: 'Wang Wei', countryCode: 'cn', phoneCode: '+86', phoneNumber: '1357' },
    { id: '2', name: 'Kim Min-ji', countryCode: 'kr', phoneCode: '+82', phoneNumber: '2468' },
    { id: '3', name: 'Tanaka Yuki', countryCode: 'jp', phoneCode: '+81', phoneNumber: '3579' },
    { id: '4', name: 'Lee Joon-ho', countryCode: 'kr', phoneCode: '+82', phoneNumber: '4680' },
    { id: '5', name: 'Liu Yang', countryCode: 'cn', phoneCode: '+86', phoneNumber: '5791' },
    { id: '6', name: 'Sato Haruki', countryCode: 'jp', phoneCode: '+81', phoneNumber: '6802' },
  ],
  europe: [
    { id: '1', name: 'James Smith', countryCode: 'gb', phoneCode: '+44', phoneNumber: '7123' },
    { id: '2', name: 'Sophie Martin', countryCode: 'fr', phoneCode: '+33', phoneNumber: '8234' },
    { id: '3', name: 'Hans Schmidt', countryCode: 'de', phoneCode: '+49', phoneNumber: '9345' },
    { id: '4', name: 'Isabella Romano', countryCode: 'it', phoneCode: '+39', phoneNumber: '1456' },
    { id: '5', name: 'Lars Nielsen', countryCode: 'dk', phoneCode: '+45', phoneNumber: '2567' },
    { id: '6', name: 'Maria Garcia', countryCode: 'es', phoneCode: '+34', phoneNumber: '3678' },
  ],
  northAmerica: [
    { id: '1', name: 'John Davis', countryCode: 'us', phoneCode: '+1', phoneNumber: '4123' },
    { id: '2', name: 'Emily Wilson', countryCode: 'ca', phoneCode: '+1', phoneNumber: '5234' },
    { id: '3', name: 'Michael Brown', countryCode: 'us', phoneCode: '+1', phoneNumber: '6345' },
    { id: '4', name: 'Sarah Thompson', countryCode: 'ca', phoneCode: '+1', phoneNumber: '7456' },
    { id: '5', name: 'David Martinez', countryCode: 'mx', phoneCode: '+52', phoneNumber: '8567' },
    { id: '6', name: 'Ana Rodriguez', countryCode: 'mx', phoneCode: '+52', phoneNumber: '9678' },
  ],
  oceania: [
    { id: '1', name: 'Jack Wilson', countryCode: 'au', phoneCode: '+61', phoneNumber: '1234' },
    { id: '2', name: 'Emma Thompson', countryCode: 'nz', phoneCode: '+64', phoneNumber: '2345' },
    { id: '3', name: 'Oliver Smith', countryCode: 'au', phoneCode: '+61', phoneNumber: '3456' },
    { id: '4', name: 'Isabella Brown', countryCode: 'nz', phoneCode: '+64', phoneNumber: '4567' },
    { id: '5', name: 'William Davis', countryCode: 'au', phoneCode: '+61', phoneNumber: '5678' },
    { id: '6', name: 'Sophie Clark', countryCode: 'nz', phoneCode: '+64', phoneNumber: '6789' },
  ],
};

// Helper function to get random results from multiple regions
function getRandomResults(primaryRegion: string, count: number = 6) {
  const regions = {
    seAsia: ['seAsia', 'eastAsia', 'oceania'],
    eastAsia: ['eastAsia', 'seAsia', 'oceania'],
    europe: ['europe', 'northAmerica'],
    northAmerica: ['northAmerica', 'europe'],
    oceania: ['oceania', 'seAsia', 'eastAsia'],
  };

  const selectedRegions = regions[primaryRegion as keyof typeof regions] || ['northAmerica'];
  let allResults: any[] = [];
  
  // Get more results from primary region
  const primaryResults = [...resultsByRegion[primaryRegion as keyof typeof resultsByRegion]];
  allResults = allResults.concat(primaryResults);

  // Add some results from related regions
  selectedRegions.slice(1).forEach(region => {
    const regionResults = resultsByRegion[region as keyof typeof resultsByRegion];
    allResults = allResults.concat(regionResults.slice(0, 2));
  });

  // Shuffle results
  allResults.sort(() => Math.random() - 0.5);

  // Add timestamps
  return allResults.slice(0, count).map(result => ({
    ...result,
    time: 'A minute ago'
  }));
}

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
    
    if (['sg', 'th', 'vn', 'my', 'ph', 'id'].includes(countryCode)) {
      region = 'seAsia';
    } else if (['cn', 'jp', 'kr', 'tw', 'hk'].includes(countryCode)) {
      region = 'eastAsia';
    } else if (['gb', 'de', 'fr', 'es', 'it', 'nl', 'dk', 'se', 'no', 'fi'].includes(countryCode)) {
      region = 'europe';
    } else if (['au', 'nz', 'fj'].includes(countryCode)) {
      region = 'oceania';
    }
    
    const results = getRandomResults(region);
    
    return NextResponse.json({ results });
  } catch (error) {
    console.error('Error fetching results:', error);
    return NextResponse.json({
      results: getRandomResults('northAmerica'),
    });
  }
} 