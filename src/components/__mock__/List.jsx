// Mock data for allReservations prop
export const allReservationsMock = [
  {
    id: 1,
    name: 'John Doe',
    username_id: 'johndoe123',
    item_id: 101,
    city: 'New York',
    date: '2023-10-15',
    removed: false,

  },
  {
    id: 2,
    name: 'Alice Smith',
    username_id: 'alicesmith456',
    item_id: 102,
    city: 'Los Angeles',
    date: '2023-10-20',
    removed: false,

  },
  // Add more reservation objects as needed
];

// Mock data for bikes prop
export const bikesMock = [
  {
    id: 101,
    name: 'Mountain Bike',
    description: 'A rugged mountain bike for outdoor adventures.',
    price: 599,
    image_url: '/images/mountain_bike.jpg',
    category: 'Mountain Bikes',
    city: 'New York',
  },
  {
    id: 102,
    name: 'Road Bike',
    description: 'A lightweight road bike for fast commuting.',
    price: 799,
    image_url: '/images/road_bike.jpg',
    category: 'Road Bikes',
    city: 'Los Angeles',
  },
  // Add more bike objects as needed
];
