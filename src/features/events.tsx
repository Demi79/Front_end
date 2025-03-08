import EventList from "@/component/Pages/EventList";
import { useEvent, useEventDetail } from "@/hooks/useEvent";
import { useParams } from "react-router-dom";

export const DisplayEventList = () => {
  const { events, loading, error } = useEvent();
     if (loading) {
     return <h1>Loading...</h1>;
     }
     if (error) {
     return <h1>{error}</h1>;
     }
     return <EventList events={events} />;

};

export const DisplayEventDetail = () => {
    const { eventId } = useParams();
    if (!eventId) {
        // handle the case where eventId is undefined
        return <h1>Event ID is not provided</h1>;
      }
    console.log(eventId)
    const { event, loading, error } = useEventDetail(eventId);
  
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>{error}</h1>;
  
  
    return <EventDetail service={event} />;
  };