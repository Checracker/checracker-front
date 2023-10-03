"use client";

import { useEffect, useState } from "react";

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export default function CheckBoxCracker({ checked, onChange }: Props) {
  const [isChecked, setIsChecked] = useState(checked);
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onChange(e.target.checked);
  };
  return (
    <div className="inline-block">
      <input
        type="checkbox"
        name=""
        id=""
        onChange={handleChange}
        checked={isChecked}
      />
    </div>
  );
}
