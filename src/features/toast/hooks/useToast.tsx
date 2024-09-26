import { useCallback, useEffect, useRef } from "react";
import { IToastProps, ToastPosition } from "../types";
import { useToastContext } from "../components/ToastProvider";

export function useToast() {
    const { setToasts } = useToastContext();

    const timeouts = useRef<number[]>([]);

    const showToast = useCallback(
        ({ status, title, message, position = ToastPosition.TopRight, duration = 5000 }: Omit<IToastProps, "id">) => {
            const id = Date.now();
            const newToast = { id, status, title, message, position, duration };

            setToasts((prevToasts) => [...prevToasts, newToast]);

            const timeoutId = window.setTimeout(() => {
                setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
            }, duration);

            timeouts.current.push(timeoutId);
        },
        []
    );

    useEffect(() => {
        return () => {
            timeouts.current.forEach((timeoutId) => clearTimeout(timeoutId));
        };
    }, []);

    return { showToast };
}
