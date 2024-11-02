import TicketEnum from '../enums/TicketEnum';
import { ITicket } from '../interfaces/ITicket';
import DummyConcerBannerImage from '../assets/images/festival-rectangle.png';
import VenueImage from '../assets/images/venue.png';
import MoviePoster from '../assets/images/movie-poster.webp';

export const TICKET_LIST: ITicket[] = [
  // Dummy Concert Tickets
  {
    id: '1',
    name: 'Rock Concert',
    description: 'Join us for an amazing night of rock music!',
    imageUrl: DummyConcerBannerImage,
    address: '123 Rock St, Music City',
    ticketType: TicketEnum.CONCERT,
    concert: {
      concertDate: '2024-12-01',
      concertTime: '20:00',
      concertLocation: 'Music Arena',
      venueImage: VenueImage,
      ticketTypeCount: 100,
      startingDatePeriod: '2024-10-01',
      endDatePeriod: '2024-11-30',
      ticketTypeList: [
        { id: '1', name: 'General', price: 70, quotas: 50 },
        { id: '2', name: 'VIP', price: 150, quotas: 50 },
      ],
    },
  },
  {
    id: '2',
    name: 'Jazz Night',
    description: 'Experience the smooth sounds of jazz.',
    imageUrl: '../assets/images/dummy-image.png',
    address: '456 Jazz Ave, Music City',
    ticketType: TicketEnum.CONCERT,
    concert: {
      concertDate: '2024-12-05',
      concertTime: '19:00',
      concertLocation: 'Jazz Club',
      venueImage: '../assets/images/dummy-image.png',
      ticketTypeCount: 80,
      startingDatePeriod: '2024-10-05',
      endDatePeriod: '2024-11-30',
      ticketTypeList: [
        { id: '1', name: 'Front Row', price: 120, quotas: 20 },
        { id: '2', name: 'Standard', price: 50, quotas: 60 },
      ],
    },
  },
  {
    id: '3',
    name: 'Classical Evening',
    description: 'An evening of classical music by renowned artists.',
    imageUrl: '../assets/images/dummy-image.png',
    address: '789 Symphony Rd, Music City',
    ticketType: TicketEnum.CONCERT,
    concert: {
      concertDate: '2024-12-10',
      concertTime: '18:30',
      concertLocation: 'Symphony Hall',
      venueImage: '../assets/images/dummy-image.png',
      ticketTypeCount: 120,
      startingDatePeriod: '2024-10-10',
      endDatePeriod: '2024-12-01',
      ticketTypeList: [
        { id: '1', name: 'Orchestra', price: 140, quotas: 30 },
        { id: '2', name: 'Balcony', price: 60, quotas: 90 },
      ],
    },
  },
  {
    id: '4',
    name: 'Pop Concert',
    description: 'Catch your favorite pop stars live!',
    imageUrl: '../assets/images/dummy-image.png',
    address: '321 Pop Blvd, Music City',
    ticketType: TicketEnum.CONCERT,
    concert: {
      concertDate: '2024-12-15',
      concertTime: '21:00',
      concertLocation: 'Pop Venue',
      venueImage: '../assets/images/dummy-image.png',
      ticketTypeCount: 150,
      startingDatePeriod: '2024-10-15',
      endDatePeriod: '2024-12-10',
      ticketTypeList: [
        { id: '1', name: 'Front Row', price: 180, quotas: 40 },
        {
          id: '2',
          name: 'General Admission',
          price: 75,
          quotas: 110,
        },
      ],
    },
  },

  // Dummy Movie Tickets
  {
    id: '5',
    name: 'Avengers: Endgame',
    description: 'The epic conclusion to the Marvel saga.',
    imageUrl: MoviePoster,
    address: 'Cinema Complex, 100 Movie St',
    ticketType: TicketEnum.MOVIE,
    movie: {
      cinemaName: 'Cineplex 1',
      cinemaLocation: 'Cinema City',
      date: '2024-11-10',
      time: '19:00',
      theathreNumber: '3',
      movieGenre: ['Action', 'Adventure', 'Horror', 'Romance'],
      ratingAge: 'PG-13',
      movieLanguage: 'English',
      movieTrailer: '../assets/images/dummy-image.png',
      movieDuration: '3h 2m',
      movieDirector: 'Anthony Russo',
      movieStars: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson'],
      ticketPrice: '12.00',
    },
  },
  {
    id: '6',
    name: 'The Lion King',
    description: "Experience the circle of life with Disney's classic.",
    imageUrl: '../assets/images/dummy-image.png',
    address: 'Cinema Complex, 100 Movie St',
    ticketType: TicketEnum.MOVIE,
    movie: {
      cinemaName: 'Cineplex 2',
      cinemaLocation: 'Cinema City',
      date: '2024-11-12',
      time: '15:00',
      theathreNumber: '5',
      movieGenre: ['Animation', 'Adventure'],
      ratingAge: 'G',
      movieLanguage: 'English',
      movieTrailer: '../assets/images/dummy-image.png',
      movieDuration: '1h 58m',
      movieDirector: 'Jon Favreau',
      movieStars: ['Donald Glover', 'Beyoncé', 'James Earl Jones'],
      ticketPrice: '10.00',
    },
  },
  {
    id: '7',
    name: 'Inception',
    description:
      'A mind-bending thriller that will leave you questioning reality.',
    imageUrl: '../assets/images/dummy-image.png',
    address: 'Cinema Complex, 100 Movie St',
    ticketType: TicketEnum.MOVIE,
    movie: {
      cinemaName: 'Cineplex 3',
      cinemaLocation: 'Cinema City',
      date: '2024-11-15',
      time: '21:00',
      theathreNumber: '1',
      movieGenre: ['Sci-Fi', 'Action'],
      ratingAge: 'PG-13',
      movieLanguage: 'English',
      movieTrailer: '../assets/images/dummy-image.png',
      movieDuration: '2h 28m',
      movieDirector: 'Christopher Nolan',
      movieStars: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
      ticketPrice: '14.00',
    },
  },
  {
    id: '8',
    name: 'Frozen II',
    description: 'Join Anna and Elsa on a new adventure.',
    imageUrl: '../assets/images/dummy-image.png',
    address: 'Cinema Complex, 100 Movie St',
    ticketType: TicketEnum.MOVIE,
    movie: {
      cinemaName: 'Cineplex 4',
      cinemaLocation: 'Cinema City',
      date: '2024-11-20',
      time: '13:00',
      theathreNumber: '4',
      movieGenre: ['Animation', 'Musical'],
      ratingAge: 'PG',
      movieLanguage: 'English',
      movieTrailer: '../assets/images/dummy-image.png',
      movieDuration: '1h 43m',
      movieDirector: 'Chris Buck',
      movieStars: ['Kristen Bell', 'Idina Menzel', 'Josh Gad'],
      ticketPrice: '11.00',
    },
  },

  // Dummy Tourist Attraction Tickets
  {
    id: '9',
    name: 'Eiffel Tower',
    description: 'Visit the iconic Eiffel Tower in Paris.',
    imageUrl: '../assets/images/dummy-image.png',
    address: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France',
    ticketType: TicketEnum.TOURIST_ATTRACTION,
    touristAttraction: {
      ticketPrice: '20.00',
    },
  },
  {
    id: '10',
    name: 'Louvre Museum',
    description: "Explore the world's largest art museum.",
    imageUrl: '../assets/images/dummy-image.png',
    address: 'Rue de Rivoli, 75001 Paris, France',
    ticketType: TicketEnum.TOURIST_ATTRACTION,
    touristAttraction: {
      ticketPrice: '15.00',
    },
  },
  {
    id: '11',
    name: 'Grand Canyon',
    description: 'Experience the natural wonder of the Grand Canyon.',
    imageUrl: '../assets/images/dummy-image.png',
    address: 'Grand Canyon Village, AZ 86023, USA',
    ticketType: TicketEnum.TOURIST_ATTRACTION,
    touristAttraction: {
      ticketPrice: '25.00',
    },
  },
  {
    id: '12',
    name: 'Statue of Liberty',
    description: 'Visit the historic Statue of Liberty in New York.',
    imageUrl: '../assets/images/dummy-image.png',
    address: 'New York, NY 10004, USA',
    ticketType: TicketEnum.TOURIST_ATTRACTION,
    touristAttraction: {
      ticketPrice: '30.00',
    },
  },
];
