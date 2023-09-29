import { PropsWithChildren, useEffect, useRef } from "react";
import Styles from "./Scroller.module.scss";

const Scroller: React.FC<PropsWithChildren> = ({ children }) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scrollerRef.current?.setAttribute("data-animated", "true");
    }
  }, [scrollerRef]);

  return (
    <div ref={scrollerRef} className={Styles.scroller}>
      {children}
    </div>
  );
};

export default Scroller;
