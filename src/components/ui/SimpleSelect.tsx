"use client";

import styled from "@emotion/styled";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useCallback, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useForm } from "react-hook-form";

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
    border: 1px solid #e4e4e4;
  }

  svg {
    position: absolute;
    right: 16px;
    z-index: -1;
  }
`;

export type SimpleSelectProps = {
  id?: string;
  label: string;
  register: ReturnType<ReturnType<typeof useForm>["register"]>;
  options: Option[];
  className?: string;
};
export default function SimpleSelect({
  options,
  label,
  register,
  id = "simple-select",
  className,
}: SimpleSelectProps) {
  const { onChange, ...restRegister } = register;
  const [value, setValue] = useState<Option["value"]>("");
  const handleChange = useCallback(
    (_event: SelectChangeEvent<unknown>) => {
      const event = _event as SelectChangeEvent<Option["value"]>;
      setValue(event.target.value);
      onChange(event);
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
          return selected;
        }}
        placeholder={label}
        {...restRegister}
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
