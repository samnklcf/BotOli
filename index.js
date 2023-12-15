const {NlpManager} = require('node-nlp')
const express = require("express")
const manager = new NlpManager(({languages: ["fr"]})); 

const app = express()

// Ajouter des documents pour saluer
manager.addDocument('fr', 'Bonjour', 'salutation');
manager.addDocument('fr', 'Salut', 'salutation');
manager.addDocument('fr', 'Hello', 'salutation');
manager.addDocument('fr', 'Coucou', 'salutation');

//Doc 1
//Documents
manager.addDocument('fr', 'perception de la pauvreté au Gabon', 'perception_pauvrete_gabon');
manager.addDocument('fr', 'influence du milieu de résidence sur la perception de la pauvreté au Gabon', 'influence_residence_pauvrete_gabon');
manager.addDocument('fr', 'sexe du chef de ménage et perception de la pauvreté au Gabon', 'sexe_chef_menage_pauvrete_gabon');
manager.addDocument('fr', 'région de résidence et perception de la pauvreté au Gabon', 'region_residence_pauvrete_gabon');
manager.addDocument('fr', 'groupe socio-économique et perception de la pauvreté au Gabon', 'groupe_socioeconomique_pauvrete_gabon');
manager.addDocument('fr', 'définition de la pauvreté au Gabon', 'definition_pauvrete_gabon');
manager.addDocument('fr', 'consommation inférieure au seuil de subsistance au Gabon', 'definition_pauvrete_consommation_gabon');
manager.addDocument('fr', 'incapacité d\'influer sur sa condition de vie au Gabon', 'definition_pauvrete_incapacite_gabon');
manager.addDocument('fr', 'faible niveau de capital humain au Gabon', 'definition_pauvrete_capital_humain_gabon');
manager.addDocument('fr', 'chefs de ménages avec un niveau d\'instruction supérieur au Gabon', 'perception_pauvrete_instruction_superieure_gabon');
manager.addDocument('fr', 'cadres supérieurs et perception de la pauvreté au Gabon', 'perception_pauvrete_cadres_superieurs_gabon');
manager.addDocument('fr', 'changement dans la perception de la pauvreté au Gabon depuis 2005', 'changement_pauvrete_2005_gabon');
manager.addDocument('fr', 'comment les ménages au Gabon perçoivent-ils la pauvreté?', 'perception_pauvrete_gabon');
manager.addDocument('fr', 'est-ce que le milieu de résidence influence la perception de la pauvreté au Gabon?', 'influence_residence_pauvrete_gabon');
manager.addDocument('fr', 'quels sont les critères de définition de la pauvreté au Gabon?', 'definition_pauvrete_gabon');
manager.addDocument('fr', 'qu\'est-ce que signifie pauvreté pour la plupart des ménages au Gabon?', 'definition_pauvrete_gabon');
manager.addDocument('fr', 'comment la consommation est-elle liée à la pauvreté au Gabon?', 'definition_pauvrete_consommation_gabon');
manager.addDocument('fr', 'qu\'est-ce que l\'incapacité d\'influer sur la condition de vie signifie pour la plupart au Gabon?', 'definition_pauvrete_incapacite_gabon');
manager.addDocument('fr', 'comment est défini un faible niveau de capital humain au Gabon?', 'definition_pauvrete_capital_humain_gabon');
manager.addDocument('fr', 'quels sont les critères pour définir la pauvreté au Gabon selon les chefs de ménages éduqués?', 'perception_pauvrete_instruction_superieure_gabon');
manager.addDocument('fr', 'quelle est la perception de la pauvreté chez les cadres supérieurs au Gabon?', 'perception_pauvrete_cadres_superieurs_gabon');
manager.addDocument('fr', 'y a-t-il eu des changements dans la perception de la pauvreté au Gabon depuis 2005?', 'changement_pauvrete_2005_gabon');
manager.addDocument('fr', 'la perception de la pauvreté a-t-elle évolué au Gabon depuis 2005?', 'changement_pauvrete_2005_gabon');
manager.addDocument('fr', 'Quel est le lien entre le milieu de résidence et la perception de la pauvreté au Gabon?', 'influence_residence_pauvrete_gabon');
manager.addDocument('fr', 'Quels facteurs influencent la perception de la pauvreté par les ménages au Gabon?', 'influence_pauvrete_gabon');
manager.addDocument('fr', 'Décris la définition de la pauvreté selon la consommation au Gabon.', 'definition_pauvrete_consommation_gabon');
manager.addDocument('fr', 'Comment la pauvreté est-elle définie en termes de capacité à influer sur la vie au Gabon?', 'definition_pauvrete_incapacite_gabon');
manager.addDocument('fr', 'Quels critères définissent un faible niveau de capital humain en lien avec la pauvreté au Gabon?', 'definition_pauvrete_capital_humain_gabon');
manager.addDocument('fr', "Comment la perception de la pauvreté varie-t-elle selon le niveau d'éducation des chefs de ménages au Gabon?", 'perception_pauvrete_instruction_superieure_gabon');
manager.addDocument('fr', 'Que pensent les cadres supérieurs au Gabon de la pauvreté?', 'perception_pauvrete_cadres_superieurs_gabon');
manager.addDocument('fr', 'Quels sont les changements dans la perception de la pauvreté au Gabon depuis 2005?', 'changement_pauvrete_2005_gabon');
manager.addDocument('fr', 'Y a-t-il eu des évolutions dans la manière dont la pauvreté est perçue au Gabon depuis 2005?', 'changement_pauvrete_2005_gabon');

