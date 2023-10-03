"use client";

import Image from "next/image";
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
  const handleClick = () => {
    setIsChecked((prev) => !prev);
    onChange(!isChecked);
  };
  return (
    <div className="inline-block cursor-pointer" onClick={handleClick}>
      {isChecked ? (
        <Image
          src={"/images/BitedCracker.svg"}
          width={22}
          height={22}
          alt="checked"
        />
      ) : (
        <Image
          src={"/images/Container.svg"}
          width={22}
          height={22}
          alt="unchecked"
        />
      )}
    </div>
  );
}
