import image1 from '../../public/assets/img/about/headshot.jpg';
import { TTeamData } from '@/types/types';


const team_data: TTeamData[] = [
    //about team data
    {
        id: 1,
        image: image1,
        name: "Finn O'Reilly",
        desination: "Multi-Instrumentalist & Producer",
        socialIcon: [
            { url: "https://www.instagram.com/finnreuben/", title: "Instagram", name: "IN" },
        ]
    },
]
export default team_data;