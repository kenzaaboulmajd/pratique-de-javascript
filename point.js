function selectOne(selectedCheckbox) {
   const checkboxes = document.querySelectorAll('input[name="type"]');
   checkboxes.forEach(checkbox => {
       if (checkbox !== selectedCheckbox) {
           checkbox.checked = false;
       }
   });
}

fetch('point.json')
   .then(response => response.json())
   .then(data => {

       document.getElementById('calculer').addEventListener('click', () => {
           let taille = parseFloat(document.getElementById('taille').value);
           let age = parseFloat(document.getElementById('age').value);
           let selectedType = document.querySelector('input[name="type"]:checked');

           // Validation des entrées
           if (isNaN(taille) || isNaN(age)) {
               document.querySelector('.result').innerText = "Veuillez entrer une taille et un âge valides.";
               return;
           }
           if (!selectedType) {
               document.querySelector('.result').innerText = "Veuillez sélectionner un type (mince, moyen, large).";
               return;
           }

           // Calcul du poids idéal
           const type = selectedType.value;
           let result;

           if (type === "moyen") {
               result = (taille - data.coefficients.moyenne.x + age / data.coefficients.moyenne.y) * data.coefficients.moyenne.z;
           } else if (type === "mince") {
               result = (taille - data.coefficients.mince.x + age / data.coefficients.mince.y) * data.coefficients.mince.z * data.coefficients.mince.s;
           } else if (type === "large") {
               result = (taille - data.coefficients.large.x + age / data.coefficients.large.y) * data.coefficients.large.z * data.coefficients.large.s;
           }

           // Affichage du résultat
           document.querySelector('.result').innerText = `VOTRE POIDS IDÉAL EST ${result.toFixed(2)} kg`;
       });
   })
   .catch(error => {
       console.error("Erreur lors du chargement du fichier JSON :", error);
       document.querySelector('.result').innerText = "Impossible de charger les données.";
   });
