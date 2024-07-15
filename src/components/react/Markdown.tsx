import { marked } from "marked";
interface Props {
  text: string;
  className: string;
}
const Md: React.FC<Props> = ({ text, className }) => {
  let htmlContent: string = marked.parse(text).toString();
  return <div className={className} dangerouslySetInnerHTML={{ __html: htmlContent }}></div>;
};
export default Md;
