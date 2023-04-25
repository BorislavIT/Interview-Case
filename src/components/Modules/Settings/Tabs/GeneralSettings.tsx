import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { defaultGeneralSettingsValues, generalSettingsValidationForm } from "./constants";
import Button from "../../../Buttons/Button";
import InputField from "../../../InputField/InputField";
import { useContext } from "react";
import { ToastContext } from "../../../../contexts/ToastContext";

const GeneralSettings = () => {
  const {
    register,
    formState: { errors, isDirty, isValid },
    reset,
    getValues,
    trigger,
  } = useForm({
    defaultValues: defaultGeneralSettingsValues,
    resolver: yupResolver(generalSettingsValidationForm),
  });

  const toastContext = useContext(ToastContext);

  const handleUpdateDetailsClicked = () => {
    trigger();
    if (!isValid) {
      console.log("Invalid data");
      return;
    }
    toastContext.setToastVisible(true);

    setTimeout(() => {
      toastContext.setToastVisible(false);
    }, 3000);

    console.log(getValues());
    reset();
  };

  const onCancelButtonClicked = () => {
    reset();
  };

  return (
    <div className={`w-full flex flex-row flex-wrap gap-6`}>
      <div className={`w-full flex flex-col gap-2 border-b border-gray-100 pb-6 justify-between md:flex-row md:gap-0`}>
        <div className={`flex flex-col flex-wrap gap-2 items-start text-left`}>
          <div className={`text-body1/medium`}>General Settings</div>
          <div className={`text-body2/regular text-gray-500 mb-2 md:mb-0`}>
            Here you can change your email and password
          </div>
        </div>
        <div className={`flex flex-row flex-nowrap gap-2 items-start md:items-end w-full md:w-auto justify-between`}>
          <div>
            <Button
              type="submit"
              btnType="secondary"
              className={`h-10 text-button1/semibold`}
              onClick={onCancelButtonClicked}
              disabled={!isDirty}
            >
              Cancel
            </Button>
          </div>
          <div>
            <Button
              type="submit"
              btnType="secondary"
              className={`h-10`}
              disabled={!isDirty}
              onClick={handleUpdateDetailsClicked}
            >
              Update details
            </Button>
          </div>
        </div>
      </div>
      <div className={`w-full flex content-start flex-row flex-wrap gap-6`}>
        <div className={`text-body1/medium w-full text-left`}>Email</div>
        <div className={`w-full flex flex-row flex-wrap gap-4 md:flex-nowrap`}>
          <div className={`w-full md:w-3/6 text-left mb-3 md:mb-0`}>
            <InputField label="Email" placeholder={`Email`} {...register("email")} error={errors.email} />
          </div>
          <div className={`w-full md:w-3/6 text-left`}>
            <InputField
              label="New email"
              placeholder={`Enter your new email`}
              {...register("newEmail")}
              error={errors.newEmail}
            />
          </div>
        </div>
      </div>
      <div className={`w-full flex content-start flex-row flex-wrap gap-6`}>
        <div className={`text-body1/medium w-full text-left`}>Password</div>
        <div className={`w-full flex flex-row flex-wrap gap-4 md:flex-nowrap`}>
          <div className={`w-full md:w-3/6 text-left mb-3 md:mb-0`}>
            <InputField
              label="Password"
              placeholder={`Password`}
              type="password"
              {...register("password")}
              error={errors.password}
            />
          </div>
          <div className={`w-full md:w-3/6 text-left`}>
            <InputField
              error={errors.newPassword}
              label="New password"
              placeholder={`Enter your new password`}
              type="password"
              {...register("newPassword")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;
