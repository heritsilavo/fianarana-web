"use client";
import React, { createContext, useCallback, useContext, useState } from "react";
import "./ModalComponent.css";
import { TailSpin, ThreeDots } from "react-loader-spinner";

type ModalComponentProps = {
  children: React.ReactNode;
};

type ModalContextType = {
  open: boolean;
  content: React.ReactNode;
  header?: string;
  btnsLabel?: {
    cancel: string;
    confirm: string;
  };
  onConfirm?: Function;
  onClose?: Function;
  noHeader?: boolean;
  noFooter?: boolean;
  modalContainerClassname?: string;
  modalContentClassname?: string;
  confirmBtnDisableByDefault?: boolean;
  confirmBtnDisabled?: boolean;
};

const ModalContext = createContext<{
  modal: ModalContextType;
  setModal: React.Dispatch<React.SetStateAction<ModalContextType>>;
}>({ modal: { content: null, open: false }, setModal: () => { } });

export default function ModalComponent({ children }: ModalComponentProps) {
  const [modal, setModal] = useState<ModalContextType>({
    content: null,
    open: false,
    confirmBtnDisableByDefault: false,
    confirmBtnDisabled: true
  });
  const [loadingConfirm, setLoadingConfirm] = useState(false);

  const hideModal = () => {
    setModal(() => ({
      content: null,
      open: false,
      confirmBtnDisableByDefault: false,
      confirmBtnDisabled: true
    }));
    if (!!modal.onClose) {
      modal.onClose();
    }
  };

  const onCLickConfirm = useCallback(async () => {
    if (!!modal.onConfirm) {
      setLoadingConfirm(true)
      setModal({ ...modal, confirmBtnDisabled: true })
      await modal.onConfirm();
      setLoadingConfirm(false)
    }
    hideModal();
  }, [modal])

  const confirmBtnDisabled = modal.confirmBtnDisableByDefault ? modal.confirmBtnDisabled : false;

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {modal.open && (
        <div onClick={hideModal} className="modal-transparent-background">
          <div
            onClick={(event) => {
              event.stopPropagation();
            }}
            className={`modal-container ${modal?.modalContainerClassname || ""}`}
          >
            {!modal.noHeader && (
              <div className="modal-header">
                {modal.header || "Modal header"}
              </div>
            )}
            <div className={`modal-content ${modal.modalContentClassname}`}>{modal.content}</div>
            {!modal.noFooter && (
              <div className="modal-footer">
                <button
                  onClick={hideModal}
                  className="modal-btn modal-btn-cancel"
                >
                  {modal.btnsLabel?.cancel || "Annuler"}
                </button>
                <button
                  onClick={onCLickConfirm}
                  className={`modal-btn ${confirmBtnDisabled ? " btn-disable " : " modal-btn-confirm "}`}
                  disabled={confirmBtnDisabled}
                >
                  {loadingConfirm ? <TailSpin
                    visible={true}
                    height="20"
                    width="20"
                    color="#fff"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                  /> : (modal.btnsLabel?.confirm || "Confirmer")}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => {
  return useContext(ModalContext);
};
