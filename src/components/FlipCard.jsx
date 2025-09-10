const FlipCard = ({ frontContent, backContent, bgImage, className }) => {
  return (
    <div className="group perspective w-full h-72">
      <div
        className={`relative preserve-3d group-hover:rotate-y-180 duration-700 w-full h-full rounded-lg shadow-md hover:shadow-xl overflow-hidden ${className}`}
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden flex items-center justify-center text-white">
          {frontContent}
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 rotate-y-180 backface-hidden flex items-center justify-center bg-red-700 text-white p-6">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
