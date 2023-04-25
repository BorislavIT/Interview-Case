import PlusIcon from "../../../../../assets/icons/PlusIcon";
import Button from "../../../../Buttons/Button";
import AddMemberForm from "./AddMemberForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Modal, useModal } from "../../../../Modal/Modal";
import { addTeamMemberValidationSchema, defaultAddTeamMemberValues } from "../constants";
import { useContext } from "react";
import { ToastContext } from "../../../../../contexts/ToastContext";

const UserManagementSettings = () => {
  const modal = useModal();
  const toastContext = useContext(ToastContext);

  const handleAddTeamMemberClicked = () => {
    modal.openModal();
  };

  const {
    register,
    formState: { errors },
    reset,
    getValues,
    trigger,
  } = useForm({
    defaultValues: defaultAddTeamMemberValues,
    resolver: yupResolver(addTeamMemberValidationSchema),
  });

  const onAddTeamMemberSave = () => {
    trigger();
    console.log(getValues());
    modal.closeModal();
    toastContext.setToastVisible(true);
    setTimeout(() => {
      toastContext.setToastVisible(false);
    }, 3000);
  };

  const onModalClose = () => {
    modal.closeModal();
    reset();
  };

  return (
    <div className={`w-full flex flex-row flex-wrap gap-6`}>
      <Modal
        isOpen={modal.isOpen}
        closeModal={onModalClose}
        title="Add team member"
        content={<AddMemberForm register={register} getValues={getValues} errors={errors} />}
        onSaveClicked={onAddTeamMemberSave}
      />

      <div className={`w-full flex flex-col gap-2 border-b border-gray-100 pb-6 justify-between md:flex-row md:gap-0`}>
        <div className={`flex flex-col flex-wrap gap-2 items-start text-left`}>
          <div className={`text-body1/medium`}>Update authorized people</div>
          <div className={`text-body2/regular text-gray-500 mb-2 md:mb-0`}>
            Manage your team members and their account permissions here
          </div>
        </div>
        <div className={`flex flex-row flex-nowrap gap-2 items-start md:items-end w-full md:w-auto justify-between`}>
          <div>
            <Button
              type="submit"
              btnType="secondary"
              size="md"
              className={`h-10 hover:fill-red-500`}
              onClick={handleAddTeamMemberClicked}
              PrefixComponent={PlusIcon}
            >
              Add team member
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagementSettings;
