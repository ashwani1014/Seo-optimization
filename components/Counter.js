"use client";
import { useCountUp } from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

const Counter = ({ end, decimals, extraClass }) => {
  const elementRef = useRef();
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const hasStarted = useRef(false);
  const { countUp, start } = useCountUp({
    ref: elementRef,
    startOnMount: false,
    end: end ? end : 100,
    duration: 3,
    decimals: decimals ? decimals : 0,
  });

  useEffect(() => {
    if (inView && !hasStarted.current) {
      hasStarted.current = true;
      start();
    }
  }, [inView, start]);

  return (
    <span
      className={`counter ${extraClass}`}
      data-from="0"
      data-to={end}
      ref={(node) => {
        elementRef.current = node;
        ref(node);
      }}
    >
      {countUp}
    </span>
  );
};

export default Counter;
