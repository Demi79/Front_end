import { useNavigate } from "react-router-dom";
import { Event } from "@/types/event";

interface ListEventsProps {
     events: Event[];
   }


export default function EventList ({events = []}: ListEventsProps) {
  const navigate = useNavigate();
  console.log("Events in EList:", events);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Sự kiện sắp diễn ra</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.event_id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img src={event.image_url} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p className="text-gray-600">{event.description}</p>
              <p className="mt-2 text-gray-500">
                🗓 {event.start_date.toString()} - 🕒 {event.start_time}
              </p>
              <p className="text-gray-500">📍 {event.location}</p>
              <p className="mt-2 font-bold text-green-600">💰 {event.price.toLocaleString()}đ</p>
              <button 
                className="mt-4 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
                onClick={() => navigate(`/event-detail/${event.event_id}`)}
              >
                Mua vé ngay
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// import { useState } from "react";
// import { Card, CardContent, CardTitle } from "@/components/ui/card";
// import { Link } from "react-router-dom";
// interface Event {
//   Id: number;
//   Title: string;
//   Content: string;
//   Image: string;
//   Date: string;
//   Location: string;
//   TotalTickets: number;
//   AvailableTickets: number;
//   TicketPrice: number;
//   EventStatus: string;
// }

// const events: Event[] = [
//   {
//     Id: 1,
//     Title: "The Skin Confidence Workshop",
//     Content: "Nisi aliquam velit enim in laborit. Minim proident magna eiusmod...",
//     Image: "https://media.hcdn.vn/hsk/1737353441_1737348985702-202253631_img_200x145_c4ef78_fit_center.jpg",
//     Date: "31/02/2025",
//     Location: "123 Main Street, LA, CA",
//     TotalTickets: 100,
//     AvailableTickets: 50,
//     TicketPrice: 50,
//     EventStatus: "Open",
//   },
//   {
//     Id: 2,
//     Title: "The Ultimate Skin Retreat",
//     Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//     Image: "https://media.hcdn.vn/hsk/1737353441_1737348985702-202253631_img_200x145_c4ef78_fit_center.jpg",
//     Date: "31/02/2025",
//     Location: "456 Sunset Blvd, CA",
//     TotalTickets: 200,
//     AvailableTickets: 100,
//     TicketPrice: 100,
//     EventStatus: "Open",
//   },
// ];

// export default function EventPage() {
//   const [, setSelectedEvent] = useState<Event | null>(null);
//   return (
//     <div className="space-y-6">
//       {events.map((event) => (
//         <Link to={`/event/${event.Id}`} key={event.Id}>
//         <Card
//           className="cursor-pointer"
//           onClick={() => setSelectedEvent(event)}
//         >
//           <CardContent className="p-4 flex items-center gap-4">
//             <img
//               src={event.Image}
//               alt={event.Title}
//               className="w-24 h-24 rounded-lg object-cover"
//             />
//             <div>
//               <CardTitle>{event.Title}</CardTitle>
//               <p className="text-sm text-gray-500">
//                 {event.Date}
//               </p>
//               <p className="text-sm text-gray-600">{event.Location}</p>
//             </div>
//           </CardContent>
//         </Card>
//         </Link>
//       ))}
//     </div>
//   );
// }
