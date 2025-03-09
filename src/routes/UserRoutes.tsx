import React, { Suspense, lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import Layout from '@/component/Templates/Layout';
const ServiceDetail = lazy(() => import("@/component/Pages/ServiceDetail"));
const ServiceList = lazy(() => import("@/component/Pages/ServiceList"));
const Appointment = lazy(() => import("@/component/Pages/Appointment"));
const AppointmentDetail = lazy(() => import("@/component/Pages/AppointmentDetail"));
const Booking = lazy(() => import("@/component/Pages/Booking"));
const MyTickets = lazy(() => import("@/component/Pages/MyTickets"));
const TicketDetail = lazy(() => import("@/component/Pages/TicketDetail"));
const EventDetail = lazy(() => import("@/component/Pages/EventDetail"));
// const DisplayEventDetail = lazy(() => 
//      import("@/features/events").then((module) => ({
//           default: module.DisplayEventDetail
// })));
const DisplayEventList = lazy(() => 
     import("@/features/events").then((module) => ({ 
          default: module.DisplayEventList })));
const DisplayServiceList = lazy(() =>
     import("@/features/services").then((module) => ({
       default: module.DisplayServiceList,
     }))
   );
   
   const DisplayServiceDetail= lazy(() =>
     import("@/features/services").then((module) => ({
       default: module.DisplayServiceDetail,
     }))
   );
   // testcommitdane

const Loading = () => <h1>Loading...</h1>;

const UserRoutes: React.FC = () => {
     return (
          <Layout>
               <Suspense fallback={<Loading />}>
                    <Routes>
                         <Route path="service-detail/:id" element={<DisplayServiceDetail />} />
                         <Route path="" element={<DisplayServiceList />} />
                         <Route path="/account/appointment-list" element={<Appointment />} />
                         <Route path="/account/appointment-detail/:id" element={<AppointmentDetail />} />
                         <Route path="*" element={<h1>Not Found</h1>} />
                         <Route path="/booking" element={<Booking />} />
                         <Route path="/ticket" element={<MyTickets />} />
                         <Route path="/ticket-detail/:id" element={<TicketDetail />} />
                         <Route path="/event" element={<DisplayEventList />} />
                         <Route path="/event-detail/:id" element={<EventDetail />} />
                         <Route path="/testAPI" element={<DisplayServiceList />} />
                    </Routes>
               </Suspense>
          </Layout >
     );
};

export default UserRoutes;