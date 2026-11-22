window.CATS=[
{id:'C',nom:'Coque et pont'},
{id:'G',nom:'Gréement de pont et accastillage'},
{id:'S',nom:'Direction, safran et embase'},
{id:'M',nom:'Moteur hors-bord'},
{id:'E',nom:'Électricité et instruments'},
{id:'D',nom:'Sécurité – Division 240 (côtier)'},
{id:'R',nom:'Remorque'}];

window.MODELES=[
{id:'qs500c',constructeur:'Quicksilver',modele:'500 Commander',type:'Open console centrale',longueur:5.0,largeur:2.2,tirant:0.25,poids:530,personnes:5,categorie:'C',puissanceMax:75,reservoir:60,propulsion:'Hors-bord',note:'Valeurs indicatives (fiche technique 2005) : environ 5,00 × 2,20 m, 530 kg, 5 personnes, 75 CV maxi, réservoir 60 L, catégorie C. À confirmer sur la plaque constructeur et la déclaration CE.'},
{id:'autre',constructeur:'',modele:'Autre embarcation (saisie manuelle)',type:'',longueur:'',largeur:'',tirant:'',personnes:'',categorie:'',puissanceMax:'',reservoir:'',propulsion:''}];

window.POINTS=[
{id:'C01',cat:'C',t:'Carène (œuvres vives)',role:'La carène est la partie immergée de la coque. Elle assure flottabilité, stabilité et glisse.',ctrl:['Bateau sorti de l\'eau, inspecte toute la surface à la lumière rasante.','Cherche cloques, chocs, éclats de gelcoat, rayures profondes jusqu\'à la fibre.','Tapote les zones suspectes avec un manche de tournevis : un son mat signale un délaminage.'],usure:'Cloques (osmose), fibres apparentes, zones molles, salissures importantes qui freinent le bateau.',prev:'Rincer après chaque sortie, réparer les éclats au gelcoat avant l\'hiver, antifouling si le bateau reste à flot.'},
{id:'C02',cat:'C',t:'Œuvres mortes et gelcoat',role:'Partie hors de l\'eau de la coque ; le gelcoat protège le stratifié des UV et de l\'eau.',ctrl:['Inspecte flancs et étrave.','Repère les fissures en étoile (chocs) ou le faïençage (fines craquelures).','Vérifie l\'état du liseré et des marquages.'],usure:'Gelcoat terne et farineux, fissures, jaunissement, éclats au niveau des pare-battages.',prev:'Polish une fois par an, protection UV, pare-battages bien placés au port.'},
{id:'C03',cat:'C',t:'Liaison coque-pont et liston',role:'Jonction collée/rivetée entre la coque et le pont, protégée par le liston (bourrelet périphérique).',ctrl:['Suis le liston sur tout le tour du bateau.','Vérifie qu\'il n\'est ni décollé ni fendu.','Recherche des traces d\'eau à l\'intérieur sous la liaison.'],usure:'Liston arraché ou fendu, jour entre coque et pont, infiltrations dans les coffres.',prev:'Accoster doucement, remplacer les portions de liston abîmées.'},
{id:'C04',cat:'C',t:'Tableau arrière',role:'Paroi arrière qui supporte le moteur hors-bord et encaisse toute la poussée.',ctrl:['Moteur relevé, pousse fortement la tête du moteur de gauche à droite : rien ne doit bouger côté coque.','Inspecte le gelcoat autour des fixations (fissures en étoile).','Vérifie l\'étanchéité des boulons de fixation à l\'intérieur.'],usure:'Fissures autour des fixations, tableau qui fléchit, bois humide ou pourri à cœur (son mat, odeur).',prev:'Contrôler le serrage des boulons moteur chaque année, refaire l\'étanchéité au mastic marine si besoin.'},
{id:'C05',cat:'C',t:'Nable et bouchon de vidange',role:'Orifice bas du tableau qui permet de vider la cale à terre.',ctrl:['Vérifie la présence et l\'état du bouchon et de son joint.','Contrôle qu\'il est bien vissé avant chaque mise à l\'eau.'],usure:'Joint craquelé, filetage abîmé, bouchon absent.',prev:'Garder un bouchon de rechange à bord, l\'attacher au bateau.'},
{id:'C06',cat:'C',t:'Dalots et auto-videur',role:'Orifices qui évacuent l\'eau du cockpit vers l\'extérieur.',ctrl:['Verse de l\'eau dans le cockpit et vérifie qu\'elle s\'écoule vite.','Contrôle les clapets anti-retour.'],usure:'Écoulement lent, clapets bloqués ouverts, feuilles et sable.',prev:'Nettoyer les dalots régulièrement, rincer à l\'eau douce.'},
{id:'C07',cat:'C',t:'Pont, plancher et revêtement',role:'Surface de circulation ; le revêtement (teck ou synthétique) limite les glissades.',ctrl:['Marche partout : le plancher ne doit pas être souple.','Vérifie le décollement des lames de revêtement.','Contrôle les joints autour des équipements fixés.'],usure:'Zones molles, lames décollées, joints noircis, cloques.',prev:'Nettoyage doux (pas de nettoyeur haute pression sur le teck), réparation rapide des décollements.'},
{id:'C08',cat:'C',t:'Cale et fonds',role:'Partie basse intérieure où s\'accumule l\'eau, et où passent souvent tuyaux et câbles.',ctrl:['Ouvre les trappes et regarde s\'il y a de l\'eau.','Sens : une odeur d\'essence est un signal d\'alerte.','Vérifie l\'état des tuyaux et des fixations.'],usure:'Eau stagnante, irisations d\'essence, corrosion, tuyaux fendus.',prev:'Assécher après chaque sortie, ventiler, rechercher l\'origine de toute entrée d\'eau.'},
{id:'C09',cat:'C',t:'Coffres, trappes et capots',role:'Rangements étanches du bord (sécurité, mouillage, réservoir).',ctrl:['Ouvre chaque coffre : charnières, verrous, joints.','Vérifie que l\'eau s\'évacue des gouttières.'],usure:'Charnières cassées, joints écrasés, eau dans les coffres, moisissures.',prev:'Laisser entrouvert à l\'hivernage pour aérer, graisser les charnières.'},
{id:'C11',cat:'C',t:'Porte-cannes et perçages traversants',role:'Les porte-cannes encastrés traversent le pont ou la coque : mal étanchés, ils laissent l\'eau s\'infiltrer dans les volumes fermés.',ctrl:['Inspecte le joint ou le mastic autour de chaque porte-cannes.','Recherche des fissures du gelcoat autour des perçages.','Ouvre les volumes sous le cockpit : traces d\'humidité, eau stagnante, moisissures.','Après un lavage au jet, vérifie qu\'aucune goutte n\'apparaît à l\'intérieur.'],usure:'Mastic craquelé ou décollé, auréoles, eau dans la cale après la pluie, stratifié humide autour du perçage.',prev:'Refaire l\'étanchéité au mastic polyuréthane marine dès le moindre doute ; l\'eau qui migre dans la structure reste longtemps invisible.'},
{id:'C10',cat:'C',t:'Anodes de coque',role:'Pièces de métal sacrificielles (zinc ou alu) qui se corrodent à la place des pièces métalliques du bord.',ctrl:['Repère toutes les anodes (tableau, embase).','Estime l\'usure : à remplacer au-delà de 50 % consommée.','Vérifie qu\'elles ne sont pas peintes.'],usure:'Anode très rongée, blanchâtre ou au contraire intacte depuis des années (mauvais contact).',prev:'Changer chaque année, ne jamais peindre une anode, adapter le métal à l\'eau (zinc en mer, alu en eau saumâtre).'},

{id:'G01',cat:'G',t:'Taquets et chaumards',role:'Points d\'amarrage où l\'on tourne les amarres.',ctrl:['Tire fortement sur chaque taquet : aucun jeu.','Inspecte le gelcoat autour (fissures).','Vérifie la présence de contre-plaques sous le pont.'],usure:'Taquet qui bouge, fissures en étoile, écrous rouillés.',prev:'Resserrer et refaire l\'étanchéité au mastic si jeu.'},
{id:'G02',cat:'G',t:'Balcon avant et mains courantes',role:'Garde-corps inox qui protègent des chutes à la mer.',ctrl:['Secoue le balcon : pas de jeu aux pieds.','Inspecte les soudures et les embases.'],usure:'Pied desserré, fissure de soudure, corrosion caverneuse (points rouille).',prev:'Resserrer chaque saison, nettoyer l\'inox avec un produit adapté.'},
{id:'G03',cat:'G',t:'Bimini et taud',role:'Protection solaire et pluie ; l\'armature est soumise au vent.',ctrl:['Déplie le bimini : armature droite, articulations libres.','Inspecte la toile (coutures, déchirures) et les sangles.'],usure:'Toile décolorée ou fendue, coutures lâches, tubes pliés, sangles effilochées.',prev:'Replier au port par vent fort, laver la toile à l\'eau douce, imperméabiliser.'},
{id:'G04',cat:'G',t:'Pare-brise et arceau',role:'Protège le pilote des embruns ; l\'arceau sert de main courante.',ctrl:['Vérifie fissures et rayures du plexiglas.','Contrôle les fixations et l\'arceau.'],usure:'Fissures partant des vis, plexi opaque, fixations desserrées.',prev:'Nettoyer à l\'eau savonneuse (jamais d\'alcool ou d\'acétone), resserrer sans forcer.'},
{id:'G05',cat:'G',t:'Anneau d\'étrave et points de levage',role:'Points forts pour remorquer, mettre sur remorque ou lever le bateau.',ctrl:['Vérifie le serrage et l\'absence de corrosion.','Inspecte le gelcoat autour.'],usure:'Anneau ovalisé, écrou rouillé, fissures.',prev:'Inspecter avant chaque mise sur remorque.'},
{id:'G06',cat:'G',t:'Amarres et pare-battages',role:'Retiennent et protègent le bateau au port.',ctrl:['Vérifie l\'état des cordages (usure, raideur).','Contrôle le gonflage des pare-battages.'],usure:'Cordage effiloché ou cuit par le soleil, pare-battages dégonflés.',prev:'Rincer à l\'eau douce, remplacer les amarres usées avant l\'hiver.'},
{id:'G07',cat:'G',t:'Échelle de bain',role:'Permet de remonter à bord, y compris en cas de chute à l\'eau.',ctrl:['Déplie l\'échelle seul depuis l\'eau si possible.','Vérifie fixations et marches.'],usure:'Échelle grippée, marche cassée, fixations desserrées.',prev:'Graisser l\'articulation, vérifier qu\'elle est accessible depuis l\'eau.'},

{id:'S01',cat:'S',t:'Volant et boîtier de direction',role:'Transmet l\'action du pilote au câble de direction.',ctrl:['Tourne le volant butée à butée : mouvement régulier, sans point dur.','Vérifie le jeu en bout de volant (quelques centimètres maximum).'],usure:'Point dur, jeu important, bruit, volant voilé.',prev:'Faire tourner régulièrement, graisser selon le constructeur.'},
{id:'S02',cat:'S',t:'Câble de direction',role:'Câble mécanique qui pousse et tire le moteur pour orienter le bateau.',ctrl:['Moteur relevé, vérifie la gaine sur toute sa longueur.','Contrôle la tige en sortie de tube : propre, graissée, sans corrosion.'],usure:'Gaine fendue, tige piquée de rouille, direction dure ou qui se bloque.',prev:'Graisser la tige au moins une fois par an, rincer à l\'eau douce.'},
{id:'S03',cat:'S',t:'Barre de liaison et tube de relevage',role:'Relie le câble au moteur ; le tube supporte le pivotement du moteur.',ctrl:['Vérifie les écrous autobloquants et les goupilles.','Contrôle qu\'il n\'y a pas de jeu dans les rotules.'],usure:'Écrou desserré, rotule avec jeu, corrosion.',prev:'Contrôle avant chaque sortie (point du manuel Mercury), graissage annuel.'},
{id:'S04',cat:'S',t:'Hélice',role:'Transforme la puissance du moteur en poussée.',ctrl:['Inspecte chaque pale : chocs, déformations, éclats.','Démonte l\'hélice : fil de pêche enroulé sur l\'arbre, état du moyeu.','Vérifie l\'écrou et sa goupille.'],usure:'Pales tordues ou ébréchées, vibrations, moyeu qui patine (le moteur monte en régime sans accélérer).',prev:'Démonter et graisser l\'arbre chaque année, garder une hélice de secours.'},
{id:'S05',cat:'S',t:'Embase et plaque anti-cavitation',role:'Partie basse du moteur qui contient le renvoi d\'angle et porte l\'hélice ; elle sert aussi de « safran » sur un hors-bord.',ctrl:['Recherche des traces d\'huile autour des joints.','Inspecte les chocs sur l\'aileron et le patin.','Vérifie l\'anode de la plaque anti-cavitation.'],usure:'Huile qui suinte, peinture écaillée avec corrosion blanche, aileron cassé.',prev:'Vidange d\'embase chaque année, retouche de peinture, éviter les hauts-fonds.'},
{id:'S06',cat:'S',t:'Relevage hydraulique (power trim)',role:'Lève et règle l\'assiette du moteur.',ctrl:['Fais monter et descendre le moteur : mouvement régulier.','Vérifie le niveau de liquide et l\'absence de fuite sur les vérins.','Moteur relevé, il ne doit pas redescendre seul.'],usure:'Fuite d\'huile, moteur qui redescend, bruit de pompe anormal.',prev:'Contrôle annuel du niveau, rinçage des tiges de vérins.'},

{id:'M01',cat:'M',t:'Démarrage et ralenti',role:'Un démarrage franc et un ralenti stable révèlent un moteur sain.',ctrl:['Démarre à froid : le moteur doit partir en quelques secondes.','Écoute le ralenti : régulier, sans calage.','Passe les vitesses au ralenti : enclenchement net.'],usure:'Démarrage difficile, ratés, calage, fumée anormale.',prev:'Entretien annuel, carburant frais avec stabilisant à l\'hivernage.'},
{id:'M02',cat:'M',t:'Huile moteur',role:'Lubrifie et refroidit les pièces internes du moteur 4 temps.',ctrl:['Moteur droit et froid, vérifie le niveau à la jauge.','Observe l\'aspect : une huile laiteuse signale de l\'eau.'],usure:'Niveau bas, huile noire et épaisse, aspect laiteux.',prev:'Vidange et filtre tous les ans ou toutes les 100 h.'},
{id:'M03',cat:'M',t:'Circuit de refroidissement',role:'L\'eau aspirée sous l\'embase refroidit le moteur ; un jet témoin (pissette) confirme la circulation.',ctrl:['Moteur en marche, vérifie le jet témoin continu.','Contrôle les prises d\'eau de l\'embase (pas d\'obstruction).'],usure:'Jet faible ou absent, alarme de surchauffe, traces de calcaire.',prev:'Rinçage à l\'eau douce après chaque sortie en mer.'},
{id:'M04',cat:'M',t:'Turbine de pompe à eau',role:'Roue en caoutchouc qui fait circuler l\'eau de refroidissement.',ctrl:['Vérifie la date du dernier remplacement dans le carnet.','Contrôle la force du jet témoin.'],usure:'Jet faible, chauffe, ailettes cassées ou durcies.',prev:'Remplacement tous les 3 ans ou toutes les 300 h, et après tout échouage dans le sable.'},
{id:'M05',cat:'M',t:'Thermostat et alarme de surchauffe',role:'Le thermostat régule la température ; l\'alarme prévient en cas de surchauffe.',ctrl:['Au démarrage, l\'alarme doit faire un bref test sonore (selon modèle).','Contrôle visuel du thermostat lors de l\'entretien annuel.'],usure:'Moteur qui chauffe ou ne monte pas en température, alarme muette.',prev:'Contrôle annuel par le mécanicien.'},
{id:'M06',cat:'M',t:'Bougies d\'allumage',role:'Produisent l\'étincelle qui enflamme le mélange air-essence.',ctrl:['Vérifie la date de remplacement.','Lors du démontage, observe la couleur (brun clair = bon).'],usure:'Électrode usée, dépôts noirs ou blancs, ratés d\'allumage.',prev:'Remplacement à 300 h ou 3 ans (Mercury 4 temps), toujours avec la référence constructeur.'},
{id:'M07',cat:'M',t:'Circuit carburant',role:'Réservoir, durites, poire d\'amorçage et filtres amènent une essence propre au moteur.',ctrl:['Appuie sur la poire : elle doit durcir sans fuite.','Inspecte les durites (craquelures) et les colliers.','Vérifie le filtre décanteur (eau au fond du bol).','Sens : aucune odeur d\'essence.'],usure:'Poire poreuse, durites craquelées, eau dans le filtre, fuite.',prev:'Filtre à essence chaque année, essence fraîche, plein avant l\'hivernage avec stabilisant.'},
{id:'M08',cat:'M',t:'Courroie de distribution',role:'Synchronise les soupapes et le vilebrequin ; sa rupture immobilise le moteur.',ctrl:['Capot ouvert, inspecte la courroie : fissures, dents manquantes, effilochage.','Vérifie la date du dernier remplacement.'],usure:'Craquelures, brillance, dents abîmées.',prev:'Contrôle annuel, remplacement selon l\'état ou les préconisations du mécanicien.'},
{id:'M09',cat:'M',t:'Anodes du moteur',role:'Protègent le bloc et l\'embase en aluminium contre la corrosion galvanique.',ctrl:['Repère les anodes sur l\'embase, la plaque anti-cavitation et le support.','Estime leur usure.'],usure:'Anode consommée à plus de 50 %, corrosion blanche sur l\'embase.',prev:'Remplacement annuel ou dès 50 % d\'usure.'},
{id:'M10',cat:'M',t:'Huile d\'embase',role:'Lubrifie les pignons du renvoi d\'angle.',ctrl:['Lors de la vidange, observe l\'huile : couleur miel normale.','Recherche des paillettes métalliques sur le bouchon magnétique.'],usure:'Huile laiteuse (eau entrée par un joint), paillettes, niveau bas.',prev:'Vidange annuelle avec joints neufs.'},
{id:'M11',cat:'M',t:'Commande d\'accélérateur et d\'inverseur',role:'La manette transmet par câbles l\'accélération et le passage avant/arrière.',ctrl:['Manœuvre la manette : course régulière, crans nets.','Vérifie que le moteur ne démarre qu\'au point mort.'],usure:'Manette dure, vitesse qui saute, démarrage possible en prise (dangereux).',prev:'Réglage des câbles lors de l\'entretien annuel.'},
{id:'M12',cat:'M',t:'Sous le capot : corrosion et graissage',role:'Les pièces sous le capot sont exposées au sel et à l\'humidité.',ctrl:['Ouvre le capot : recherche du sel, de la corrosion verte ou blanche.','Vérifie les points de graissage (graisseurs propres).','Contrôle le joint de capot.'],usure:'Dépôts de sel, connecteurs oxydés, joint de capot abîmé.',prev:'Rinçage, bombe de protection anticorrosion, graissage annuel.'},
{id:'M13',cat:'M',t:'Coupe-circuit (cordon)',role:'Coupe le moteur si le pilote tombe ou s\'éloigne du poste.',ctrl:['Moteur en marche, tire le cordon : le moteur doit s\'arrêter immédiatement.','Vérifie l\'état du cordon et du clip.'],usure:'Cordon effiloché, clip qui tient mal, coupe-circuit inopérant.',prev:'Tester avant chaque sortie, avoir un cordon de rechange.'},
{id:'M14',cat:'M',t:'Heures moteur et suivi',role:'Le compteur d\'heures et le carnet justifient l\'entretien et la valeur du moteur.',ctrl:['Relève le compteur d\'heures.','Compare avec les dates du carnet d\'entretien.'],usure:'Compteur en panne, entretiens non justifiés.',prev:'Noter les heures à chaque sortie et à chaque intervention.'},

{id:'E01',cat:'E',t:'Batterie',role:'Alimente le démarreur et les équipements.',ctrl:['Mesure la tension moteur arrêté (environ 12,6 V chargée).','Vérifie la fixation, les cosses (propres, serrées) et le capot de protection.'],usure:'Démarrage poussif, cosses sulfatées, batterie gonflée.',prev:'Recharger l\'hiver, nettoyer et graisser les cosses.'},
{id:'E02',cat:'E',t:'Coupe-batterie et fusibles',role:'Isolent l\'installation et la protègent des courts-circuits.',ctrl:['Manœuvre le coupe-batterie.','Vérifie l\'état des fusibles et du tableau électrique.'],usure:'Contacts oxydés, fusibles noircis, câbles chauffés.',prev:'Couper la batterie au port, bombe contact sur les connecteurs.'},
{id:'E03',cat:'E',t:'Feux de navigation',role:'Obligatoires pour naviguer de nuit ou par visibilité réduite (RIPAM).',ctrl:['Allume les feux de côté (rouge/vert) et le feu blanc.','Vérifie l\'état des verres et des connexions.'],usure:'Feu éteint, verre opaque, connexion oxydée.',prev:'Ampoules de rechange à bord, graisse diélectrique sur les connexions.'},
{id:'E04',cat:'E',t:'Pompe de cale électrique',role:'Évacue l\'eau de la cale automatiquement ou à la demande.',ctrl:['Actionne la pompe : elle doit débiter.','Soulève le flotteur (pompe automatique) pour vérifier le déclenchement.','Nettoie la crépine.'],usure:'Pompe muette, crépine bouchée, flotteur bloqué.',prev:'Tester à chaque mise à l\'eau, garder la cale propre.'},
{id:'E05',cat:'E',t:'Instruments (compte-tours, sondeur, GPS)',role:'Informations de conduite et de navigation.',ctrl:['Mets sous tension : affichage correct.','Vérifie le sondeur (profondeur cohérente) et la position GPS.'],usure:'Écran embué, valeurs erratiques, sonde encrassée.',prev:'Housse de protection, nettoyage de la sonde.'},
{id:'E06',cat:'E',t:'Avertisseur sonore électrique',role:'Signaux sonores réglementaires (manœuvres, brume).',ctrl:['Actionne le klaxon.'],usure:'Son faible ou absent, contacts oxydés.',prev:'Garder aussi une corne manuelle à bord.'},

{id:'D01',cat:'D',d240:true,t:'Gilets de sauvetage (100 N mini par personne)',role:'En côtier, chaque personne doit disposer d\'un équipement individuel de flottabilité d\'au moins 100 N (ou porter un 50 N).',ctrl:['Compte un gilet adapté par personne à bord, enfants compris (100 N mini pour moins de 30 kg).','Gilets gonflables : vérifie la cartouche (non percée, bien vissée), la pastille et la date de révision.','Vérifie sangles, sous-cutale et lampe flash.'],usure:'Cartouche percée ou rouillée, date de révision dépassée, tissu déchiré.',prev:'Révision selon le fabricant (souvent tous les 1 à 2 ans), stockage au sec et à l\'abri du soleil.'},
{id:'D02',cat:'D',d240:true,t:'Dispositif lumineux étanche',role:'Lampe torche étanche, ou lampe flash individuelle de 6 h d\'autonomie fixée sur chaque gilet.',ctrl:['Allume la lampe.','Vérifie l\'étanchéité et l\'état des piles.'],usure:'Piles faibles ou coulées, joint d\'étanchéité abîmé.',prev:'Piles neuves chaque saison, piles de rechange à bord.'},
{id:'D03',cat:'D',d240:true,t:'Extincteur(s)',role:'Moyen mobile de lutte contre l\'incendie, conforme au manuel du propriétaire.',ctrl:['Vérifie l\'aiguille du manomètre dans le vert.','Contrôle la date limite et la goupille.','Vérifie qu\'il est accessible depuis le poste de pilotage.'],usure:'Aiguille hors du vert, date dépassée, corrosion, poudre tassée.',prev:'Retourner l\'extincteur à poudre quelques fois par saison, remplacer à la date limite.'},
{id:'D04',cat:'D',d240:true,t:'Dispositif d\'assèchement manuel',role:'Écope, seau ou pompe manuelle pour vider l\'eau embarquée.',ctrl:['Vérifie la présence de l\'écope ou de la pompe manuelle, accessible et attachée.','Teste la pompe manuelle.'],usure:'Écope absente ou fendue, pompe manuelle grippée.',prev:'Attacher l\'écope au bateau.'},
{id:'D05',cat:'D',d240:true,t:'Dispositif de remorquage',role:'Point d\'amarrage solide et bout de remorquage pour être remorqué.',ctrl:['Vérifie le point d\'attache à l\'avant.','Contrôle la présence et l\'état du bout de remorquage.'],usure:'Bout trop court ou usé, point d\'attache faible.',prev:'Bout d\'au moins 3 fois la longueur du bateau.'},
{id:'D06',cat:'D',d240:true,t:'Ligne de mouillage',role:'Obligatoire si le bateau pèse plus de 250 kg à vide : ancre, chaîne et câblot adaptés à la zone.',ctrl:['Vérifie l\'ancre, la chaîne (manilles serrées et grippées) et le câblot.','Contrôle que le câblot est attaché au bateau.'],usure:'Manille desserrée, chaîne rouillée, câblot usé ou trop court.',prev:'Longueur de câblot d\'au moins 3 fois la profondeur (5 par mauvais temps).'},
{id:'D07',cat:'D',d240:true,t:'Moyen de connaître les marées',role:'En côtier, il suffit de pouvoir consulter les heures de marée du jour (application, site, annuaire).',ctrl:['Vérifie que tu disposes d\'une source fiable (SHOM, annuaire, application).'],usure:'Aucune source disponible hors réseau.',prev:'Télécharger l\'annuaire de la zone avant la saison.'},
{id:'D08',cat:'D',d240:true,t:'Pavillon national',role:'Obligatoire en dehors des eaux territoriales.',ctrl:['Vérifie la présence d\'un pavillon en bon état.'],usure:'Pavillon décoloré ou déchiré.',prev:'Rangement au sec.'},
{id:'D09',cat:'D',d240:true,t:'Bouée fer à cheval ou couronne',role:'Dispositif de repérage et d\'assistance pour personne tombée à l\'eau.',ctrl:['Vérifie qu\'elle est accessible et lançable immédiatement depuis le poste de pilotage.','Contrôle l\'état et le feu à retournement s\'il y en a un.'],usure:'Bouée déchirée, feu inopérant, bouée inaccessible.',prev:'S\'entraîner à la manœuvre de récupération d\'homme à la mer.'},
{id:'D10',cat:'D',d240:true,t:'3 feux rouges à main',role:'Signal de détresse visuel obligatoire en côtier.',ctrl:['Compte 3 feux et vérifie leur date de péremption.','Contrôle l\'état de l\'emballage étanche.'],usure:'Date dépassée, humidité dans l\'emballage.',prev:'Remplacer avant la date, rapporter les feux périmés au point de vente.'},
{id:'D11',cat:'D',d240:true,t:'Compas magnétique ou GPS étanche',role:'En côtier, un compas magnétique étanche ou un GPS étanche faisant office de compas.',ctrl:['Vérifie le compas (bulle, lisibilité) ou le fonctionnement du GPS.'],usure:'Compas avec bulle ou opaque, GPS non étanche.',prev:'Garder un compas de relèvement en secours.'},
{id:'D12',cat:'D',d240:true,t:'Cartes marines officielles',role:'Cartes de la zone de navigation, papier ou électroniques avec leur appareil de lecture.',ctrl:['Vérifie que la carte couvre la zone et qu\'elle est à jour.'],usure:'Carte trop ancienne, zone non couverte.',prev:'Mettre à jour ou racheter la carte SHOM de la zone.'},
{id:'D13',cat:'D',d240:true,t:'RIPAM et système de balisage',role:'Règles de barre et de route, et description du balisage, sur plaquette ou support électronique.',ctrl:['Vérifie la présence du RIPAM et de la description du balisage à bord.'],usure:'Documents absents.',prev:'Plaquette autocollante fixée près du poste de pilotage.'},
{id:'D14',cat:'D',t:'Documents du bord',role:'Titre de navigation, permis du chef de bord, attestation d\'assurance, carte de circulation de la remorque.',ctrl:['Vérifie la présence et la validité de chaque document à bord.'],usure:'Assurance expirée, documents absents.',prev:'Pochette étanche dédiée, copies numériques.'},

{id:'R01',cat:'R',t:'Pneus, roues et roulements',role:'Supportent le bateau sur la route.',ctrl:['Vérifie la pression et l\'usure des pneus (craquelures).','Soulève chaque roue : pas de jeu ni de bruit au roulement.'],usure:'Pneus craquelés, roulement bruyant ou chaud après trajet.',prev:'Ne pas plonger les moyeux chauds dans l\'eau, graisser les roulements chaque année.'},
{id:'R02',cat:'R',t:'Éclairage et signalisation',role:'Feux et plaque obligatoires sur route.',ctrl:['Branche la remorque et teste feux, clignotants et stop.'],usure:'Feu éteint, prise oxydée.',prev:'Débrancher avant la mise à l\'eau, bombe contact sur la prise.'},
{id:'R03',cat:'R',t:'Treuil et sangle',role:'Hissent le bateau sur la remorque.',ctrl:['Vérifie la sangle (effilochage) et le cliquet du treuil.'],usure:'Sangle abîmée, cliquet qui saute.',prev:'Rincer et graisser le treuil.'},
{id:'R04',cat:'R',t:'Châssis, rouleaux et attelage',role:'Structure qui porte et guide le bateau.',ctrl:['Inspecte la corrosion du châssis et des rouleaux.','Vérifie le timon, la tête d\'attelage et la chaîne de sécurité.'],usure:'Rouille perforante, rouleaux bloqués ou fendus, attelage avec jeu.',prev:'Rincer à l\'eau douce après chaque mise à l\'eau en mer.'}
];

