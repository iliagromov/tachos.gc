import React, { FC } from "react";
import cn from "classnames";
import { Modal as AntModal } from "antd";
import { ModalProps as AntModalProps } from "antd/lib/modal";
import Icon from "../Icon";
import "antd/es/modal/style";
import "./style.sass";

export type ModalProps = AntModalProps & {
  children?: any;
};

export const Modal: FC<ModalProps> = ({
  children,
  className,
  ...restProps
}) => {
  return (
    <AntModal
      className={cn(className)}
      closeIcon={<Icon name="cross" />}
      {...restProps}
    >
      {children}
    </AntModal>
  );
};

export default Modal;
