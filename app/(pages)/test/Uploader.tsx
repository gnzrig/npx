import React, { useState } from "react";

const Uploader: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex">
      <label htmlFor="image" className="p-4 border block rounded-lg w-[60px] h-[60px] text-center">
        +
      </label>
      <input type="file" name="image" id="image" className="hidden" accept="image/*" onChange={handleImageChange} />

      {image && (
        <div className="relative">
          <img src={image} alt="images" width={80} height={80} />{" "}
          <span
            className="text-black absolute top-0 right-0 bg-gray-200 rounded-lg h-[20px] w-[20px] text-center hover:cursor-pointer"
            onClick={() => setImage("")}
          >
            {" "}
            X{" "}
          </span>
        </div>
      )}
    </div>
  );
};

export default Uploader;
