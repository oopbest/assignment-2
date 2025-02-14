// src/types.ts
export interface User {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    birthDate: string;
    image: string;
    hair: {
        color: string;
    };
    address: {
        address: string;
        city: string;
        postalCode: string;
    };
    company: {
        department: string;
    };
}

export interface IntermediateDepartmentSummary {
    male: number;
    female: number;
    ageRange: string;
    hair: { [color: string]: number };
    addressUser: { [fullName: string]: string };
    ages: number[]; // Temporary field for age range calculation
}

export interface DepartmentSummary {
    male: number;
    female: number;
    ageRange: string;
    hair: { [color: string]: number };
    addressUser: { [fullName: string]: string };
}

export interface GroupedUsersByDepartment {
    [department: string]: DepartmentSummary;
}