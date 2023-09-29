import itemsList from "@/assets/data/scrollerListItems.json";
import classNames from "classnames";
import { useEffect, useMemo, useRef } from "react";
import Styles from "./Scroller.module.scss";

type Props = {
  direction?: "reverse" | "forwards";
};

const Scroller: React.FC<Props> = ({ direction }) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  // There should be also a way to programmatically duplicate the members of this list
  const doubleTheList = useMemo(() => {
    return [...itemsList.items, ...itemsList.items];
  }, [itemsList]);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scrollerRef.current?.setAttribute("data-animated", "true");
    }
  }, [scrollerRef]);

  return (
    <div ref={scrollerRef} className={Styles.scroller}>
      <ul
        className={classNames(Styles.scrollerInner, Styles.tagList, {
          [Styles.animReverse]: direction === "reverse",
        })}
      >
        {doubleTheList.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Scroller;