window.LEXIQUE=[
['Abri','Lieu de la côte où un bateau peut se mettre en sécurité et repartir sans assistance. La distance à un abri définit la zone de navigation.'],
['Accastillage','Ensemble des équipements fixés sur le pont : taquets, chaumards, mains courantes, balcons.'],
['Amarre','Cordage qui retient le bateau au quai ou à un autre bateau.'],
['Anode','Pièce de zinc ou d\'aluminium qui se corrode à la place des parties métalliques du bateau ou du moteur.'],
['Antifouling','Peinture qui empêche les algues et coquillages de se fixer sur la carène.'],
['Arbre d\'hélice','Axe qui transmet la rotation du moteur à l\'hélice.'],
['Bâbord','Côté gauche du bateau quand on regarde vers l\'avant. Feu rouge.'],
['Balcon','Garde-corps métallique à l\'avant (balcon) ou à l\'arrière (balcon arrière).'],
['Balisage','Système de bouées et de marques qui signalent dangers et chenaux (système AISM région A en Europe).'],
['Bau','Largeur maximale du bateau.'],
['Bimini','Toile tendue sur une armature pour protéger du soleil.'],
['Bout','Tout cordage à bord (se prononce « boute »).'],
['Câblot','Cordage qui prolonge la chaîne du mouillage.'],
['Carène','Partie immergée de la coque (synonyme : œuvres vives).'],
['Carénage','Nettoyage et entretien de la carène hors de l\'eau.'],
['Catégorie de conception','Classement CE (A, B, C ou D) qui indique les conditions de vent et de mer pour lesquelles le bateau est conçu.'],
['Chaumard','Pièce qui guide une amarre en bordure de pont.'],
['Chef de bord','Personne responsable du bateau, de l\'équipage et de la sécurité.'],
['Coupe-circuit','Dispositif relié au pilote qui coupe le moteur s\'il tombe ou s\'éloigne de la barre.'],
['Division 240','Réglementation française fixant l\'équipement de sécurité des navires de plaisance de moins de 24 m.'],
['EIF','Équipement individuel de flottabilité : aide à la flottabilité ou gilet de sauvetage, exprimé en newtons.'],
['Embase','Partie basse d\'un moteur hors-bord qui contient le renvoi d\'angle et porte l\'hélice.'],
['Étrave','Partie avant de la coque qui fend l\'eau.'],
['Franc-bord','Hauteur entre la ligne de flottaison et le pont.'],
['Gelcoat','Couche de résine colorée qui protège la surface du stratifié polyester.'],
['Gréement','Sur un voilier, mâture et cordages ; sur un bateau à moteur, par extension, équipements de pont et de toile.'],
['Hauturier','Navigation au-delà de 60 milles d\'un abri.'],
['Hélice','Organe à pales qui propulse le bateau.'],
['Hivernage','Préparation du bateau et du moteur pour la période d\'inactivité.'],
['Liston','Bourrelet de protection sur la liaison coque-pont.'],
['Mille nautique','Unité de distance en mer : 1 852 m.'],
['Mouillage','Action de jeter l\'ancre, ou l\'ensemble ancre, chaîne et câblot.'],
['Nable','Orifice de vidange au bas de la coque, fermé par un bouchon.'],
['Nœud','Unité de vitesse : 1 mille nautique par heure, soit 1,852 km/h.'],
['Nourrice','Réservoir d\'essence portable relié au moteur.'],
['Œuvres mortes','Partie de la coque située au-dessus de la flottaison.'],
['Œuvres vives','Partie immergée de la coque.'],
['Osmose','Dégradation du stratifié par pénétration d\'eau, qui forme des cloques sous le gelcoat.'],
['Pare-battage','Coussin qui protège la coque contre le quai ou les autres bateaux.'],
['Pissette','Jet d\'eau témoin qui montre que le circuit de refroidissement du moteur fonctionne.'],
['Plaque anti-cavitation','Plaque horizontale au-dessus de l\'hélice qui empêche l\'hélice d\'aspirer de l\'air.'],
['Poire d\'amorçage','Poire en caoutchouc sur la durite d\'essence qui permet d\'amorcer le circuit.'],
['Poupe','Arrière du bateau.'],
['Power trim','Système hydraulique qui relève le moteur et règle son assiette.'],
['Proue','Avant du bateau.'],
['RIPAM','Règlement international pour prévenir les abordages en mer : règles de barre, de route, feux et signaux.'],
['Safran','Pièce immergée orientable qui dirige le bateau ; sur un hors-bord, c\'est l\'embase qui joue ce rôle.'],
['Semi-hauturier','Navigation entre 6 et 60 milles d\'un abri.'],
['Tableau arrière','Paroi arrière de la coque, sur laquelle est fixé le moteur hors-bord.'],
['Taquet','Pièce sur laquelle on tourne une amarre.'],
['Tirant d\'eau','Profondeur de la partie immergée du bateau.'],
['Tribord','Côté droit du bateau quand on regarde vers l\'avant. Feu vert.'],
['Turbine','Roue à ailettes en caoutchouc de la pompe à eau de refroidissement.'],
['Vidange','Remplacement d\'une huile usagée (moteur, embase).'],
['VHF','Radio marine à très haute fréquence ; le canal 16 sert à la veille et à la détresse.'],
['VHF ASN','VHF dotée de l\'appel sélectif numérique, qui envoie une alerte de détresse avec la position par simple appui.']
];

