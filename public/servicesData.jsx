import main from './assets/services/main.webp'
import histoire from './assets/services/histoire.webp'
import ingenieurie from './assets/services/ingenieurie.webp'
import formations from './assets/services/formations.webp'

export const services = [
    {
        "id":1,
        "picture":main
        // NE PAS MODIFIER - PHOTO D'ACCUEIL
    },
    {
        //SERVICE 1
        "id":2,
        "title":"Histoire d’entreprise",
        "description":"Nous dévoilons les trésors enfouis de votre passé d'entreprise tout en façonnant un récit qui non seulement retraverse votre histoire corporative, mais la propulse vers l'avenir. Au-delà de notre rôle d'historiens, nous sommes les architectes de votre récit unique, préservant l'essence de votre entreprise et favorisant l'innovation en comprenant ses racines. Nos services vont au-delà de la création de liens historiques avec vos prospects ; nous mettons en lumière votre culture d'entreprise, renforçant le sentiment d'appartenance au sein de votre équipe. Avec HistHorizons, le passé de votre entreprise devient une source dynamique de récits, adaptés de manière fluide à chaque évolution contemporaine. Laissez-nous tisser un récit transcendant et vous aider à créer une identité corporative captivante et mémorable !",
        //NE PAS REMPLIR PICTURE, JE M'EN OCCUPERAI
        "picture":histoire
    },
    {
        "id":3,
        "title":"Ingénierie historique",
        "description":"HistHorizons s’engage à retracer l'histoire d'événements, de lieux, de biens, de groupes ou de personnes, à travers l'exploitation rigoureuse d'archives et de témoignages. Notre volonté est de préserver la mémoire et de la transmettre de manière ciblée, que ce soit au grand public ou à vos proches. De la gestion d'archives à la réalisation d'expositions et de supports, notre approche systématique et technique garantit l'exactitude, la durabilité et la diffusion efficace des connaissances historiques. Faire confiance à HistHorizons, c’est donner vie à votre histoire avec précision et passion.",
        "picture":ingenieurie
    },
    {
        "id":4,
        "title":"Conseil, formation, médiation",
        "description":"HistHorizons vous propose des services complets de formation, de conseil et de médiation, avec un accent particulier porté sur la sensibilisation culturelle. Grâce à nos formations, nous vous apprenons à traiter efficacement les informations qui vous sont transmises. La critique historique et la sensibilisation à la culture d'autrui sont au cœur de notre approche, favorisant le développement de l’entreprise en dehors de sa zone de chalandise. Rejoignez-nous pour une expérience d'apprentissage enrichissante et une compréhension approfondie de l'histoire et de la culture.",
        "picture":formations
    }
]