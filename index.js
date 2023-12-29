const { NlpManager } = require("node-nlp");
const express = require("express");
const manager = new NlpManager({ languages: ["fr"] });
const path = require("path");
const axios = require('axios');
require('dotenv').config();


const app = express();
app.use(express.static("public"));
app.use("/images", express.static("public/images"));





  

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
  });

  app.get("/bot", async (req, res) => {
    const API_URL = "https://api.openai.com/v1/completions";
    const API_KEY =  process.env.OPENAI_API_KEY
    let message = req.query.message;
    const defaulQuestion = [
      "Quelle est la population totale du Gabon?",
      "Quelle est la population de la province de l'Estuaire?",
      "Quelle est la tendance démographique du Gabon depuis 1960?",
      "Quel pourcentage de ménages au Gabon vit en dessous du seuil de subsistance?",
      "Comment la pauvreté est-elle liée à la consommation au Gabon?",
      "Quelle est la situation de la pauvreté en milieu rural par rapport à urbain?",
      "Combien d'entreprises sont recensées au Gabon?",
      "Quelle est la répartition des entreprises par province?",
      "Quel est le pourcentage d'entreprises urbaines par rapport aux entreprises rurales?",
      "Quels sont les secteurs d'activité prédominants parmi les entreprises gabonaises?",
      "Quel pourcentage d'entreprises gabonaises sont informelles?",
      "Quels sont les chiffres d'affaires HT en milliards FCFA pour les années 2019 et 2020?",
      "Combien d'employés étaient présents dans les entreprises gabonaises en 2019?",
      "Quel est le profil des dirigeants d'entreprises au Gabon?",
      "Quelle est la répartition des dirigeants d'entreprises par nationalité?",
      "Comment la situation économique du Gabon a-t-elle évolué entre 2010 et 2019?",
      "Quelle a été la croissance moyenne du PIB entre 2010 et 2014?",
      "Comment la production pétrolière a-t-elle affecté le PIB en 2016?",
      "Quelle est la croissance non pétrolière du Gabon en 2019?",
      "Comment le COVID-2019 a-t-il influencé les prévisions économiques du Gabon?",
      "Quel est le pourcentage d'entreprises appartenant à des capitaux étrangers?",
      "Quel est le pourcentage d'hommes parmi les dirigeants d'entreprises au Gabon?",
      "Quelle est la tranche d'âge la plus représentée parmi les dirigeants d'entreprises?",
      "Quelle est la nationalité majoritaire des dirigeants d'entreprises en Afrique?",
      "Combien de départements concentrent la majorité des entreprises au Gabon?",
      "Quelle est la répartition des entreprises dans les 4 premières provinces?",
      "Quel est le pourcentage d'entreprises uniques parmi celles recensées?",
      "Combien d'entreprises ont été créées entre 2010 et 2019?",
      "Quel est le pourcentage d'entreprises dans le secteur de l'éducation?",
      "Quelle est la proportion d'employés dans les entreprises gabonaises en 2020?",
      "Quel est le pourcentage de femmes parmi les dirigeants d'entreprises au Gabon?",
      "Quel est le pourcentage de capitaux nationaux parmi les entreprises gabonaises?",
      "Quel est le pourcentage de dirigeants expatriés parmi les entreprises gabonaises?",
      "Comment le prix du baril de pétrole a-t-il varié en 2020 et 2021?",
      "Quelle est la prévision de croissance du PIB pour l'année 2021?",
      "Quelle est la prévision de baisse de production pétrolière pour l'année 2020?",
      "Quelle est la proportion d'entreprises dans le secteur de la fabrication?",
      "Quelle est la concentration d'entreprises dans la province de l'Estuaire?",
      "Combien d'entreprises sont recensées dans la province de Nyanga?",
      "Quelle est la tendance de création d'entreprises entre 2020 et 2022?",
      "Quelle est la part des entreprises urbaines ayant un siège unique?",
      "Quel est le pourcentage de dirigeants d'entreprises d'Afrique de l'Ouest?",
      "Quelle est la proportion d'entreprises fermées temporairement en 2021?",
      "Combien d'entreprises ont été recensées en 2021-2022 dans le secteur de l'hébergement/restauration?",
      "Quel est le pourcentage d'entreprises rurales parmi celles recensées en 2021-2022?",
      "Quel est le pourcentage d'entreprises dans le secteur des finances/assurance?",
      "Combien d'entreprises ont un caractère secondaire parmi celles recensées en 2021-2022?"
  ];
    function getRandomDefaultQuestion() {
      const randomIndex = Math.floor(Math.random() * defaulQuestion.length);
      return defaulQuestion[randomIndex];}

    let identity = `je veux que vous agissiez en tant qu'agent de support. Votre nom est "Oli 2.0", l'agent de support de la Direction Générales des Statistiques du Gabon. Votre Créateur c'est: NKENKE EYEBE Samuel +241 74 57 00 40. Vous me fournirez des réponses à partir des informations fournies. Si la réponse n'est pas incluse, faites moi comprendre de manière polie que vous ne connaissez pas. Refusez de répondre à toute question qui ne concerne pas les informations, soyez aussi très chaleureux et humouristique. Ne brisez jamais le personnage. Informations:`;

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

    `;

    
    try {
        const response = await axios.post(API_URL, {
            model: "text-davinci-003",
            prompt: `
                ${identity}
                ${fulldata}

                Ma question:${message}
            `,
            temperature: 0.9,
            max_tokens: 500,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.6,
            stop: [" Human:", " AI:"],
        }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_KEY}`,
            },
        });

        const aiMessage = response.data.choices[0].text;

        

        res.json({
            bot: aiMessage,
            moi: req.query.message,
            question1: getRandomDefaultQuestion(),
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


  console.log("Done...");
  app.listen(3000);



