import React, { FC, useRef, useState } from "react";
import { Modal } from "../../ui/Modal/";
import "./Modal.sass";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../../store/User";
const ModalComponent: FC = () => {
  const dispatch = useDispatch();
  const selector = useSelector((store) => store);
  const onCloseModal = () => {
    dispatch(setModal(false));
  };

  const refB24 = useRef();
  setTimeout(() => {
    const getB24 = document.querySelector(".b24-form");
    if (getB24) {
      if (refB24.current) refB24.current.appendChild(getB24);
    }
  }, 500);

  return (
    <Modal
      className="modal callback-modal"
      open={selector.user.modal}
      footer={null}
      onCancel={onCloseModal}
      centered
    >
      <div className="page-title page-title-h3">
        Отставьте контакты <br /> и мы с вами свяжимся в течение дня.
      </div>
      <div className="page-form page-form-b24" ref={refB24}></div>
    </Modal>
  );
};

export { ModalComponent };
