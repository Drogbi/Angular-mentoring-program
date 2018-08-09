export interface Course {
    id?: string;
    name: string;
    date: string;
    length: string;
    description: string;
    isTopRated: boolean;
    authors: Author[];
}

export interface Author {
    id?: string;
    firstName: string;
    lastName: string;
}
