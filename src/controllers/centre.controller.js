
import * as centreService from "../services/centre.service.js";

const champsAutorises = [
    "nom",
    "ville",
    "adresse",
    "telephone"
];

function centreValide(data) {
    return (
        data &&
        typeof data === "object" &&
        !Array.isArray(data) &&
        typeof data.nom === "string" &&
        data.nom.trim() !== "" &&
        typeof data.ville === "string" &&
        data.ville.trim() !== "" &&
        typeof data.adresse === "string" &&
        data.adresse.trim() !== "" &&
        typeof data.telephone === "string" &&
        data.telephone.trim() !== ""
    );
}

// GET : liste des centres
export function getAll(req, res) {
    const ville = req.query.ville;

    const centres = centreService.getAll(ville);

    res.json(centres);
}

// GET : centre par ID
export function getById(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "Identifiant invalide"
        });
    }

    const centre = centreService.getById(id);

    if (!centre) {
        return res.status(404).json({
            message: "Centre introuvable"
        });
    }

    res.json(centre);
}

// POST : créer un centre
export function create(req, res) {
    if (!centreValide(req.body)) {
        return res.status(400).json({
            message: "Données invalides"
        });
    }

    const centre = centreService.create(req.body);

    res.status(201).json(centre);
}

// PUT : modifier complètement un centre
export function update(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "Identifiant invalide"
        });
    }

    if (!centreValide(req.body)) {
        return res.status(400).json({
            message: "Données invalides"
        });
    }

    const centre = centreService.update(id, req.body);

    if (!centre) {
        return res.status(404).json({
            message: "Centre introuvable"
        });
    }

    res.json(centre);
}

// PATCH : modifier partiellement un centre
export function patch(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "Identifiant invalide"
        });
    }

    const centre = centreService.getById(id);

    if (!centre) {
        return res.status(404).json({
            message: "Centre introuvable"
        });
    }

    const data = req.body;

    if (
        !data ||
        typeof data !== "object" ||
        Array.isArray(data) ||
        Object.keys(data).length === 0 ||
        Object.keys(data).some(
            key => !champsAutorises.includes(key)
        )
    ) {
        return res.status(400).json({
            message: "Données invalides"
        });
    }

    const nouveauCentre = {
        ...centre,
        ...data
    };

    if (!centreValide(nouveauCentre)) {
        return res.status(400).json({
            message: "Données invalides"
        });
    }

    const resultat = centreService.patch(id, data);

    res.json(resultat);
}

// DELETE : supprimer un centre
export function remove(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "Identifiant invalide"
        });
    }

    const deleted = centreService.remove(id);

    if (!deleted) {
        return res.status(404).json({
            message: "Centre introuvable"
        });
    }

    res.status(204).send();
}
