import { ButtonProps, Modal, ModalProps } from "antd";
import React from "react";
import "./Modal.css";

interface childreProps {
  children?: React.ReactNode;
  open: ModalProps["open"];
  loading?: ModalProps["confirmLoading"];
  title?: ModalProps["title"];
  okIcon?: ButtonProps["icon"];
  okText?: ModalProps["okText"];
  cancelText?: ModalProps["cancelText"];
  cancelIcon?: ButtonProps["icon"];
  submitHandler: ModalProps["onOk"];
  cancelHandler: () => void;
}

const MyModal = ({
  children, 
  open,
  loading,
  title,
  okIcon,
  cancelIcon,
  okText = "Submit",
  cancelText = "Cancel",
  submitHandler,
  cancelHandler,
}: childreProps) => {
  return (
    <Modal
      open={open}
      onCancel={cancelHandler}
      onOk={submitHandler}
      confirmLoading={loading}
      okButtonProps={{ icon: okIcon }}
      cancelButtonProps={{ icon: cancelIcon }}
      okText={okText}
      cancelText={cancelText}
      title={title}
      width={600}
      className="custom-modal"
    >
      {children}
    </Modal>
  );
};

export default MyModal;
