import React from "react";

const FormField = ({
  Labelname,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          className="block text-sm font-medium text-gray-900"
          htmlFor={name}
        >
          {Labelname}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs  transition delay-70
            duration-300 bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black hover:bg-[#cfcfd3] hover:-translate-y-1"
          >
            Surprise me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-50 border border-gray-300
          text-gray-900 text-sm rounded-lg focus:ring-[#4649ff]
          focus:border-[#4649ff] outline-none block w-full p-3"
      ></input>
    </div>
  );
};

export default FormField;
