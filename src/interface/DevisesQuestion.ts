interface MobileSystems {
    android?: string;
    ios?: string;
}

interface DesktopSystems {
    windows?: string;
    mac?: string;
}

type SystemInstructions = string | MobileSystems | DesktopSystems | null;

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

interface MobileQuestion extends DevisesQuestion {
    instruction: boolean;
    instructionContent: SystemInstructions;
    system: MobileSystems | null;
}

interface DesktopQuestion extends DevisesQuestion {
    instruction: boolean;
    instructionContent: SystemInstructions;
    system: DesktopSystems | null;
}

