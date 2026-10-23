export interface Commitment {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  quote: string;
  description: string;
  whatsappUrl: string;
  historicalPlate: {
    title: string;
    artist: string;
    year: string;
    description: string;
    license: string;
  };
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'Neurodivergence' | 'Cancer Care' | 'Conservation' | 'Experiential Learning' | 'Menstrual Health' | 'Climate Action';
  date: string;
  summary: string;
  location?: string;
  status: 'Completed' | 'Ongoing' | 'Upcoming';
}

export interface EventItem {
  id: string;
  dateStr: string;
  dayNumber: string;
  monthYear: string;
  time: string;
  title: string;
  category: string;
  format: 'Online (Zoom)' | 'Offline Meet';
  location: string;
  summary: string;
}

export interface MarketplaceProduct {
  id: string;
  code: string;
  name: string;
  category: 'Neurodivergence' | 'Cancer Care' | 'Conservation';
  price: number;
  craftInfo: string;
  description: string;
  inquiryMailto: string;
}

export const VERIFIED_COMMITMENTS: Commitment[] = [
  {
    id: 'neurodivergence',
    slug: 'neurodivergence',
    title: 'Neurodivergence',
    tagline: 'Every mind deserves to shine.',
    quote: 'A mind met, not mended.',
    description: 'Skilling and livelihood for neurodivergent people. Creating accessible learning environments, dignity in work, and communities where cognitive diversity thrives.',
    whatsappUrl: 'https://chat.whatsapp.com/CUGk0NQsGBt6DU2vmsSMuQ?mode=gi_t',
    historicalPlate: {
      title: 'Purkinje cell of the cerebellum',
      artist: 'Santiago Ramón y Cajal',
      year: '1899',
      description: 'One nerve cell from the cerebellum, stained by hand and drawn from the slide. Branching is what living things do when they have to reach everywhere at once — so the same shape arrives in a mind, in a forest, in a body.',
      license: 'Public Domain',
    },
  },
  {
    id: 'cancer-care',
    slug: 'cancer-care',
    title: 'Cancer Care',
    tagline: 'Care, courage and hope.',
    quote: 'A cancer caught, not carried.',
    description: 'Diagnosis is a day. The year that follows is everything else. Year-round emotional, practical, and community support for patients and families walking through treatment and recovery.',
    whatsappUrl: 'https://chat.whatsapp.com/FQk8F1NL5QXGXOKTX3XAEI?mode=gi_t',
    historicalPlate: {
      title: "Traité complet de l'anatomie de l'homme, Pl. 42",
      artist: 'Nicolas-Henri Jacob, for J. M. Bourgery',
      year: '1831–54',
      description: 'The chest opened and drawn from the body itself: nerves in white, vessels in red. Made so that someone could see what was there before they had to act on it, which is the whole of catching something early.',
      license: 'Public Domain',
    },
  },
  {
    id: 'conservation',
    slug: 'conservation',
    title: 'Conservation',
    tagline: 'Of land, air and water.',
    quote: 'A forest saved, not mourned.',
    description: 'Practical environmental defense of places with nobody arguing for them. Grassroots action in soil regeneration, bioenzyme fermenting, native seeds, and water stewardship.',
    whatsappUrl: 'https://chat.whatsapp.com/KXxQHZs6l2QHBaOrVgcL0n?mode=gi_t',
    historicalPlate: {
      title: 'Hummingbird on the nest',
      artist: 'Lorie Shaull',
      year: '2023',
      description: 'A bird on a nest, alive, watching back through a screen of twigs. The difference between a species drawn and a species photographed is the difference this whole work is about.',
      license: 'CC BY-SA 4.0',
    },
  },
];

export const VERIFIED_PROJECTS: Project[] = [
  {
    id: 'p1',
    slug: 'pedestrian-safety-action-day',
    title: 'Pedestrian Safety Action Day',
    category: 'Experiential Learning',
    date: '11 Dec 2023',
    summary: 'Students stepped outside the classroom to manage the Shiv Shakti Chowk signal, wrote formal appeals to the traffic commissioner, and performed a public street play on pedestrian safety, traffic violations, and urban waste management.',
    location: 'Shiv Shakti Chowk, Pune',
    status: 'Completed',
  },
  {
    id: 'p2',
    slug: 'periods-ki-pathshala',
    title: 'Periods Ki Pathshala',
    category: 'Menstrual Health',
    date: 'Sep 2024 – Present',
    summary: 'Accessible online and in-person sessions breaking taboos and empowering girls and women with period literacy, menstrual health hygiene, and sustainable menstrual practices.',
    location: 'Maharashtra & Pan-India Online',
    status: 'Ongoing',
  },
  {
    id: 'p3',
    slug: 'bioenzyme-training-amanora',
    title: 'Turning Waste into Bioenzymes',
    category: 'Climate Action',
    date: '2025',
    summary: 'Practical hands-on training for school housekeeping staff at Amanora School, transforming everyday citrus kitchen waste into non-toxic, powerful, and natural cleaning solutions.',
    location: 'Amanora School, Pune',
    status: 'Completed',
  },
];

