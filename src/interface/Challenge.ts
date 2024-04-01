export interface Challenge {
    id: number;
    day: number;
    target: string;
    code: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    questions: (MailQuestion | DesktopQuestion | MobileQuestion)[];
}
