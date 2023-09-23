import { services } from "../../Info/ServicesInfo";

const Services = () => {
  return (
    <div className="text-black  my-12" >
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-primary mt-4">
          We provide the best services for out clients
        </p>
      </div>
      <div className="grid md:grid-cols-2 md:gap-24 gap-6 mt-12 px-6">
        {services.map((service) => (
          <div key={service.id}>
            <div className="flex justify-center items-start gap-x-6 md:gap-x-12">
              <div>{service.icon}</div>
              <div className="">
                <h1 className="text-xl font-bold mb-4">{service.name}</h1>
                <p className="">{service.dis}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
