import {getStatusColor} from "@/utils/getStatusColor";
import React from "react";

const CustomChip = ({color, label}: {color: string; label: string}) => {
  return (
    <span
      className={`border rounded-2xl bg-opacity-65 px-2 py-1 capitalize text-xs ${getStatusColor(
        color
      )}`}
    >
      {label}
    </span>
  );
};

export default CustomChip;
