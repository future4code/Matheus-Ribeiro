export interface Post {
    id: string;
    photo: string;
    description: string;
    creation_date: Date;
    type?: string;
    id_user: string;
}