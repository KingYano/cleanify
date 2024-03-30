export const desktopData: Challenge[] = [
    {
        id: 1,
        day: 1,
        target: 'ordinateur',
        questions: [
            {
                questionNumber: 1,
                title: "Quel est système de votre ordinateur ?",
                response: true,
                responseContent: { A: "Windows", B: "Mac" },
                textField: false,
                instruction: false,
                instructionContent: null,
                system: null,
                moreQuestion: false,
                moreQuestionContent: "",
                textInfo: false,
                textInfoContent: "",
                illustration: false,
                illustrationContent: ""
            },
            {
                questionNumber: 2,
                title: "Pour évaluer l'impact de vos actions, il faut tout d'abord connaître la quantité actuelle de données stockées sur votre ordinateur. Comment trouver cette donnée ?",
                response: false,
                responseContent: null,
                textField: true,
                instruction: true,
                instructionContent: {
                    mac: "Cliquez sur la \"Pomme\" > \"Réglages Système\" > \"Stockage\".",
                    windows: "Allez dans le menu déroulant > \"Paramètres\" > \"Système\" > \"Stockage\"."
                },
                system: {
                    windows: "Windows",
                    mac: "Mac"
                },
                moreQuestion: true,
                moreQuestionContent: "Quelle est la quantité actuelle de données stockées sur votre ordinateur ?",
                textInfo: true,
                textInfoContent: "Précisez en gigaoctets (1 GB = 1 Go), utiliser un point (.) pour les décimales.",
                illustration: false,
                illustrationContent: ""
            },
            {
                questionNumber: 3,
                title: "Tout d'abord, videz votre corbeille pour continuer à facilement comptabiliser vos prochaines actions !",
                response: false,
                responseContent: null,
                textField: false,
                instruction: false,
                instructionContent: null,
                system: null,
                moreQuestion: false,
                moreQuestionContent: "",
                textInfo: false,
                textInfoContent: "",
                illustration: false,
                illustrationContent: ""
            },
            {
                questionNumber: 4,
                title: "Trier et supprimer vos fichiers. Réorganiser vos fichiers vous aidera à identifier les fichiers qui vous sont réellement utiles et facilitera donc le tri.",
                response: false,
                responseContent: null,
                textField: true,
                instruction: true,
                instructionContent: {
                    mac: "Faites glisser vos fichiers dans les dossiers correspondants, vous y verrez bientôt plus clair. Puis, supprimez ceux qui ne vous servent plus ! (Sélectionnez le fichier > Touche Supr ou clic droit).",
                    windows: "Faites glisser vos fichiers dans les dossiers correspondants, vous y verrez bientôt plus clair. Puis, supprimez ceux qui ne vous servent plus ! (Sélectionnez le fichier > Touche Supr ou clic droit)."
                },
                system: {
                    windows: "Windows",
                    mac: "Mac"
                },
                moreQuestion: true,
                moreQuestionContent: "Combien de fichiers avez-vous supprimés ?",
                textInfo: true,
                textInfoContent: "Vous trouverez le nombre exact dans votre corbeille.",
                illustration: false,
                illustrationContent: ""
            },
            {
                questionNumber: 5,
                title: "Videz votre corbeille pour continuer à facilement comptabiliser vos prochaines actions !",
                response: false,
                responseContent: null,
                textField: false,
                instruction: false,
                instructionContent: null,
                system: null,
                moreQuestion: false,
                moreQuestionContent: "",
                textInfo: false,
                textInfoContent: "",
                illustration: false,
                illustrationContent: ""
            },
            {
                questionNumber: 6,
                title: "Supprimer vos fichiers téléchargés. Cartes d'embarquement, factures, dossier de présentation, images, captures d'écran...",
                response: false,
                responseContent: null,
                textField: true,
                instruction: true,
                instructionContent: {
                    mac: "Allez dans \"Finder\" > \"Téléchargements\".",
                    windows: "Allez dans l'Explorateurs de fichiers' > \"Téléchargements\"."
                },
                system: {
                    windows: "Windows",
                    mac: "Mac"
                },
                moreQuestion: true,
                moreQuestionContent: "Combien de fichiers avez-vous supprimé dans votre dossier \"Téléchargements\" ?",
                textInfo: true,
                textInfoContent: "Vous trouverez le nombre exact dans votre corbeille.",
                illustration: false,
                illustrationContent: ""
            },
            {
                questionNumber: 7,
                title: "Videz votre corbeille pour continuer à facilement comptabiliser vos prochaines actions !",
                response: false,
                responseContent: null,
                textField: false,
                instruction: false,
                instructionContent: null,
                system: null,
                moreQuestion: false,
                moreQuestionContent: "",
                textInfo: false,
                textInfoContent: "",
                illustration: false,
                illustrationContent: ""
            },
            {
                questionNumber: 8,
                title: "Trier et supprimer vos photos et vidéos. Ne gardez que vos photos préférées ou de meilleure qualité.",
                response: false,
                responseContent: null,
                textField: true,
                instruction: true,
                instructionContent: {
                    mac: "Allez dans \"Finder\" > \"Images\" et \"Vidéos\".",
                    windows: "Allez dans l'Explorateurs de fichiers' > \"Images\" et \"Vidéos\"."
                },
                system: {
                    windows: "Windows",
                    mac: "Mac"
                },
                moreQuestion: true,
                moreQuestionContent: "Combien de photos et/ou vidéos avez-vous supprimés ?",
                textInfo: true,
                textInfoContent: "Vous trouverez le nombre exact dans votre corbeille.",
                illustration: false,
                illustrationContent: ""
            },
            {
                questionNumber: 9,
                title: "Videz votre corbeille pour continuer à facilement comptabiliser vos prochaines actions !",
                response: false,
                responseContent: null,
                textField: false,
                instruction: false,
                instructionContent: null,
                system: null,
                moreQuestion: false,
                moreQuestionContent: "",
                textInfo: false,
                textInfoContent: "",
                illustration: false,
                illustrationContent: ""
            },
            {
                questionNumber: 10,
                title: "Effacer votre historique de navigation. Dès que vous entrez sur un moteur de recherche, il garde en mémoire les fichiers que vous avez téléchargés et vos informations personnelles grâce aux cookies.",
                response: true,
                responseContent: null,
                textField: false,
                instruction: true,
                instructionContent: {
                    mac: "Allez sur Google, cliquez sur les 3 points en haut à droite > \"Historique\" > \"Historique\" \"Effacer les données de navigation\" > \"Choisissez vos préférences\".",
                    windows: "Allez sur Google, cliquez sur les 3 points en haut à droite > \"Historique\" > \"Historique\" \"Effacer les données de navigation\" > \"Choisissez vos préférences\"."
                },
                system: {
                    windows: "Windows",
                    mac: "Mac"
                },
                moreQuestion: true,
                moreQuestionContent: "Avez-vous effacé votre historique de navigation ?",
                textInfo: false,
                textInfoContent: "",
                illustration: false,
                illustrationContent: ""
            },
            {
                questionNumber: 11,
                title: "Faire le tri dans vos extensions. Vous avez peut-être dû à un moment ou un autre télécharger une extension sur votre navigateur.",
                response: true,
                responseContent: null,
                textField: false,
                instruction: true,
                instructionContent: {
                    mac: "Allez sur Google, cliquez sur l'icone puzzle > Sélectionnez l'extension que vous souhaitez supprimer > Cliquez sur les 3 points \"Désinstaller\".",
                    windows: "Allez sur Google, cliquez sur l'icone puzzle > Sélectionnez l'extension que vous souhaitez supprimer > Cliquez sur les 3 points \"Désinstaller\"."
                },
                system: {
                    windows: "Windows",
                    mac: "Mac"
                },
                moreQuestion: true,
                moreQuestionContent: "Avez-vous effacé votre historique de navigation ?",
                textInfo: false,
                textInfoContent: "",
                illustration: false,
                illustrationContent: ""
            },
            {
                questionNumber: 12,
                title: "Vous y êtes presque !",
                response: false,
                responseContent: null,
                textField: true,
                instruction: false,
                instructionContent: null,
                system: null,
                moreQuestion: true,
                moreQuestionContent: "Quelle est la quantité finale de données stockées sur votre ordinateur ?",
                textInfo: true,
                textInfoContent: "Précisez en gigaoctets (1 GB = 1 Go), utiliser un point (.) pour les décimales.",
                illustration: false,
                illustrationContent: ""
            },
        ]
    },
];
