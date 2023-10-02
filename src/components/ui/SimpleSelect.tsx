"use client";

import styled from "@emotion/styled";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useCallback, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SIMPLE_SELECT } from "@/constants/ids";

export type Option = {
  value: string | number;
  name: string;
};

const StyledSelect = styled(Select)`
  border-radius: 8px;

  .MuiSelect-select {
    padding-left: 16px;
    padding-top: 13px;
    padding-bottom: 13px;
  }

  fieldset {
    border: 1px solid #e4e4e4 !important;
  }

  svg {
    position: absolute;
    right: 16px;
    color: white;
    pointer-events: none;
  }
`;

export type SimpleSelectProps = {
  id?: string;
  label: string;
  options: Option[];
  onChange: (value: string) => void;
  className?: string;
  defaultValue?: string;
};
export default function SimpleSelect({
  id = SIMPLE_SELECT,
  label,
  options,
  onChange,
  className,
  defaultValue,
}: SimpleSelectProps) {
  const [value, setValue] = useState<Option["value"]>(defaultValue ?? "");
  const handleChange = useCallback(
    (_event: SelectChangeEvent<unknown>) => {
      const event = _event as SelectChangeEvent<Option["value"]>;
      setValue(event.target.value);
      onChange(event.target.value.toString());
    },
    [onChange],
  );

  return (
    <div className={className}>
      <StyledSelect
        className="w-full"
        id={id}
        value={`${value}`}
        displayEmpty
        onChange={handleChange}
        IconComponent={() => <ExpandMoreIcon />}
        renderValue={(_selected) => {
          const selected = _selected as string;
          if (selected === "") {
            return <span className="text-[#B4AEAE]">{label}</span>;
          }
          return <span className="text-white">{selected}</span>;
        }}
        placeholder={label}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </StyledSelect>
    </div>
  );
}