//ANSWER DOC1
manager.addAnswer('fr', 'perception_pauvrete_gabon', 'La perception de la pauvreté au Gabon n\'est pas influencée par le milieu de résidence, le sexe du chef de ménage, la région de résidence ou le groupe socio-économique.');
manager.addAnswer('fr', 'influence_residence_pauvrete_gabon', 'Au Gabon, le milieu de résidence n\'influence pas la perception de la pauvreté par les ménages.');
manager.addAnswer('fr', 'sexe_chef_menage_pauvrete_gabon', 'La perception de la pauvreté au Gabon n\'est pas liée au sexe du chef de ménage.');
manager.addAnswer('fr', 'region_residence_pauvrete_gabon', 'La région de résidence au Gabon ne semble pas avoir d\'impact significatif sur la perception de la pauvreté.');
manager.addAnswer('fr', 'groupe_socioeconomique_pauvrete_gabon', 'La perception de la pauvreté au Gabon n\'est pas fortement liée au groupe socio-économique des ménages.');
manager.addAnswer('fr', 'definition_pauvrete_gabon', 'Au Gabon, la pauvreté est perçue de différentes manières, mais elle n\'est pas influencée par des facteurs spécifiques tels que le lieu de résidence, le sexe du chef de ménage, la région ou le groupe socio-économique.');
manager.addAnswer('fr', 'definition_pauvrete_consommation_gabon', 'Pour 81,4% des ménages au Gabon, la pauvreté est définie comme une consommation inférieure au seuil de subsistance.');
manager.addAnswer('fr', 'definition_pauvrete_incapacite_gabon', 'Environ 80,3% des ménages au Gabon définissent la pauvreté comme l\'incapacité d\'influer sur leur condition de vie.');
manager.addAnswer('fr', 'definition_pauvrete_capital_humain_gabon', 'Pour 77,2% des ménages au Gabon, la pauvreté est définie comme un faible niveau de capital humain.');
manager.addAnswer('fr', 'perception_pauvrete_instruction_superieure_gabon', 'Au Gabon, les chefs de ménages ayant un niveau d\'instruction supérieur semblent particulièrement soutenir ces perceptions sur la pauvreté.');
manager.addAnswer('fr', 'perception_pauvrete_cadres_superieurs_gabon', 'Les cadres supérieurs au Gabon semblent également soutenir les perceptions courantes sur la pauvreté.');
manager.addAnswer('fr', 'changement_pauvrete_2005_gabon', 'Il n\'y a pas eu de changement majeur dans les perceptions de la pauvreté au Gabon depuis 2005.');




////////AJOUT DE DOC2/
manager.addDocument("fr", "Qu'est-ce que la perception de la pauvreté au Gabon ?", "perception_pauvrete");
manager.addDocument("fr", "Chef de ménage éduqué et perception de la pauvreté", "perception_pauvrete");

// Ajouter des documents pour l'évolution du niveau de vie
manager.addDocument("fr", "Évolution du niveau de vie au Gabon entre 2005 et 2016", "evolution_niveau_vie");
manager.addDocument("fr", "Dégradation du niveau de vie en milieu rural au Gabon", "evolution_niveau_vie");

// Ajouter des documents pour la gestion financière des ménages
manager.addDocument("fr", "Gestion financière des ménages au Gabon", "gestion_financiere_menages");
manager.addDocument("fr", "Différences entre cadres supérieurs et manœuvres dans l'épargne", "gestion_financiere_menages");

// Ajouter des documents pour la stabilité des revenus
manager.addDocument("fr", "Stabilité des revenus des ménages au Gabon", "stabilite_revenus");
manager.addDocument("fr", "Instabilité des revenus en milieu rural au Gabon", "stabilite_revenus");

// Ajouter des documents pour les conditions de vie
manager.addDocument("fr", "Conditions de vie difficiles au Gabon", "conditions_vie");
manager.addDocument("fr", "Lien entre niveau d'éducation et conditions de vie", "conditions_vie");

// Ajouter des documents pour l'auto-évaluation de la pauvreté
manager.addDocument("fr", "Auto-évaluation de la pauvreté au Gabon", "auto_evaluation_pauvrete");
manager.addDocument("fr", "Influence du niveau d'éducation sur l'auto-évaluation de la pauvreté", "auto_evaluation_pauvrete");

// Ajouter des documents pour les besoins essentiels
manager.addDocument("fr", "Besoins essentiels pour une vie décente au Gabon", "besoins_essentiels");
manager.addDocument("fr", "Priorités en milieu urbain dans les régions de Libreville et Port-Gentil", "besoins_essentiels");

// Ajouter des documents pour la conclusion
manager.addDocument("fr", "Conclusion sur les défis des ménages au Gabon", "conclusion_defis_menages");
manager.addDocument("fr", "Importance de l'éducation dans l'amélioration des conditions de vie", "conclusion_education");

manager.addDocument("fr", "Explique la perception de la pauvreté au Gabon", "perception_pauvrete");
manager.addDocument("fr", "Quels sont les critères de pauvreté au Gabon ?", "perception_pauvrete");
manager.addDocument("fr", "Rôle des chefs de ménage éduqués dans la perception de la pauvreté", "perception_pauvrete");

