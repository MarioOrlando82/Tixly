import { ITicket } from '../interfaces/ITicket';
import LocationImage from '../assets/images/location.png';
import CalendarImage from '../assets/images/calendar.png';
import { formatDate, formatToRupiah } from '../lib/utils';
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';
import { HeartIcon as OutlineHeartIcon } from '@heroicons/react/24/outline';

interface IProps {
  ticket: ITicket;
  style?: string;
}

function ConcertCard({ ticket, style = '' }: IProps) {
  return (
    <div className={`bg-customDarkGrey rounded-3xl max-w-96 ${style}`}>
      <img src={ticket.imageUrl} alt="" className="h-60 w-96 rounded-3xl" />
      <div className="pb-20 p-5 flex justify-between">
        <div>
          <p className="text-customWhite text-xl font-semibold">
            {ticket.name}
          </p>
          <div className="flex gap-2 mt-4">
            <img src={LocationImage} alt="" className="w-5 h-5" />
            <p className="text-customWhite opacity-50 text-sm font-medium">
              {ticket.address}
            </p>
          </div>
          <div className="flex gap-2 mt-4">
            <img src={CalendarImage} alt="" className="w-5 h-5" />
            <p className="text-customLightYellow text-sm font-medium">
              {formatDate(ticket.concert.concertDate)}
            </p>
          </div>
          <p className="text-xl font-semibold text-customWhite mt-4">
            {formatToRupiah(ticket.concert.ticketTypeList[0].price)}
          </p>
        </div>
        <div className="">
          {/* <SolidHeartIcon className='w-6 h-6 text-red-500'/> */}
          <OutlineHeartIcon className='w-6 h-6 text-customLightGrey'/>
        </div>
      </div>
    </div>
  );
}

export default ConcertCard;
