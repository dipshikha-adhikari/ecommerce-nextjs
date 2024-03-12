import { useEffect, useState } from "react";
import { FieldWrapper } from "./field-wrapper";

interface IImageUpload {
  setImage: (props: string | FileList | null) => void;
  image: string | FileList | null;
  label: string;
  imageError: boolean;
  setImageError: (props: any) => void;
}

const ImageUpload = ({
  label,
  image,
  imageError,
  setImageError,
  setImage,
}: IImageUpload) => {
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (typeof image === "string") {
      setPreview(image);
    }
    if (image && typeof image === "object") {
      let src = URL.createObjectURL(image[0]);
      setPreview(src);
    }
  }, [image]);

  return (
    <FieldWrapper>
      <div className="grid gap-1  ">
        <label htmlFor="">{label}</label>
        <input
          type="file"
          name=""
          onChange={(e) => {
            setImage(e.target.files);
            setImageError(false);
          }}
          id=""
          className="p-xs rounded-md border border-gray-300"
        />
        <h2>OR</h2>
        <input
          className="border  p-xs outline-none border-gray-300"
          placeholder="Paste url here"
          type="text"
          onChange={(e) => {
            setImage(e.target.value);
            setImageError(false);
          }}
        />
        {preview && (
          <img
            src={preview}
            alt="Not found"
            className="w-20 h-20 object-cover"
          />
        )}
        {imageError && (
          <p className="text-red-600 text-xs py-2 font-bold">
            Cover image is required
          </p>
        )}
      </div>
    </FieldWrapper>
  );
};

export default ImageUpload;