export const VERIFIED_EVENTS: EventItem[] = [
  {
    id: 'e1',
    dayNumber: '05',
    monthYear: 'Oct 2026',
    dateStr: 'Mon 5 Oct',
    time: '11:00 AM',
    title: 'Monthly Volunteer Sync (Zoom)',
    category: 'Community',
    format: 'Online (Zoom)',
    location: 'Zoom Video',
    summary: 'A quick online catch-up with our volunteers globally to share updates, align initiatives, and welcome new contributors.',
  },
  {
    id: 'e2',
    dayNumber: '10',
    monthYear: 'Oct 2026',
    dateStr: 'Sat 10 Oct',
    time: '4:00 PM',
    title: 'Pune Milk Bag Project Meet',
    category: 'Conservation',
    format: 'Offline Meet',
    location: 'Pune Collection Center',
    summary: 'Offline community gathering at the Pune collection center for washing, sorting, and redirecting single-use plastic milk bags for responsible recycling.',
  },
  {
    id: 'e3',
    dayNumber: '15',
    monthYear: 'Oct 2026',
    dateStr: 'Thu 15 Oct',
    time: '10:00 AM',
    title: 'Cancer Care Meetup',
    category: 'Cancer Care',
    format: 'Offline Meet',
    location: 'Foundation Center',
    summary: 'Safe, empathetic support and discussion group for individuals and families walking through oncology diagnosis, treatment, and recovery.',
  },
  {
    id: 'e4',
    dayNumber: '18',
    monthYear: 'Oct 2026',
    dateStr: 'Sun 18 Oct',
    time: '12:30 PM',
    title: 'Periods ki Pathshala Webinar',
    category: 'Menstrual Health',
    format: 'Online (Zoom)',
    location: 'Zoom Webinar',
    summary: 'Interactive online workshop raising awareness about menstrual hygiene, physiology, and environmentally sustainable menstrual products.',
  },
  {
    id: 'e5',
    dayNumber: '22',
    monthYear: 'Oct 2026',
    dateStr: 'Thu 22 Oct',
    time: '2:00 PM',
    title: 'Neurodivergence Workshop',
    category: 'Neurodivergence',
    format: 'Offline Meet',
    location: 'Skills Center',
    summary: 'An interactive offline workshop embracing cognitive diversity, sensory-friendly practices, and practical workplace inclusion tools.',
  },
  {
    id: 'e6',
    dayNumber: '28',
    monthYear: 'Oct 2026',
    dateStr: 'Wed 28 Oct',
    time: '9:00 AM',
    title: 'Rainwater Harvesting Visit',
    category: 'Conservation',
    format: 'Offline Meet',
    location: 'Community Water Shed',
    summary: 'Offline guided tour and technical demonstration of the newly implemented community rainwater harvesting and percolation tanks.',
  },
  {
    id: 'e7',
    dayNumber: '05',
    monthYear: 'Nov 2026',
    dateStr: 'Thu 5 Nov',
    time: '9:00 AM',
    title: 'Conservation Drive',
    category: 'Conservation',
    format: 'Offline Meet',
    location: 'Pune Hills',
    summary: 'Native tree sapling planting, soil moisture preservation, and local natural habitat cleanup drive.',
  },
];