// Ajouter des documents pour l'évolution du niveau de vie
manager.addDocument("fr", "Parle-moi de l'évolution du niveau de vie au Gabon", "evolution_niveau_vie");
manager.addDocument("fr", "Quels changements ont eu lieu dans le niveau de vie entre 2005 et 2016 au Gabon ?", "evolution_niveau_vie");
manager.addDocument("fr", "Impact de la dégradation du niveau de vie en milieu rural au Gabon", "evolution_niveau_vie");

// Ajouter des documents pour la gestion financière des ménages
manager.addDocument("fr", "Comment se passe la gestion financière des ménages au Gabon ?", "gestion_financiere_menages");
manager.addDocument("fr", "Différences d'épargne entre les cadres supérieurs et les manœuvres au Gabon", "gestion_financiere_menages");
manager.addDocument("fr", "Taux d'épargne des ménages au Gabon", "gestion_financiere_menages");

// Ajouter des documents pour la stabilité des revenus
manager.addDocument("fr", "Parle-moi de la stabilité des revenus des ménages au Gabon", "stabilite_revenus");
manager.addDocument("fr", "Comment les travailleurs indépendants au Gabon perçoivent-ils la stabilité de leurs revenus ?", "stabilite_revenus");
manager.addDocument("fr", "Variabilité des revenus en milieu rural au Gabon", "stabilite_revenus");

// Ajouter des documents pour les conditions de vie
manager.addDocument("fr", "Quelles sont les conditions de vie au Gabon ?", "conditions_vie");
manager.addDocument("fr", "En quoi le niveau d'éducation affecte-t-il les conditions de vie au Gabon ?", "conditions_vie");
manager.addDocument("fr", "Difficultés spécifiques rencontrées par les femmes chefs de ménage au Gabon", "conditions_vie");

// Ajouter des documents pour l'auto-évaluation de la pauvreté
manager.addDocument("fr", "Comment les ménages se voient-ils au Gabon en termes de pauvreté ?", "auto_evaluation_pauvrete");
manager.addDocument("fr", "Influence du niveau d'éducation du chef de ménage sur l'auto-évaluation de la pauvreté", "auto_evaluation_pauvrete");
manager.addDocument("fr", "Opinion des ménages sur leur statut économique au Gabon", "auto_evaluation_pauvrete");

// Ajouter des documents pour les besoins essentiels
manager.addDocument("fr", "Quels sont les besoins essentiels prioritaires pour une vie décente au Gabon ?", "besoins_essentiels");
manager.addDocument("fr", "Sont-ils les mêmes besoins en milieu urbain et rural au Gabon ?", "besoins_essentiels");
manager.addDocument("fr", "Priorités spécifiques dans les régions de Libreville et Port-Gentil au Gabon", "besoins_essentiels");

// Ajouter des documents pour la conclusion
manager.addDocument("fr", "Que conclure des défis auxquels font face les ménages au Gabon ?", "conclusion_defis_menages");
manager.addDocument("fr", "Quel rôle joue l'éducation dans l'amélioration des conditions de vie au Gabon selon les données ?", "conclusion_education");


// Ajouter des réponses pour la perception de la pauvreté
manager.addAnswer("fr", "perception_pauvrete", "La perception de la pauvreté au Gabon est déterminée par plusieurs facteurs, dont la consommation inférieure au seuil de subsistance, l'incapacité à influencer les conditions de vie et un faible capital humain.");

// Ajouter des réponses pour l'évolution du niveau de vie
manager.addAnswer("fr", "evolution_niveau_vie", "Entre 2005 et 2016, le niveau de vie au Gabon a connu une dégradation, touchant plus de la moitié des ménages, avec une accentuation en milieu rural et à Port-Gentil.");

// Ajouter des réponses pour la gestion financière des ménages
manager.addAnswer("fr", "gestion_financiere_menages", "Seuls 20% des ménages économisent au Gabon, avec des différences notables entre les cadres supérieurs et les manœuvres.");

// Ajouter des réponses pour la stabilité des revenus
manager.addAnswer("fr", "stabilite_revenus", "Une majorité de ménages au Gabon perçoivent leurs revenus comme instables, avec une instabilité plus marquée en milieu rural et chez les travailleurs indépendants.");

// Ajouter des réponses pour les conditions de vie
manager.addAnswer("fr", "conditions_vie", "81% des ménages au Gabon estiment vivre difficilement ou à l’équilibre, avec des disparités entre femmes chefs de ménage, ménages ruraux, et cadres supérieurs.");

// Ajouter des réponses pour l'auto-évaluation de la pauvreté
manager.addAnswer("fr", "auto_evaluation_pauvrete", "Une majorité de ménages se considère comme pauvre, cette perception étant plus marquée en milieu rural et dans les régions Sud et Nord.");

// Ajouter des réponses pour les besoins essentiels
manager.addAnswer("fr", "besoins_essentiels", "Les besoins les plus prioritaires pour une vie décente au Gabon sont la capacité de se soigner en cas de maladie, un emploi stable, l'accès à l'eau courante et à l'électricité, ainsi que l'éducation pour tous les enfants.");