/* ===== Code du permis côtier : dessins ===== */
window.CDRAW={
 buoy(o){const n=o.bands.length,y0=40,y1=86,h=(y1-y0)/n;let s='';const id='c'+Math.random().toString(36).slice(2,8);
  const body=`M22 ${y0} L38 ${y0} L41 ${y1} L19 ${y1} Z`;
  s+=`<clipPath id="${id}"><path d="${body}"/></clipPath><g clip-path="url(#${id})">`;
  if(o.vert){const w=24/o.vert.length;o.vert.forEach((c,i)=>s+=`<rect x="${18+i*w}" y="${y0}" width="${w+.3}" height="${y1-y0}" fill="${c}"/>`);}
  else o.bands.forEach((c,i)=>s+=`<rect x="15" y="${y0+i*h}" width="30" height="${h+.3}" fill="${c}"/>`);
  s+=`</g><path d="${body}" fill="none" stroke="#222" stroke-width="1"/><ellipse cx="30" cy="89" rx="17" ry="5" fill="${o.base||o.bands[n-1]}" stroke="#222"/><path d="M4 94 Q15 90 30 94 T56 94" fill="none" stroke="#3b82c4" stroke-width="2"/>`;
  s+=`<line x1="30" y1="28" x2="30" y2="${y0}" stroke="#222" stroke-width="1.5"/>`;
  const c=o.tc||'#111',T={cyl:`<rect x="23" y="13" width="14" height="14" fill="${c}"/>`,up:`<path d="M30 10 L22 26 L38 26Z" fill="${c}"/>`,dn:`<path d="M22 10 L38 10 L30 26Z" fill="${c}"/>`,
   N:`<path d="M30 2 L23 13 L37 13Z M30 15 L23 26 L37 26Z" fill="${c}"/>`,S:`<path d="M23 2 L37 2 L30 13Z M23 15 L37 15 L30 26Z" fill="${c}"/>`,E:`<path d="M30 2 L23 13 L37 13Z M23 15 L37 15 L30 26Z" fill="${c}"/>`,W:`<path d="M23 2 L37 2 L30 13Z M30 15 L23 26 L37 26Z" fill="${c}"/>`,
   s2:`<circle cx="30" cy="8" r="5.5" fill="${c}"/><circle cx="30" cy="21" r="5.5" fill="${c}"/>`,s1:`<circle cx="30" cy="18" r="7" fill="${c}"/>`,X:`<path d="M23 10 L37 26 M37 10 L23 26" stroke="${c}" stroke-width="4"/>`,cross:`<path d="M30 9 V27 M22 18 H38" stroke="${c}" stroke-width="4"/>`};
  s+=T[o.top]||'';if(o.light)s+=`<circle cx="50" cy="40" r="7" fill="${o.light}" opacity=".25"/><circle cx="50" cy="40" r="3.5" fill="${o.light}"/>`;
  return `<svg viewBox="0 0 60 100">${s}</svg>`;},
 lights(L,day){let s=`<rect x="2" y="2" width="56" height="96" rx="8" fill="#0d1b33"/>`;const n=L.length;L.forEach((r,i)=>{const y=14+i*(70/Math.max(n,1));(Array.isArray(r)?r:[r]).forEach((c,j,a)=>{const x=a.length===1?30:a.length===2?(j?40:20):12+j*18;s+=`<circle cx="${x}" cy="${y}" r="7" fill="${c}" opacity=".25"/><circle cx="${x}" cy="${y}" r="4" fill="${c}"/>`;});});
  s+=`<path d="M10 90 L50 90 L45 96 L15 96Z" fill="#334"/>`;return `<svg viewBox="0 0 60 100">${s}</svg>`;},
 day(shapes){let s=`<rect x="2" y="2" width="56" height="96" rx="8" fill="#dbe9f6"/><line x1="30" y1="6" x2="30" y2="86" stroke="#555"/>`;const n=shapes.length;shapes.forEach((t,i)=>{const y=16+i*(62/Math.max(n,1));
  s+=({boule:`<circle cx="30" cy="${y}" r="7" fill="#111"/>`,losange:`<path d="M30 ${y-9} L37 ${y} L30 ${y+9} L23 ${y}Z" fill="#111"/>`,cyl:`<rect x="24" y="${y-8}" width="12" height="16" fill="#111"/>`,coneb:`<path d="M23 ${y-7} L37 ${y-7} L30 ${y+7}Z" fill="#111"/>`,sabl:`<path d="M23 ${y-9} L37 ${y-9} L23 ${y+9} L37 ${y+9}Z" fill="#111"/>`})[t];});
  s+=`<path d="M8 88 L52 88 L46 96 L14 96Z" fill="#445"/>`;return `<svg viewBox="0 0 60 100">${s}</svg>`;},
 sectors(){const P=(a1,a2,r,c)=>{const p=a=>[50+r*Math.sin(a*Math.PI/180),50-r*Math.cos(a*Math.PI/180)];const[x1,y1]=p(a1),[x2,y2]=p(a2);return `<path d="M50 50 L${x1} ${y1} A${r} ${r} 0 ${(a2-a1+360)%360>180?1:0} 1 ${x2} ${y2}Z" fill="${c}" opacity=".55"/>`;};
  return `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="8" fill="#0d1b33"/>${P(-112.5,112.5,44,'#f5f5f5')}${P(247.5,360,34,'#ef4444')}${P(0,112.5,34,'#22c55e')}${P(112.5,247.5,30,'#cbd5e1')}<path d="M50 38 L55 50 L54 62 L46 62 L45 50Z" fill="#fff" stroke="#111"/><text x="50" y="9" font-size="7" fill="#fff" text-anchor="middle">tête de mât 225°</text><text x="15" y="52" font-size="7" fill="#fca5a5">bâbord</text><text x="72" y="52" font-size="7" fill="#86efac">tribord</text><text x="50" y="96" font-size="7" fill="#e2e8f0" text-anchor="middle">poupe 135°</text></svg>`;},
 boat(x,y,h,c,sail){const r=`translate(${x} ${y}) rotate(${h})`;return `<g transform="${r}"><path d="M0 -10 L5 2 L4 9 L-4 9 L-5 2Z" fill="${c}" stroke="#111" stroke-width=".8"/>${sail?'<path d="M0 -7 L0 6 L6 4Z" fill="#fff" stroke="#111" stroke-width=".6"/>':''}</g>`;},
 rule(t){const B=CDRAW.boat;let s=`<rect width="100" height="80" rx="8" fill="#dbeafe"/>`;const arr=(d)=>`<path d="${d}" fill="none" stroke="#c2261b" stroke-width="2" marker-end="url(#ah)"/>`;
  s+=`<defs><marker id="ah" viewBox="0 0 6 6" refX="3" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L6 3L0 6Z" fill="#c2261b"/></marker></defs>`;
  if(t==='crois')s+=B(35,62,0,'#f97316')+B(70,30,-90,'#e5e7eb')+arr('M37 50 Q52 44 86 38')+`<path d="M58 30 H44" stroke="#64748b" stroke-dasharray="3 2"/>`;
  if(t==='face')s+=B(50,64,0,'#f97316')+B(50,16,180,'#f97316')+arr('M51 52 Q55 42 68 36')+arr('M49 28 Q45 38 32 44');
  if(t==='ratt')s+=B(50,22,0,'#e5e7eb')+B(50,64,0,'#f97316')+arr('M52 52 Q70 44 68 22');
  if(t==='voile')s+=B(35,62,0,'#f97316')+B(70,30,-90,'#fff',true)+arr('M37 50 Q52 44 86 38');
  if(t==='chenal')s+=`<path d="M18 0 V80 M82 0 V80" stroke="#64748b" stroke-dasharray="4 3"/>`+B(66,58,0,'#f97316')+B(34,22,180,'#e5e7eb')+`<path d="M66 44 V20" stroke="#c2261b" stroke-width="2" marker-end="url(#ah)"/>`;
  return `<svg viewBox="0 0 100 80">${s}</svg>`;},
 sound(seq){let x=6,s='';seq.split('').forEach(c=>{if(c==='.'){s+=`<circle cx="${x+4}" cy="20" r="4" fill="#1d5fd1"/>`;x+=13;}else if(c==='-'){s+=`<rect x="${x}" y="16" width="22" height="8" rx="4" fill="#1d5fd1"/>`;x+=30;}else x+=10;});return `<svg viewBox="0 0 100 40"><rect width="100" height="40" rx="8" fill="#e8f0fd"/>${s}</svg>`;},
 sym(t){const W=`<rect width="100" height="70" rx="8" fill="#eaf4fb"/>`;const M={
  sonde:`<text x="50" y="44" font-size="26" font-style="italic" text-anchor="middle" fill="#111">4<tspan font-size="15" dy="6">2</tspan></text>`,
  isobathe:`<path d="M5 45 C30 20 60 60 95 30" fill="none" stroke="#2563eb" stroke-dasharray="5 3" stroke-width="2"/><text x="50" y="35" font-size="11" fill="#2563eb">5</text>`,
  estran:`<path d="M0 70 L0 40 C30 30 60 50 100 35 L100 70Z" fill="#a7c957"/><path d="M0 40 C30 30 60 50 100 35" fill="none" stroke="#365314"/><rect y="55" width="100" height="15" fill="#f5deb3"/>`,
  roche_dec:`<text x="50" y="44" font-size="30" text-anchor="middle" fill="#111">✱</text><text x="64" y="54" font-size="11" fill="#111"><tspan text-decoration="underline">2</tspan></text>`,
  roche_couv:`<text x="50" y="46" font-size="30" text-anchor="middle" fill="#111">+</text><circle cx="50" cy="36" r="16" fill="none" stroke="#111" stroke-dasharray="2 2"/>`,
  epave:`<ellipse cx="50" cy="36" rx="26" ry="14" fill="#cfe8fb" stroke="#111" stroke-dasharray="2 2"/><path d="M32 36 H68 M42 29 V43 M50 29 V43 M58 29 V43" stroke="#111" stroke-width="2"/>`,
  phare:`<circle cx="50" cy="48" r="4" fill="#111"/><path d="M50 46 C44 34 46 22 56 14 C54 26 58 36 50 46Z" fill="#c026d3"/>`,
  mouillage:`<g stroke="#c026d3" stroke-width="3" fill="none"><circle cx="50" cy="18" r="4"/><path d="M50 22 V54 M40 30 H60 M34 44 Q36 56 50 56 Q64 56 66 44"/></g>`,
  interdit:`<path d="M5 35 H95" stroke="#c026d3" stroke-width="2" stroke-dasharray="8 4"/><path d="M20 35 V43 M50 35 V43 M80 35 V43" stroke="#c026d3" stroke-width="2"/>`,
  cable:`<path d="M5 35 Q15 25 25 35 T45 35 T65 35 T85 35 T105 35" fill="none" stroke="#c026d3" stroke-width="2"/>`};
  return `<svg viewBox="0 0 100 70">${W}${M[t]}</svg>`;}};