export const VERIFIED_PRODUCTS: MarketplaceProduct[] = [
  {
    id: 'm1',
    code: 'BH',
    name: 'Bioenzyme, household',
    category: 'Conservation',
    price: 240,
    craftInfo: 'Fermented in the CLAW workshops',
    description: 'Citrus peel, jaggery and water, three months in the dark. Chemical-free natural cleaner for kitchen and home surfaces.',
    inquiryMailto: 'mailto:hello@itti.org.in?subject=Marketplace%20%E2%80%94%20Bioenzyme%2C%20household&body=I%20would%20like%20to%20ask%20about%20Bioenzyme%2C%20household.%0A%0AHow%20many%3A%0AWhere%20it%20would%20be%20sent%3A%0A%0A',
  },
  {
    id: 'm2',
    code: 'BG',
    name: 'Bioenzyme, garden',
    category: 'Conservation',
    price: 240,
    craftInfo: 'Fermented in the CLAW workshops',
    description: 'The same gentle citrus and jaggery ferment, specially cut and calibrated for soil microbiology and natural plant immunity.',
    inquiryMailto: 'mailto:hello@itti.org.in?subject=Marketplace%20%E2%80%94%20Bioenzyme%2C%20garden&body=I%20would%20like%20to%20ask%20about%20Bioenzyme%2C%20garden.%0A%0AHow%20many%3A%0AWhere%20it%20would%20be%20sent%3A%0A%0A',
  },
  {
    id: 'm3',
    code: 'VM',
    name: 'Vetiver mat',
    category: 'Conservation',
    price: 1450,
    craftInfo: 'Hand-woven vetiver root',
    description: 'Woven wet, dried flat. Wet it again and the room naturally cools with earthy fragrance. Biodegradable and long-lasting.',
    inquiryMailto: 'mailto:hello@itti.org.in?subject=Marketplace%20%E2%80%94%20Vetiver%20mat&body=I%20would%20like%20to%20ask%20about%20Vetiver%20mat.%0A%0AHow%20many%3A%0AWhere%20it%20would%20be%20sent%3A%0A%0A',
  },
  {
    id: 'm4',
    code: 'VS',
    name: 'Vetiver sachets',
    category: 'Conservation',
    price: 320,
    craftInfo: 'Hand-woven vetiver root',
    description: 'Aromatic native vetiver grass roots bundled for a cupboard, a linen drawer, or a shut car. Natural pest deterrent and air refresher.',
    inquiryMailto: 'mailto:hello@itti.org.in?subject=Marketplace%20%E2%80%94%20Vetiver%20sachets&body=I%20would%20like%20to%20ask%20about%20Vetiver%20sachets.%0A%0AHow%20many%3A%0AWhere%20it%20would%20be%20sent%3A%0A%0A',
  },
  {
    id: 'm5',
    code: 'SB',
    name: 'Seed balls',
    category: 'Conservation',
    price: 180,
    craftInfo: 'Rolled by hand in the workshops',
    description: 'Clay, compost, native seed. Thrown onto bare earth before the rains, not planted. Germinates when natural conditions are right.',
    inquiryMailto: 'mailto:hello@itti.org.in?subject=Marketplace%20%E2%80%94%20Seed%20balls&body=I%20would%20like%20to%20ask%20about%20Seed%20balls.%0A%0AHow%20many%3A%0AWhere%20it%20would%20be%20sent%3A%0A%0A',
  },
  {
    id: 'm6',
    code: 'BT',
    name: 'Block-printed tote',
    category: 'Neurodivergence',
    price: 640,
    craftInfo: 'Hand block print on canvas',
    description: 'Cut, printed and stitched by one pair of hands. Sturdy organic cotton canvas featuring traditional artisan prints.',
    inquiryMailto: 'mailto:hello@itti.org.in?subject=Marketplace%20%E2%80%94%20Block-printed%20tote&body=I%20would%20like%20to%20ask%20about%20Block-printed%20tote.%0A%0AHow%20many%3A%0AWhere%20it%20would%20be%20sent%3A%0A%0A',
  },
  {
    id: 'm7',
    code: 'CP',
    name: 'Clay planters',
    category: 'Conservation',
    price: 520,
    craftInfo: 'Wheel-thrown terracotta',
    description: 'Thrown small on a potters wheel, glazed once. Porous natural clay promotes root breathability. No two pieces are identical.',
    inquiryMailto: 'mailto:hello@itti.org.in?subject=Marketplace%20%E2%80%94%20Clay%20planters&body=I%20would%20like%20to%20ask%20about%20Clay%20planters.%0A%0AHow%20many%3A%0AWhere%20it%20would%20be%20sent%3A%0A%0A',
  },
  {
    id: 'm8',
    code: 'BJ',
    name: 'Bound journals',
    category: 'Neurodivergence',
    price: 480,
    craftInfo: 'Hand-bound, cotton-rag paper',
    description: 'Upcycled cotton-rag archival paper, sewn by hand with durable thread binding. Zero industrial glue used.',
    inquiryMailto: 'mailto:hello@itti.org.in?subject=Marketplace%20%E2%80%94%20Bound%20journals&body=I%20would%20like%20to%20ask%20about%20Bound%20journals.%0A%0AHow%20many%3A%0AWhere%20it%20would%20be%20sent%3A%0A%0A',
  },
  {
    id: 'm9',
    code: 'CT',
    name: 'Cancer Care Tee',
    category: 'Cancer Care',
    price: 899,
    craftInfo: 'Pure combed organic cotton',
    description: 'The dragonfly emblem, and the shloka read on 8 September. Worn in solidarity with cancer warriors and survivors.',
    inquiryMailto: 'mailto:hello@itti.org.in?subject=Marketplace%20%E2%80%94%20Cancer%20Care%20Tee&body=I%20would%20like%20to%20ask%20about%20Cancer%20Care%20Tee.%0A%0AHow%20many%3A%0AWhere%20it%20would%20be%20sent%3A%0A%0A',
  },
];
