import cn from "classnames";
import Styles from "./ScrollerList.module.scss";

type Props = {
  items: string[];
};

const ScrollerList: React.FC<Props> = ({ items }) => {
  return (
    <ul className={cn(Styles.scrollerInner, Styles.tagList)}>
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
};

export default ScrollerList;
