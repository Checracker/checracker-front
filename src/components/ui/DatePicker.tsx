"use client";

import styled from "@emotion/styled";
import classNames from "classnames";
import { ChangeEvent, useEffect, useState } from "react";
import dayjs from "dayjs";

type Props = {
  className?: string;
  date?: string;
  onChange?: (date?: string) => void;
  maxDate?: string;
};
export default function DatePicker({
  className,
  date: initialDate,
  onChange,
  maxDate,
}: Props) {
  const handleClickLabel = () => {};
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    initialDate ? new Date(initialDate) : undefined,
  );
  useEffect(() => {
    setSelectedDate(initialDate ? new Date(initialDate) : undefined);
  }, [initialDate]);
  const handleChangeDatePicker = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(new Date(event.target.value));
    onChange?.(event.target.value);
  };
  return (
    <DatePickerWrapper
      className={classNames(
        "w-[113px] rounded-lg bg-[#FFF5E7] px-3 py-[6px]",
        className,
        !selectedDate && "bg-[#B7B7B7]",
      )}
    >
      <DatePickerInput
        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
        type="date"
        onChange={handleChangeDatePicker}
        max={maxDate}
      />
      <DateText onClick={handleClickLabel} className="text-center">
        {selectedDate ? dayjs(selectedDate).format("YYYY / MM / DD") : "-"}
      </DateText>
    </DatePickerWrapper>
  );
}

const DatePickerWrapper = styled.div`
  position: relative;
`;

const DatePickerInput = styled.input`
  ::-webkit-calendar-picker-indicator {
    background: transparent;
    bottom: 0;
    color: transparent;
    cursor: pointer;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
  }
`;

const DateText = styled.div`
  color: #1d192b;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
