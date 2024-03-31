export interface Challenge {
    id: number;
    day: number;
    target: string;
    description: string;
    questions: (MailQuestion | DesktopQuestion | MobileQuestion)[];
}
