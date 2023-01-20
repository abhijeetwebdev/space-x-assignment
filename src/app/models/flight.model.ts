export class Flight {
    flight_number: number;
    mission_name: string;
    mission_id: any[];
    launch_year: string;
    launch_success: boolean;
    rocket?: Rocket;
    links: Link;
}

export class Rocket {
    rocket_id: string;
    rocket_name: string;
    land_success: boolean;
}

export class Link {
    mission_patch: string;
    mission_patch_small: string;
    article_link: string;
}