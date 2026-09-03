const ProfileImage = ({ src, alt = "Profile" }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="
        mx-auto
        max-h-125
        rounded-4xl
        object-cover
        mask-[radial-gradient(circle,rgba(0,0,0,1)_50%,rgba(0,0,0,0)_100%)]
      "
    />
  );
};

export default ProfileImage;