import React, { ReactNode } from "react";

interface RenderIfProps {
  children: ReactNode;
  isTrue: boolean;
}

export default function RenderIf(props: RenderIfProps) {
  if (!props.children) return null;
  return props.isTrue ? props.children : null;
}
