// src/utils/transformData.ts
import { User, GroupedUsersByDepartment, IntermediateDepartmentSummary } from '../types';

export const transformData = (users: User[]): GroupedUsersByDepartment => {
    const departmentMap = new Map<string, IntermediateDepartmentSummary>();

    // First pass: Group users by department and collect necessary data
    for (const user of users) {
        const department = user.company.department;

        if (!departmentMap.has(department)) {
            departmentMap.set(department, {
                male: 0,
                female: 0,
                ageRange: '',
                hair: {},
                addressUser: {},
                ages: [], // Temporary field to store ages for calculation
            });
        }

        const departmentSummary = departmentMap.get(department)!;

        // Update male/female count
        if (user.gender === 'male') {
            departmentSummary.male++;
        } else if (user.gender === 'female') {
            departmentSummary.female++;
        }

        // Collect ages for age range calculation
        departmentSummary.ages.push(user.age);

        // Update hair color summary
        const hairColor = user.hair.color;
        departmentSummary.hair[hairColor] = (departmentSummary.hair[hairColor] || 0) + 1;

        // Update addressUser: key is full name, value is zipcode
        const fullName = `${user.firstName} ${user.lastName}`;
        departmentSummary.addressUser[fullName] = user.address.postalCode;
    }

    // Second pass: Calculate age range for each department
    const result: GroupedUsersByDepartment = {};
    for (const [department, summary] of departmentMap.entries()) {
        const ages = summary.ages;
        const minAge = Math.min(...ages);
        const maxAge = Math.max(...ages);

        // Remove the temporary `ages` field
        const { ages: _, ...finalSummary } = summary;
        finalSummary.ageRange = `${minAge}-${maxAge}`;

        // Add the department summary to the result
        result[department] = finalSummary;
    }

    return result;
};