import { create } from 'zustand'
interface Room {
  adults: number;
  children: {
    quantity: number;
    ages: number[];
  };
}

interface Reservation {
  date: string; // or Date if you prefer a Date object
  rooms: Room[];
  handleRoom: (val: number) => void;
  deleteRoom: (idx: number) => void;
  handleAdults: (idx: number, newAdultCount: number) => void;
  handleChildren: (idx: number, newChildrenCount: number) => void;
}
const defaultRoom: Room = {
  adults: 1,
  children: {
    quantity: 0,
    ages: []
  }

}
export const useFormModal = create<Reservation>()((set) => ({
  date: "2024-05-26",
  rooms: [
    {
      adults: 1,
      children: {
        quantity: 0,
        ages: []
      }
    }
  ],
  handleAdults: (idx, newAdultCount) => set((state) => {
    const adjustedAdultCount = Math.min(Math.max(newAdultCount, 0), 10);
    return {
      rooms: state.rooms.map((room, index) =>
        index === idx ? { ...room, adults: adjustedAdultCount } : room
      )
    };
  }),
  handleChildren: (idx, newChildrenCount) => set((state) => {
    const adjustedChildrenCount = Math.min(Math.max(newChildrenCount, 0), 12);
    return {
      rooms: state.rooms.map((room, index) =>
        index === idx ? { ...room, children: { ...room.children, quantity: adjustedChildrenCount } } : room
      )
    };
  }),
  handleRoom: (val) => set((state) => {
    const adjustedVal = Math.min(Math.max(val, 0), 10);
    const currentRooms = state.rooms.length;
    if (adjustedVal > currentRooms) {
      const roomsToAdd = adjustedVal - currentRooms;
      const newRooms = Array.from({ length: roomsToAdd }, () => ({ ...defaultRoom }));
      return { rooms: [...state.rooms, ...newRooms] };
    } else if (adjustedVal < currentRooms) {
      return { rooms: state.rooms.slice(0, adjustedVal) };
    } else {
      return state;
    }
  }),
  deleteRoom: (idx) => set((state) => ({
    rooms: state.rooms.filter((_, index) => index !== idx)
  })),
}))