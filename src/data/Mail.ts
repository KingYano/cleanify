import type { Challenge } from "@/interface/Challenge";
import imageUrlMail from "@/assets/illustrations/mail.svg";

function addBrToInstructionContent(content: string): string {
    return content.replace(/\. /g, '.<br>');
}

export const mailData: Challenge[] = [
    {
        id: 1,
        day: 1,
        target: 'boîte email',
        code: 'mail',
        description: 'Faites de la place et boostez les performances en triant les emails inutiles.',
        imageUrl: imageUrlMail,
        imageAlt: 'Illustration d\'un télephone portable avec un utilisateur qui utilise sa boîte mail.',
        questions: [
            {
                id: 1,
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
                id: 2,
                questionNumber: 2,
                title: "Filtrer vos emails. Pour éliminer des emails en masse, le filtre est votre meilleur allié. Utilisez les filtres disponibles en cliquant sur la barre de recherche située en haut de votre boîte mail et sur l'icône de filtre. Vous pouvez filtrer vos emails par :",
                response: false,
                responseContent: null,
                textField: false,
                instruction: true,
                instructionContent: addBrToInstructionContent(`<span>Taille :</span> pour identifier les e-mails qui prennent le plus de place dans votre boîte.<br>
            <span>Date :</span> pour supprimer les e-mails les plus anciens.<br>
            <span>Nom de l'expéditeur :</span> pour identifier les conversations obsolètes.<br>
            <span>Objet :</span> pour les newsletters, promotions marketing, les emails d'invitation à des réunions, notifications Facebook, Slack, Notion etc.`),
                moreQuestion: false,
                moreQuestionContent: "",
                textInfo: false,
                textInfoContent: "",
                illustration: false,
                illustrationContent: ""
            },
            {
                id: 3,
                questionNumber: 3,
                title: "Supprimer les emails. Après le filtre, il est temps d'un vrai coup de balai digital !",
                response: false,
                responseContent: null,
                textField: true,
                instruction: true,
                instructionContent: addBrToInstructionContent("Sélectionnez les emails que vous souhaitez supprimer et cliquez tout simplement sur Supprimer. Pour un véritable impact, il faut viser haut : supprimez au moins 500 emails. Avec les filtres, vous pouvez effacer en masse !"),
                moreQuestion: true,
                moreQuestionContent: "Combien d'emails avez-vous effacé ?",
                textInfo: true,
                textInfoContent: "Pour retrouver le nombre exact, consultez votre corbeille !",
                illustration: false,
                illustrationContent: ""
            },
            {
                id: 4,
                questionNumber: 4,
                title: "Se désinscrire de newsletters indésirables ou non lues. Vous les effacez avant même de les lire.Leurs notifications vous distraient. La solution ? Se désinscrire ! Ne gardez que celles que vous ne ratez jamais.",
                response: false,
                responseContent: null,
                textField: true,
                instruction: true,
                instructionContent: addBrToInstructionContent("À la fin de chaque newsletter, vous trouverez un lien \"Unsubscribe\" ou \"Désabonnez-vous\" écrit en minuscule. Attention ! Il ne s'agit pas toujours d'un seul clic. Quelques fois vous serez reconduit vers une page externe."),
                moreQuestion: true,
                moreQuestionContent: "De combien de newsletters vous êtes vous désinscrit ? ",
                textInfo: false,
                textInfoContent: "",
                illustration: false,
                illustrationContent: ""
            },
            {
                id: 5,
                questionNumber: 5,
                title: "Désactiver des notifications par email. Slack, Notion, Gitlab... Certaines des applications que vous utilisez au quotidien vous informe constamment de modifications sur l'application ET par email.",
                response: false,
                responseContent: null,
                textField: true,
                instruction: true,
                instructionContent: addBrToInstructionContent("Vous pouvez limiter ces notifications dans les paramètres de chaque application."),
                moreQuestion: false,
                moreQuestionContent: "",
                textInfo: false,
                textInfoContent: "",
                illustration: false,
                illustrationContent: ""
            },
            {
                id: 6,
                questionNumber: 6,
                title: "Vider votre corbeille. Vous venez de supprimer de nombreux e-mails, mais les avez-vous réellement supprimés ?",
                response: true,
                responseContent: { A: "Oui", B: "Non" },
                textField: false,
                instruction: true,
                instructionContent: addBrToInstructionContent("️Cliquez sur l'onglet Corbeille à gauche de votre messagerie > Vider la corbeille. Certaines messageries suppriment les emails présents dans la corbeille au bout de 30 jours, mais pourquoi attendre ?"),
                moreQuestion: true,
                moreQuestionContent: "Avez-vous vidé votre corbeille ?",
                textInfo: false,
                textInfoContent: "",
                illustration: false,
                illustrationContent: ""
            },
            {
                id: 7,
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
