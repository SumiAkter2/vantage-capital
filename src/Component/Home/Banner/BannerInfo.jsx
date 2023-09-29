const BannerInfo = ({ cardTitle, bgClass, cardInfo }) => {
  return (
    <div className={`  ${bgClass}  `}>
      <figure className="pl-5 pt-5"></figure>
      <div className="card-body text-center text-white">
        <h2 className="  font-bold mb-4">{cardTitle}</h2>
        <div className="border-b-2 border-white w-20 mx-auto"></div>
        <p className="lg:px-6 text-sm mt-2 ">{cardInfo}</p>
      </div>
    </div>
  );
};

export default BannerInfo;