// Ajouter des réponses pour la conclusion
manager.addAnswer("fr", "conclusion_defis_menages", "Les données révèlent des défis significatifs pour les ménages au Gabon, notamment en matière de pauvreté, de dégradation du niveau de vie, d'instabilité financière et de difficultés à répondre aux besoins essentiels.");
manager.addAnswer("fr", "conclusion_education", "L'éducation émerge comme un facteur clé influençant la perception et l'expérience de la pauvreté, soulignant l'importance d'initiatives visant à accroître le niveau d'éducation, en particulier dans les zones rurales.");


manager.addAnswer("fr", "perception_pauvrete", "La perception de la pauvreté au Gabon est multifactorielle. Elle est définie par une consommation inférieure au seuil de subsistance, l'incapacité à influencer les conditions de vie et un faible capital humain.");

manager.addAnswer("fr", "perception_pauvrete", "La perception de la pauvreté au Gabon repose sur des critères tels que la consommation inférieure au seuil de subsistance, l'incapacité à influencer les conditions de vie et un faible capital humain.");

manager.addAnswer("fr", "perception_pauvrete", "Les chefs de ménage éduqués jouent un rôle déterminant dans la perception de la pauvreté au Gabon, qui est restée stable depuis 2005.");

// Ajouter des réponses pour l'évolution du niveau de vie
manager.addAnswer("fr", "evolution_niveau_vie", "Entre 2005 et 2016, le niveau de vie au Gabon a connu une dégradation, touchant plus de la moitié des ménages, avec une accentuation en milieu rural et à Port-Gentil.");

manager.addAnswer("fr", "evolution_niveau_vie", "L'évolution du niveau de vie au Gabon entre 2005 et 2016 montre une dégradation, particulièrement marquée en milieu rural et à Port-Gentil.");

// Ajouter des réponses pour la gestion financière des ménages
manager.addAnswer("fr", "gestion_financiere_menages", "Seuls 20% des ménages économisent au Gabon, avec des différences notables entre les cadres supérieurs et les manœuvres.");

manager.addAnswer("fr", "gestion_financiere_menages", "La gestion financière des ménages au Gabon présente des disparités d'épargne, les cadres supérieurs étant plus enclins à économiser que les manœuvres.");

// Ajouter des réponses pour la stabilité des revenus
manager.addAnswer("fr", "stabilite_revenus", "Une majorité de ménages au Gabon perçoit leurs revenus comme instables, une instabilité plus marquée en milieu rural et chez les travailleurs indépendants.");

manager.addAnswer("fr", "stabilite_revenus", "La stabilité des revenus des ménages au Gabon est perçue comme précaire, surtout en milieu rural et parmi les travailleurs indépendants.");

// Ajouter des réponses pour les conditions de vie
manager.addAnswer("fr", "conditions_vie", "81% des ménages au Gabon estiment vivre difficilement ou à l’équilibre, avec des disparités entre femmes chefs de ménage, ménages ruraux et cadres supérieurs.");

manager.addAnswer("fr", "conditions_vie", "Les conditions de vie au Gabon sont perçues comme difficiles par une grande majorité de ménages, avec des différences significatives entre les groupes de population.");

// Ajouter des réponses pour l'auto-évaluation de la pauvreté
manager.addAnswer("fr", "auto_evaluation_pauvrete", "Une majorité de ménages au Gabon se considère comme pauvre, cette perception étant plus marquée en milieu rural et dans les régions Sud et Nord.");

manager.addAnswer("fr", "auto_evaluation_pauvrete", "L'auto-évaluation de la pauvreté au Gabon montre une perception plus prononcée en milieu rural et dans les régions Sud et Nord.");

// Ajouter des réponses pour les besoins essentiels
manager.addAnswer("fr", "besoins_essentiels", "Les besoins les plus prioritaires pour une vie décente au Gabon sont la capacité de se soigner en cas de maladie, un emploi stable, l'accès à l'eau courante et à l'électricité, ainsi que l'éducation pour tous les enfants.");

manager.addAnswer("fr", "besoins_essentiels", "Au Gabon, les besoins les plus prioritaires pour une vie décente incluent la capacité de se soigner, un emploi stable, l'accès à l'eau courante et à l'électricité, ainsi que l'éducation pour tous les enfants.");

// Ajouter des réponses pour la conclusion
manager.addAnswer("fr", "conclusion_defis_menages", "Les données révèlent des défis significatifs pour les ménages au Gabon, notamment en matière de pauvreté, de dégradation du niveau de vie, d'instabilité financière et de difficultés à répondre aux besoins essentiels.");

manager.addAnswer("fr", "conclusion_defis_menages", "Les défis auxquels font face les ménages au Gabon sont multiples, englobant la pauvreté, la dégradation du niveau de vie, l'instabilité financière et la difficulté à répondre aux besoins essentiels.");

// Ajouter des réponses pour l'importance de l'éducation
manager.addAnswer("fr", "conclusion_education", "L'éducation émerge comme un facteur clé influençant la perception et l'expérience de la pauvreté, soulignant l'importance d'initiatives visant à accroître le niveau d'éducation, en particulier dans les zones rurales.");

manager.addAnswer("fr", "conclusion_education", "Les données soulignent l'importance cruciale de l'éducation dans l'amélioration des conditions de vie au Gabon, en particulier dans les zones rurales.");

