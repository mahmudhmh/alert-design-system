/* eslint-disable no-empty-pattern */
import { ReactNode } from "react";
import "./index.scss";
import { X } from "lucide-react";
import { AlertTypes } from "../../../types";

interface IProps {
  // props here
  type: AlertTypes;
  headerIcon: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
}

const Alert = ({
  type = "alert-danger",
  headerIcon,
  title,
  description,
  children,
}: IProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="alert-title">
          <span>{headerIcon}</span>
          <h4>{title} </h4>
        </div>
        <X className="closeBtn" size={20} />
      </div>

      {children ? children : <p>{description}</p>}
    </div>
  );
};
export default Alert;
