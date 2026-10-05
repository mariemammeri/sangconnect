import http from "node:http";
import { sendJson } from "./utils/http.js";

const port = 3000;
const applicationName = "SangConnect";
const applicationVersion = "1.0.0";
const environment = "development";

const server = http.createServer((req, res) => {
  // Route / : message de bienvenue
  if (req.url === "/" && req.method === "GET") {
    sendJson(res, 200, {
      message: "Bienvenue dans SangConnect",
      application: "Gestion des dons de sang"
    });
    return;
  }

  // Route /api/health : vérification que le serveur est opérationnel
  if (req.url === "/api/health" && req.method === "GET") {
    sendJson(res, 200, {
      status: "ok",
      application: applicationName,
      timestamp: new Date().toISOString(),
      nodeVersion: process.version
    });
    return;
  }

  // Route /api/info : informations sur l'application
  if (req.url === "/api/info" && req.method === "GET") {
    sendJson(res, 200, {
      application: applicationName,
      version: applicationVersion,
      description: "API de gestion des dons de sang",
      environment: environment,
      nodeVersion: process.version
    });
    return;
  }

  // Route /api/welcome : GET uniquement
  if (req.url === "/api/welcome") {
    if (req.method !== "GET") {
      sendJson(res, 405, {
        error: "Méthode non autorisée",
        method: req.method,
        allowedMethods: ["GET"]
      });
      return;
    }

    sendJson(res, 200, {
      message: "Bienvenue dans l’API SangConnect",
      description: "Gestion des dons de sang"
    });
    return;
  }

  // Route /api/version : GET uniquement
  if (req.url === "/api/version") {
    if (req.method !== "GET") {
      sendJson(res, 405, {
        error: "Méthode non autorisée",
        method: req.method,
        allowedMethods: ["GET"]
      });
      return;
    }

    sendJson(res, 200, {
      application: applicationName,
      version: applicationVersion,
      nodeVersion: process.version,
      environment: environment
    });
    return;
  }

  // Route /api/diagnostic : GET uniquement
  if (req.url === "/api/diagnostic") {
    if (req.method !== "GET") {
      sendJson(res, 405, {
        error: "Méthode non autorisée",
        method: req.method,
        allowedMethods: ["GET"]
      });
      return;
    }

    sendJson(res, 200, {
      method: req.method,
      url: req.url,
      date: new Date().toISOString(),
      headers: req.headers
    });
    return;
  }

  // Route inconnue : 404
  sendJson(res, 404, {
    error: "Route non trouvée",
    path: req.url,
    method: req.method,
    timestamp: new Date().toISOString()
  });
});

server.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});