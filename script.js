// ==========================================
//   DRIVEX MOTORS — script.js  v2.0
//   All inventory, filter & detail bugs fixed
// ==========================================

// ===== IMAGE POOLS =====
const IMG_POOLS = {
  sports: [
    'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?w=800',
    'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?w=800',
    'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?w=800',
    'https://images.pexels.com/photos/1616091/pexels-photo-1616091.jpeg?w=800',
    'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?w=800',
    'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?w=800',
  ],
  suv: [
    'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?w=800',
    'https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?w=800',
    'https://images.pexels.com/photos/1280560/pexels-photo-1280560.jpeg?w=800',
    'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?w=800',
  ],
  sedan: [
    'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?w=800',
    'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?w=800',
    'https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg?w=800',
    'https://images.pexels.com/photos/1104768/pexels-photo-1104768.jpeg?w=800',
  ],
  luxury: [
    'https://images.pexels.com/photos/1104768/pexels-photo-1104768.jpeg?w=800',
    'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?w=800',
    'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?w=800',
    'https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg?w=800',
  ],
  electric: [
    'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?w=800',
    'https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?w=800',
    'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?w=800',
  ],
  hybrid: [
    'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?w=800',
    'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?w=800',
    'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?w=800',
  ]
};

const CAT_IMGS = {
  suv:      'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?w=600',
  sedan:    'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?w=600',
  sports:   'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?w=600',
  electric: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?w=600',
  luxury:   'https://images.pexels.com/photos/1104768/pexels-photo-1104768.jpeg?w=600',
  hybrid:   'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?w=600',
};
const CAT_ICONS  = { suv:'🚙', sedan:'🚗', sports:'🏎', electric:'⚡', luxury:'👑', hybrid:'🌿' };
const CAT_LABELS = { suv:'SUV', sedan:'Sedan', sports:'Sports', electric:'Electric', luxury:'Luxury', hybrid:'Hybrid' };
const HERO_IMGS  = [
  'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?w=1600',
  'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?w=1600',
  'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?w=1600',
];

