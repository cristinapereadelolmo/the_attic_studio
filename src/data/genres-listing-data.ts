import img1 from '../../public/assets/img/genres/genres-01.jpg';
import img2 from '../../public/assets/img/genres/genres-02.jpg';
import img3 from '../../public/assets/img/genres/genres-03.jpg';
import img4 from '../../public/assets/img/genres/genres-04.jpg';
import img5 from '../../public/assets/img/genres/genres-05.jpg';
import img6 from '../../public/assets/img/genres/genres-06.jpg';
import { TGenresListing } from '@/types/types';

const genres_listing_data: TGenresListing[] = [
    {
        id: 1,
        image: img1,
        videoUrl: "3FWSZ6lvaSk",
        title: "Recording",
        description: "The prime service at The Attic is our live room where we record all our music. With an impressive collection of equipment, microphones and musical instruments, the attic has everything you need to record your music to the highest standard. In addition to this, we have a large roster of Dublin’s most talented session musicians covering anything you might need - Drums, strings, keys woodwind, additional vocals and more all available at short notice. ",
    },
    {
        id: 2,
        image: img2,
        videoUrl: "fMcOLvFg5es",
        activeClass: "active",
        title: "Mixing",
        description: "Whether your music has been recorded at The Attic or not, affordable mix rates are available with quick turnarounds and up to 3 revisions included in the quoted price free of charge. Recorded something already and want us to mix it? Simply get in touch. ",
    },
    {
        id: 3,
        image: img3,
        videoUrl: "GPE2qqhrl0M",
        title: "Production & Song Development",
        description: "Bringing a wealth of songwriting, arranging, producing and compositional skills to the studio, we love working with artists to turn their song from a 3 chord demo into a fully arranged, radio standard production. Finn O’Reilly’s background in Jazz and Contemporary music education (BA first honours from DCU Jazz program) allows artists to workshop and develop their songs from their initial embers into a highly produced piece of music. For those looking to record but not feeling sure about how everything else falls into place, look no further. ",
    },
    {
        id: 4,
        image: img4,
        videoUrl: "Lli99OmkPwM",
        title: "Live acoustic videos",
        description: "In addition to recording, the studio space is a gorgeous and well lit environment to film live acoustic sessions, with video packages available at a very reasonable rate We offer a multi angle camera setup with pro audio recording combined to make high quality videos for your press package, social media, festival applications, etc. Interviews, podcasts and poetry recording is also ideal for the space",
    },
    {
        id: 5,
        image: img5,
        videoUrl: "lq82yt-Od1U",
        title: "Remote recording",
        description: "Want that Attic secret sauce on your recording but can’t get to Dublin? Fear not! Through the magic of the internet, we offer remote recording sessions for Drums, Strings, Guitars, Bass, Backing Vocals, Piano and just about anything you need. With access to a roster of Ireland’s best session musicians, your needs can be very easily met.",
    },
    {
        id: 6,
        image: img6,
        videoUrl: "M4lsB-B1O7U",
        title: "Lessons",
        description: "With over 8 years of teaching experience, the attic offers private guitar, bass and ukulele tuition. Lessons available from beginner to advanced, with all welcome. Lessons are tailored to each student, whether you're picking up an instrument for the first time or preparing for college auditions, gigs or professional work. Bundle lesson discounts available - Get in touch to find out more!",
    },

]

export default genres_listing_data;