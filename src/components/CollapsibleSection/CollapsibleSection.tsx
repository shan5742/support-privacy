import React, { ComponentType, SVGAttributes, useState } from "react";
import s from "./CollapsibleSection.module.scss";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

interface Props {
  title: string;
  startExpanded?: boolean;
  className?: string;
  children: React.ReactChild;
  icon?: ComponentType<SVGAttributes<SVGElement>>;
}

export const CollapsibleSection = ({
  title,
  startExpanded,
  children,
  icon: Icon,
}: Props) => {
  const [expanded, setExpanded] = useState(startExpanded);
  return (
    <div className={s.collapsibleSection}>
      <div
        className={s.collapsibleTitleContainer}
        onClick={() => setExpanded(!expanded)}
      >
        <h4 className={s.collapsibleTitle}>
          {Icon && <Icon />}
          {title}
        </h4>
        {expanded ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {expanded && children}
    </div>
  );
};