// ===== EMBEDDED FALLBACK DATA =====
const FALLBACK_CARS = [
  {id:1,name:"BMW M5 Competition",brand:"BMW",type:"Sedan",price:185000,year:2024,engine:"4.4L V8 BiTurbo",fuel:"Petrol",transmission:"8-Speed Auto",mileage:"0 km",power:"625 hp",speed:"0–100 in 3.3s",color:"Frozen Black",badge:"New",desc:"The pinnacle of M engineering. Raw power wrapped in pure luxury, with bespoke M-tuned suspension and ceramic brakes standard."},
  {id:2,name:"Audi RS7 Sportback",brand:"Audi",type:"Sedan",price:162000,year:2024,engine:"4.0L TFSI V8",fuel:"Petrol",transmission:"8-Speed S Tronic",mileage:"0 km",power:"591 hp",speed:"0–100 in 3.6s",color:"Nardo Gray",badge:"New",desc:"Fastback aesthetics meet supercar performance — quattro AWD with handcrafted interior opulence."},
  {id:3,name:"Mercedes-AMG GT 63 S",brand:"Mercedes",type:"Sports",price:228000,year:2024,engine:"4.0L V8 Biturbo",fuel:"Petrol",transmission:"9-Speed Speedshift",mileage:"0 km",power:"630 hp",speed:"0–100 in 3.2s",color:"Obsidian Black",badge:"Hot",desc:"Born on the Nürburgring. Brutal performance fused with 4-door practicality."},
  {id:4,name:"Porsche 911 GT3",brand:"Porsche",type:"Sports",price:242000,year:2024,engine:"4.0L Flat-6 NA",fuel:"Petrol",transmission:"7-Speed PDK",mileage:"0 km",power:"510 hp",speed:"0–100 in 3.4s",color:"Guards Red",badge:"New",desc:"Purebred, naturally aspirated perfection. A road-legal racing machine that sharpens every sense."},
  {id:5,name:"Ferrari Roma",brand:"Ferrari",type:"Sports",price:335000,year:2024,engine:"3.9L V8 Turbo",fuel:"Petrol",transmission:"8-Speed DCT",mileage:"0 km",power:"612 hp",speed:"0–100 in 3.4s",color:"Rosso Corsa",badge:"Exclusive",desc:"La Roma evokes the spirit of Italian elegance — a grand tourer born in Maranello."},
  {id:6,name:"Lamborghini Urus S",brand:"Lamborghini",type:"SUV",price:295000,year:2024,engine:"4.0L V8 Twin-Turbo",fuel:"Petrol",transmission:"8-Speed Auto",mileage:"0 km",power:"666 hp",speed:"0–100 in 3.5s",color:"Verde Mantis",badge:"Hot",desc:"The Super SUV elevated. Lamborghini DNA conquering every terrain."},
  {id:7,name:"Range Rover SV",brand:"Land Rover",type:"SUV",price:198000,year:2024,engine:"4.4L P530 V8",fuel:"Petrol",transmission:"8-Speed Auto",mileage:"0 km",power:"530 hp",speed:"0–100 in 4.6s",color:"Carpathian Gray",badge:"New",desc:"The ultimate expression of British luxury with hand-stitched leather and V8 authority."},
  {id:8,name:"Tesla Model S Plaid",brand:"Tesla",type:"Electric",price:138000,year:2024,engine:"Tri-Motor Electric",fuel:"Electric",transmission:"Single-Speed",mileage:"0 km",power:"1020 hp",speed:"0–100 in 2.1s",color:"Midnight Silver",badge:"Electric",desc:"The fastest production sedan on Earth — 1020hp in utter silence."},
  {id:9,name:"Bentley Continental GT",brand:"Bentley",type:"Luxury",price:298000,year:2024,engine:"6.0L W12 Twin-Turbo",fuel:"Petrol",transmission:"8-Speed DCT",mileage:"0 km",power:"659 hp",speed:"0–100 in 3.6s",color:"Onyx Black",badge:"Exclusive",desc:"100 hours of skilled craftsmanship meets 659 horses — a symphony of handcraft and performance."},
  {id:10,name:"Rolls-Royce Cullinan",brand:"Rolls-Royce",type:"SUV",price:480000,year:2024,engine:"6.75L V12 Twin-Turbo",fuel:"Petrol",transmission:"8-Speed Auto",mileage:"0 km",power:"563 hp",speed:"0–100 in 5.2s",color:"Black Diamond",badge:"Exclusive",desc:"Named after the world's largest diamond — the pinnacle of all-terrain luxury."},
  {id:11,name:"McLaren 720S",brand:"McLaren",type:"Sports",price:315000,year:2024,engine:"4.0L V8 Twin-Turbo",fuel:"Petrol",transmission:"7-Speed SSG",mileage:"0 km",power:"710 hp",speed:"0–100 in 2.9s",color:"Papaya Orange",badge:"Hot",desc:"Carbon fiber wrapped fury. Active aerodynamics and twin-turbo V8 that rewrites benchmarks."},
  {id:12,name:"Aston Martin Vantage",brand:"Aston Martin",type:"Sports",price:178000,year:2024,engine:"4.0L V8 Twin-Turbo",fuel:"Petrol",transmission:"8-Speed Auto",mileage:"0 km",power:"503 hp",speed:"0–100 in 3.6s",color:"Racing Green",badge:"New",desc:"007's weapon of choice. 90 years of British sports car heritage in a precision instrument."},
  {id:13,name:"Porsche Cayenne Turbo GT",brand:"Porsche",type:"SUV",price:210000,year:2024,engine:"4.0L V8 Twin-Turbo",fuel:"Petrol",transmission:"8-Speed PDK",mileage:"0 km",power:"631 hp",speed:"0–100 in 3.1s",color:"Chalk White",badge:"New",desc:"The fastest SUV on the Nürburgring — nothing corners faster with seats for five."},
  {id:14,name:"BMW X7 M60i",brand:"BMW",type:"SUV",price:162000,year:2024,engine:"4.4L M TwinPower V8",fuel:"Petrol",transmission:"8-Speed Auto",mileage:"0 km",power:"523 hp",speed:"0–100 in 4.7s",color:"Phytonic Blue",badge:"",desc:"Seven-seat M performance with imposing kidney grille and bespoke Merino leather."},
  {id:15,name:"Mercedes S 680 Maybach",brand:"Mercedes",type:"Luxury",price:365000,year:2024,engine:"6.0L V12 Biturbo",fuel:"Petrol",transmission:"9-Speed Auto",mileage:"0 km",power:"621 hp",speed:"0–100 in 4.8s",color:"Obsidian Black",badge:"Exclusive",desc:"Rear-seat massage, Burmester 4D audio, and a hand-polished V12 in Nappa leather."},
  {id:16,name:"Audi e-tron GT RS",brand:"Audi",type:"Electric",price:148000,year:2024,engine:"Dual-Motor Electric",fuel:"Electric",transmission:"2-Speed Auto",mileage:"0 km",power:"637 hp",speed:"0–100 in 3.3s",color:"Tactical Green",badge:"Electric",desc:"Electric grand tourer blending quattro AWD with 637hp instant torque."},
  {id:17,name:"Maserati MC20",brand:"Maserati",type:"Sports",price:225000,year:2024,engine:"3.0L Nettuno V6 Turbo",fuel:"Petrol",transmission:"8-Speed DCT",mileage:"0 km",power:"621 hp",speed:"0–100 in 2.9s",color:"Bianco Audace",badge:"New",desc:"Renaissance of Italian performance — Nettuno engine in a carbon fiber masterpiece."},
  {id:18,name:"Bugatti Chiron Sport",brand:"Bugatti",type:"Sports",price:3200000,year:2024,engine:"8.0L W16 Quad-Turbo",fuel:"Petrol",transmission:"7-Speed DSG",mileage:"0 km",power:"1500 hp",speed:"0–100 in 2.4s",color:"Atlantic Blue",badge:"Exclusive",desc:"1500hp, 420km/h. An interior that took 300+ hours to hand-craft in Molsheim."},
  {id:19,name:"Bentley Bentayga EWB",brand:"Bentley",type:"SUV",price:310000,year:2024,engine:"4.0L V8 Twin-Turbo",fuel:"Petrol",transmission:"8-Speed Auto",mileage:"0 km",power:"542 hp",speed:"0–100 in 4.5s",color:"Verdant",badge:"New",desc:"Extended opulence with 180mm extra rear legroom — First Class aviation seating."},
  {id:20,name:"Lexus LC 500h",brand:"Lexus",type:"Sports",price:98000,year:2024,engine:"3.5L V6 Hybrid",fuel:"Hybrid",transmission:"CVT Auto",mileage:"0 km",power:"354 hp",speed:"0–100 in 4.7s",color:"Blazing Carnelian",badge:"",desc:"Japanese luxury art form — origami-inspired bodywork and a driver's grand tourer soul."},
  {id:21,name:"BMW iX M60",brand:"BMW",type:"Electric",price:135000,year:2024,engine:"Dual-Motor EV",fuel:"Electric",transmission:"Single-Speed",mileage:"0 km",power:"610 hp",speed:"0–100 in 3.8s",color:"Frozen Deep Grey",badge:"Electric",desc:"M Performance meets zero emission — 610hp proves electrification and excitement aren't opposites."},
  {id:22,name:"Mercedes EQS 580",brand:"Mercedes",type:"Electric",price:142000,year:2024,engine:"Dual-Motor AMG EV",fuel:"Electric",transmission:"Single-Speed",mileage:"0 km",power:"516 hp",speed:"0–100 in 4.1s",color:"Sodalite Blue",badge:"Electric",desc:"141cm curved OLED Hyperscreen meets 516hp whisper-quiet German performance."},
  {id:23,name:"Porsche Taycan Turbo S",brand:"Porsche",type:"Electric",price:190000,year:2024,engine:"Dual-Motor EV",fuel:"Electric",transmission:"2-Speed PDK",mileage:"0 km",power:"750 hp",speed:"0–100 in 2.8s",color:"Gentian Blue",badge:"Electric",desc:"Electrically, unmistakably Porsche — corners like the 911, launches like a catapult."},
  {id:24,name:"Rolls-Royce Ghost Black Badge",brand:"Rolls-Royce",type:"Luxury",price:425000,year:2024,engine:"6.75L V12 Twin-Turbo",fuel:"Petrol",transmission:"8-Speed Auto",mileage:"0 km",power:"591 hp",speed:"0–100 in 4.7s",color:"Black Diamond",badge:"Exclusive",desc:"Confident non-conformity — Ghost Black Badge, still unmistakably Rolls-Royce."},
  {id:25,name:"Ferrari SF90 Stradale",brand:"Ferrari",type:"Sports",price:520000,year:2024,engine:"4.0L V8 + 3 Motors Hybrid",fuel:"Hybrid",transmission:"8-Speed DCT",mileage:"0 km",power:"986 hp",speed:"0–100 in 2.5s",color:"Giallo Modena",badge:"Exclusive",desc:"The most powerful road Ferrari ever built — 986hp hybrid quantum leap."},
  {id:26,name:"Audi RS Q8",brand:"Audi",type:"SUV",price:142000,year:2024,engine:"4.0L TFSI V8",fuel:"Petrol",transmission:"8-Speed Tiptronic",mileage:"0 km",power:"591 hp",speed:"0–100 in 3.8s",color:"Daytona Gray",badge:"Hot",desc:"591hp, quattro Sport Differential — corners as sharply as it commands highway lanes."},
  {id:27,name:"Mercedes AMG C 63 S E",brand:"Mercedes",type:"Sedan",price:115000,year:2024,engine:"2.0L 4-cyl + EMotor",fuel:"Hybrid",transmission:"9-Speed Auto",mileage:"0 km",power:"671 hp",speed:"0–100 in 3.4s",color:"High-Tech Silver",badge:"New",desc:"Revolutionary hybrid technology: 671hp from a 4-cylinder in a razor-sharp sedan."},
  {id:28,name:"BMW M8 Gran Coupe",brand:"BMW",type:"Luxury",price:172000,year:2024,engine:"4.4L V8 M TwinPower",fuel:"Petrol",transmission:"8-Speed M Steptronic",mileage:"0 km",power:"617 hp",speed:"0–100 in 3.2s",color:"Frozen Marina Bay Blue",badge:"",desc:"M8 Competition performance in a bespoke four-door silhouette — Merino leather and V8 thunder."},
  {id:29,name:"Aston Martin DBX 707",brand:"Aston Martin",type:"SUV",price:238000,year:2024,engine:"4.0L V8 Twin-Turbo",fuel:"Petrol",transmission:"9-Speed Auto",mileage:"0 km",power:"707 hp",speed:"0–100 in 3.3s",color:"Lunar White",badge:"Hot",desc:"707hp from Bond's only SUV — no other luxury SUV accelerates or handles like this."},
  {id:30,name:"Porsche Panamera Turbo S",brand:"Porsche",type:"Luxury",price:198000,year:2024,engine:"4.0L V8 Twin-Turbo",fuel:"Petrol",transmission:"8-Speed PDK",mileage:"0 km",power:"620 hp",speed:"0–100 in 3.1s",color:"Biscay Blue",badge:"New",desc:"Four-seat sports car. 620hp, rear-axle steering, and Porsche Active Suspension."},
  {id:31,name:"Lamborghini Huracán EVO",brand:"Lamborghini",type:"Sports",price:278000,year:2024,engine:"5.2L V10 NA",fuel:"Petrol",transmission:"7-Speed LDF",mileage:"0 km",power:"640 hp",speed:"0–100 in 2.9s",color:"Giallo Belenus",badge:"Hot",desc:"Naturally aspirated fury. V10 screams to 8700rpm — a sound no turbo can replicate."},
  {id:32,name:"Ferrari Purosangue",brand:"Ferrari",type:"SUV",price:415000,year:2024,engine:"6.5L V12 NA",fuel:"Petrol",transmission:"8-Speed DCT",mileage:"0 km",power:"715 hp",speed:"0–100 in 3.3s",color:"Rosso Imola",badge:"Exclusive",desc:"The only naturally-aspirated V12 SUV ever made — Ferrari's Fiorano DNA throughout."},
  {id:33,name:"Cadillac Escalade V",brand:"Cadillac",type:"SUV",price:158000,year:2024,engine:"6.2L Supercharged V8",fuel:"Petrol",transmission:"10-Speed Auto",mileage:"0 km",power:"682 hp",speed:"0–100 in 4.4s",color:"Stellar Black",badge:"Hot",desc:"682hp under a massive hood with a 38-inch curved OLED cockpit inside."},
  {id:34,name:"McLaren Artura",brand:"McLaren",type:"Sports",price:242000,year:2024,engine:"3.0L V6 Hybrid Turbo",fuel:"Hybrid",transmission:"8-Speed SSG",mileage:"0 km",power:"671 hp",speed:"0–100 in 3.0s",color:"Vermillion Red",badge:"New",desc:"McLaren's hybrid future — all-new carbon architecture, lighter and cleaner than ever."},
  {id:35,name:"Bentley Flying Spur",brand:"Bentley",type:"Luxury",price:225000,year:2024,engine:"4.0L V8 Twin-Turbo",fuel:"Petrol",transmission:"8-Speed DCT",mileage:"0 km",power:"542 hp",speed:"0–100 in 4.0s",color:"Moroccan Blue",badge:"",desc:"The world's most desirable saloon — 400,000 hand-crafted diamond stitches inside."},
  {id:36,name:"Aston Martin DB12",brand:"Aston Martin",type:"Sports",price:242000,year:2024,engine:"4.0L V8 Twin-Turbo",fuel:"Petrol",transmission:"8-Speed Auto",mileage:"0 km",power:"671 hp",speed:"0–100 in 3.5s",color:"Iridescent Jade",badge:"New",desc:"The World's First Super Tourer — complete reinvention with 671hp AMG-sourced V8."},
  {id:37,name:"Lamborghini Revuelto",brand:"Lamborghini",type:"Sports",price:615000,year:2024,engine:"6.5L V12 + 3 Motors Hybrid",fuel:"Hybrid",transmission:"8-Speed LDVI",mileage:"0 km",power:"1015 hp",speed:"0–100 in 2.5s",color:"Arancio Dac",badge:"Exclusive",desc:"1015hp — the most powerful Lamborghini ever built and the most beautiful."},
  {id:38,name:"BMW 7 Series M760e",brand:"BMW",type:"Luxury",price:155000,year:2024,engine:"4.4L V8 + EMotor Hybrid",fuel:"Hybrid",transmission:"8-Speed Auto",mileage:"0 km",power:"571 hp",speed:"0–100 in 4.3s",color:"Manhattan Green",badge:"New",desc:"BMW's boldest flagship — Theatre Screen in rear, hybrid V8 defying limousine proportions."},
  {id:39,name:"Mercedes GLS 600 Maybach",brand:"Mercedes",type:"SUV",price:275000,year:2024,engine:"4.0L V8 EQ Boost",fuel:"Hybrid",transmission:"9-Speed Auto",mileage:"0 km",power:"558 hp",speed:"0–100 in 4.8s",color:"Obsidian Black",badge:"Exclusive",desc:"Maybach experience elevated to an SUV — fridge, massage seats, and Burmester Surround."},
  {id:40,name:"Genesis GV80 Coupe",brand:"Genesis",type:"SUV",price:88000,year:2024,engine:"3.5L V6 Twin-Turbo",fuel:"Petrol",transmission:"8-Speed Auto",mileage:"0 km",power:"375 hp",speed:"0–100 in 5.3s",color:"Savile Silver",badge:"New",desc:"European-rivalling dynamics and quilted Nappa leather at a price competitors fear."},
  {id:41,name:"Alfa Romeo Giulia GTA",brand:"Alfa Romeo",type:"Sedan",price:135000,year:2024,engine:"2.9L V6 Biturbo",fuel:"Petrol",transmission:"8-Speed Auto",mileage:"0 km",power:"540 hp",speed:"0–100 in 3.6s",color:"GTA White",badge:"New",desc:"100 examples only. Carbon fiber saves 100kg — 540hp Ferrari-developed V6 masterpiece."},
  {id:42,name:"BMW M4 CSL",brand:"BMW",type:"Sports",price:142000,year:2024,engine:"3.0L S58 6-cyl TT",fuel:"Petrol",transmission:"8-Speed M DCT",mileage:"0 km",power:"543 hp",speed:"0–100 in 3.6s",color:"Brooklyn Grey",badge:"Hot",desc:"Coupe Sport Leichtbau — 100kg lighter than M4 Competition, the most hardcore M4 ever."},
  {id:43,name:"Jaguar F-Type R75",brand:"Jaguar",type:"Sports",price:115000,year:2024,engine:"5.0L Supercharged V8",fuel:"Petrol",transmission:"8-Speed Auto",mileage:"0 km",power:"575 hp",speed:"0–100 in 3.5s",color:"British Racing Green",badge:"",desc:"75 years of British sports car heritage — 575hp supercharged V8 farewell edition."},
  {id:44,name:"Mercedes SL 63 AMG",brand:"Mercedes",type:"Sports",price:172000,year:2024,engine:"4.0L V8 Biturbo",fuel:"Petrol",transmission:"9-Speed Speedshift",mileage:"0 km",power:"577 hp",speed:"0–100 in 3.6s",color:"Patagonia Red",badge:"New",desc:"The legend reborn as a 2+2 roadster developed entirely by AMG."},
  {id:45,name:"Cadillac CT5-V Blackwing",brand:"Cadillac",type:"Sedan",price:95000,year:2024,engine:"6.2L Supercharged V8",fuel:"Petrol",transmission:"10-Speed Auto",mileage:"0 km",power:"668 hp",speed:"0–100 in 3.7s",color:"Rift Metallic",badge:"Hot",desc:"America's last great performance sedan — 668hp out-muscles BMW M5 at fraction of the cost."},
  {id:46,name:"Alfa Romeo Stelvio Quadrifoglio",brand:"Alfa Romeo",type:"SUV",price:92000,year:2024,engine:"2.9L V6 Biturbo",fuel:"Petrol",transmission:"8-Speed Auto",mileage:"0 km",power:"503 hp",speed:"0–100 in 3.8s",color:"Alfa Red",badge:"",desc:"The SUV for those who think SUVs are boring — Nürburgring record holder."},
  {id:47,name:"Maserati Grecale Trofeo",brand:"Maserati",type:"SUV",price:118000,year:2024,engine:"3.0L Nettuno V6 Turbo",fuel:"Petrol",transmission:"8-Speed Auto",mileage:"0 km",power:"523 hp",speed:"0–100 in 3.8s",color:"Giallo Tenore",badge:"New",desc:"MC20's engine in an SUV — race-derived Nettuno V6 in a daily-usable package."},
  {id:48,name:"BMW M3 Competition xDrive",brand:"BMW",type:"Sedan",price:98000,year:2024,engine:"3.0L S58 6-cyl TT",fuel:"Petrol",transmission:"8-Speed M DCT",mileage:"0 km",power:"503 hp",speed:"0–100 in 3.5s",color:"Sao Paulo Yellow",badge:"Hot",desc:"The eternal benchmark — all-weather M performance in the world's most iconic sports sedan."},
  {id:49,name:"Porsche Macan EV",brand:"Porsche",type:"Electric",price:98000,year:2024,engine:"Dual-Motor EV",fuel:"Electric",transmission:"Single-Speed",mileage:"0 km",power:"630 hp",speed:"0–100 in 3.3s",color:"Frozen Grey",badge:"Electric",desc:"630hp and 600km range without losing its sports car soul."},
  {id:50,name:"Range Rover Sport P530",brand:"Land Rover",type:"SUV",price:135000,year:2024,engine:"4.4L P530 V8",fuel:"Petrol",transmission:"8-Speed Auto",mileage:"0 km",power:"530 hp",speed:"0–100 in 4.3s",color:"Firenze Red",badge:"Hot",desc:"The driver's Range Rover — 530hp V8, adaptive air suspension, class-leading capability."},
  {id:51,name:"Ferrari 296 GTB",brand:"Ferrari",type:"Sports",price:325000,year:2024,engine:"3.0L V6 Turbo + EMotor",fuel:"Hybrid",transmission:"8-Speed DCT",mileage:"0 km",power:"819 hp",speed:"0–100 in 2.9s",color:"Celeste",badge:"New",desc:"The future of Ferrari — 819hp hybrid proving the V6 can succeed the V8."},
  {id:52,name:"Rolls-Royce Spectre",brand:"Rolls-Royce",type:"Electric",price:420000,year:2024,engine:"Dual-Motor EV",fuel:"Electric",transmission:"Single-Speed",mileage:"0 km",power:"577 hp",speed:"0–100 in 4.5s",color:"Silver Moonrise",badge:"Electric",desc:"The first all-electric Rolls-Royce — 577hp silence with 1700 star lights in the headliner."},
  {id:53,name:"McLaren 765LT",brand:"McLaren",type:"Sports",price:358000,year:2024,engine:"4.0L M840T V8 TT",fuel:"Petrol",transmission:"7-Speed SSG",mileage:"0 km",power:"755 hp",speed:"0–100 in 2.8s",color:"Volcano Yellow",badge:"Exclusive",desc:"Longtail, 80kg lighter than 720S, 755hp — only 765 built, all sold before announcement."},
  {id:54,name:"BMW M2",brand:"BMW",type:"Sports",price:68000,year:2024,engine:"3.0L S58 6-cyl TT",fuel:"Petrol",transmission:"6-Speed Manual",mileage:"0 km",power:"453 hp",speed:"0–100 in 4.1s",color:"Zandvoort Blue",badge:"Hot",desc:"The purist's choice — M4's S58 engine, optional 6-speed manual, rear-wheel drive."},
  {id:55,name:"Porsche 992 Carrera GTS",brand:"Porsche",type:"Sports",price:152000,year:2024,engine:"3.0L Flat-6 TT Hybrid",fuel:"Hybrid",transmission:"8-Speed PDK",mileage:"0 km",power:"532 hp",speed:"0–100 in 3.2s",color:"Carmine Red",badge:"New",desc:"First 911 with T-Hybrid — 532hp and electric exhaust turbine for zero-lag response."},
  {id:56,name:"Porsche 918 Spyder",brand:"Porsche",type:"Sports",price:1850000,year:2014,engine:"4.6L V8 + 2 Motors Hybrid",fuel:"Hybrid",transmission:"7-Speed PDK",mileage:"8200 km",power:"887 hp",speed:"0–100 in 2.5s",color:"Liquid Metal Silver",badge:"Exclusive",desc:"Holy Trinity member — one of only 918 examples, Nürburgring record holder."},
  {id:57,name:"Ferrari 812 Superfast",brand:"Ferrari",type:"Sports",price:385000,year:2022,engine:"6.5L V12 NA",fuel:"Petrol",transmission:"7-Speed DCT",mileage:"4100 km",power:"789 hp",speed:"0–100 in 2.9s",color:"Blu Pozzi",badge:"Exclusive",desc:"Last naturally-aspirated V12 Ferrari GT — 789hp at 8500rpm, end of an era."},
  {id:58,name:"Bentley Mulliner Batur",brand:"Bentley",type:"Sports",price:1850000,year:2024,engine:"6.0L W12 Twin-Turbo",fuel:"Petrol",transmission:"8-Speed DCT",mileage:"0 km",power:"730 hp",speed:"0–100 in 3.4s",color:"St. James Red",badge:"Exclusive",desc:"18 examples only — 730hp W12, the final hurrah for the Continental's W12 chapter."},
  {id:59,name:"BMW i7 M70 xDrive",brand:"BMW",type:"Electric",price:185000,year:2024,engine:"Dual-Motor EV",fuel:"Electric",transmission:"Single-Speed",mileage:"0 km",power:"650 hp",speed:"0–100 in 3.7s",color:"Black Sapphire",badge:"Electric",desc:"M Performance electric 7 Series — 650hp and a 31-inch rear Theatre Screen."},
  {id:60,name:"Lamborghini Urus Performante",brand:"Lamborghini",type:"SUV",price:315000,year:2024,engine:"4.0L V8 Twin-Turbo",fuel:"Petrol",transmission:"8-Speed Auto",mileage:"0 km",power:"657 hp",speed:"0–100 in 3.3s",color:"Verde Ermes",badge:"Hot",desc:"47kg lighter with carbon fiber aero kit — the Nürburgring SUV lap record holder."},
  {id:61,name:"Ferrari GTC4Lusso",brand:"Ferrari",type:"Luxury",price:335000,year:2020,engine:"6.3L V12 NA",fuel:"Petrol",transmission:"7-Speed DCT",mileage:"9800 km",power:"680 hp",speed:"0–100 in 3.4s",color:"Nero Daytona",badge:"",desc:"The four-seat Ferrari — 680hp V12 in a shooting brake body with four-wheel drive."},
  {id:62,name:"Koenigsegg Agera RS",brand:"Koenigsegg",type:"Sports",price:2800000,year:2017,engine:"5.0L V8 Twin-Turbo",fuel:"Petrol",transmission:"7-Speed Auto",mileage:"3200 km",power:"1160 hp",speed:"0–100 in 2.8s",color:"Naked Carbon",badge:"Exclusive",desc:"Set the outright production car speed record at 277mph — only 25 built."},
  {id:63,name:"Rolls-Royce Dawn",brand:"Rolls-Royce",type:"Luxury",price:395000,year:2022,engine:"6.6L V12 Twin-Turbo",fuel:"Petrol",transmission:"8-Speed Auto",mileage:"6200 km",power:"563 hp",speed:"0–100 in 4.9s",color:"Silver Moonlight",badge:"",desc:"The most social Rolls-Royce — soft top lowers in 22 seconds for an unmissable arrival."},
  {id:64,name:"Aston Martin Valhalla",brand:"Aston Martin",type:"Sports",price:895000,year:2024,engine:"4.0L V8 + 2 EMotors Hybrid",fuel:"Hybrid",transmission:"8-Speed Auto",mileage:"0 km",power:"937 hp",speed:"0–100 in 2.5s",color:"Onyx Black",badge:"Exclusive",desc:"937hp, F1-derived active aero, carbon fiber monocoque by Red Bull Advanced Technologies."},
  {id:65,name:"Bugatti W16 Mistral",brand:"Bugatti",type:"Sports",price:5000000,year:2024,engine:"8.0L W16 Quad-Turbo",fuel:"Petrol",transmission:"7-Speed DSG",mileage:"0 km",power:"1600 hp",speed:"0–100 in 2.4s",color:"French Racing Blue",badge:"Exclusive",desc:"Bugatti's farewell to the W16 — 1600hp roadster, only 99 examples ever built."},
  {id:66,name:"Maserati Quattroporte Trofeo",brand:"Maserati",type:"Luxury",price:152000,year:2024,engine:"3.8L V8 Twin-Turbo",fuel:"Petrol",transmission:"8-Speed Auto",mileage:"0 km",power:"580 hp",speed:"0–100 in 4.5s",color:"Rosso Vincente",badge:"",desc:"580hp Ferrari-developed V8 in one of the most emotionally resonant four-door saloons."},
  {id:67,name:"Ferrari Portofino M",brand:"Ferrari",type:"Sports",price:252000,year:2024,engine:"3.9L V8 Turbo",fuel:"Petrol",transmission:"8-Speed DCT",mileage:"0 km",power:"612 hp",speed:"0–100 in 3.45s",color:"Grigio Titanio",badge:"",desc:"The Ferrari for everyday — retractable hardtop convertible delivering 612hp grand touring."},
  {id:68,name:"Porsche 718 Cayman GT4 RS",brand:"Porsche",type:"Sports",price:148000,year:2024,engine:"4.0L Flat-6 NA",fuel:"Petrol",transmission:"7-Speed PDK",mileage:"0 km",power:"493 hp",speed:"0–100 in 3.4s",color:"Python Green",badge:"Hot",desc:"911 GT3 flat-6 installed sideways — Porsche's most precise mid-engine sports car."},
  {id:69,name:"Pagani Huayra Roadster BC",brand:"Pagani",type:"Sports",price:3400000,year:2021,engine:"6.0L V12 AMG Twin-Turbo",fuel:"Petrol",transmission:"7-Speed Sequential",mileage:"1800 km",power:"791 hp",speed:"0–100 in 3.0s",color:"Blu Argentina",badge:"Exclusive",desc:"Rolling art — Carbotitanio construction with hand-assembled AMG V12."},
  {id:70,name:"Mercedes EQS SUV 680",brand:"Mercedes",type:"Electric",price:158000,year:2024,engine:"Dual-Motor AMG EV",fuel:"Electric",transmission:"Single-Speed",mileage:"0 km",power:"649 hp",speed:"0–100 in 4.4s",color:"Night Black",badge:"Electric",desc:"649hp electric flagship SUV — Hyperscreen dashboard spans the full width, 7 seats."},
  {id:71,name:"Audi RS5 Sportback",brand:"Audi",type:"Sedan",price:105000,year:2024,engine:"2.9L TFSI V6 Twin-Turbo",fuel:"Petrol",transmission:"8-Speed Tiptronic",mileage:"0 km",power:"444 hp",speed:"0–100 in 3.9s",color:"Sepang Blue",badge:"",desc:"444hp quattro AWD with five seats — the thinking person's sports car choice."},
  {id:72,name:"Mercedes E 53 AMG",brand:"Mercedes",type:"Sedan",price:108000,year:2024,engine:"3.0L I6 EQ Boost + EMotor",fuel:"Hybrid",transmission:"9G-Tronic Auto",mileage:"0 km",power:"429 hp",speed:"0–100 in 4.3s",color:"High-Tech Silver",badge:"New",desc:"AMG's sweet spot — perfect balance of daily luxury and spirited performance."},
  {id:73,name:"BMW M3 Touring",brand:"BMW",type:"Sedan",price:102000,year:2024,engine:"3.0L S58 6-cyl TT",fuel:"Petrol",transmission:"8-Speed M DCT",mileage:"0 km",power:"503 hp",speed:"0–100 in 3.5s",color:"Tanzanite Blue",badge:"New",desc:"The world's fastest estate car — 503hp in a practical wagon, never seen before."},
  {id:74,name:"Lamborghini Sterrato",brand:"Lamborghini",type:"Sports",price:265000,year:2024,engine:"5.2L V10 NA",fuel:"Petrol",transmission:"7-Speed LDF",mileage:"0 km",power:"602 hp",speed:"0–100 in 3.4s",color:"Arancio Xanto",badge:"Exclusive",desc:"The world's only 602hp off-road supercar — raised Huracán with rally-spec tires."},
  {id:75,name:"McLaren Solus GT",brand:"McLaren",type:"Sports",price:3100000,year:2024,engine:"5.0L V10 NA",fuel:"Petrol",transmission:"7-Speed Sequential",mileage:"0 km",power:"829 hp",speed:"0–100 in 2.5s",color:"Papaya Gloss",badge:"Exclusive",desc:"Born from Gran Turismo as a real car — one of 25, single-seat 829hp V10 masterpiece."},
  {id:76,name:"Audi R8 V10 Performance",brand:"Audi",type:"Sports",price:198000,year:2023,engine:"5.2L V10 NA",fuel:"Petrol",transmission:"7-Speed S Tronic",mileage:"1800 km",power:"620 hp",speed:"0–100 in 3.1s",color:"Ara Blue",badge:"",desc:"The last R8 ever — mid-engine naturally-aspirated V10, ending Audi's supercar chapter."},
  {id:77,name:"Bugatti Tourbillon",brand:"Bugatti",type:"Sports",price:3800000,year:2024,engine:"8.3L V16 NA + 3 EMotors",fuel:"Hybrid",transmission:"8-Speed Auto",mileage:"0 km",power:"1800 hp",speed:"0–100 in 2.0s",color:"Atlantic Blue Carbon",badge:"Exclusive",desc:"Chiron's successor — 1800hp V16 hybrid, most complex engine in any production car."},
  {id:78,name:"Genesis G90 Luxury",brand:"Genesis",type:"Luxury",price:102000,year:2024,engine:"3.5L V6 Twin-Turbo",fuel:"Petrol",transmission:"8-Speed Auto",mileage:"0 km",power:"375 hp",speed:"0–100 in 5.1s",color:"Mineral Blue",badge:"",desc:"Korea's answer to the S-Class — embarrasses cars costing twice as much."},
  {id:79,name:"Rolls-Royce Ghost EWB",brand:"Rolls-Royce",type:"Luxury",price:445000,year:2024,engine:"6.75L V12 Twin-Turbo",fuel:"Petrol",transmission:"8-Speed Auto",mileage:"0 km",power:"591 hp",speed:"0–100 in 4.7s",color:"Twilight Purple",badge:"Exclusive",desc:"Extended wheelbase Ghost — 170mm extra rear legroom in the world's quietest luxury saloon."},
  {id:80,name:"Mercedes S 580 4MATIC",brand:"Mercedes",type:"Luxury",price:155000,year:2024,engine:"4.0L V8 Biturbo EQ",fuel:"Hybrid",transmission:"9-Speed Auto",mileage:"0 km",power:"503 hp",speed:"0–100 in 4.4s",color:"Obsidian Black",badge:"",desc:"3D Burmester audio, rear-axle steering, and MBUX Interior Assist — the finest saloon."},
  {id:81,name:"Porsche 911 Turbo S Cabriolet",brand:"Porsche",type:"Sports",price:252000,year:2024,engine:"3.8L Flat-6 Twin-Turbo",fuel:"Petrol",transmission:"8-Speed PDK",mileage:"0 km",power:"650 hp",speed:"0–100 in 2.7s",color:"Python Green",badge:"Hot",desc:"650hp, 0-100 in 2.7s, open top — raw performance with wind in your hair."},
  {id:82,name:"Bentley Continental GT Speed",brand:"Bentley",type:"Luxury",price:318000,year:2024,engine:"6.0L W12 Twin-Turbo",fuel:"Petrol",transmission:"8-Speed DCT",mileage:"0 km",power:"650 hp",speed:"0–100 in 3.5s",color:"Magnetic",badge:"New",desc:"The fastest Continental ever — electronically controlled rear differential and dynamic ride."},
  {id:83,name:"BMW M850i xDrive",brand:"BMW",type:"Luxury",price:128000,year:2024,engine:"4.4L V8 M TwinPower",fuel:"Petrol",transmission:"8-Speed Steptronic",mileage:"0 km",power:"530 hp",speed:"0–100 in 3.7s",color:"San Marino Blue",badge:"",desc:"530hp V8 in BMW's most dramatic coupe silhouette — M Performance meets the 8 Series."},
  {id:84,name:"Ferrari LaFerrari",brand:"Ferrari",type:"Sports",price:5200000,year:2015,engine:"6.3L V12 + EMotor Hybrid",fuel:"Hybrid",transmission:"7-Speed DCT",mileage:"1200 km",power:"950 hp",speed:"0–100 in 2.9s",color:"Rosso Corsa",badge:"Exclusive",desc:"The rarest Ferrari. F1 KERS technology in a road car — one of only 499 coupes."},
  {id:85,name:"McLaren P1",brand:"McLaren",type:"Sports",price:1850000,year:2014,engine:"3.8L V8 TT + EMotor",fuel:"Hybrid",transmission:"7-Speed SSG",mileage:"3400 km",power:"903 hp",speed:"0–100 in 2.8s",color:"Volcano Orange",badge:"Exclusive",desc:"Holy Trinity's F1 successor — 903hp hybrid hypercar, the fastest around any circuit."},
  {id:86,name:"Audi RS3 Sedan",brand:"Audi",type:"Sedan",price:68000,year:2024,engine:"2.5L TFSI 5-cyl TT",fuel:"Petrol",transmission:"7-Speed S Tronic",mileage:"0 km",power:"394 hp",speed:"0–100 in 3.8s",color:"Sebring Black",badge:"Hot",desc:"Five-cylinder turbo one of motoring's great sounds — 394hp, faster than a V8 muscle car."},
  {id:87,name:"Mercedes A 45 S AMG",brand:"Mercedes",type:"Sedan",price:72000,year:2024,engine:"2.0L 4-cyl TT",fuel:"Petrol",transmission:"8-Speed DCT",mileage:"0 km",power:"421 hp",speed:"0–100 in 3.9s",color:"Cosmos Black",badge:"Hot",desc:"World's most powerful 2.0L production engine — 421hp in a practical hatchback."},
  {id:88,name:"Jaguar F-PACE SVR",brand:"Jaguar",type:"SUV",price:98000,year:2024,engine:"5.0L Supercharged V8",fuel:"Petrol",transmission:"8-Speed Auto",mileage:"0 km",power:"543 hp",speed:"0–100 in 4.0s",color:"Santorini Black",badge:"",desc:"543hp supercharged V8 from Coventry — SVR aero and Alcantara interior."},
  {id:89,name:"Ferrari Daytona SP3",brand:"Ferrari",type:"Sports",price:2250000,year:2022,engine:"6.5L V12 NA",fuel:"Petrol",transmission:"7-Speed DCT",mileage:"800 km",power:"829 hp",speed:"0–100 in 2.85s",color:"Rosso Daytona",badge:"Exclusive",desc:"Icona masterpiece — 599 examples, tribute to the 1967 Daytona 24H win."},
  {id:90,name:"Porsche Taycan Cross Turismo",brand:"Porsche",type:"Electric",price:115000,year:2024,engine:"Dual-Motor EV",fuel:"Electric",transmission:"2-Speed PDK",mileage:"0 km",power:"571 hp",speed:"0–100 in 3.3s",color:"Chromite Black",badge:"Electric",desc:"Electric sport turismo — Taycan excitement plus 81L more luggage and light off-road."},
  {id:91,name:"Lincoln Navigator Black Label",brand:"Lincoln",type:"SUV",price:112000,year:2024,engine:"3.5L EcoBoost V6",fuel:"Petrol",transmission:"10-Speed Auto",mileage:"0 km",power:"440 hp",speed:"0–100 in 5.8s",color:"Flight Blue",badge:"",desc:"American presidential transport — Perfect Position captain's chairs and 800W Revel audio."},
  {id:92,name:"Genesis GV80",brand:"Genesis",type:"SUV",price:78000,year:2024,engine:"2.5L Turbo 4-cyl",fuel:"Petrol",transmission:"8-Speed Auto",mileage:"0 km",power:"300 hp",speed:"0–100 in 6.5s",color:"Uyuni White",badge:"",desc:"Lexicon audio, quilted Nappa leather, and European-rivalling dynamics."},
  {id:93,name:"Bentley Speed 6",brand:"Bentley",type:"Sports",price:328000,year:2024,engine:"6.0L W12 Twin-Turbo",fuel:"Petrol",transmission:"8-Speed DCT",mileage:"0 km",power:"750 hp",speed:"0–100 in 3.4s",color:"Alpine Green",badge:"New",desc:"Drawing from the 1920s Le Mans winner — 750hp W12 channels Bentley's racing heritage."},
  {id:94,name:"Maserati GranTurismo Folgore",brand:"Maserati",type:"Electric",price:198000,year:2024,engine:"Tri-Motor Electric",fuel:"Electric",transmission:"Single-Speed",mileage:"0 km",power:"761 hp",speed:"0–100 in 2.7s",color:"Grigio Lava",badge:"Electric",desc:"Electric Italian art — GranTurismo Folgore's tri-motor setup is Maserati's electric awakening."},
  {id:95,name:"BMW M5 CS",brand:"BMW",type:"Sedan",price:185000,year:2022,engine:"4.4L V8 M TwinPower",fuel:"Petrol",transmission:"8-Speed M DCT",mileage:"3100 km",power:"627 hp",speed:"0–100 in 3.0s",color:"Frozen Deep Green",badge:"Hot",desc:"CS sheds 70kg via carbon fiber roof and bucket seats — 627hp track-focused M5."},
  {id:96,name:"Lamborghini Aventador SVJ",brand:"Lamborghini",type:"Sports",price:595000,year:2020,engine:"6.5L V12 NA",fuel:"Petrol",transmission:"7-Speed ISR",mileage:"2800 km",power:"770 hp",speed:"0–100 in 2.8s",color:"Bianco Monocerus",badge:"Exclusive",desc:"Active aero adjusts in 500ms — 770hp Nürburgring production car record holder."},
  {id:97,name:"Aston Martin DB11 Volante",brand:"Aston Martin",type:"Sports",price:215000,year:2023,engine:"4.0L V8 Twin-Turbo",fuel:"Petrol",transmission:"8-Speed Auto",mileage:"5200 km",power:"503 hp",speed:"0–100 in 4.0s",color:"Skyfall Silver",badge:"",desc:"Open-top British grand touring perfection — 503hp convertible with a character all its own."},
  {id:98,name:"Porsche 959",brand:"Porsche",type:"Sports",price:2100000,year:1987,engine:"2.85L Flat-6 TT",fuel:"Petrol",transmission:"6-Speed Manual",mileage:"18000 km",power:"444 hp",speed:"0–100 in 3.7s",color:"Silver Metallic",badge:"Exclusive",desc:"The car that invented the supercar — AWD, twin-turbo, and ABS before any of these existed."},
  {id:99,name:"Mercedes AMG GT Black Series",brand:"Mercedes",type:"Sports",price:335000,year:2021,engine:"4.0L V8 Biturbo",fuel:"Petrol",transmission:"7-Speed DCT",mileage:"2100 km",power:"720 hp",speed:"0–100 in 3.2s",color:"High-Tech Silver",badge:"Exclusive",desc:"The most track-focused AMG road car — 720hp, titanium roll cage, removable rear wing."},
  {id:100,name:"Bugatti Veyron Super Sport",brand:"Bugatti",type:"Sports",price:2200000,year:2011,engine:"8.0L W16 Quad-Turbo",fuel:"Petrol",transmission:"7-Speed DSG",mileage:"5600 km",power:"1200 hp",speed:"0–100 in 2.5s",color:"Blue Carbon",badge:"Exclusive",desc:"Set 267mph in 2010 — the fastest production car of its era and a defining collector piece."},
  {id:101,name:"BMW M850i xDrive Coupe",brand:"BMW",type:"Luxury",price:132000,year:2024,engine:"4.4L V8 M TwinPower",fuel:"Petrol",transmission:"8-Speed Steptronic",mileage:"0 km",power:"530 hp",speed:"0–100 in 3.7s",color:"Dravit Grey",badge:"",desc:"M Performance in BMW's most dramatic coupe silhouette — power and elegance in perfect balance."},
  {id:102,name:"Audi TT RS Final Edition",brand:"Audi",type:"Sports",price:82000,year:2023,engine:"2.5L TFSI 5-cyl TT",fuel:"Petrol",transmission:"7-Speed S Tronic",mileage:"2400 km",power:"400 hp",speed:"0–100 in 3.7s",color:"Kyalami Orange",badge:"",desc:"The final chapter — farewell edition of Audi's most iconic sports coupe."}
];

