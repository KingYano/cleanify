interface Instruction {
    windows?: string;
    mac?: string;
}

interface Systems {
    windows?: string;
    mac?: string;
}

interface DesktopQuestion {
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

interface DesktopData {
    id: number;
    day: number;
    target: string;
    questions: DesktopQuestion[];
}
