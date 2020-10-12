export interface IGrades {
    grades?: Grade[],
    options?: IGradeOptions[],
}

export interface Grade {
    title?: string;
    price?: string;
    manufacture_link?: string;
}

export interface IGradeOptions {
    title?: string;
    heading?: string;
    price?: string;
}