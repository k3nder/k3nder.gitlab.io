import React from "react";
import "./styles.scss";
interface props {
  logo: string;
  svg: string;
  color?: string;
  className?: string;
  certificateMode: CertificateMode;
  certificate?: string;
  tooltip?: boolean;
}
const prl: React.FC<props> = ({
  logo,
  svg,
  color,
  className,
  certificateMode,
  certificate,
  tooltip = false,
}) => {
  const [previewShow, setPreviewShow] = React.useState(false);
  const borderColor =
    certificateMode == CertificateMode.NONE
      ? "border-red-500"
      : certificateMode == CertificateMode.IN_PROGRESS
        ? "border-yellow-500"
        : certificateMode == CertificateMode.NO_EXIST
          ? "border-white"
          : "border-green-500";
  function showPreview() {
    if (certificateMode != CertificateMode.AAA) return;
    setPreviewShow(true);
  }
  function hidePreview() {
    setPreviewShow(false);
  }

  certificate = `/certificates/${certificate == undefined ? "git.svg" : certificate}`;
  return (
    <div className={tooltip ? "tooltip-container" : ""}>
      <span className={tooltip ? "tooltip-text" : "hidden"}>{logo}</span>
      <div
        className={`m-0 lg:m-1 border-2 ${borderColor}`}
        onMouseOver={showPreview}
        onMouseLeave={hidePreview}
      >
        <img
          alt={logo}
          src={`https://img.shields.io/badge/${svg}?style=for-the-badge&logo=${logo}&logoColor=${color}`}
        />
      </div>
      <div
        className={`float-left absolute ml-24 ${
          previewShow == true ? "" : "hidden"
        }`}
      >
        <img className=" w-56 box" src={certificate} />
      </div>
    </div>
  );
};
export enum CertificateMode {
  NONE,
  IN_PROGRESS,
  AAA,
  NO_EXIST,
}
export default prl;
