import React from "react";

interface Props {
  socialResource?: "GitHub";
  socialResourceLink: string;
  socialResourceImage: string;
  socialResourceImageDark: string;
}
const socialHeaderLink: React.FC<Props> = ({
  socialResource,
  socialResourceLink,
  socialResourceImage,
  socialResourceImageDark,
}) => {
  return (
    <div>
      <a href={socialResourceLink} aria-label="github">
        <img
          alt="github"
          className="w-10 h-10 mr-3 mt-2 dark:hidden"
          src={socialResourceImageDark}
        />
      </a>
      <a href={socialResourceLink} aria-label="github">
        <img
          alt="github"
          className="w-10 h-10 mr-3 mt-2 dark:block"
          src={socialResourceImage}
        />
      </a>
    </div>
  );
};
export default socialHeaderLink;
