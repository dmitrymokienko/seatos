import "./App.css";
import { ToastProvider } from "./features/toast/components/ToastProvider";
import { ModalExampleComponent } from "./widget/ModalExampleComponent";
import { ToastExampleComponent } from "./widget/ToastExampleComponent";

function App() {
    return (
        <ToastProvider>
            <ToastExampleComponent />

            <br />

            <ModalExampleComponent />
        </ToastProvider>
    );
}

export default App;
