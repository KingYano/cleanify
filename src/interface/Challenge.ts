export interface Challenge {
    id: number;
    day: number;
    target: string;
    code: string;
    description: string;
    questions: (MailQuestion | DesktopQuestion | MobileQuestion)[];
}
