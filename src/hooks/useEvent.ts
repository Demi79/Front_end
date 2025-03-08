import { eventService } from "@/services/eventService";
import { useEffect, useState } from "react";
import { Event } from "@/types/event";

export const useEvent = () => {
     const [events, setEvents] = useState<Event[]>([]);
     const [loading, setLoading] = useState<boolean>(true);
     const [error, setError] = useState<string | null>(null);

     const fetchServices = async () => {
          try {
               const data = await eventService.getListEvents();
               setEvents(data);
          } catch (error) {
               setError("failed to fetch services");
          } finally {
               setLoading(false);
          }
     }

     useEffect(() => {
          fetchServices();
     }, []);
 

     return { events, loading, error };

}