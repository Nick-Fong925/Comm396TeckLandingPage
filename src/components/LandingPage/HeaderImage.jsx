import HeaderPhoto from "../../assets/GroupPhotos/CapEvent2.jpg";

function HeaderImage() {
  return (
    <div className="relative">
      <img
        src={HeaderPhoto}
        alt="Header Banner"
        style={{ objectPosition: 'center top' }} // Change the value here
        className="w-full h-[50vh] object-cover object-top opacity-70 md:h-[60vh] lg:h-[70vh]"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white font-bold p-4 text-xl sm:text-4xl lg:text-6xl">
          WELCOME TO THE SAUDER FAMILY
        </h1>
      </div>
    </div>
  );
}

export default HeaderImage;
