import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode, useState } from "react";
import { classNames } from "../../utils/functions/utils";
import Icon from "../IcomoonIcon/Icon";
import Button from "../Buttons/Button";

interface ModalProps {
  isOpen: boolean;
  closeModal(): void;
  className?: string;
  title?: string;
  content: ReactNode;
  onSaveClicked?(): void;
}

function Modal(props: ModalProps) {
  const { isOpen, closeModal, className, title, content, onSaveClicked } = props;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div
                  className={classNames(
                    "w-full flex flex-row items-center text-left p-0 gap-[10px] mb-10 justify-between 0",
                    className
                  )}
                >
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-90">
                    {title}
                  </Dialog.Title>
                  <div>
                    <button className="cursor-pointer" onClick={closeModal}>
                      <Icon icon="x_Thin" size={16} />
                    </button>
                  </div>
                </div>

                <div className={`mb-10`}>{content}</div>

                <div className={`w-full flex flex-row flex-nowrap justify-end items-center gap-2`}>
                  <div>
                    <Button type="submit" btnType="secondary" size="md" className={`w-28`} onClick={() => closeModal()}>
                      Cancel
                    </Button>
                  </div>
                  <div>
                    <Button
                      type="submit"
                      btnType="primary"
                      size="md"
                      className={`w-28`}
                      onClick={() => {
                        onSaveClicked && onSaveClicked();
                      }}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return { isOpen, openModal, closeModal };
}

export { Modal, useModal };
