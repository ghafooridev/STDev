import { Category } from './enum';
export const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const CategoryList: Category[] = [
    {
        id: '1',
        name: "category1"
    },
    {
        id: '2',
        name: "category2"
    },
    {
        id: '3',
        name: "category3"
    }
]