// ===== STATE =====
let CARS = [];
let wishlist = JSON.parse(localStorage.getItem('dx_wish') || '[]');
let compareList = JSON.parse(localStorage.getItem('dx_compare') || '[]');
let shopFilter = { search: '', brand: 'all', type: 'all', price: 'all' };
let shopDisplayed = 12;
let prevPage = 'home';
let heroIdx = 0;
let brandFilterReady = false;

// ===== SAFE ACCESSORS (fixes type/cat field mismatch) =====
function getType(car) { return String(car.type || car.cat || 'Other'); }
function getBrand(car) { return String(car.brand || 'Unknown'); }

// ===== HELPERS =====
function getCarImg(car) {
  const key = getType(car).toLowerCase();
  const pool = IMG_POOLS[key] || IMG_POOLS.sedan;
  return pool[(Number(car.id) - 1) % pool.length];
}
function fmtPrice(p) {
  if (!p && p !== 0) return 'POA';
  if (p >= 1000000) return '$' + (p / 1000000).toFixed(1) + 'M';
  return '$' + Number(p).toLocaleString();
}
function toast(msg, dur = 2600) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.innerHTML = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), dur);
}
function saveWish()    { localStorage.setItem('dx_wish',    JSON.stringify(wishlist)); }
function saveCompare() { localStorage.setItem('dx_compare', JSON.stringify(compareList)); }

