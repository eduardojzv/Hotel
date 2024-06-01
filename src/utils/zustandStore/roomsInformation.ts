import { create } from "zustand";

interface Rooms {
    title:string;
    description:string;
    img:string;
  
  }[]

  export const useFormModal = create<Rooms>()(() => ({
    title:'title test',
    description:'descip test',
    img:""
  }))