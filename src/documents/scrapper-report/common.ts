import { Cart } from '@mydecocloud/interfaces/scrapper';

// On type les données du quantitative Survey qu'on va utiliser, ça serait sympa
// d'avoir l'ensemble du truc typé et dispo pour tous.
export type Building = {
    name: string;
    totalGrossFloorArea: string;
    totalNetFloorArea: string;
    totalGrossVolume: string,
    floors: Array<{

        index: number;
        name: string;
        grossFloorArea: number;
        netFloorArea: number;
        grossVolume: number;
        elevation: number;
        flooringHeight: number;
        rawCeilingHeight: number;
        innerHeight: number;

        rooms: Array<{
            index: number;
            name: string;
            roomType: string;
            roomCode: string;
            flooringArea: number;
            ceilingArea: number;
            volume: number;
            circumference: number;
        }>;
    }>;
}

/**
 * Fonction utilitaire permettant de récupérer la structure du quantitative survey depuis le dataset
 * On la factorise ici vu que c'est utilisé à plusieurs endroits
 * @param cart les données sources du projet.
 */
export function getQuantitativeSurveyFromCart(cart: Cart) : Building {
    return JSON.parse(cart.exportData!).quantitySurvey?.buildings[0] as Building;
}

export function getAmountOfRooms(building: Building): number {
    let amountOfRooms = 0;

    for (const floor of building.floors) {
        amountOfRooms += floor.rooms.length;
    }

    return amountOfRooms;
}
