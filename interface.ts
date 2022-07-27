interface ICore {
    flight: number
    core: {
        reuse_count: number,
        status: unknown|boolean
    }
}

interface IPayloads {
    payload_type: string
    payload_mass_kg: number
    payload_mass_lbs: number
}

interface IMissionSpaceX {
    mission_name: string
    launch_date_local: Date
    launch_site: {
    site_name_long: string
},
    links: {
    article_link: string,
        video_link: string
},
    rocket: {
    rocket_name: string
        first_stage: {
        cores: ICore[]
    },
    second_stage: {
        payloads: IPayloads[]
    }
}
}