import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Set the document title
document.title = "TF Alimentos - Comércio de Grãos";

// Add Google Fonts
const link = document.createElement("link");
link.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);

// Add FontAwesome
const fontAwesome = document.createElement("link");
fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
fontAwesome.rel = "stylesheet";
document.head.appendChild(fontAwesome);

createRoot(document.getElementById("root")!).render(<App />);
