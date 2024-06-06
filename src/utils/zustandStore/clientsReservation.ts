import { create } from 'zustand'
interface ReservationDetails {
  adults: number;
  children: {
    quantity: number;
    ages: number[];
  };
}
interface ReservationStore {
  date: string; // or Date if you prefer a Date object
  reservation: ReservationDetails[];
  handleRoom: (val: number) => void;
  deleteRoom: (idx: number) => void;
  handleAdults: (idx: number, newAdultCount: number) => void;
  handleChildren: (idx: number, newChildrenCount: number) => void;
  handleAges: (val: number,idx:number) => void;
}
const defaulReservation: ReservationDetails = {
  adults: 1,
  children: {
    quantity: 0,
    ages: []
  }

}
export const useFormModal = create<ReservationStore>()((set) => ({
  date: "2024-05-26",
  reservation: [
    {
      adults: 1,
      children: {
        quantity: 0,
        ages: []
      }
    }
  ],
  rooms:[],
  handleAdults: (idx, newAdultCount) => set((state) => {
    const adjustedAdultCount = Math.min(Math.max(newAdultCount, 0), 10);
    return {
      reservation: state.reservation.map((room, index) =>
        index === idx ? { ...room, adults: adjustedAdultCount } : room
      )
    };
  }),
  handleChildren: (idx, newChildrenCount) => set((state) => {    
    const adjustedChildrenCount = Math.min(Math.max(newChildrenCount, 0), 12);
    state.reservation[idx] = {
      ...state.reservation[idx],
      children: {
        ...state.reservation[idx].children,
        quantity: adjustedChildrenCount
      }
    };
    
    return { reservation: state.reservation };
    
  }),
  handleRoom: (val) => set((state) => {
    const adjustedVal = Math.min(Math.max(val, 0), 10);
    const currentRooms = state.reservation.length;
    if (adjustedVal > currentRooms) {
      const roomsToAdd = adjustedVal - currentRooms;
      const newRooms = Array.from({ length: roomsToAdd }, () => ({ ...defaulReservation }));
      return { reservation: [...state.reservation, ...newRooms] };
    } else if (adjustedVal < currentRooms) {
      return { reservation: state.reservation.slice(0, adjustedVal) };
    } else {
      return state;
    }
  }),
  handleAges: (val, idx) => set((state) => {
    const newAges = [...state.reservation[idx].children.ages, val];
  
    const newReservation = state.reservation.map((room, index) =>
      index === idx ? {
        ...room,
        children: {
          ...room.children,
          ages: newAges
        }
      } : room
    );
  
    return { reservation: newReservation };
  }),
  
  deleteRoom: (idx) => set((state) => ({
    reservation: state.reservation.filter((_, index) => index !== idx)
  })),
}))