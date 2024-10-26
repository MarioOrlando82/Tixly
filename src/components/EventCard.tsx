import LocationImage from '../assets/images/location.png';
import CalendarImage from '../assets/images/calendar.png';
import FavoriteNotActiveImage from '../assets/images/favorite-not-active.png';
import { formatToRupiah } from '../lib/utils';

interface IProps {
  imageUrl: string;
  title: string;
  address: string;
  date: string;
  price: number;
}

function EventCard({ imageUrl, title, address, date, price }: IProps) {
  return (
    <div className="bg-customDarkGrey rounded-3xl max-w-96">
      <img src={imageUrl} alt="" className="h-60 w-96 rounded-3xl" />
      <div className="pb-20 p-5 flex justify-between">
        <div>
          <p className="text-customWhite text-xl font-semibold">{title}</p>
          <div className="flex gap-2 mt-4">
            <img src={LocationImage} alt="" className="w-5 h-5" />
            <p className="text-customWhite opacity-50 text-sm font-medium">
              {address}
            </p>
          </div>
          <div className="flex gap-2 mt-4">
            <img src={CalendarImage} alt="" className="w-5 h-5" />
            <p className="text-customLightYellow text-sm font-medium">{date}</p>
          </div>
          <p className="text-xl font-semibold text-customWhite mt-4">
            {formatToRupiah(price)}
          </p>
        </div>
        <div className="">
          <img src={FavoriteNotActiveImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default EventCard;