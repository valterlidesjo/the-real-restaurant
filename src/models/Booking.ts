import { DateResponse } from "./DateResponse"

export interface Booking {
        restaurantId: string,
        date: string,
        time: string,
        numberOfGuests: number,
        customer: {
          name: string,
          lastname: string,
          email: string,
          phone: string
        },
        searchResults?: DateResponse[];
};