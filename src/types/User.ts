import { z } from 'zod';

export const addressSchema = z.object({
    street: z.string(),
    suite: z.string(),
    city: z.string(),
    zipcode: z.string(),
    geo: z.object({
        lat: z.string(),
        lng: z.string(),
    }),
});

export const companySchema = z.object({
    name: z.string(),
    catchPhrase: z.string(),
    bs: z.string(),
});

export const userSchema = z.object({
    id: z.number(),
    name: z.string(),
    username: z.string(),
    email: z.string().email(),
    address: addressSchema,
    phone: z.string(),
    website: z.string(),
    company: companySchema,
});

export type IUser = z.infer<typeof userSchema>;
export type IGeo = z.infer<typeof addressSchema>;
export type ICompany = z.infer<typeof companySchema>;
