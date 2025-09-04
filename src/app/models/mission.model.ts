export interface Mission {
    id: string;
    company?: string,
    title: string;
    duration: number; // Month
    location: string; // City
    remote: 'yes' | 'no' | 'partial'
}
