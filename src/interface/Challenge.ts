export interface Challenge {
    id: number;
    day: number;
    target: string;
    questions: (MailQuestion | DesktopQuestion | MobileQuestion)[];
}
