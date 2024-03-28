interface MailQuestion {
    questionNumber: number;
    title: string;
    response: boolean;
    responseContent: { A: string; B: string } | null;
    textField: boolean;
    instruction: boolean;
    instructionContent: string;
    moreQuestion: boolean;
    moreQuestionContent: string;
    textInfo: boolean,
    textInfoContent: string,
    illustration: boolean;
    illustrationContent: string;
}

interface MailData {
    id: number;
    day: number;
    target: string;
    questions: MailQuestion[];
}