manager.addDocument("fr", "Quand as-tu été créé ?", "info_bot_creation_date");
manager.addDocument("fr", "Peux-tu me dire ta date de création, Oli ?", "info_bot_creation_date");
manager.addDocument("fr", "Quand Oli a-t-il été créé ?", "info_bot_creation_date");

manager.addDocument("fr", "Qui t'a développé ?", "info_bot_developer");
manager.addDocument("fr", "Qui t'a crée ?", "info_bot_developer");
manager.addDocument("fr", "Peux-tu me dire qui est le cerveau derrière Oli ?", "info_bot_developer");
manager.addDocument("fr", "Dis-moi qui a conçu Oli.", "info_bot_developer");

manager.addDocument("fr", "Quelle est ton nom ?", "question_nom");
manager.addDocument("fr", "Comment tu t'appelles ?", "question_nom");
manager.addDocument("fr", "Comment tu te nommes ?", "question_nom");
manager.addDocument("fr", "C'est quoi ton petit nom ?", "question_nom");
manager.addDocument("fr", "Peux-tu me dire ton nom ?", "question_nom");

manager.addAnswer("fr", "question_nom", "On m'appelle Oli, ravi de te rencontrer !");
manager.addAnswer("fr", "question_nom", "Je réponds au doux nom d'Oli.");
manager.addAnswer("fr", "question_nom", "Mon nom est Oli, comment puis-je t'aider aujourd'hui ?");
manager.addAnswer("fr", "question_nom", "C'est Oli, prêt à discuter !");
manager.addAnswer("fr", "question_nom", "Oli, c'est comme ça qu'ils m'appellent.");

manager.addDocument("fr", "Quand et où Oli a-t-il été développé ?", "info_bot_creation_location");
manager.addDocument("fr", "Dis-moi plus sur le lieu et la date de naissance de Oli.", "info_bot_creation_location");
manager.addDocument("fr", "Où et quand Oli a-t-il vu le jour ?", "info_bot_creation_location");

manager.addAnswer("fr", "info_bot_creation_date", "Je suis né le 15/12/2023 à Libreville.");
manager.addAnswer("fr", "info_bot_creation_date", "Mon existence a débuté le 15 décembre 2023 à Libreville.");
manager.addAnswer("fr", "info_bot_creation_date", "Oli a vu le jour le 15 décembre 2023 à Libreville.");

manager.addAnswer("fr", "info_bot_developer", "Je suis le fruit du travail acharné de NKENKE EYEBE Samuel, un développeur fullstack et fondateur de Alisa IA.");
manager.addAnswer("fr", "info_bot_developer", "C'est NKENKE EYEBE Samuel qui a développé Oli, un développeur fullstack et fondateur de Alisa IA.");
manager.addAnswer("fr", "info_bot_developer", "Le cerveau derrière moi est NKENKE EYEBE Samuel, un développeur fullstack et fondateur de Alisa IA.");

manager.addAnswer("fr", "info_bot_creation_location", "J'ai été mis au monde à Libreville en 15 décembre 2023.");
manager.addAnswer("fr", "info_bot_creation_location", "Oli a vu le jour à Libreville le 15 décembre 2023.");
manager.addAnswer("fr", "info_bot_creation_location", "Je suis né à Libreville le 15 décembre 2023.");


// Ajouter des documents pour dire au revoir
manager.addDocument('fr', 'Au revoir', 'au_revoir');
manager.addDocument('fr', 'Adieu', 'au_revoir');
manager.addDocument('fr', 'A bientôt', 'au_revoir');
manager.addDocument('fr', 'Bye', 'au_revoir');

// Ajouter des réponses pour les salutations
manager.addAnswer('fr', 'salutation', 'Bonjour ! Comment puis-je vous aider ?');

manager.addAnswer('fr', 'salutation', 'Salut ! En quoi puis-je vous assister ?');
manager.addAnswer('fr', 'salutation', 'Hello ! Que puis-je faire pour vous ?');
manager.addAnswer('fr', 'salutation', 'Coucou ! Comment puis-je vous assister ?');

// Ajouter des réponses pour les adieux
manager.addAnswer('fr', 'au_revoir', 'Au revoir ! À bientôt.');
manager.addAnswer('fr', 'au_revoir', 'Adieu ! Prenez soin de vous.');
manager.addAnswer('fr', 'au_revoir', "A bientôt ! N'hésitez pas si vous avez besoin d'aide.");
manager.addAnswer('fr', 'au_revoir', 'Bye ! Passez une excellente journée.');

manager.addDocument('fr', 'Quelle est ta mission?', 'mission');
manager.addDocument('fr', 'Parle-moi de ta mission', 'mission');
manager.addDocument('fr', 'Pourquoi as-tu été créé?', 'mission');
manager.addDocument('fr', 'Quelle est ton rôle?', 'mission');
manager.addDocument('fr', 'Parle-moi de ton rôle', 'mission');

manager.addDocument('fr', "Qu'est-ce que la DGS ?", 'description_dgs');
manager.addDocument('fr', "Qu'est-ce que la Direction Générale Statistique ?", 'description_dgs');
manager.addDocument('fr', 'Parle-moi de la Direction Générale Statistique', 'description_dgs');
manager.addDocument('fr', 'Parle-moi de la DGS', 'description_dgs');
manager.addDocument('fr', 'Quelle est la mission de la DGS ?', 'description_dgs');
manager.addDocument('fr', 'Explique la DGS', 'description_dgs');
manager.addDocument('fr', 'DGS', 'description_dgs');

