import { ProductsType } from "@/types/types";
//home-1 future img
import productImg1 from "../../public/assets/img/shop/drums.jpg";
import productImg2 from "../../public/assets/img/shop/guitars.jpg";
import productImg3 from "../../public/assets/img/shop/amps.jpg";
import productImg4 from "../../public/assets/img/shop/micro.jpg";
import productImg5 from "../../public/assets/img/shop/placeholder.jpg";
import productImg6 from "../../public/assets/img/shop/placeholder.jpg";


const products_data: ProductsType[] = [
  //shop data
  {
    id: 1,
    image: productImg1,
    title: "Drums & Percussion",
    description: "1960s Vintage Premier Drum Kit \n1980s Ludwig Acrolite Snare \n1960s Istanbul Mehmet Ride Cymbal \nZilco by Alco Hi-Hats \nSelection of tambourines \nshakers \nand percussion instruments",
  },
  {
    id: 2,
    image: productImg2,
    title: "Guitars",
    description: "Gibson ES-135 \nFender ’59 Telecaster Paisley (Made in Japan) \nFender Jaguar (Made in Japan) \nGretsch G5422TG \nTokai Korina Flying V \nSigma Acoustic Guitar \nAdam Black 12-String Acoustic",
  },
  {
    id: 3,
    image: productImg2,
    title: "Other String Instruments",
    description: "Fender Jazz Bass ’62 (Crafted in Japan) \nBrazilian Cavaquinho \nViolin ",
  },
  {
    id: 4,
    image: productImg3,
    title: "Amplifiers",
    description: "Fender Blues Junior (Special Edition) \nBoss Katana 50W",
  },
  {
    id: 5,
    image: productImg4,
    title: "Microphone locker",
    description: "Warm Audio WA-87 R2 \nOktava MK012 Stereo Pair \nSennheiser MD421 \nShure SM7B \nShure SM57 \nAKG D112 \nShure SM58",
  },
  {
    id: 6,
    image: productImg6,
    title: "Pedals",
    description: "Electro-Harmonix Op-Amp Big Muff \nProCo RAT \nBoss DS-2 Turbo Distortion \nBoss SD-1 Overdrive \nJHS Whitey Tighty Compressor \nElectro-Harmonix Pitch Fork \nStrymon Timeline \nElectro-Harmonix Stereo Memory Man with Hazarai \nBoss RV-6 Reverb \nBoss CE-2W Waza Craft Chorus",
  },
  {
    id: 7,
    image: productImg5,
    title: "Outboard gear",
    description: "Warm Audio WA73 preamps ×2 \nFocusrite Scarlett 18i20 (3rd Gen)",
  },
  {
    id: 8,
    image: productImg6,
    title: "Software Instruments",
    description: "Over 45 software instruments including vintage emulations of: Juno-60, Prophet-5, Mellotron, Jupiter-6, OB-X and many more.",
  },

]

export default products_data;