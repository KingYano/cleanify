interface MobileInstruction {
    android?: string;
    ios?: string;
}

interface MobileSystems {
    android?: string;
    ios?: string;
}

interface DesktopInstruction {
    windows?: string;
    mac?: string;
}

interface DesktopSystems {
    windows?: string;
    mac?: string;
}

interface DevisesQuestion {
    id: number,
    questionNumber: number;
    title: string;
    response: boolean;
    responseContent: { A: string; B: string } | null;
    textField: boolean;
    moreQuestion: boolean;
    moreQuestionContent: string;
    textInfo: boolean;
    textInfoContent: string;
    illustration: boolean;
    illustrationContent: string;
}
interface MailQuestion extends DevisesQuestion {
    instruction: boolean;
    instructionContent: string;
}

interface DesktopQuestion extends DevisesQuestion {
    instruction: boolean;
    instructionContent: DesktopInstruction | null;
    system: DesktopSystems | null;
}

interface MobileQuestion extends DevisesQuestion {
    instruction: boolean;
    instructionContent: MobileInstruction | null;
    system: MobileSystems | null;
}

