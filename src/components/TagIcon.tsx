import { ElementType } from "react";

interface TagIconProps {
  component: ElementType;
}

function TagIcon({ component: Component }: TagIconProps) {
  return (
    <>
      <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
    </>
  );
}

export default TagIcon;
