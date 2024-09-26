import { createContext, useContext, useState, ReactNode } from "react";
import { IToastProps, ToastPosition } from "../types";
import { Toast } from "./Toast";

interface IToastContextProps {
    toasts: IToastProps[];
    setToasts: React.Dispatch<React.SetStateAction<IToastProps[]>>;
}

const ToastContext = createContext<IToastContextProps | undefined>(undefined);

export function ToastProvider(props: { children: ReactNode }) {
    const { children } = props;

    const [toasts, setToasts] = useState<IToastProps[]>([]);

    return (
        <ToastContext.Provider value={{ toasts, setToasts }}>
            <>
                {Object.values(ToastPosition).map((position) => (
                    <div key={position} className={`toast-container ${position}`}>
                        {toasts
                            .filter((toast) => toast.position === position)
                            .map((v) => (
                                <Toast key={v.id} {...v} />
                            ))}
                    </div>
                ))}
            </>

            {children}
        </ToastContext.Provider>
    );
}

export function useToastContext() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToastContext must be used within a ToastProvider");
    }
    return context;
}
