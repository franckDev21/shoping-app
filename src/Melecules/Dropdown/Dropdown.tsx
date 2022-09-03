import React, { FC, ReactNode, useState } from "react";
import { DropdownItem } from "../../types/allType";

interface DropdownTypes {
  children?: ReactNode;
  dropdownItems: DropdownItem[];
  classNameDropdown?: string;
  className?: string;
}

const Dropdown: FC<DropdownTypes> = ({
  children,
  dropdownItems,
  className = "",
  classNameDropdown = "",
}) => {
  const [curentValue, setCurentValue] = useState<DropdownItem | null>(null);
  const [show, setShow] = useState<boolean>(false);
  const defaultValue = dropdownItems.find(
    (element) => element.isDefaultValue === true
  );

  return (
    <div className={`relative  flex flex-col justify-end items-end ${className}`}>
      <div className="cursor-pointer" onClick={() => setShow(!show)}>
        {curentValue ? (
          <div className="flex items-center">
            <span className="font-bold mr-1 hover:text-primary">{curentValue.identifiant}</span>
            <span>{curentValue.value}</span>
            <span className="w-2 h-2 translate-y-0.5 border border-gray-400 ml-2 inline-block"></span>
          </div>
        ) : (
          <>
            {defaultValue ? (
              <div className="flex items-center">
                <span className="font-bold mr-1 hover:text-primary">
                  {defaultValue?.identifiant}
                </span>
                <span>{defaultValue?.value}</span>
                <span className="w-2 h-2 translate-y-0.5 border border-gray-400 ml-2 inline-block"></span>
              </div>
            ) : (
              children ?? children
            )}
          </>
        )}
      </div>
      <div
        className={`absolute z-10 top-full transition-opacity translate-y-1 w-[180px] flex flex-col justify-start shadow-md p-3 bg-white rounded-md 
        ${classNameDropdown}
        ${
          !show && "opacity-0 pointer-events-none"
        }`}
      >
        {dropdownItems.map((item, i) => (
          <span
            onClick={() => setCurentValue(item)}
            key={i}
            className="inline-flex items-center my-2 hover:text-primary cursor-pointer hover:font-semibold"
          >
            <span className="mr-2 inline-block">{item.identifiant}</span> <span>{i === 0 ? <>{item.value} | default</>: (item.value)}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
