
let centres = [
    {
        id: 1,
        nom: "Centre de Tunis",
        ville: "Tunis",
        adresse: "Avenue Habib Bourguiba",
        telephone: "71111222"
    },
    {
        id: 2,
        nom: "Centre de Sousse",
        ville: "Sousse",
        adresse: "Centre ville",
        telephone: "73333444"
    },
    {
        id: 3,
        nom: "Centre de Sfax",
        ville: "Sfax",
        adresse: "Route de Tunis",
        telephone: "74444555"
    }
];

// Afficher tous les centres ou filtrer par ville
export function getAll(ville) {
    if (ville) {
        return centres.filter(
            c => c.ville.toLowerCase() === ville.toLowerCase()
        );
    }

    return centres;
}

// Chercher un centre par ID
export function getById(id) {
    return centres.find(c => c.id === id);
}

// Ajouter un centre
export function create(data) {
    const centre = {
        id: Math.max(0, ...centres.map(c => c.id)) + 1,
        nom: data.nom,
        ville: data.ville,
        adresse: data.adresse,
        telephone: data.telephone
    };

    centres.push(centre);

    return centre;
}

// Modifier complètement un centre
export function update(id, data) {
    const centre = getById(id);

    if (!centre) {
        return null;
    }

    Object.assign(centre, data);

    return centre;
}

// Modifier partiellement un centre
export function patch(id, data) {
    const centre = getById(id);

    if (!centre) {
        return null;
    }

    Object.assign(centre, data);

    return centre;
}

// Supprimer un centre
export function remove(id) {
    const index = centres.findIndex(c => c.id === id);

    if (index === -1) {
        return false;
    }

    centres.splice(index, 1);

    return true;
}