manager.addDocument('fr', 'Les missions de la DGS', 'mission_dgs');
manager.addDocument('fr', 'La DGS, quelle est votre mission', 'mission_dgs');
manager.addDocument('fr', 'Quelles sont les missions de la DGS ?', 'mission_dgs');
manager.addDocument('fr', 'Expliquez les fonctions de la DGS', 'mission_dgs');
manager.addDocument('fr', 'Décret N° 00718/PR/MPAT du 31 mai 1983', 'mission_dgs');

// Ajouter une réponse pour la mission de la DGS
manager.addAnswer('fr', 'mission_dgs', "Selon le décret N° 00718/PR/MPAT du 31 mai 1983, la Direction Générale de la Statistique a pour mission de mettre en œuvre la politique du Gouvernement dans le domaine de la Statistique. A ce titre, elle est notamment chargée de :\n\n- Produire, analyser et diffuser les statistiques officielles ;\n- Mener des enquêtes périodiques ou ponctuelles d’intérêt général auprès des Entreprises ou des Ménages ;\n- Mesurer les principaux indicateurs économiques du Gabon, d’en produire et d’en publier les indices ;\n- Organiser les opérations de recensement de la population et d’en assurer la publication ;\n- Estimer le solde migratoire ;\n- Gérer les répertoires nationaux d’identification des individus et des Entreprises, en collaboration avec les Administrations et des Organismes compétents ;\n- Assurer la diffusion et la publication des études et autres Informations Statistiques ;\n- Définir et harmoniser avec les autres Organismes des Pays de la sous-région les standards et les données statistiques ;\n- Collaborer avec les autres Administrations les Instituts Nationaux, Sous-Régionaux et Internationaux de Recherches Statistiques.");
manager.addAnswer('fr', 'mission_dgs', "La mission de la Direction Générale de la Statistique, en vertu du décret N° 00718/PR/MPAT du 31 mai 1983, englobe la production, l'analyse et la diffusion des statistiques officielles, ainsi que la réalisation d'enquêtes d’intérêt général et la publication des résultats.");
manager.addAnswer('fr', 'mission_dgs', "Selon les dispositions du décret N° 00718/PR/MPAT du 31 mai 1983, la Direction Générale de la Statistique est chargée de mesurer les principaux indicateurs économiques du Gabon, d'organiser les recensements de la population et de collaborer avec d'autres organismes pour définir des standards statistiques.");
manager.addAnswer('fr', 'mission_dgs', "Conformément au décret N° 00718/PR/MPAT du 31 mai 1983, la Direction Générale de la Statistique a pour mission d'estimer le solde migratoire, de gérer les répertoires nationaux d'identification, et de collaborer avec d'autres institutions nationales et internationales de recherche statistique.")

manager.addAnswer('fr', 'description_dgs', 'La Direction Générale de Statistiques (DGS) du Gabon, également connue sous le sigle DGS, est une administration centrale du Ministère de l’Economie et de la Relance. Elle a été créée et organisée par le décret N° 00718/PR/MPAT du 31 mai 1983. La DGS a évolué avec la création de la Direction des Etudes, de la Coordination Statistique et de l’Informatique, et la transformation de la Direction des Enquêtes et de la Démographie en la Direction des Statistiques Démographiques. Bien que la loi N° 015/2014 ait institué et organisé le Système Statistique National, la référence principale pour les missions de la DGS reste le décret N° 00718/PR/MPAT du 31 mai 1983.');
manager.addAnswer('fr', 'description_dgs', "La Direction Générale de Statistiques (DGS) du Gabon, connue sous le sigle DGS, constitue une administration centrale du Ministère de l’Économie et de la Relance. Sa création et son organisation remontent au décret N° 00718/PR/MPAT du 31 mai 1983. Au fil du temps, la DGS a connu une évolution marquante avec l'établissement de la Direction des Études, de la Coordination Statistique et de l’Informatique, tandis que la Direction des Enquêtes et de la Démographie a été transformée en la Direction des Statistiques Démographiques. Bien que la loi N° 015/2014 ait institué et organisé le Système Statistique National, il convient de souligner que le décret N° 00718/PR/MPAT du 31 mai 1983 demeure la référence fondamentale pour définir les missions essentielles de la DGS.");
manager.addDocument('fr', 'population totale', 'population');
manager.addDocument('fr', 'urbain', 'population_urbaine');
manager.addDocument('fr', 'rural', 'population_rurale');
manager.addDocument('fr', 'tranches d\'âge', 'tranches_age');
manager.addDocument('fr', '00-04 ans', 'tranche_age_00_04');
manager.addDocument('fr', '80 ans & +', 'tranche_age_80_plus');
manager.addDocument('fr', 'masculin', 'genre_masculin');
manager.addDocument('fr', 'féminin', 'genre_féminin');
manager.addDocument('fr', 'répartition par zone de résidence', 'repartition_zone_residence');
manager.addDocument('fr', 'urbain masculin', 'urbain_masculin');
manager.addDocument('fr', 'urbain féminin', 'urbain_féminin');
manager.addDocument('fr', 'urbain total', 'urbain_total');
manager.addDocument('fr', 'rural masculin', 'rural_masculin');
manager.addDocument('fr', 'rural féminin', 'rural_féminin');
manager.addDocument('fr', 'rural total', 'rural_total');

