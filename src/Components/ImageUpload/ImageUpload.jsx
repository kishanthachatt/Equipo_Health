import React, { useState, useRef } from "react";
import DefaultProfileImage from "../../Assets/Images/defaultProfileImage.png";
import cn from "./ImageUpload.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImage } from "@fortawesome/free-solid-svg-icons";

export default function CardProfile() {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState(DefaultProfileImage);

  const photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={cn.imageUpload} onClick={handleButtonClick}>
      <div className={cn.imageWrap}>
        <img htmlFor="photo-upload" src={imagePreviewUrl} alt="Profile" />
      </div>
      <input
        id="photo-upload"
        type="file"
        onChange={photoUpload}
        className={cn.inputImage}
        ref={fileInputRef}
      />
      <div className={cn.uploadIcon}>
        <FontAwesomeIcon icon={faFileImage} />
      </div>
    </div>
  );
}
