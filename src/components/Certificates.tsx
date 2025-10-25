import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Award } from "lucide-react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const certificates = [
  {
    title: "Ambassador for Peace Award",
    description: "Recognized by the Universal Peace Federation (UPF) for outstanding contributions to global peace and leadership in digital health initiatives."
  },
  {
    title: "Program Committee Member",
    description: "Served on the International Research Club (IRC) – Singapore program committee, promoting research collaboration and innovation."
  },
  {
    title: "Peer Reviewer Recognition",
    description: "Reviewed 14+ manuscripts for international journals including JMIR and JIEPH, ensuring scientific rigor and quality dissemination."
  },
  {
    title: "Digital Leadership Certificate",
    description: "Certified in Digital Transformation Leadership for Health Systems, demonstrating excellence in strategic digital health management."
  },
  {
    title: "Advanced Data Analytics Certification",
    description: "Completed advanced certification in data analytics, emphasizing public health intelligence and data-driven policymaking."
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 border-l-4 border-primary pl-6 text-foreground">
          Certificates & Recognitions
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-12"
        >
          {certificates.map((cert, index) => (
            <SwiperSlide key={index}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center h-full min-h-[240px]">
                  <Award className="w-16 h-16 text-accent mb-4" />
                  <h3 className="text-lg font-bold text-accent mb-3">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Certificates;
