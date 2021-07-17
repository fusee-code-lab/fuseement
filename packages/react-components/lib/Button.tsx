import React, { useEffect, useRef } from "react";
import * as fuseement from "@fuseement/client-components";

export interface ButtonProps {
  primary: boolean;
  backgroundColor: string;
  size: "medium" | "medium" | "large";
  label: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const btn = useRef<fuseement.Button>();
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!el.current) return;

    const button = new fuseement.Button({
      target: el.current,
      props,
    });
    btn.current = button;

    return () => {
      button.$destroy();
    };
  }, []);

  useEffect(() => {
    btn.current?.$set(props);
  }, [props]);

  return <div ref={el}></div>;
};