// ===== PAGE NAVIGATION =====
function goPage(p) {
  document.querySelectorAll('.page').forEach(x => x.classList.remove('active'));
  const pg = document.getElementById('page-' + p);
  if (!pg) return;
  pg.classList.add('active');
  if (p !== 'detail') prevPage = p;
  document.querySelectorAll('.nav-links a').forEach(a =>
    a.classList.toggle('active', a.dataset.p === p)
  );
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (p === 'inventory') renderInventory();
  if (p === 'home')      { renderFeatured(); renderCats(); }
  setTimeout(initReveal, 150);
}

function goBack() {
  goPage((prevPage && prevPage !== 'detail') ? prevPage : 'inventory');
}

// ===== LOAD CARS =====
function loadCars() {
  fetch('cars.json')
    .then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
    .then(raw => {
      CARS = raw.map(c => ({
        ...c,
        type: String(c.type || c.cat || 'Other'),
        speed: c.speed || c['0-100'] || 'N/A',
      }));
      console.log('✅ Loaded', CARS.length, 'cars from cars.json');
      afterLoad();
    })
    .catch(err => {
      console.warn('⚠️ Using embedded data (' + err.message + ')');
      CARS = FALLBACK_CARS;
      afterLoad();
    });
}

function afterLoad() {
  renderFeatured();
  renderCats();
  populateBrandFilter();
  updateCompareBar();
  initReveal();
  if (document.getElementById('page-inventory')?.classList.contains('active'))
    renderInventory();
}

