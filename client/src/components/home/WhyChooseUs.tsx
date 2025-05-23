import React from "react";
import { Row, Col, Collapse } from "antd";
import { FiChevronDown } from "react-icons/fi";

const { Panel } = Collapse;

const faqs = [
  {
    question: "What makes DreamsTour unique?",
    answer: "We specialize in handpicked, premium cruise experiences with exclusive deals and personalized service that larger booking sites can't offer."
  },
  {
    question: "Are the cruise prices competitive?",
    answer: "Yes! We negotiate directly with cruise lines to secure the best possible rates and often include exclusive promotions and onboard credits."
  },
  {
    question: "What if my travel plans change?",
    answer: "We offer flexible booking options with cruise-line specific policies. Many bookings can be adjusted or rescheduled, and we're always here to help with changes."
  },
  {
    question: "What's included in the cruise price?",
    answer: "Most cruises include accommodation, meals at main restaurants, entertainment, and basic amenities. Premium dining, excursions, and spa services typically cost extra."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <div className="py-16 bg-rose-50">
      <div className="container mx-auto px-4">
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={10}>
            <div className="rounded-lg overflow-hidden grid grid-cols-2 gap-4">
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src="https://images.unsplash.com/photo-1599640842225-85d111c60e6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Cruise experience" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="aspect-w-1 aspect-h-1 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1580541631731-4065e2e7b3e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Cruise experience" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="aspect-w-1 aspect-h-1 col-span-2">
                <img 
                  src="https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Cruise experience" 
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
            </div>
          </Col>

          <Col xs={24} lg={14}>
            <h2 className="text-3xl font-bold mb-6">Specializing in dream destinations.</h2>
            <p className="text-gray-600 mb-8">
              We've spent years curating the perfect cruise experiences so you don't have to waste time searching. Our expert team handpicks only the highest-rated cruises with exceptional service and unforgettable destinations.
            </p>

            <Collapse 
              bordered={false}
              expandIcon={({ isActive }) => <FiChevronDown className={`transform transition-transform ${isActive ? 'rotate-180' : ''}`} />}
              className="bg-transparent"
            >
              {faqs.map((faq, index) => (
                <Panel 
                  key={index} 
                  header={<span className="font-medium text-base">{faq.question}</span>}
                  className="bg-white mb-4 rounded-lg overflow-hidden border border-gray-100"
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </Panel>
              ))}
            </Collapse>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default WhyChooseUs;