window.CODE=[
{t:'Balisage latéral (région A, Europe)',intro:'Il délimite les chenaux. Les couleurs s\'entendent en venant du large, en entrant au port : rouge à bâbord (à gauche), vert à tribord (à droite).',items:[
 {d:o=>CDRAW.buoy({bands:['#d62828'],top:'cyl',tc:'#d62828',light:'#ef4444'}),n:'Marque bâbord',l:'Rouge, voyant cylindre rouge. Feu rouge rythmé. À laisser à gauche en entrant au port.'},
 {d:o=>CDRAW.buoy({bands:['#2a9d47'],top:'up',tc:'#2a9d47',light:'#22c55e'}),n:'Marque tribord',l:'Verte, voyant cône pointe en haut. Feu vert rythmé. À laisser à droite en entrant au port.'},
 {d:o=>CDRAW.buoy({bands:['#d62828','#2a9d47','#d62828'],top:'cyl',tc:'#d62828',light:'#ef4444'}),n:'Chenal préféré à tribord',l:'Rouge à bande verte : le chenal principal est à tribord. Feu rouge à éclats groupés (2+1).'},
 {d:o=>CDRAW.buoy({bands:['#2a9d47','#d62828','#2a9d47'],top:'up',tc:'#2a9d47',light:'#22c55e'}),n:'Chenal préféré à bâbord',l:'Verte à bande rouge : le chenal principal est à bâbord. Feu vert à éclats groupés (2+1).'}]},
{t:'Marques cardinales',intro:'Elles indiquent où se trouvent les eaux saines par rapport au danger : on passe du côté de leur nom (au nord d\'une cardinale nord). Couleurs noir et jaune ; les cônes pointent vers le noir.',items:[
 {d:o=>CDRAW.buoy({bands:['#111','#f2c200'],top:'N',light:'#fff'}),n:'Cardinale Nord',l:'Cônes pointes en haut, noir sur jaune. Feu blanc scintillant continu. Passer au nord.'},
 {d:o=>CDRAW.buoy({bands:['#111','#f2c200','#111'],top:'E',light:'#fff'}),n:'Cardinale Est',l:'Cônes opposés par la base (« en œuf »), noir-jaune-noir. Feu blanc, 3 scintillements. Passer à l\'est.'},
 {d:o=>CDRAW.buoy({bands:['#f2c200','#111'],top:'S',light:'#fff'}),n:'Cardinale Sud',l:'Cônes pointes en bas, jaune sur noir. Feu blanc, 6 scintillements + 1 éclat long. Passer au sud.'},
 {d:o=>CDRAW.buoy({bands:['#f2c200','#111','#f2c200'],top:'W',light:'#fff'}),n:'Cardinale Ouest',l:'Cônes opposés par la pointe (« sablier »), jaune-noir-jaune. Feu blanc, 9 scintillements. Passer à l\'ouest.'}]},
{t:'Autres marques',intro:'Danger ponctuel, eaux saines, zones spéciales et nouveaux dangers.',items:[
 {d:o=>CDRAW.buoy({bands:['#111','#d62828','#111'],top:'s2',light:'#fff'}),n:'Danger isolé',l:'Noire à bande rouge, 2 sphères noires. Feu blanc à 2 éclats. Danger de faible étendue, eaux saines tout autour.'},
 {d:o=>CDRAW.buoy({bands:['#fff'],vert:['#d62828','#fff','#d62828','#fff'],base:'#d62828',top:'s1',tc:'#d62828',light:'#fff'}),n:'Eaux saines',l:'Bandes verticales rouges et blanches, 1 sphère rouge. Feu blanc isophase, à occultations ou 1 éclat long. Atterrissage, milieu de chenal.'},
 {d:o=>CDRAW.buoy({bands:['#f2c200'],top:'X',tc:'#f2c200',light:'#facc15'}),n:'Marque spéciale',l:'Jaune, voyant en X jaune. Feu jaune. Zone particulière : baignade, mouillage, câble, zone militaire…'},
 {d:o=>CDRAW.buoy({bands:['#fff'],vert:['#1d4ed8','#f2c200','#1d4ed8','#f2c200'],base:'#1d4ed8',top:'cross',tc:'#f2c200',light:'#60a5fa'}),n:'Nouveau danger (épave)',l:'Bandes verticales bleues et jaunes, croix jaune. Feu alterné bleu et jaune. Danger récent, pas encore sur les cartes.'}]},
{t:'Rythme des feux',intro:'Sur la carte, un feu est décrit par son rythme, sa couleur et sa période. Exemple : Fl(2) R 6s = 2 éclats rouges toutes les 6 secondes.',table:[['F','Fixe','Lumière continue'],['Fl','Éclats','Lumière plus courte que l\'obscurité'],['Oc','Occultations','Lumière plus longue que l\'obscurité'],['Iso','Isophase','Lumière et obscurité égales'],['Q','Scintillant','50 à 60 éclats par minute'],['VQ','Scintillant rapide','100 à 120 éclats par minute'],['LFl','Éclat long','Éclat d\'au moins 2 secondes'],['Mo(U)','Morse','Lettre en code morse'],['W R G','Couleurs','Blanc, rouge, vert (Y = jaune)'],['10M','Portée','Portée nominale en milles']]},
{t:'Feux des navires de nuit',intro:'Ce que l\'on voit de nuit permet d\'identifier un navire, sa route et sa situation. Les feux de côté : rouge à bâbord, vert à tribord.',items:[
 {d:o=>CDRAW.sectors(),n:'Secteurs des feux (navire à moteur)',l:'Feu de tête de mât blanc sur 225° vers l\'avant, feux de côté sur 112,5°, feu de poupe blanc sur 135° vers l\'arrière.'},
 {d:o=>CDRAW.lights(['#fff',['#ef4444','#22c55e']]),n:'Navire à moteur vu de face',l:'Blanc en haut, rouge et vert. Il vient droit sur toi : manœuvre sur tribord.'},
 {d:o=>CDRAW.lights(['#fff',['#ef4444','#22c55e']]),n:'Moteur de moins de 12 m',l:'Peut remplacer tête de mât et poupe par un seul feu blanc visible sur tout l\'horizon, avec les feux de côté.'},
 {d:o=>CDRAW.lights([['#ef4444','#22c55e']]),n:'Voilier vu de face',l:'Feux de côté seuls (plus le feu de poupe vu de l\'arrière), ou un feu tricolore en tête de mât s\'il mesure moins de 20 m.'},
 {d:o=>CDRAW.lights(['#fff']),n:'Navire au mouillage',l:'Un feu blanc visible sur tout l\'horizon. De jour : une boule noire.'},
 {d:o=>CDRAW.lights(['#22c55e','#fff']),n:'Chalutier en pêche',l:'Vert au-dessus de blanc (« vert sur blanc, je chalute »). S\'en écarter largement.'},
 {d:o=>CDRAW.lights(['#ef4444','#fff']),n:'Pêcheur (non chalutier)',l:'Rouge au-dessus de blanc : filets ou palangres, engins pouvant s\'étendre loin.'},
 {d:o=>CDRAW.lights(['#ef4444','#ef4444']),n:'Non maître de sa manœuvre',l:'Deux feux rouges superposés. De jour : deux boules noires.'},
 {d:o=>CDRAW.lights(['#ef4444','#fff','#ef4444']),n:'Capacité de manœuvre restreinte',l:'Rouge, blanc, rouge superposés (dragage, travaux, câblier). De jour : boule, losange, boule.'},
 {d:o=>CDRAW.lights(['#ef4444','#ef4444','#ef4444']),n:'Handicapé par son tirant d\'eau',l:'Trois feux rouges superposés. De jour : un cylindre noir.'},
 {d:o=>CDRAW.lights(['#fff','#ef4444']),n:'Bateau pilote',l:'Blanc au-dessus de rouge, en service de pilotage.'},
 {d:o=>CDRAW.lights(['#fff','#fff',['#ef4444','#22c55e']]),n:'Remorqueur',l:'Deux feux de tête de mât superposés (trois si la remorque dépasse 200 m), feu jaune de remorquage au-dessus du feu de poupe.'}]},
{t:'Marques de jour',intro:'Formes noires hissées dans la mâture pour signaler la situation d\'un navire de jour.',items:[
 {d:o=>CDRAW.day(['boule']),n:'Au mouillage',l:'Une boule noire à l\'avant.'},
 {d:o=>CDRAW.day(['boule','boule']),n:'Non maître de sa manœuvre',l:'Deux boules noires superposées.'},
 {d:o=>CDRAW.day(['boule','losange','boule']),n:'Manœuvre restreinte',l:'Boule, losange, boule.'},
 {d:o=>CDRAW.day(['cyl']),n:'Tirant d\'eau contraint',l:'Un cylindre noir.'},
 {d:o=>CDRAW.day(['sabl']),n:'Navire en pêche',l:'Deux cônes réunis par la pointe (sablier).'},
 {d:o=>CDRAW.day(['coneb']),n:'Voilier au moteur',l:'Un cône pointe en bas : il navigue à la voile et au moteur, il est considéré comme un navire à moteur.'}]},
{t:'Règles de barre et de route (RIPAM)',intro:'Il y a risque d\'abordage si le relèvement de l\'autre navire reste constant pendant que la distance diminue. Le navire qui doit s\'écarter manœuvre tôt et franchement ; l\'autre garde son cap et sa vitesse.',items:[
 {d:o=>CDRAW.rule('crois'),n:'Routes qui se croisent',l:'Entre navires à moteur, celui qui voit l\'autre sur son tribord s\'écarte, de préférence en passant derrière lui.'},
 {d:o=>CDRAW.rule('face'),n:'Routes opposées',l:'Face à face, chacun vient sur tribord pour se croiser bâbord contre bâbord.'},
 {d:o=>CDRAW.rule('ratt'),n:'Rattrapage',l:'Le navire qui en rattrape un autre (en arrivant à plus de 22,5° sur l\'arrière de son travers) s\'écarte, quel que soit son type.'},
 {d:o=>CDRAW.rule('voile'),n:'Moteur et voilier',l:'Un navire à moteur s\'écarte d\'un voilier, d\'un navire en pêche, d\'un navire non maître de sa manœuvre ou à manœuvre restreinte.'},
 {d:o=>CDRAW.rule('chenal'),n:'Chenal étroit',l:'Serrer la rive de tribord. Un navire de moins de 20 m ne doit pas gêner un navire qui ne peut naviguer que dans le chenal.'}],
 notes:['Dispositif de séparation du trafic : le couper à angle droit, le plus vite possible.','Bande des 300 m : vitesse limitée à 5 nœuds le long des côtes françaises, sauf chenaux balisés.','Plongeurs : pavillon A (blanc et bleu) : passer lentement et au large.']},
{t:'Signaux sonores',intro:'Son bref : environ 1 seconde. Son prolongé : 4 à 6 secondes.',items:[
 {d:o=>CDRAW.sound('.'),n:'1 son bref',l:'Je viens sur tribord.'},
 {d:o=>CDRAW.sound('..'),n:'2 sons brefs',l:'Je viens sur bâbord.'},
 {d:o=>CDRAW.sound('...'),n:'3 sons brefs',l:'Je bats en arrière (marche arrière).'},
 {d:o=>CDRAW.sound('.....'),n:'5 sons brefs ou plus',l:'Je ne comprends pas vos intentions : doute ou danger.'},
 {d:o=>CDRAW.sound('-'),n:'Brume : moteur en route',l:'1 son prolongé au moins toutes les 2 minutes.'},
 {d:o=>CDRAW.sound('- -'),n:'Brume : moteur stoppé',l:'2 sons prolongés au moins toutes les 2 minutes (en route mais sans erre).'},
 {d:o=>CDRAW.sound('-..'),n:'Brume : voilier, pêche, remorqueur…',l:'1 son prolongé suivi de 2 brefs, toutes les 2 minutes.'}]},
{t:'Détresse et VHF',intro:'Au moindre doute, alerter tôt : CROSS par VHF canal 16 ou téléphone 196.',items:[
 {d:o=>`<svg viewBox="0 0 60 100"><rect x="2" y="2" width="56" height="96" rx="8" fill="#0d1b33"/><path d="M30 20 C22 36 26 50 30 60 C34 50 38 36 30 20Z" fill="#ef4444"/><rect x="26" y="60" width="8" height="30" rx="2" fill="#94a3b8"/></svg>`,n:'Feu rouge à main',l:'Signal de détresse obligatoire en côtier (3 à bord). Tenir sous le vent, bras tendu, avec des gants.'},
 {d:o=>`<svg viewBox="0 0 60 100"><rect x="2" y="2" width="56" height="96" rx="8" fill="#dbe9f6"/><circle cx="30" cy="30" r="12" fill="#fff"/><path d="M14 52 L30 40 L46 52 M14 66 L30 54 L46 66" stroke="#0f2a5c" stroke-width="4" fill="none"/></svg>`,n:'Bras levés et abaissés',l:'Lever et abaisser lentement et à plusieurs reprises les bras tendus de chaque côté : signal de détresse.'},
 {d:o=>`<svg viewBox="0 0 100 70"><rect width="100" height="70" rx="8" fill="#fde9e7"/><text x="50" y="30" font-size="15" font-weight="800" text-anchor="middle" fill="#c2261b">MAYDAY ×3</text><text x="50" y="50" font-size="6.5" text-anchor="middle" fill="#7f1d1d">canal 16 – danger grave et imminent</text></svg>`,n:'MAYDAY',l:'Détresse : vie humaine ou navire en danger grave et imminent. Donner nom du bateau, position, nature de la détresse, nombre de personnes.'},
 {d:o=>`<svg viewBox="0 0 100 70"><rect width="100" height="70" rx="8" fill="#fdf1de"/><text x="50" y="30" font-size="15" font-weight="800" text-anchor="middle" fill="#b45309">PAN PAN ×3</text><text x="50" y="50" font-size="6.5" text-anchor="middle" fill="#78350f">urgence – pas de danger imminent</text></svg>`,n:'PAN PAN',l:'Urgence : panne moteur dérivant, blessé à bord, sans danger immédiat.'},
 {d:o=>`<svg viewBox="0 0 100 70"><rect width="100" height="70" rx="8" fill="#e8f0fd"/><text x="50" y="30" font-size="15" font-weight="800" text-anchor="middle" fill="#1d5fd1">SÉCURITÉ ×3</text><text x="50" y="50" font-size="6.5" text-anchor="middle" fill="#1e3a8a">avis de navigation ou météo</text></svg>`,n:'SÉCURITÉ',l:'Message concernant la sécurité de la navigation : objet dérivant, avis de grand frais.'},
 {d:o=>`<svg viewBox="0 0 100 70"><rect width="100" height="70" rx="8" fill="#e4f5ea"/><text x="50" y="34" font-size="22" font-weight="800" text-anchor="middle" fill="#15803d">196</text><text x="50" y="52" font-size="6.5" text-anchor="middle" fill="#14532d">CROSS depuis un téléphone</text></svg>`,n:'Numéro d\'urgence en mer',l:'196, gratuit depuis un téléphone, joint le CROSS. La VHF reste préférable : tous les navires proches entendent l\'appel.'}]},
{t:'Symboles des cartes marines',intro:'Légende simplifiée des principaux symboles (catalogue officiel : ouvrage SHOM « Symboles et abréviations », INT 1).',items:[
 {d:o=>CDRAW.sym('sonde'),n:'Sonde',l:'Profondeur en mètres et décimètres sous le zéro des cartes (ici 4,2 m).'},
 {d:o=>CDRAW.sym('isobathe'),n:'Isobathe',l:'Ligne reliant les points de même profondeur (ici 5 m).'},
 {d:o=>CDRAW.sym('estran'),n:'Estran',l:'Zone verte qui découvre à marée basse.'},
 {d:o=>CDRAW.sym('roche_dec'),n:'Roche qui découvre',l:'Hauteur soulignée au-dessus du zéro des cartes : visible à basse mer.'},
 {d:o=>CDRAW.sym('roche_couv'),n:'Roche toujours couverte',l:'Dangereuse pour la navigation de surface, entourée de pointillés.'},
 {d:o=>CDRAW.sym('epave'),n:'Épave dangereuse',l:'Épave dont la profondeur est inconnue ou faible.'},
 {d:o=>CDRAW.sym('phare'),n:'Feu',l:'Point noir avec une flamme magenta ; ses caractéristiques sont écrites à côté.'},
 {d:o=>CDRAW.sym('mouillage'),n:'Mouillage',l:'Zone de mouillage recommandée.'},
 {d:o=>CDRAW.sym('interdit'),n:'Zone réglementée',l:'Limite de zone interdite ou réglementée (mouillage, pêche, navigation).'},
 {d:o=>CDRAW.sym('cable'),n:'Câble sous-marin',l:'Ne pas mouiller ni chaluter à proximité.'}]},
{t:'Météo : échelle de Beaufort',intro:'Le permis côtier demande de savoir lire un bulletin. Un BMS (bulletin météo spécial) côte est émis à partir de force 7.',table:[['0','< 1 nd','Calme, mer d\'huile'],['1-2','1-6 nd','Très légère brise, vaguelettes'],['3','7-10 nd','Petite brise, quelques moutons'],['4','11-16 nd','Jolie brise, moutons nombreux'],['5','17-21 nd','Bonne brise, vagues modérées'],['6','22-27 nd','Vent frais, lames, embruns'],['7','28-33 nd','Grand frais, écume en traînées'],['8','34-40 nd','Coup de vent'],['9','41-47 nd','Fort coup de vent'],['10-12','48 nd et +','Tempête à ouragan']]},
{t:'Marée : règle des douzièmes',intro:'La mer monte ou descend en 6 heures environ, inégalement. Hauteur d\'eau = sonde + hauteur de la marée au-dessus du zéro des cartes.',table:[['1re heure','1/12','du marnage'],['2e heure','2/12','du marnage'],['3e heure','3/12','du marnage'],['4e heure','3/12','du marnage'],['5e heure','2/12','du marnage'],['6e heure','1/12','du marnage']],notes:['Marnage : différence de hauteur entre pleine mer (PM) et basse mer (BM).','Coefficient : de 20 (mortes-eaux extrêmes) à 120 (vives-eaux extrêmes) ; 70 = marée moyenne.']}
];
