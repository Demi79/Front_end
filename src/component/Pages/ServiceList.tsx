import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CalendarDays, LucideSearch } from "lucide-react";
import ServiceCard from "../Molecules/ServiceCard";

const eventData = [
     {
          id: 1,
          title: "Lão Hóa Da Là Gì? Nguyên Nhân Và Cách Điều Trị Hiệu Quả",
          image: "https://media.hcdn.vn/hsk/1739183487_lao-hoa-da-la-gi_img_200x145_c4ef78_fit_center.png",
     },
     {
          id: 2,
          title: "HASAKI CLINIC THÔNG BÁO NGƯNG NHẬN BOOKING ONLINE",
          image: "https://media.hcdn.vn/hsk/1737353441_1737348985702-202253631_img_200x145_c4ef78_fit_center.jpg",
     },
     {
          id: 3,
          title: "THÔNG BÁO TẠM NGƯNG NHẬN KHÁCH – TIỆC TẤT NIÊN CÔNG TY",
          image: "https://media.hcdn.vn/hsk/1736564638_1736564489119-961632849_img_200x145_c4ef78_fit_center.jpg",
     },
];

export const ServiceList = () => {

     return (
          <>
               <div>
                    <img src="https://media.hcdn.vn/catalog/category/1320x250-2.jpg" alt="service" />
               </div>
               <div className="flex flex-row">
                    <div className="w-[20%]">
                         <div className="p-4 bg-white border w-64">
                              {/* Tiêu đề */}
                              <h2 className="text-sm font-bold text-gray-900">DỊCH VỤ PHÒNG KHÁM</h2>

                              {/* Danh sách dịch vụ */}
                              <ul className="mt-2 space-y-1 text-gray-700">
                                   <li className="cursor-pointer hover:text-orange-500">Điều Trị Nám Công Nghệ Cao</li>
                                   <li className="cursor-pointer hover:text-orange-500">Điều Trị Tàn Nhang Công Nghệ Cao</li>
                              </ul>

                              {/* Tiêu đề khoảng giá */}
                              <h3 className="mt-4 text-sm font-bold text-gray-900 mb-2">KHOẢNG GIÁ</h3>

                              {/* Input giá */}
                              <div className="relative w-full max-w-md">
                                   <Input
                                        type="text"
                                        placeholder="Loại da ..."
                                        className="pl-5 rounded-2xl bg-white"
                                   />
                                   <LucideSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

                              </div>

                              {/* Button áp dụng */}
                         </div>
                         <div className="mx-auto p-4 border w-64">
                              <h2 className="text-lg font-bold text-gray-900 border-b-2 border-orange-500 pb-1">SỰ KIỆN</h2>

                              {/* Danh sách bài viết */}
                              <div className="mt-3 space-y-4">
                                   {eventData.map((item) => (
                                        <Card key={item.id} className="shadow-none border-none">
                                             <CardContent className="p-0 relative">
                                                  <img
                                                       src={item.image}
                                                       alt={item.title}

                                                       className="rounded-md w-full object-cover"
                                                  />
                                                  <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-2 rounded-br-md">
                                                       <CalendarDays className="w-4 h-4" />
                                                       <span className="text-xs">21/12/2025</span>
                                                  </div>
                                                  <p className="mt-2 text-sm text-gray-700 hover:text-orange-500 cursor-pointer">{item.title}</p>
                                                  <Button variant="ghost" className="text-xs text-orange-500">Xem chi tiết</Button>
                                             </CardContent>
                                        </Card>
                                   ))}
                              </div>
                         </div>

                    </div>
                    <div className="w-[80%] mb-5 flex-1 flex flex-row flex-wrap gap-1 pl-5 pt-5 justify-around">
                         <div className="w-[300px]">
                              <ServiceCard />

                         </div>
                         <div className="w-[300px]">
                              <ServiceCard />

                         </div>
                         <div className="w-[300px]">
                              <ServiceCard />

                         </div>
                         <div className="w-[300px]">
                              <ServiceCard />

                         </div>
                         <div className="w-[300px]">
                              <ServiceCard />

                         </div>
                         <div className="w-[300px]">
                              <ServiceCard />

                         </div>
                    </div>
               </div>
          </>
     );
};
