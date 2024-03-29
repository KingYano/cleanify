interface Instruction {
    android?: string;
    ios?: string;
}

interface Systems {
    android?: string;
    ios?: string;
}

interface Question {
    questionNumber: number;
    title: string;
    response: boolean;
    responseContent: { A: string; B: string } | null;
    textField: boolean;
    instruction: boolean;
    instructionContent: Instruction | null;
    system: Systems | null;
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
    questions: Question[];
}