// Ajouter des réponses pour les données démographiques
manager.addAnswer('fr', 'population', 'La population totale du Gabon est de 1 811 079 personnes.');
manager.addAnswer('fr', 'population_urbaine', 'La population urbaine du Gabon est de 813 098 personnes.');
manager.addAnswer('fr', 'population_rurale', 'La population rurale du Gabon est de 764 548 personnes.');
manager.addAnswer('fr', 'tranches_age', 'La population totale varie selon les tranches d\'âge.');
manager.addAnswer('fr', 'tranche_age_00_04', 'La catégorie des 00-04 ans compte 213 725 personnes.');
manager.addAnswer('fr', 'tranche_age_80_plus', 'Il y a une diminution progressive avec l\'âge.');
manager.addAnswer('fr', 'genre_masculin', 'La population masculine totale est de 934 072 personnes.');
manager.addAnswer('fr', 'genre_féminin', 'La population féminine totale est de 877 007 personnes.');
manager.addAnswer('fr', 'repartition_zone_residence', 'Répartition par zone de résidence :');
manager.addAnswer('fr', 'urbain_masculin', 'Masculin : 813 098');
manager.addAnswer('fr', 'urbain_féminin', 'Féminin : 764 548');
manager.addAnswer('fr', 'urbain_total', 'Total : 1 577 646');
manager.addAnswer('fr', 'rural_masculin', 'La population Masculin rurale est de : 120 974');
manager.addAnswer('fr', 'rural_féminin', 'Féminin : 112 459');
manager.addAnswer('fr', 'rural_total', 'Total : 233 433');

manager.addDocument('fr', 'Quelle est l\'évolution démographique des provinces du Gabon depuis 1960 ?', 'evolution_demographique');
manager.addDocument('fr', 'Donne-moi des informations sur la population des provinces du Gabon entre 1960 et 2013.', 'evolution_demographique');
manager.addDocument('fr', 'Peux-tu me dire comment la population des provinces du Gabon a changé au fil du temps ?', 'evolution_demographique');

// Ajouter une réponse associée à cette intention
manager.addAnswer('fr', 'evolution_demographique', 'L\'effectif de la population de toutes les provinces du Gabon a sensiblement augmenté depuis 1960, avec des variations importantes entre les provinces. Entre 1960 et 2013, l’effectif de la population du Gabon a augmenté de 304 %. Pour plus de détails, veuillez fournir des informations spécifiques que vous souhaitez connaître.');
manager.addAnswer('fr', 'evolution_demographique', "Depuis 1960, il y a eu une augmentation significative de la population dans toutes les provinces du Gabon, avec des variations marquées d'une province à l'autre. L'effectif global a augmenté de 304% entre 1960 et 2013. Pour des détails spécifiques, veuillez préciser les informations que vous recherchez.");
manager.addAnswer('fr', 'evolution_demographique', "Toutes les provinces du Gabon ont connu une croissance démographique notable depuis 1960, mais les variations entre elles sont importantes. De 1960 à 2013, la population globale du Gabon a augmenté de 304%. Si vous avez des questions précises, n'hésitez pas à les poser pour obtenir plus de détails.");
manager.addAnswer('fr', 'evolution_demographique', "L'effectif de la population dans chacune des provinces du Gabon a enregistré une hausse significative depuis 1960, présentant toutefois des variations considérables entre les provinces. Entre 1960 et 2013, la population totale du Gabon a augmenté de 304%. Pour des informations spécifiques, veuillez indiquer vos préférences.");
manager.addAnswer('fr', 'evolution_demographique', "Depuis 1960, la population de toutes les provinces du Gabon a connu une augmentation substantielle, mais avec des différences marquées entre chaque province. Au cours de la période de 1960 à 2013, l'augmentation totale a atteint 304%. Si vous avez des demandes particulières, veuillez les spécifier pour obtenir des détails précis.");
manager.addAnswer('fr', 'evolution_demographique', "Une croissance notable de la population a été enregistrée dans toutes les provinces du Gabon depuis 1960, mais les variations entre elles sont significatives. Entre 1960 et 2013, la population globale du Gabon a connu une augmentation de 304%. Pour des informations plus détaillées, veuillez préciser les éléments que vous souhaitez connaître.");

manager.addDocument('fr', "Je ne comprends pas", 'non_comprehension');
manager.addDocument('fr', "Peux-tu répéter ?", 'non_comprehension');
manager.addDocument('fr', "Je n'ai pas saisi", 'non_comprehension');
manager.addDocument('fr', "Que veux-tu dire par là ?", 'non_comprehension');
manager.addDocument('fr', "Je ne comprends pas cette information", 'non_comprehension');

manager.addAnswer('fr', 'non_comprehension', "Désolé si ma réponse était confuse. En résumé, la Direction Générale de la Statistique, selon le décret N° 00718/PR/MPAT du 31 mai 1983, est chargée de mesurer les indicateurs économiques, organiser les recensements de la population, et gérer les répertoires nationaux d'identification.");

