
let donneurs = [
    {
        id: 1,
        nom: "Ben Ali",
        prenom: "Ahmed",
        groupeSanguin: "A+"
    },
    {
        id: 2,
        nom: "Trabelsi",
        prenom: "Sami",
        groupeSanguin: "O+"
    },
    {
        id: 3,
        nom: "Mansouri",
        prenom: "Amine",
        groupeSanguin: "B+"
    }
];

// Afficher tous les donneurs
export function getAll(groupeSanguin) {
    if (groupeSanguin) {
        return donneurs.filter(
            d => d.groupeSanguin === groupeSanguin
        );
    }

    return donneurs;
}

// Chercher un donneur par ID
export function getById(id) {
    return donneurs.find(d => d.id === id);
}

// Ajouter un donneur
export function create(data) {
    const newDonneur = {
        id: Math.max(0, ...donneurs.map(d => d.id)) + 1,
        nom: data.nom,
        prenom: data.prenom,
        groupeSanguin: data.groupeSanguin
    };

    donneurs.push(newDonneur);

    return newDonneur;
}

// Modifier complètement un donneur
export function update(id, data) {
    const donneur = getById(id);

    if (!donneur) {
        return null;
    }

    donneur.nom = data.nom;
    donneur.prenom = data.prenom;
    donneur.groupeSanguin = data.groupeSanguin;

    return donneur;
}

// Modifier partiellement un donneur
export function patch(id, data) {
    const donneur = getById(id);

    if (!donneur) {
        return null;
    }

    Object.assign(donneur, data);

    return donneur;
}

// Supprimer un donneur
export function remove(id) {
    const index = donneurs.findIndex(d => d.id === id);

    if (index === -1) {
        return false;
    }

    donneurs.splice(index, 1);

    return true;
}
