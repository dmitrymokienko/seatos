import { IToastProps } from "../types";
import "./styles.css";

export function Toast(props: Readonly<IToastProps>) {
    const { status, title, message } = props;

    return (
        <div className={`toast ${status}`}>
            <strong>{title}</strong>
            <p>{message}</p>
        </div>
    );
}
