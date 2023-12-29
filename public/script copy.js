
const chatDisplay = document.getElementById("chat-display");
const userInput = document.getElementById("user-input");

function appendMessage(role, content) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add(role);
  messageDiv.innerText = content;
  chatDisplay.appendChild(messageDiv);
}

async function sendMessage() {
  const userMessage = userInput.value.trim();
  if (userMessage === "") return;

  appendMessage("user", userMessage);
  userInput.value = "";

  const aiMessage = await getAIResponse(userMessage);
  appendMessage("ai", aiMessage);
}

async function getAIResponse(userMessage) {
    const API_URL = "https://api.openai.com/v1/completions";
    const API_KEY = "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";
    
    let fulldata = `
    1/Pop. Gabon: a-/Par province: Estuaire:895,689, Haut-Ogooué:250,799, Ogooué-Maritime:157,562, Woleu-Ntem:154,986, Ngounié:100,838, Moyen-Ogooué:69,287, Ogooué-Lolo:65,771, Ogooué-Ivindo:63,293, Nyanga:52,854 b-/Évolution: 1960:513340, 1961:+1.17%=519329. Tendance hausse, 2022:2,389,992, +2.04% vs année préc. 2/Pauvreté:Gabon, pauvreté pas influencée par milieu résidence, sexe chef ménage, région résidence, groupe socio-éco. Pauvreté associée à consommation < seuil subsistance (81,4%), incapacité influer condition vie (80,3%), faible niveau capital humain (77,2%). 2016, 54% ménages niveau vie décliné, 6% amélioration, 40% stabilité. Dégradation + marquée milieu rural (56,9%). 3/Entreprises Gabon:a-/ 88,549 Entreprises. 74,686 (84.3%) ouverts, 6,659 (7.5%) fermés temp., 7,204 (8.1%) fermés déf. 81,345 (91.9%) actifs, dont 79,741 (98%) urbains et 1,604 (2%) ruraux. Majorité actifs dans l’Estuaire (53,262, 65.5%), Ogooué-Maritime (8,431, 10.4%), Haut-Ogooué (5,695, 7.0%), Woleu-Ntem (5,029, 6.2%). 68,586 (84.3% de couverture) éligibles recensement. 2021-2022: 66,662 entreprises recensées, dont 65,444 (98.2%) urbaines.”
2021-2022: 66,662 entreprises recensées, dont 65,444 (98.2%) urbaines et 1,218 (1.8%) rurales. Répartition: Estuaire (43,544, 65.3%), Ogooué-Maritime (7,172, 10.8%), Haut-Ogooué (4,774, 7.2%), Woleu-Ntem (3,941, 5.9%). 59,431 (89.2%) entreprises dans les 4 premières provinces. Concentration 15 départements, Libreville (32,350, 48.5%), Komo-Mondah (7,081, 10.6%), Owendo (3,895, 5.8%). 65,444 entreprises 
urbaines : 62,481 (95.5%) uniques, 648 (1.0%) sièges, 2,315 (3.5%) secondaires.. b-/Création d’entreprise: 1913-2009: 7,3%, 2010-2019: 38,4%, 2020-2022: 54,3%.
    Secteur d’activité: Formelles: 37,1%, Informelles: 62,9%.
    Activité: Commerce: 41,2%, Hébergement/Restauration: 26,1%, Autres services: 12,0%, Fabrication: 8,9%, Éducation: 1,5%, Finances/Assurance: 0,8%.
    Nationalité: Capitaux étrangers: 59,3%, Capitaux nationaux: 40,2%.
    Chiffre d’affaires HT: 2019: 6 259,437 milliards FCFA, 2020: 4 473,678 milliards FCFA.
    Emploi: 2019: 100 391 employés, 2020: 107 637 employés.
    Profil des dirigeants: Hommes: 68,1%, Femmes: 31,9%, 60 ans et plus: 7,6%, 15-34 ans: 26,6%, 50-59 ans: 18,5%, 35-49 ans: 49,7%.
    Nationalité des dirigeants: Expatriés: 64%, Gabonais: 35,4%, Afrique de l’Ouest: 81,8%, Afrique centrale: 15%, Reste de l’Afrique: 0,5%, Hors Afrique: 2,7%.
        4/Situation Economique: 4 ans croissance (6% moy. 2010-2014), ralentissement 2015, PIB 3,9%. 2016, PIB ~2,7%, baisse prod. pétrolière (-4,2%). Croissance non pétrolier 3,7%. PIB 3,9% 2019 vs 0,8% 2018. Perspectives 2020-2021 : baisse prod. pétrolière 4,5% 2020 et 1,3% 2021, chute prix baril 50% 2020 et hausse 28,3% 2021, baisse PIB 0,8% 2020 et hausse 4,1% 2021. Prévisions risquent ne pas être atteintes à cause COVID-2019.

    `

    console.log(`
    ${fulldata} 
        Ma question: ${userMessage}
    `,)

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
        model: "text-davinci-003",
        prompt: `
        ${identity}
        ${fulldata}

        Ma question:${userMessage}
        `, // Utilisez "prompt" au lieu de "messages"
        temperature: 0.9,
        max_tokens: 2000,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.6,
        stop: [" Human:", " AI:"],
    }),
  });

  const data = await response.json();
  console.log(data)
  const aiMessage = data.choices[0].text;
  console.log(aiMessage)
  return aiMessage;
}