// ===== FEATURED =====
function renderFeatured() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  if (!CARS.length) { grid.innerHTML = '<p style="color:var(--gray);text-align:center;grid-column:1/-1;padding:3rem">Loading vehicles...</p>'; return; }
  let feat = CARS.filter(c => c.badge === 'Exclusive' || c.badge === 'Hot');
  if (feat.length < 4) feat = CARS;
  grid.innerHTML = feat.slice(0, 8).map(c => carCardHTML(c)).join('');
  setTimeout(initReveal, 80);
}

// ===== CATEGORIES =====
function renderCats() {
  const grid = document.getElementById('cats-grid');
  if (!grid || !CARS.length) return;
  const typeMap = {};
  CARS.forEach(c => {
    const key = getType(c).toLowerCase();
    typeMap[key] = (typeMap[key] || 0) + 1;
  });
  grid.innerHTML = Object.entries(typeMap).map(([key, count]) => `
    <div class="cat-card rev" onclick="shopByType('${key}')">
      <img src="${CAT_IMGS[key] || CAT_IMGS.sedan}" alt="${key}" loading="lazy"/>
      <div class="cat-overlay"></div>
      <div class="cat-content">
        <div class="cat-icon">${CAT_ICONS[key] || '🚘'}</div>
        <div class="cat-name">${CAT_LABELS[key] || (key.charAt(0).toUpperCase() + key.slice(1))}</div>
        <div class="cat-count">${count} Vehicles</div>
      </div>
    </div>`).join('');
  setTimeout(initReveal, 80);
}

