export class Flight {
    flight_number: number;
    mission_name: string;
    mission_id: any[];
    launch_year: string;
    launch_success: boolean;
    rocket?: Rocket;
}

export class Rocket {
    rocket_id: string;
    rocket_name: string;
    land_success: boolean;
}