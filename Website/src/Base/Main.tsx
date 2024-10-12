import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./Index.css";
import UnderConstructionPage from "../Interfaces/UnderConstructionPage";

const root = createRoot(
    document.getElementById("root")! as HTMLElement
)
root.render(
    <StrictMode>
        <UnderConstructionPage />
    </StrictMode>
)