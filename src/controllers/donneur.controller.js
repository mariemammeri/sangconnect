
import * as donneurService from "../services/donneur.service.js";

const groupesValides = [
    "A+", "A-", "B+", "B-",
    "AB+", "AB-", "O+", "O-"
];

// Vérifier les données obligatoires
function donneurValide(data) {
    return (
        typeof data.nom === "string" &&
        data.nom.trim() !== "" &&
        typeof data.prenom === "string" &&
        data.prenom.trim() !== "" &&
        groupesValides.includes(data.groupeSanguin)
    );
}

// GET : tous les donneurs
export function getAll(req, res) {
    const groupe = req.query.groupeSanguin;

    const donneurs = donneurService.getAll(groupe);

    res.json(donneurs);
}

// GET : donneur par ID
export function getById(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "Identifiant invalide"
        });
    }

    const donneur = donneurService.getById(id);

    if (!donneur) {
        return res.status(404).json({
            message: "Donneur introuvable"
        });
    }

    res.json(donneur);
}

// POST : créer un donneur
export function create(req, res) {
    if (!donneurValide(req.body)) {
        return res.status(400).json({
            message: "Données invalides"
        });
    }

    const donneur = donneurService.create(req.body);

    res.status(201).json(donneur);
}

// PUT : modifier complètement
export function update(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "Identifiant invalide"
        });
    }

    if (!donneurValide(req.body)) {
        return res.status(400).json({
            message: "Données invalides"
        });
    }

    const donneur = donneurService.update(id, req.body);

    if (!donneur) {
        return res.status(404).json({
            message: "Donneur introuvable"
        });
    }

    res.json(donneur);
}

// PATCH : modifier partiellement
export function patch(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "Identifiant invalide"
        });
    }

    const donneur = donneurService.getById(id);

    if (!donneur) {
        return res.status(404).json({
            message: "Donneur introuvable"
        });
    }

    const champsAutorises = [
        "nom", "prenom", "groupeSanguin"
    ];

    const donnees = req.body;

    if (
        !donnees ||
        typeof donnees !== "object" ||
        Array.isArray(donnees) ||
        Object.keys(donnees).length === 0 ||
        Object.keys(donnees).some(
            key => !champsAutorises.includes(key)
        )
    ) {
        return res.status(400).json({
            message: "Données invalides"
        });
    }

    const nouveauDonneur = {
        ...donneur,
        ...donnees
    };

    if (!donneurValide(nouveauDonneur)) {
        return res.status(400).json({
            message: "Données invalides"
        });
    }

    const resultat = donneurService.patch(id, donnees);

    res.json(resultat);
}

// DELETE : supprimer un donneur
export function remove(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "Identifiant invalide"
        });
    }

    const deleted = donneurService.remove(id);

    if (!deleted) {
        return res.status(404).json({
            message: "Donneur introuvable"
        });
    }

    res.status(204).send();
}
