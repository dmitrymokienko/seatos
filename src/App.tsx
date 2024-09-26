import "./App.css";
import { ToastProvider } from "./features/toast/components/ToastProvider";
import { ExampleComponent } from "./widget/ExampleComponent";

function App() {
    return (
        <ToastProvider>
            <ExampleComponent />
        </ToastProvider>
    );
}

export default App;
