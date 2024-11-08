import { create } from 'zustand';
import axios from "axios";

export type IconsResponse = { single: string[], plural: string[] }

export interface IconsStore {
    data: IconsResponse;
    single: string[];
    plural: string[];
    filter: (value: string) => void;
    get: () => void;
}

export const useIcons = create<IconsStore>((set, get) => ({
    data: { single: [], plural: [] },
    single: [],
    plural: [],
    filter(value) {
        const { single, plural } = get().data;

        const filteredSingle = single.filter(e => e.toLowerCase().includes(value.toLowerCase()));
        const filteredPlural = plural.filter(e => e.toLowerCase().includes(value.toLowerCase()));

        set({ single: filteredSingle, plural: filteredPlural });
    },
    async get() {
        try {
            const response = await axios.get<IconsResponse>('/api/icons');
            const { single, plural } = response.data;
            set({ data: response.data, single, plural });
        } catch (error) {
            console.error('Failed to fetch icons', error);
        }
    },
}));
