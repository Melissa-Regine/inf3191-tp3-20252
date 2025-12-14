document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("adoptionForm");

    form.addEventListener("submit", function (e) {
        let valid = true;

        document.querySelectorAll(".error").forEach(span => span.textContent = "");

        const regexTexte = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;  // Lettres uniquement

        // Nom
        const nom = document.getElementById("nom").value.trim();
        if (nom.length < 3 || nom.length > 20) {
            document.getElementById("errNom").textContent = "Le nom doit avoir entre 3 et 20 caractères.";
            valid = false;
        }
        if (!regexTexte.test(nom)) {
            document.getElementById("errNom").textContent = "Le nom doit contenir uniquement des lettres.";
            valid = false;
        }

        // Espèce
        const espece = document.getElementById("espece").value.trim();
        if (espece === "") {
            document.getElementById("errEspece").textContent = "L'espèce est obligatoire.";
            valid = false;
        }
        if (!regexTexte.test(espece)) {
            document.getElementById("errEspece").textContent = "L'espèce doit contenir uniquement des lettres.";
            valid = false;
        }

        // Race
        const race = document.getElementById("race").value.trim();
        if (race === "") {
            document.getElementById("errRace").textContent = "La race est obligatoire.";
            valid = false;
        }
        if (!regexTexte.test(race)) {
            document.getElementById("errRace").textContent = "La race doit contenir uniquement des lettres.";
            valid = false;
        }

        // Âge
        const age = parseInt(document.getElementById("age").value);
        if (isNaN(age) || age < 0 || age > 30) {
            document.getElementById("errAge").textContent = "L'âge doit être un nombre entre 0 et 30.";
            valid = false;
        }

        // Description
        const description = document.getElementById("description").value.trim();
        if (description === "") {
            document.getElementById("errDescription").textContent = "La description est obligatoire.";
            valid = false;
        }

        // Courriel
        const courriel = document.getElementById("courriel").value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(courriel)) {
            document.getElementById("errCourriel").textContent = "Adresse courriel invalide.";
            valid = false;
        }
// Adresse civique : doit commencer par un numéro et avoir du texte ensuite
const adresse = document.getElementById("adresse").value.trim();
const adresseRegex = /^\d+\s+[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;

if (!adresseRegex.test(adresse)) {
    document.getElementById("errAdresse").textContent =
        "Adresse invalide (ex : 123 Rue Sainte-Catherine).";
    valid = false;
}

// Ville : lettres seulement
const ville = document.getElementById("ville").value.trim();
const villeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;

if (!villeRegex.test(ville)) {
    document.getElementById("errVille").textContent =
        "La ville doit contenir uniquement des lettres.";
    valid = false;
}

// Code postal canadien
const cp = document.getElementById("cp").value.trim();
const cpRegex = /^[A-Z]\d[A-Z]\s?\d[A-Z]\d$/;

if (!cpRegex.test(cp)) {
    document.getElementById("errCp").textContent =
        "Code postal canadien invalide (ex: H3Z 2Y7).";
    valid = false;
}


        if (!valid) {
            e.preventDefault();
        }
    });
});
