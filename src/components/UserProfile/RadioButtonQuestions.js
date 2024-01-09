import React from "react";
import { useForm } from "react-hook-form";
export const RadioButtonQuestions = ({
  options = [],
  register,
  name,
  label,
}) => {
  return (
    <div className="flex flex-col  space-y-8 w-full">
      <label className="text-[#E3CCAE] text-3xl  break-words">
        {label}
      </label>

      <div className="mb-4">
        <div className="flex items-center  justify-between">
          <div className="text-xl  font-semibold text-[#B8621B]">Agree</div>
          {options.map((option) => (
            <div key={option.value}>
              <input
                type="radio"
                {...register(name)}
                value={option.value}
                className="form-radio h-11 w-11  accent-orange-600"
                // id={`role${option.label}`}
              />
            </div>
          ))}
          <div className="text-xl font-semibold text-[#B8621B]">Disagree</div>
        </div>
      </div>
    </div>
  );
};
