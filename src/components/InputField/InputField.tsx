//need to set px-10 or pl-10 or pr-10 when using sufix or prefix icons

import { forwardRef, ReactNode, InputHTMLAttributes as ReactInputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { Tooltip } from "react-tooltip";
import { classNames } from "../../utils/functions/utils";

export interface InputFieldPropsType extends Omit<ReactInputHTMLAttributes<HTMLInputElement>, "prefix"> {
  label?: string;
  error?: FieldError | undefined;
  contstyle?: string;
  placeholder?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
  sufix?: ReactNode;
  prefix?: string | ReactNode | null | undefined;
  shouldSufixButtonWork?: boolean;
  shouldPrefixButtonWork?: boolean;
  dataTip?: string;
  wrapperClassName?: string;
  divInputWrapper?: string;
}

const InputField = (props: InputFieldPropsType, ref: any) => {
  const {
    label,
    error,
    contstyle,
    inputClassName,
    wrapperClassName,
    labelClassName,
    sufix,
    prefix,
    errorClassName,
    shouldSufixButtonWork,
    shouldPrefixButtonWork,
    divInputWrapper,
    dataTip,
    className,
    ...rest
  } = props;

  return (
    <div id={label?.split(" ").join("-").toLowerCase()} className={`w-full ${contstyle ? contstyle : ""} ${className}`}>
      {label && (
        <>
          {dataTip ? (
            <Tooltip
              anchorId={label?.split(" ").join("-").toLowerCase()}
              content={dataTip}
              delayShow={500}
              style={{
                fontWeight: 400,
                lineHeight: "16.8px",
                fontSize: "12px",
              }}
              classNameArrow="!left-10"
              // place="top"
            />
          ) : null}
          <label
            // data-tooltip-content={dataTip}

            htmlFor={label}
            className={`relative first-letter:capitalize block text-body3/medium  text-gray-500  truncate whitespace-nowrap ${labelClassName} ${
              error ? "text-red-500" : ""
            }`}
          >
            {label}
            {props.required && <span className="absolute font-light text-red-500 -top-1.5">&lowast;</span>}
          </label>
        </>
      )}
      <div className={`relative ${label ? "mt-1" : ""} rounded-md shadow-sm ${divInputWrapper}`}>
        <div
          className={classNames(
            "absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 ",
            shouldPrefixButtonWork ? "pointer-events-auto" : "pointer-events-none"
          )}
        >
          {prefix}
        </div>
        <input
          id={label}
          {...rest}
          ref={ref}
          // changed the pl-6 to pl-10 when a prefix is given since no matter what I did, pl-6 takes priority over pl-10 for some reason, no matter how i order the classes,
          // i'm aware i can't just change a base component in a real situation, since the impact will be in multiple modules, but i'm doing it this way, so i dont waste time, im sure its something basic
          className={classNames(
            error
              ? "mb-0 placeholder-red-300 border-red-500   focus:ring-red-500  focus:border-red-500 text-red-500"
              : " border-gray-100   focus:ring-blue-500 focus:border-blue-500 text-gray-900 focus-visible:border-blue-500",
            "placeholder:text-body2/regular placeholder:text-gray-400 text-body2/regular truncate block w-full rounded-md disabled:bg-gray-50/50 disabled:text-gray-400 disabled:border disabled:h-[38px] disabled:pl-3",
            prefix ? "pl-10" : "pl-3",
            "border outline-none",
            "h-10",
            inputClassName && inputClassName
          )}
          aria-invalid="true"
        />
        {sufix && (
          <div
            className={classNames(
              "absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 ",
              shouldSufixButtonWork ? "pointer-events-auto" : "pointer-events-none"
            )}
          >
            {sufix}
          </div>
        )}
      </div>
      {error && <p className={`p-0 pt-1 text-label/regular text-red-500 ${errorClassName}`}>{error.message}</p>}
    </div>
  );
};

export default forwardRef(InputField);
