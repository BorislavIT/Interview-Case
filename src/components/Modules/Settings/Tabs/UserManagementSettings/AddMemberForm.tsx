import { FieldError, FieldErrors, UseFormGetValues, UseFormRegister } from "react-hook-form";
import { FC, useEffect, useState } from "react";
import { emptyString } from "../../../../../utils/constants/globalConstants";
import InputField from "../../../../InputField/InputField";

type AddMemberFormProps = {
  register: UseFormRegister<{
    file: any;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    status: string;
  }>;
  getValues: UseFormGetValues<{
    file: any;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    status: string;
  }>;
  errors: FieldErrors<{
    file: any;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    status: string;
  }>;
};

const AddMemberForm: FC<AddMemberFormProps> = ({ register, getValues, errors }) => {
  const [preview, setPreview] = useState<string>(emptyString);
  const values = getValues();

  const file = values.file;
  const status = values.status;
  const role = values.role;

  useEffect(() => {
    if (!file) {
      setPreview(emptyString);
      return;
    }

    const objectUrl = URL.createObjectURL(file[0]);
    setPreview(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [file]);

  return (
    <div className={`w-full flex flex-col gap-6 items-center`}>
      <div
        className={`w-full h-24 ${
          !preview && "border"
        } border-dashed border-gray-300 rounded relative flex justify-center ${
          preview ? "items-start" : "items-center"
        } flex-col gap-2`}
      >
        <span className={`absolute ${preview ? "-top-3" : "-top-5"} left-0  text-label/regular text-gray-500`}>
          Avatar
        </span>
        {preview && <img src={preview} className={`w-16 h-16`} />}

        {!preview && (
          <>
            <div className={`text-body1/regular`}>
              Drop here or <span className={`text-blue-500`}>Browse</span> files
            </div>
            <div className="text-gray-500">Maximum file size 100MB</div>
            <InputField
              {...register("file", {
                onChange: () => {
                  setPreview(
                    "triggering a re-render, since im a noob with react-hook-form and idk how to do fix an issue im facing yet"
                  );
                },
              })}
              type="file"
              error={errors.file as FieldError}
              accept="image/*"
              inputClassName={`w-full h-24 opacity-0 absolute cursor-pointer`}
              className="h-24 absolute"
            />
          </>
        )}
      </div>
      <div className={`w-full flex flex-row gap-4 justify-between`}>
        <div className={`md:w-3/6`}>
          <InputField
            label="First name"
            placeholder={`First name`}
            {...register("firstName")}
            error={errors.firstName}
          />
        </div>
        <div className={`md:w-3/6`}>
          <InputField label="Last name" placeholder={`Last name`} {...register("lastName")} error={errors.lastName} />
        </div>
      </div>
      <div className={`w-full`}>
        <InputField label="Email" placeholder={`Email`} {...register("email")} error={errors.email} />
      </div>
    </div>
  );
};

export default AddMemberForm;
