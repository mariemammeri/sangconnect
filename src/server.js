
import express from "express";

import donneurRoutes from "./routes/donneur.routes.js";
import centreRoutes from "./routes/centre.routes.js";

const app = express();

const PORT = 3000;

// Middleware pour lire les données JSON
app.use(express.json());

// Route principale
app.get("/", (req, res) => {
    res.json({
        message: "Bienvenue dans l'API SangConnect"
    });
});

// Route de santé
app.get("/api/health", (req, res) => {
    res.json({
        status: "OK",
        service: "SangConnect"
    });
});

// Routes des donneurs
app.use("/api/donneurs", donneurRoutes);

// Routes des centres
app.use("/api/centres", centreRoutes);

// Gestion des routes inexistantes
app.use((req, res) => {
    res.status(404).json({
        message: "Route introuvable"
    });
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