// ===== BRAND FILTER POPULATE =====
function populateBrandFilter() {
  const sel = document.getElementById('brand-filter');
  if (!sel || brandFilterReady) return;
  [...new Set(CARS.map(c => getBrand(c)))].sort().forEach(b => {
    const opt = document.createElement('option');
    opt.value = b.toLowerCase(); opt.textContent = b;
    sel.appendChild(opt);
  });
  brandFilterReady = true;
}

// ===== SHOP BY TYPE =====
function shopByType(typeKey) {
  shopFilter.type = typeKey.toLowerCase();
  shopDisplayed = 12;
  goPage('inventory');
  setTimeout(() => {
    document.querySelectorAll('#inv-tabs .ftab').forEach(t =>
      t.classList.toggle('active', (t.dataset.type || '').toLowerCase() === shopFilter.type)
    );
    applyFilters();
  }, 80);
}

// ===== INVENTORY =====
function renderInventory() {
  populateBrandFilter();
  applyFilters();
}

// ===== APPLY FILTERS (case-insensitive everywhere) =====
function applyFilters() {
  const grid = document.getElementById('inv-grid');
  const cnt  = document.getElementById('cars-count');
  const lmBtn = document.getElementById('load-more-btn');

  if (!CARS.length) {
    if (grid) grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:5rem 1rem;color:var(--gray)"><div style="font-size:3rem;margin-bottom:1rem">⚠️</div><p style="font-family:var(--font-ui)">Cars not loaded. Please check data source.</p></div>';
    return;
  }

  let list = [...CARS];

  // ── Search ──────────────────────────────────────────────
  const q = (shopFilter.search || '').trim().toLowerCase();
  if (q) list = list.filter(c =>
    (c.name  || '').toLowerCase().includes(q) ||
    getBrand(c).toLowerCase().includes(q) ||
    getType(c).toLowerCase().includes(q)
  );

  // ── Brand (case-insensitive) ─────────────────────────────
  const fb = (shopFilter.brand || 'all').toLowerCase();
  if (fb !== 'all') list = list.filter(c => getBrand(c).toLowerCase() === fb);

  // ── Type / Category (case-insensitive) ───────────────────
  const ft = (shopFilter.type || 'all').toLowerCase();
  if (ft !== 'all') list = list.filter(c => getType(c).toLowerCase() === ft);

  // ── Price ────────────────────────────────────────────────
  const fp = (shopFilter.price || 'all').toLowerCase();
  if (fp !== 'all') {
    const ranges = {
      'under100k':  [0, 100000],
      '100k-250k':  [100000, 250000],
      '250k-500k':  [250000, 500000],
      'over500k':   [500000, Infinity]
    };
    const [min, max] = ranges[fp] || [0, Infinity];
    list = list.filter(c => (c.price || 0) >= min && (c.price || 0) <= max);
  }

  // ── Render count ─────────────────────────────────────────
  if (cnt) {
    const shown = Math.min(list.length, shopDisplayed);
    cnt.innerHTML = list.length
      ? `Showing <em>${shown}</em> of <em>${list.length}</em> vehicles`
      : `<em>0</em> vehicles match your filters`;
  }

  // ── Render grid ──────────────────────────────────────────
  if (grid) {
    if (!list.length) {
      grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:5rem 1rem;color:var(--gray)">
        <div style="font-size:3rem;margin-bottom:1rem">🔍</div>
        <p style="font-family:var(--font-ui);font-size:1.1rem;color:var(--white)">No cars available in this category.</p>
        <p style="font-size:.85rem;margin-top:.5rem">Try adjusting your filters or <a onclick="resetFilters()" style="color:var(--gold);cursor:pointer;text-decoration:underline">reset all filters</a>.</p>
      </div>`;
    } else {
      grid.innerHTML = list.slice(0, shopDisplayed).map(c => carCardHTML(c)).join('');
      setTimeout(initReveal, 80);
    }
  }

  if (lmBtn) lmBtn.style.display = list.length > shopDisplayed ? 'inline-block' : 'none';
}

// ===== FILTER CONTROLS =====
function searchCars(val)  { shopFilter.search = val; shopDisplayed = 12; applyFilters(); }
function filterBrand(val) { shopFilter.brand  = val; shopDisplayed = 12; applyFilters(); }
function filterPrice(val) { shopFilter.price  = val; shopDisplayed = 12; applyFilters(); }
function filterType(key)  {
  shopFilter.type = (key || 'all').toLowerCase();
  shopDisplayed = 12;
  document.querySelectorAll('#inv-tabs .ftab').forEach(t =>
    t.classList.toggle('active', (t.dataset.type || '').toLowerCase() === shopFilter.type)
  );
  applyFilters();
}
function loadMore() { shopDisplayed += 12; applyFilters(); }
function resetFilters() {
  shopFilter = { search: '', brand: 'all', type: 'all', price: 'all' };
  shopDisplayed = 12;
  const s = document.getElementById('srch-inv'); if (s) s.value = '';
  const b = document.getElementById('brand-filter'); if (b) b.value = 'all';
  const p = document.getElementById('price-filter'); if (p) p.value = 'all';
  document.querySelectorAll('#inv-tabs .ftab').forEach(t => t.classList.toggle('active', t.dataset.type === 'All'));
  applyFilters();
}

// ===== CAR CARD HTML =====
function carCardHTML(c) {
  const img = getCarImg(c);
  const inW = wishlist.includes(Number(c.id));
  const bdg = c.badge ? `<span class="car-badge ${c.badge.toLowerCase()}">${c.badge}</span>` : '';
  return `<div class="car-card" id="cc${c.id}">
    <div class="car-img-wrap" onclick="openDetail(${c.id})" style="cursor:pointer">
      <img src="${img}" alt="${c.name}" loading="lazy"/>
      ${bdg}
      <button class="car-wish-btn ${inW ? 'active' : ''}"
        onclick="event.stopPropagation();toggleWish(${c.id})"
        title="Save to Wishlist">${inW ? '❤️' : '🤍'}</button>
    </div>
    <div class="car-info">
      <div class="car-brand">${getBrand(c)} · ${c.year || ''}</div>
      <div class="car-name" onclick="openDetail(${c.id})" style="cursor:pointer">${c.name}</div>
      <div class="car-specs-row">
        <span class="car-spec"><span class="car-spec-icon">⚡</span>${c.power || 'N/A'}</span>
        <span class="car-spec"><span class="car-spec-icon">⛽</span>${c.fuel || 'N/A'}</span>
        <span class="car-spec"><span class="car-spec-icon">⚙️</span>${(c.transmission || '').split(' ')[0] || 'Auto'}</span>
      </div>
      <div class="car-footer">
        <div class="car-price">${fmtPrice(c.price)}<small> USD</small></div>
        <button class="btn-view" onclick="openDetail(${c.id})">View →</button>
      </div>
    </div>
  </div>`;
}

// ===== PRODUCT DETAIL PAGE =====
function openDetail(rawId) {
  const id = Number(rawId);
  const c = CARS.find(x => Number(x.id) === id);
  if (!c) {
    toast('⚠️ Vehicle not found. Please try again.');
    console.error('openDetail: id', id, 'not found in CARS[' + CARS.length + ']');
    return;
  }

  const img   = getCarImg(c);
  const pool  = IMG_POOLS[getType(c).toLowerCase()] || IMG_POOLS.sedan;
  const inW   = wishlist.includes(id);
  const inCmp = compareList.includes(id);
  const speedStr = c.speed || 'N/A';
  const safeName = (c.name || '').replace(/'/g, "\\'");

  const thumbsHTML = pool.map((im, i) =>
    `<div class="d-thumb ${i === 0 ? 'active' : ''}" onclick="switchDetailImg('${im}',this)">
      <img src="${im}" alt="${c.name}" loading="lazy"/>
    </div>`
  ).join('');

  // ── Detail Content ──────────────────────────────────────
  const dc = document.getElementById('detail-content');
  if (dc) dc.innerHTML = `
    <div class="detail-gallery rev">
      <div class="detail-main-img">
        <img src="${img}" alt="${c.name}" id="d-main-img"/>
      </div>
      <div class="detail-thumbs">${thumbsHTML}</div>
    </div>
    <div class="detail-info rev rev-d2">
      <div class="d-brand">${getBrand(c)} · ${getType(c)} · ${c.year || 'N/A'}</div>
      <h1 class="d-name">${c.name}</h1>
      <div class="d-price">${fmtPrice(c.price)} <small>USD</small></div>
      <div class="d-avail">✅ Available — Worldwide Delivery</div>
      <div class="d-divider"></div>
      <p class="d-desc">${c.desc || 'A world-class vehicle from ' + getBrand(c) + '.'}</p>
      <div class="d-specs-grid">
        <div class="d-spec"><span class="d-spec-key">Engine</span><span class="d-spec-val">${c.engine || 'N/A'}</span></div>
        <div class="d-spec"><span class="d-spec-key">Power</span><span class="d-spec-val">${c.power || 'N/A'}</span></div>
        <div class="d-spec"><span class="d-spec-key">0–100 km/h</span><span class="d-spec-val">${speedStr}</span></div>
        <div class="d-spec"><span class="d-spec-key">Transmission</span><span class="d-spec-val">${c.transmission || 'N/A'}</span></div>
        <div class="d-spec"><span class="d-spec-key">Fuel Type</span><span class="d-spec-val">${c.fuel || 'N/A'}</span></div>
        <div class="d-spec"><span class="d-spec-key">Mileage</span><span class="d-spec-val">${c.mileage || '0 km'}</span></div>
        <div class="d-spec"><span class="d-spec-key">Color</span><span class="d-spec-val">${c.color || 'N/A'}</span></div>
        <div class="d-spec"><span class="d-spec-key">Year</span><span class="d-spec-val">${c.year || 'N/A'}</span></div>
      </div>
      <div class="d-actions">
        <button class="btn-inquire" onclick="scrollToInquiry()">📋 Inquire Now</button>
        <a class="btn-whatsapp"
           href="https://wa.me/923001234567?text=I%27m%20interested%20in%20${encodeURIComponent(c.name)}%20-%20${encodeURIComponent(fmtPrice(c.price))}"
           target="_blank">💬 WhatsApp</a>
        <button class="btn-wish-d ${inW ? 'on' : ''}" id="d-wish-btn"
          onclick="toggleWishDetail(${id})">${inW ? '❤️' : '🤍'}</button>
      </div>
      <div class="d-compare-bar">
        <input type="checkbox" id="cmp-check" ${inCmp ? 'checked' : ''}
          onchange="toggleCompare(${id},this.checked)"/>
        <label for="cmp-check">Add to Compare (${compareList.length}/3 selected)</label>
      </div>
    </div>`;

  // ── Inquiry Form ─────────────────────────────────────────
  const di = document.getElementById('detail-inquiry');
  if (di) di.innerHTML = `
    <div class="inquiry-section rev" style="margin-top:3rem">
      <h3>Ask a Question</h3>
      <p>Interested in the ${c.name}? Our specialists respond within 2 hours.</p>
      <form onsubmit="submitInquiry(event,'${safeName}')">
        <div class="form-grid">
          <div class="fg"><label>Full Name</label><input type="text" required placeholder="Your full name"/></div>
          <div class="fg"><label>Email</label><input type="email" required placeholder="your@email.com"/></div>
          <div class="fg"><label>Phone / WhatsApp</label><input type="tel" placeholder="+92 300 ..."/></div>
          <div class="fg"><label>Preferred Contact</label>
            <select style="width:100%;background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:.78rem 1rem;font-size:.85rem;color:var(--white);outline:none;cursor:pointer">
              <option>WhatsApp</option><option>Email</option><option>Phone Call</option>
            </select>
          </div>
        </div>
        <div class="fg">
          <label>Message</label>
          <textarea placeholder="I'm interested in the ${c.name}. Please provide details about availability and delivery..."></textarea>
        </div>
        <button type="submit" class="btn-gold" style="width:100%;padding:1rem;font-size:.9rem;clip-path:none;border-radius:6px;text-align:center">
          Send Inquiry →
        </button>
      </form>
    </div>`;

  // ── Related Cars ─────────────────────────────────────────
  const rg = document.getElementById('related-grid');
  if (rg) {
    let related = CARS.filter(x => getBrand(x) === getBrand(c) && Number(x.id) !== id).slice(0, 4);
    if (!related.length)
      related = CARS.filter(x => getType(x).toLowerCase() === getType(c).toLowerCase() && Number(x.id) !== id).slice(0, 4);
    rg.innerHTML = related.map(r => carCardHTML(r)).join('');
  }

  // Navigate to detail page AFTER DOM is set
  goPage('detail');
  setTimeout(initReveal, 100);
}

function switchDetailImg(src, el) {
  const img = document.getElementById('d-main-img');
  if (img) img.src = src;
  document.querySelectorAll('.d-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

function scrollToInquiry() {
  document.getElementById('detail-inquiry')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function submitInquiry(e, carName) {
  e.preventDefault();
  showModal(
    'Inquiry Sent Successfully! 🎉',
    `Your inquiry for the <strong style="color:var(--gold)">${carName}</strong> has been received.<br/><br/>
     Our specialist will contact you within <strong>2 hours</strong>.<br/>
     Welcome to DriveX Motors.`
  );
  e.target.reset();
}

// ===== WISHLIST =====
function toggleWish(rawId) {
  const id = Number(rawId);
  const i  = wishlist.indexOf(id);
  if (i === -1) { wishlist.push(id); toast('<em>❤️</em> Added to wishlist!'); }
  else           { wishlist.splice(i, 1); toast('Removed from wishlist'); }
  saveWish();
  const btn = document.querySelector(`#cc${id} .car-wish-btn`);
  if (btn) { btn.classList.toggle('active', wishlist.includes(id)); btn.textContent = wishlist.includes(id) ? '❤️' : '🤍'; }
  document.querySelectorAll('#wish-badge').forEach(b => b.textContent = wishlist.length);
}

function toggleWishDetail(rawId) {
  const id = Number(rawId);
  toggleWish(id);
  const btn = document.getElementById('d-wish-btn');
  if (btn) { const on = wishlist.includes(id); btn.textContent = on ? '❤️' : '🤍'; btn.classList.toggle('on', on); }
}

// ===== COMPARE =====
function toggleCompare(rawId, checked) {
  const id = Number(rawId);
  if (checked) {
    if (compareList.length >= 3) { toast('⚠️ Max 3 cars to compare'); const cb = document.getElementById('cmp-check'); if (cb) cb.checked = false; return; }
    if (!compareList.includes(id)) compareList.push(id);
    toast('<em>⚖️</em> Added to compare list');
  } else { compareList = compareList.filter(x => x !== id); }
  saveCompare(); updateCompareBar();
  const lbl = document.querySelector('label[for="cmp-check"]');
  if (lbl) lbl.textContent = `Add to Compare (${compareList.length}/3 selected)`;
}

function updateCompareBar() {
  const bar = document.getElementById('compare-bar');
  if (!bar) return;
  if (!compareList.length) { bar.classList.remove('show'); return; }
  bar.classList.add('show');
  const chips = document.getElementById('compare-chips');
  if (chips) chips.innerHTML = compareList.map(id => CARS.find(c => Number(c.id) === id)).filter(Boolean)
    .map(c => `<div class="compare-car-chip">${c.name} <button onclick="removeCompare(${c.id})">✕</button></div>`).join('');
}

function removeCompare(rawId) { compareList = compareList.filter(x => x !== Number(rawId)); saveCompare(); updateCompareBar(); }
function clearCompare() { compareList = []; saveCompare(); updateCompareBar(); }

function showCompareModal() {
  if (compareList.length < 2) { toast('⚠️ Add at least 2 cars to compare'); return; }
  const cars = compareList.map(id => CARS.find(c => Number(c.id) === id)).filter(Boolean);
  const specs = ['Engine','Power','Speed','Fuel','Transmission','Year','Price'];
  const val = (c, s) => ({ Engine:c.engine, Power:c.power, Speed:c.speed, Fuel:c.fuel, Transmission:c.transmission, Year:c.year, Price:fmtPrice(c.price) }[s] || 'N/A');
  showModal(`Comparing ${cars.length} Vehicles`,
    `<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-family:var(--font-ui);font-size:.82rem">
      <thead><tr><th style="text-align:left;padding:.5rem;color:var(--gold);font-size:.7rem;letter-spacing:.1em">SPEC</th>
        ${cars.map(c => `<th style="text-align:center;padding:.5rem;color:var(--white)">${c.name.split(' ').slice(0,3).join(' ')}</th>`).join('')}
      </tr></thead>
      <tbody>${specs.map(s => `<tr style="border-top:1px solid var(--border)">
        <td style="padding:.5rem;color:var(--gray)">${s}</td>
        ${cars.map(c => `<td style="text-align:center;padding:.5rem;color:var(--text)">${val(c, s)}</td>`).join('')}
      </tr>`).join('')}</tbody>
    </table></div>`);
}

// ===== MODAL =====
function showModal(title, body) {
  const m = document.getElementById('success-modal');
  const t = document.getElementById('modal-title');
  const b = document.getElementById('modal-body');
  if (!m || !t || !b) return;
  t.textContent = title; b.innerHTML = body;
  m.classList.add('on'); document.getElementById('overlay').classList.add('on');
}
function closeModal() {
  document.getElementById('success-modal')?.classList.remove('on');
  document.getElementById('overlay')?.classList.remove('on');
}

// ===== NAV =====
function toggleMob() {
  const m = document.getElementById('mob-menu'), h = document.getElementById('hamburger');
  if (!m || !h) return;
  m.classList.toggle('open'); h.classList.toggle('open');
  document.getElementById('overlay').classList.toggle('on', m.classList.contains('open'));
}
function closeMob() {
  document.getElementById('mob-menu')?.classList.remove('open');
  document.getElementById('hamburger')?.classList.remove('open');
}
function closeAll() { closeMob(); closeModal(); document.getElementById('overlay')?.classList.remove('on'); }

window.addEventListener('scroll', () =>
  document.getElementById('nav')?.classList.toggle('scrolled', scrollY > 30)
);

// ===== HERO SLIDESHOW =====
function startHeroSlide() {
  const img = document.getElementById('hero-img');
  if (!img) return;
  setInterval(() => {
    heroIdx = (heroIdx + 1) % HERO_IMGS.length;
    img.style.opacity = '0';
    setTimeout(() => { img.src = HERO_IMGS[heroIdx]; img.style.opacity = '1'; }, 500);
  }, 5000);
}

// ===== REVEAL =====
function initReveal() {
  const obs = new IntersectionObserver(entries =>
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); })
  , { threshold: 0.06 });
  document.querySelectorAll('.rev:not(.in)').forEach(el => obs.observe(el));
}

// ===== FORMS =====
function submitContact(e) {
  e.preventDefault();
  showModal('Message Received! 🎉', 'Thank you for reaching out. A DriveX Motors representative will contact you within 24 hours.');
  e.target.reset();
}
function submitNewsletter(e) {
  e.preventDefault();
  toast('<em>📧</em> Subscribed! Exclusive deals incoming.');
  e.target.reset();
}

// ===== INIT =====
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => document.getElementById('loader')?.classList.add('out'), 2400);

  loadCars();
  startHeroSlide();

  window.addEventListener('scroll', initReveal, { passive: true });

  document.getElementById('overlay')?.addEventListener('click', closeAll);

  const srch = document.getElementById('srch-inv');
  if (srch) srch.addEventListener('input', e => searchCars(e.target.value));

  const bSel = document.getElementById('brand-filter');
  if (bSel) bSel.addEventListener('change', e => filterBrand(e.target.value));

  const pSel = document.getElementById('price-filter');
  if (pSel) pSel.addEventListener('change', e => filterPrice(e.target.value));

  setTimeout(() => {
    document.querySelectorAll('#wish-badge').forEach(b => b.textContent = wishlist.length);
    updateCompareBar();
  }, 100);
});