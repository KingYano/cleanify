import type {Challenge} from "@/interface/Challenge";
import imageUrlMobile from "@/assets/illustrations/mobile.svg"

export const mobileData: Challenge[] = [
    {
        id: 2,
        day: 2,
        target: 'téléphone',
        code: 'phone',
        description: 'Faites de la place et boostez les performances en triant applications, photos inutiles.',
        imageUrl: imageUrlMobile,
        imageAlt: 'Illustration d\'un télephone portable avec un utilisateur qui utilise sa messagerie de discussion.',
        questions: [
            {
                id: 1,
                questionNumber: 1,
                title: "Quel système d'exploitation utilisez-vous ?",
                response: true,
                responseContent: { A: "Android (Samsung, Xiaomi,...)", B: "IOS (Iphone)" },
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
                id: 2,
                questionNumber: 2,
                title: "Pour évaluer l'impact de vos actions, identifiez d'abord l'espace de stockage utilisé sur votre smartphone. Comment accéder à cette information ?",
                response: false,
                responseContent: null,
                textField: true,
                instruction: true,
                instructionContent: {
                    ios: "Allez dans \"Réglages\" > \"Général\" > \"Stockage iPhone\".",
                    android: "Allez dans \"Paramètres\" > \"Stockage\"."
                },
                system: {
                    android: "Android",
                    ios: "IOS"
                },
                moreQuestion: true,
                moreQuestionContent: "Quel est le volume de données actuellement occupé sur votre smartphone ?",
                textInfo: true,
                textInfoContent: "Précisez en gigaoctets (1 GB = 1 Go), utiliser un point (.) pour les décimales.",
                illustration: false,
                illustrationContent: ""
            },
            {
                id: 3,
                questionNumber: 3,
                title: "Supprimez les applications inutilisées, chronophage ou stressantes.",
                response: false,
                responseContent: null,
                textField: true,
                instruction: true,
                instructionContent: {
                    ios: "Maintenez votre doigt sur l'application > Touchez l'icône Supprimer.",
                    android: "Ouvrez l'application Google Play > Photo de profil > Gérer les applications > Sélectionner une application > \"Désinstaller\"."
                },
                system: {
                    android: "Android",
                    ios: "IOS"
                },
                moreQuestion: true,
                moreQuestionContent: "Quel est le volume de données actuellement occupé sur votre smartphone ?",
                textInfo: true,
                textInfoContent: "Précisez en gigaoctets (1 GB = 1 Go), utiliser un point (.) pour les décimales.",
                illustration: false,
                illustrationContent: ""
            },
            {
                id: 4,
                questionNumber: 4,
                title: "Faites le tri dans vos photos et vidéos, en éliminant celles qui sont floues ou obsolètes, comme les captures d'écran inutiles.",
                response: false,
                responseContent: null,
                textField: true,
                instruction: true,
                instructionContent: {
                    ios: "N'oubliez pas de vérifier également votre espace cloud, comme iCloud, où vos photos peuvent être sauvegardées.",
                    android: "N'oubliez pas de vérifier également votre espace cloud, comme Google Photos, où vos photos peuvent être sauvegardées."
                },
                system: {
                    android: "Android",
                    ios: "IOS"
                },
                moreQuestion: true,
                moreQuestionContent: "Combien de photos et/ou vidéos avez-vous supprimées ?",
                textInfo: true,
                textInfoContent: "Consultez votre corbeille pour le nombre exact sans oublier de vider.",
                illustration: false,
                illustrationContent: ""
            },
            {
                id: 5,
                questionNumber: 5,
                title: "Nettoyez votre dossier de téléchargements, comme des menus ou des cartes d'embarquement, téléchargés pour une consultation unique et ensuite oubliés.",
                response: false,
                responseContent: null,
                textField: true,
                instruction: true,
                instructionContent: {
                    ios: "Cliquer sur l’icone “Fichiers” de votre menu.",
                    android: "Ouvre l’application \"Fichiers\" > Onglet \"Documents\"."
                },
                system: {
                    android: "Android",
                    ios: "IOS"
                },
                moreQuestion: true,
                moreQuestionContent: "Combien de fichiers téléchargés avez-vous supprimés ?",
                textInfo: false,
                textInfoContent: "",
                illustration: false,
                illustrationContent: ""
            },
            {
                id: 6,
                questionNumber: 6,
                title: "Faites le ménage dans vos notes, qu'il s'agisse de listes de courses, de brouillons de messages ou de listes de tâches.",
                response: false,
                responseContent: null,
                textField: true,
                instruction: false,
                instructionContent: null,
                system: {
                    android: "Android",
                    ios: "IOS"
                },
                moreQuestion: true,
                moreQuestionContent: "Combien de notes avez-vous supprimées ?",
                textInfo: true,
                textInfoContent: "Consultez votre corbeille pour obtenir le chiffre précis sans oublier de vider.",
                illustration: false,
                illustrationContent: ""
            },
            {
                id: 7,
                questionNumber: 7,
                title: "Faites le tri dans votre répertoire. Le nettoyage s'applique aussi aux contacts.",
                response: false,
                responseContent: null,
                textField: true,
                instruction: true,
                instructionContent: {
                    ios: "Allez dans \"Contacts\" > Contact à supprimer > \"Éditer\" > \"Supprimer\".",
                    android: "Allez dans les \"Contacts\" > Contact à supprimer > Maintenez votre doigt sur le contact > \"Supprimer\"."
                },
                system: {
                    android: "Android",
                    ios: "IOS"
                },
                moreQuestion: true,
                moreQuestionContent: "Combien de contacts avez-vous retirés ?",
                textInfo: false,
                textInfoContent: "",
                illustration: false,
                illustrationContent: ""
            },
            {
                id: 8,
                questionNumber: 8,
                title: "Épurer vos conversations, qu'il s'agisse de SMS de confirmation ou d'échanges éphémères, peut alléger le flux de votre messagerie.",
                response: false,
                responseContent: null,
                textField: true,
                instruction: false,
                instructionContent: null,
                system: {
                    android: "Android",
                    ios: "IOS"
                },
                moreQuestion: true,
                moreQuestionContent: "Combien de fils de discussion avez-vous éliminés ?",
                textInfo: false,
                textInfoContent: "",
                illustration: false,
                illustrationContent: ""
            },
            {
                id: 9,
                questionNumber: 9,
                title: "Videz votre historique de navigation. Une utilisation quotidienne d'internet amasse des données superflues, alourdissant la mémoire et sollicitant inutilement votre téléphone.",
                response: false,
                responseContent: null,
                textField: true,
                instruction: true,
                instructionContent: {
                    ios: "Allez dans \"Paramètres\" > Onglet Safari > Effacer historique et données de sites.",
                    android: "Allez dans Google > Icone paramètres (trois petits points) en haut à droite > Onglet \"Historique\" > Effacer les données de navigation."
                },
                system: {
                    android: "Android",
                    ios: "IOS"
                },
                moreQuestion: true,
                moreQuestionContent: "Avez-vous supprimé vos données de navigation ?",
                textInfo: false,
                textInfoContent: "",
                illustration: false,
                illustrationContent: ""
            },
            {
                id: 10,
                questionNumber: 10,
                title: "Minimisez les notifications. Les alertes de jeux, d'applications ou d'actualités captent sans cesse notre attention, provoquant une vigilance permanente et d'incessantes distractions.",
                response: false,
                responseContent: null,
                textField: true,
                instruction: true,
                instructionContent: {
                    ios: "Allez dans \"Paramètres\" > Onglet Notifications > Sélectionnez l'application concernée et désactivez les notifications.",
                    android: "Allez dans \"Paramètres\" > Onglet Notifications > Notifications d'application > Gérer les notifications de vos applications"
                },
                system: {
                    android: "Android",
                    ios: "IOS"
                },
                moreQuestion: true,
                moreQuestionContent: "Combien d'applications ont vu leurs notifications désactivées ?",
                textInfo: false,
                textInfoContent: "",
                illustration: false,
                illustrationContent: ""
            },
            {
                id: 11,
                questionNumber: 11,
                title: "Vous y êtes presque !",
                response: false,
                responseContent: null,
                textField: true,
                instruction: false,
                instructionContent: null,
                system: {
                    android: "Android",
                    ios: "IOS"
                },
                moreQuestion: true,
                moreQuestionContent: "Quel est le volume actuel de données sur votre smartphone ?",
                textInfo: true,
                textInfoContent: "Mentionnez en gigaoctets (1 GB = 1 Go), avec un point (.) pour les fractions.",
                illustration: false,
                illustrationContent: ""
            },
        ]
    },
];