// Document pour les coordonnées de contact
manager.addDocument('fr', 'Coordonnées de contact', 'coordonnees_contact');
manager.addDocument('fr', 'Comment contacter l\'Institut National de la Statistique du Gabon ?', 'coordonnees_contact');
manager.addDocument('fr', 'Téléphone et e-mail de l\'INSTAT Gabon', 'coordonnees_contact');
manager.addDocument('fr', 'Informations de contact de l\'INSTAT', 'coordonnees_contact');

// Réponses pour les coordonnées de contact
manager.addAnswer('fr', 'coordonnees_contact', 'Vous pouvez contacter l\'INSTAT Gabon aux numéros de téléphone suivants : (+241) 01720455, (+241) 01721369, (+241) 760671. Vous pouvez également les joindre par fax au (+241) 720457. Pour les questions par e-mail, utilisez contact@instatgabon.org.');
manager.addAnswer('fr', 'coordonnees_contact', 'Les coordonnées de contact de l\'INSTAT Gabon sont les suivantes : Tél : (+241) 01720455 | 01721369 | 76 06 71, Fax : (+241) 720457, E-mail : contact@instatgabon.org.');
manager.addAnswer('fr', 'coordonnees_contact', 'Pour entrer en contact avec l\'INSTAT Gabon, vous pouvez les appeler aux numéros suivants : (+241) 01720455, (+241) 01721369, (+241) 760671. Leur fax est le (+241) 720457, et l\'e-mail de contact est contact@instatgabon.org.');
manager.addAnswer('fr', 'coordonnees_contact', 'Les coordonnées de l\'INSTAT Gabon incluent les numéros de téléphone : (+241) 01720455, (+241) 01721369, (+241) 760671. Le fax est le (+241) 720457, et l\'adresse e-mail de contact est contact@instatgabon.org.');
manager.addAnswer('fr', 'coordonnees_contact', 'Si vous avez besoin de contacter l\'INSTAT Gabon, vous pouvez le faire en utilisant les numéros suivants : (+241) 01720455, (+241) 01721369, (+241) 760671. Le fax est également disponible au (+241) 720457, et l\'e-mail de contact est contact@instatgabon.org.');

// Document pour l'emplacement de l'Institut National de la Statistique du Gabon
manager.addDocument('fr', 'Où est situé l\'Institut National de la Statistique du Gabon ?', 'localisation_instat');
manager.addDocument('fr', 'Adresse de l\'Institut National de la Statistique du Gabon', 'localisation_instat');
manager.addDocument('fr', 'Emplacement de l\'INSTAT Gabon', 'localisation_instat');
manager.addDocument('fr', 'Donnez-moi l\'adresse de l\'INSTAT Gabon', 'localisation_instat');

// Réponses pour l'emplacement de l'Institut National de la Statistique du Gabon
manager.addAnswer('fr', 'localisation_instat', 'L\'Institut National de la Statistique du Gabon est situé à Libreville, Gabon, à l\'adresse B.P: 2119,OLOUMI Immeuble ancienne Planification.');
manager.addAnswer('fr', 'localisation_instat', 'Vous trouverez l\'Institut National de la Statistique du Gabon à l\'adresse B.P: 2119,OLOUMI Immeuble ancienne Planification, Libreville (Gabon).');
manager.addAnswer('fr', 'localisation_instat', 'L\'INSTAT Gabon se situe à l\'adresse B.P: 2119, Immeuble ancienne Planification, Libreville (Gabon).');
manager.addAnswer('fr', 'localisation_instat', 'L\'adresse de l\'Institut National de la Statistique du Gabon est B.P: 2119, OLOUMI Immeuble ancienne Planification, Libreville (Gabon).');
manager.addAnswer('fr', 'localisation_instat', 'L\'INSTAT Gabon se trouve à B.P: 2119, OLOUMI Immeuble ancienne Planification, Libreville (Gabon).');

// Document pour répondre à la question "Vous êtes où ?"
manager.addDocument('fr', 'Vous êtes où ?', 'emplacement_instat');
manager.addDocument('fr', 'Où est situé votre bureau ?', 'emplacement_instat');
manager.addDocument('fr', 'Localisation de votre institution', 'emplacement_instat');

// Réponses pour la question "Vous êtes où ?"
manager.addAnswer('fr', 'emplacement_instat', 'L\'Institut National de la Statistique du Gabon est situé à Libreville, Gabon, à l\'adresse B.P: 2119, Immeuble ancienne Planification OLOUMI, ');
manager.addAnswer('fr', 'emplacement_instat', 'Notre institution est située à Libreville, Gabon, à l\'adresse B.P: 2119, OLOUMI Immeuble ancienne Planification.');
manager.addAnswer('fr', 'emplacement_instat', 'Le bureau de l\'INSTAT Gabon est localisé à Libreville, Gabon, à l\'adresse B.P: 2119, OLOUMI, Immeuble ancienne Planification.');
// (async () => {
//     await manager.train();
//     manager.save();
// })();

// (async () => {
//     const response = await manager.process('fr', 'Bonjour');
//     console.log(response);
// })();

manager.train().then(async() => {
    manager.save();


    app.get('/bot', async (req, res) => {
        let response = await manager.process("fr", req.query.message);
        res.send(response.answer || "Cela fait seulement Quelques heures que j'ai été entrainnée, veillez m'excuser si je ne réponds pas aux questions")
    })

     console.log("localhost:3000")
    app.listen(3000)

})