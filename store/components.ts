import { create } from 'zustand';

type CurrentCategory = {
    parent_name: string;
    parent_id: number;
    childrens: Children[];

}
type Children = {
    id: number;
    name: string;
    childrens: Children[];
};

type ComponentsStore = {
    isSubcategoriesOpen: boolean;
    isSidebarOpen: boolean;
    currentCategory?: CurrentCategory;
    openSidebar: () => void;
    closeSidebar: () => void;
    setCurrentCategory: (props: CurrentCategory) => void;
    openSubcategories: () => void;
    closeSubcategories: () => void;
};

export const useComponentsStore = create<ComponentsStore>((set) => ({
    isSubcategoriesOpen: false,
    isSidebarOpen: false,
    openSidebar: () => set((state) => ({ ...state, isSidebarOpen: true })),
    closeSidebar: () => set((state) => ({ ...state, isSidebarOpen: false })),
    setCurrentCategory: (props: CurrentCategory) => set((state) => ({ ...state, currentCategory: props })),
    openSubcategories: () => set((state) => ({ ...state, isSubcategoriesOpen: true })),
    closeSubcategories: () => set((state) => ({ ...state, isSubcategoriesOpen: false })),
}));