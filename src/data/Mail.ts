const mailData: MailData[] = [
    {
        id: 1,
        day: 2,
        target: 'boîte email',
        questions: [
            {
                questionNumber: 1,
                title: "Avant de vous lancer véritablement, assurez-vous de vider votre corbeille. Repartez de zéro afin de mesurer plus aisément les conséquences de vos prochaines actions.",
                response: true,
                responseContent: { A: "Oui", B: "Non" },
                textField: false,
                instruction: false,
                instructionContent: "",
                moreQuestion: true,
                moreQuestionContent: "Avez-vous vidé votre corbeille ?",
                textInfo: false,
                textInfoContent: "",
                illustration: false,
                illustrationContent: ""
            },
            {
                questionNumber: 2,
                title: "Filtrer vos emails. Pour éliminer des emails en masse, le filtre est votre meilleur allié. Utilisez les filtres disponibles en cliquant sur la barre de recherche située en haut de votre boîte mail et sur l'icône de filtre. Vous pouvez filtrer vos emails par",
                response: false,
                responseContent: null,
                textField: false,
                instruction: true,
                instructionContent: "Taille : pour identifier les e-mails qui prennent le plus de place dans votre boîte. Date : pour supprimer les e-mails les plus anciens. Nom de l'expéditeur : pour identifier les conversations obsolètes. Objet : pour les newsletters, promotions marketing, les emails d'invitation à des réunions, notifications Facebook, Slack, Notion etc.",
                moreQuestion: false,
                moreQuestionContent: "",
                textInfo: false,
                textInfoContent: "",
                illustration: false,
                illustrationContent: ""
            },
            {
                questionNumber: 3,
                title: "Supprimer les emails. Après le filtre, il est temps d'un vrai coup de balai digital !",
                response: false,
                responseContent: null,
                textField: true,
                instruction: true,
                instructionContent: "Sélectionnez les emails que vous souhaitez supprimer et cliquez tout simplement sur Supprimer. Pour un véritable impact, il faut viser haut : supprimez au moins 500 emails. Avec les filtres, vous pouvez effacer en masse !",
                moreQuestion: true,
                moreQuestionContent: "Combien d'emails avez-vous effacé ?",
                textInfo: true,
                textInfoContent: "Pour retrouver le nombre exact, consultez votre corbeille !",
                illustration: false,
                illustrationContent: ""
            },
            {
                questionNumber: 4,
                title: "Se désinscrire de newsletters indésirables ou non lues. Vous les effacez avant même de les lire.Leurs notifications vous distraient. La solution ? Se désinscrire ! Ne gardez que celles que vous ne ratez jamais.",
                response: false,
                responseContent: null,
                textField: true,
                instruction: true,
                instructionContent: "À la fin de chaque newsletter, vous trouverez un lien \"Unsubscribe\" ou \"Désabonnez-vous\" écrit en minuscule. Attention ! Il ne s'agit pas toujours d'un seul clic. Quelques fois vous serez reconduit vers une page externe.",
                moreQuestion: true,
                moreQuestionContent: "De combien de newsletters vous êtes vous désinscrit ? ",
                textInfo: false,
                textInfoContent: "",
                illustration: false,
                illustrationContent: ""
            },
            {
                questionNumber: 5,
                title: "Désactiver des notifications par email. Slack, Notion, Gitlab... Certaines des applications que vous utilisez au quotidien vous informe constamment de modifications sur l'application ET par email.",
                response: false,
                responseContent: null,
                textField: true,
                instruction: true,
                instructionContent: "ous pouvez limiter ces notifications dans les paramètres de chaque application.",
                moreQuestion: false,
                moreQuestionContent: "",
                textInfo: false,
                textInfoContent: "",
                illustration: false,
                illustrationContent: ""
            },
            {
                questionNumber: 6,
                title: "Vider votre corbeille. Vous venez de supprimer de nombreux e-mails, mais les avez-vous réellement supprimés ?",
                response: true,
                responseContent: { A: "Oui", B: "Non" },
                textField: false,
                instruction: true,
                instructionContent: "️Cliquez sur l'onglet Corbeille à gauche de votre messagerie > Vider la corbeille. Certaines messageries suppriment les emails présents dans la corbeille au bout de 30 jours, mais pourquoi attendre ?",
                moreQuestion: true,
                moreQuestionContent: "Avez-vous vidé votre corbeille ?",
                textInfo: false,
                textInfoContent: "",
                illustration: false,
                illustrationContent: ""
            },
            {
                questionNumber: 7,
                title: "Organiser un autre nettoyage dans 1 mois. Les emails ça s'accumule et vite ! Réservez un créneau dans votre agenda pour faire du nettoyage de votre boîte email un rendez-vous régulier !",
                response: true,
                responseContent: { A: "Oui", B: "Non" },
                textField: false,
                instruction: false,
                instructionContent: "️",
                moreQuestion: true,
                moreQuestionContent: "Avez-vous réservé un créneau de nettoyage dans votre agenda ?",
                textInfo: false,
                textInfoContent: "",
                illustration: false,
                illustrationContent: ""
            },
        ]
    },
];