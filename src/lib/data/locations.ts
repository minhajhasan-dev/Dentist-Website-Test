import type { Location } from './types'

export const locations: Location[] = [
  {
    id: 'main-office',
    name: 'BrightSide Dental Care – Downtown',
    address: {
      street: '123 Market Street, Suite 400',
      city: 'Springfield',
      state: 'CA',
      postalCode: '90001',
    },
    phone: '+1-555-0100',
    email: 'downtown@brightsidedental.example',
    geo: { lat: 34.0407, lng: -118.2468 },
    image: {
      url: 'https://images.unsplash.com/photo-1581594693700-85f6f1b06d7b?q=80&w=1600&auto=format&fit=crop',
      alt: 'Bright, modern dental clinic reception with friendly staff',
    },
    parking: 'Validated parking is available in the connected Market Street Garage. Street parking is metered.',
    directions:
      'We are located on Market Street between 1st and 2nd Ave. Take the elevator to the 4th floor; our suite is on the left.',
    hours: [
      { day: 'Monday', opens: '08:00', closes: '17:00' },
      { day: 'Tuesday', opens: '08:00', closes: '17:00' },
      { day: 'Wednesday', opens: '09:00', closes: '18:00' },
      { day: 'Thursday', opens: '08:00', closes: '17:00' },
      { day: 'Friday', opens: '08:00', closes: '15:00' },
      { day: 'Saturday', opens: null, closes: null },
      { day: 'Sunday', opens: null, closes: null },
    ],
  },
]
