// Data for Z.A Auto Workshop

export interface DetailedService {
  slug: string;
  name: string;
  category: string;
  categorySlug: 'mechanical' | 'electrical' | 'denting-painting';
  icon: 'wrench' | 'zap' | 'paint';
  shortDescription: string;
  fullDescription: string;
  duration: string;
  warranty: string;
  included: string[];
  signs: string[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export interface ServiceItem {
  slug: string;
  name: string;
  description: string;
}

export interface ServiceCategory {
  id: number;
  slug: 'mechanical' | 'electrical' | 'denting-painting';
  title: string;
  icon: 'wrench' | 'zap' | 'paint';
  intro: string;
  services: ServiceItem[];
}

export interface HomeService {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: 'wrench' | 'zap' | 'paint';
  features: string[];
}

export interface WhyChooseItem {
  title: string;
  description: string;
}

export const companyInfo = {
  name: "Z.A Auto Workshop",
  tagline: "Mechanical Repairs & Auto Electrical Specialists",
  phone: "+92 308 6271825",
  email: "ZAsolutions@gmail.com",
  address: "Kashmir Road, Near Jeevan Hotel Sialkot",
  established: "2016",
  director: "Zeeshan Arshad"
};

export const brands = [
  "TOYOTA",
  "HONDA",
  "MITSUBISHI",
  "HUNDAYI",
  "SUZUKI"
];

// All individual detailed services
export const detailedServices: DetailedService[] = [
  // 1. Mechanical Services
  {
    slug: "logbook-servicing",
    name: "Logbook Servicing",
    category: "Core Mechanical Services",
    categorySlug: "mechanical",
    icon: "wrench",
    shortDescription: "Keep your factory warranty intact with manufacturer-approved scheduled logbook servicing.",
    fullDescription: "Our Logbook Servicing strictly adheres to your vehicle manufacturer's precise maintenance schedules and guidelines. We inspect, service, and calibrate all vital systems using certified fluids, OEM or OEM-equivalent parts, and stamp your manufacturer logbook to maintain warranty validity and maximize vehicle resale value.",
    duration: "2 - 4 hours",
    warranty: "Manufacturer Spec Compliant & Workmanship Guarantee",
    included: [
      "Engine oil change with manufacturer-recommended synthetic oil",
      "OEM oil filter and washer replacement",
      "Comprehensive multi-point safety & roadworthiness inspection",
      "Brake fluid, coolant, power steering, and transmission fluid inspection",
      "Air filter, cabin pollen filter, and fuel filter check",
      "Battery health and alternator charging test",
      "Tire pressure adjustment and tread depth measurement",
      "Official logbook stamp and maintenance documentation"
    ],
    signs: [
      "Approaching the next mileage interval (e.g. every 5,000 km or 10,000 km)",
      "Vehicle is 6 to 12 months past its previous service check",
      "Service warning or maintenance indicator illuminated on your dashboard",
      "Noticeable drop in fuel efficiency or sluggish acceleration"
    ],
    process: [
      { step: 1, title: "Initial Inspection & Logbook Review", description: "We review your manufacturer schedule and vehicle mileage to determine exact requirements." },
      { step: 2, title: "Fluid & Filter Replacement", description: "Draining old fluids, replacing filters, and refilling with premium certified engine oil." },
      { step: 3, title: "Comprehensive Safety Inspection", description: "Checking suspension, undercarriage, braking lines, electrical systems, and tires." },
      { step: 4, title: "Road Testing & Stamping", description: "Performing dynamic road test, clearing reminder lights, and stamping your official logbook." }
    ],
    faqs: [
      {
        question: "Does logbook servicing void my new car warranty?",
        answer: "No, absolutely not. Under consumer laws, certified independent workshops like Z.A Auto Workshop can service your new car as long as manufacturer specifications and approved parts are used."
      },
      {
        question: "How frequently should I get a logbook service?",
        answer: "Most vehicle manufacturers recommend servicing every 6 months or 5,000 - 10,000 km, whichever comes first."
      }
    ]
  },
  {
    slug: "brakes-suspension",
    name: "Brakes & Suspension",
    category: "Core Mechanical Services",
    categorySlug: "mechanical",
    icon: "wrench",
    shortDescription: "Precision repairs on brake pads, rotors, shock absorbers, bushes, and steering linkages.",
    fullDescription: "Your braking and suspension systems are critical for safety, stability, and handling comfort. At Z.A Auto Workshop, our technicians inspect hydraulic lines, machine or replace brake discs/rotors, fit high-friction ceramic or semi-metallic pads, replace worn shock absorbers, and adjust steering linkages to guarantee safe stopping distance and smooth ride quality.",
    duration: "2 - 5 hours",
    warranty: "6 Months / 10,000 km Warranty on Parts & Labor",
    included: [
      "Front & rear brake pad and shoe inspection or replacement",
      "Brake disc/rotor thickness measurement, machining, or replacement",
      "Brake caliper inspection, piston lubrication, and hardware replacement",
      "Brake fluid flush and hydraulic line bleeding",
      "Shock absorber, strut, and coil spring inspection & replacement",
      "Sway bar links, ball joints, control arms, and suspension bushing replacement",
      "Steering rack, tie rod ends, and wheel alignment assessment"
    ],
    signs: [
      "High-pitched squealing, screeching, or grinding sounds when braking",
      "Spongy, soft, or low brake pedal feel",
      "Steering wheel vibrates or pulses during braking",
      "Car pulls to one side when braking or driving straight",
      "Excessive bouncing, knocking clunks over potholes or uneven roads"
    ],
    process: [
      { step: 1, title: "Digital Brake & Suspension Testing", description: "Measuring pad thickness, rotor runout, and examining shocks for leaks or structural play." },
      { step: 2, title: "Precision Component Fitting", description: "Installing premium low-dust brake pads, resurfacing/replacing rotors, and torque-specing bolts." },
      { step: 3, title: "Hydraulic Bleed & Suspension Calibration", description: "Flushing brake fluid with DOT4/5.1 and inspecting suspension bushing geometry." },
      { step: 4, title: "Safety Deceleration Road Test", description: "Verifying firm pedal response, zero drift, and optimal emergency stopping distance." }
    ],
    faqs: [
      {
        question: "How often should brake pads be replaced?",
        answer: "Typically between 30,000 km and 60,000 km depending on driving habits, urban traffic, and brake pad compound."
      },
      {
        question: "Why does my steering wheel shake when I apply the brakes?",
        answer: "This is usually caused by warped brake rotors (discs) with uneven thickness variation. Machining or replacing the rotors will resolve the vibration."
      }
    ]
  },
  {
    slug: "engine-transmission",
    name: "Engine & Transmission",
    category: "Core Mechanical Services",
    categorySlug: "mechanical",
    icon: "wrench",
    shortDescription: "From routine oil changes and timing belts to complex head gaskets and transmission overhauls.",
    fullDescription: "The engine and transmission form the powertrain heart of your vehicle. Our experienced mechanics handle minor adjustments like spark plug swaps, timing belt/chain replacements, and cooling system flushes, all the way to major transmission fluid flushes, clutch replacements, and complete internal engine overhauls.",
    duration: "1 day to 4 days (depending on repair complexity)",
    warranty: "Up to 12 Months Warranty on Engine & Gearbox Rebuilds",
    included: [
      "Engine compression and cylinder leakage testing",
      "Timing belt, timing chain, and water pump replacement",
      "Head gasket replacement and cylinder head resurfacing",
      "Automatic & manual transmission fluid flush and filter replacement",
      "Clutch plate, pressure plate, and flywheel replacement",
      "Radiator, thermostat, and coolant leak repairs",
      "Fuel injector cleaning and spark plug replacement",
      "Engine mount and transmission mount replacement"
    ],
    signs: [
      "Engine overheating or temperature gauge rising above normal",
      "Noticeable loss of engine power, rough idling, or misfires",
      "Colored smoke from the exhaust (blue, white, or thick black smoke)",
      "Transmission slipping, hesitation, or harsh jerking during gear shifts",
      "Unusual clunking, whining, or grinding sounds from the engine bay"
    ],
    process: [
      { step: 1, title: "Diagnostic Pressure & Scan Analysis", description: "Testing fuel rail pressure, compression, and scanning transmission shift solenoids." },
      { step: 2, title: "Teardown & Component Cleaning", description: "Disassembling affected assemblies, cleaning carbon buildup, and examining tolerances." },
      { step: 3, title: "Precision Rebuild & Sealing", description: "Replacing worn gears, bearings, gaskets, belts, and torquing to strict factory specs." },
      { step: 4, title: "Pressure Testing & Dyno Road Cycle", description: "Validating cooling pressures, seamless gear shifting, and smooth idle performance." }
    ],
    faqs: [
      {
        question: "How often should transmission fluid be changed?",
        answer: "Most manufacturers recommend replacing automatic transmission fluid (ATF) or CVT fluid every 40,000 km to 60,000 km to prevent internal gearbox wear."
      },
      {
        question: "When should I change my timing belt?",
        answer: "Timing belts should typically be changed every 80,000 km to 100,000 km or every 5 years, as failure can cause catastrophic internal engine valve damage."
      }
    ]
  },

  // 2. Auto Electrical Services
  {
    slug: "battery-alternator",
    name: "Battery & Alternator",
    category: "Auto Electrical & Diagnostics",
    categorySlug: "electrical",
    icon: "zap",
    shortDescription: "Comprehensive testing, replacement, and repairs for starting motors, batteries, and charging systems.",
    fullDescription: "A reliable car starts with a strong battery, healthy alternator, and responsive starter motor. Our auto electrical specialists use digital load testers and oscilloscopes to check battery cold-cranking amps (CCA), test alternator voltage output under load, clean oxidized terminal connections, and repair or replace worn starter solenoids.",
    duration: "1 - 2 hours",
    warranty: "1 - 2 Years Replacement Warranty on New Batteries",
    included: [
      "Digital battery conductance and Cold Cranking Amp (CCA) load test",
      "Alternator charging voltage and diode ripple analysis",
      "Starter motor current draw and solenoid activation test",
      "Terminal corrosion cleaning and anti-corrosion sealing",
      "Parasitic battery drain testing (identifying overnight battery drain)",
      "Supply and installation of premium maintenance-free batteries"
    ],
    signs: [
      "Slow engine crank when starting or clicking sound on turning ignition",
      "Battery warning light illuminated on the instrument cluster",
      "Headlights dimming when idling or when turning on air conditioning",
      "Need for frequent jump starts to get moving",
      "Swollen battery case or pungent rotten-egg sulfur odor"
    ],
    process: [
      { step: 1, title: "Load Test & Voltage Measurement", description: "Analyzing resting voltage, cranking voltage drop, and alternator output under high electrical load." },
      { step: 2, title: "Parasitic Draw Investigation", description: "Using an ammeter to verify if hidden electronic modules are draining the battery when parked." },
      { step: 3, title: "Component Replacement or Reconditioning", description: "Installing a fresh high-CCA battery or rebuilding the alternator regulator/starter brushes." },
      { step: 4, title: "System Calibration & Registration", description: "Registering new battery profiles in modern vehicle ECU power management modules." }
    ],
    faqs: [
      {
        question: "How long does a typical car battery last?",
        answer: "In regular driving conditions, automotive batteries typically last between 2 and 4 years. High ambient temperatures can accelerate chemical degradation."
      },
      {
        question: "Can a bad alternator damage a brand new battery?",
        answer: "Yes. An overcharging alternator will boil off battery electrolyte, while an undercharging alternator will cause deep discharge and lead to sulfation."
      }
    ]
  },
  {
    slug: "wiring-circuits",
    name: "Wiring & Circuits",
    category: "Auto Electrical & Diagnostics",
    categorySlug: "electrical",
    icon: "zap",
    shortDescription: "Expert wire tracing, short circuit isolation, blown fuse resolution, and dashboard cluster repairs.",
    fullDescription: "Modern automotive electrical harnesses carry hundreds of meters of cabling and complex multiplex CAN-bus signals. We specialize in tracing intermittent short circuits, repairing pinched wiring looms, fixing power window and central locking malfunctions, troubleshooting headlight and tail light anomalies, and fixing digital instrument clusters.",
    duration: "2 - 6 hours",
    warranty: "Workmanship Guarantee on All Repaired Wiring Looms",
    included: [
      "Full wiring harness continuity and resistance inspection",
      "Short-to-ground and open-circuit pinpointing",
      "Fuse box, relay, and body control module (BCM) troubleshooting",
      "Power window, door lock actuator, and electric mirror repairs",
      "Headlight, LED daytime running lights, and indicator circuit repairs",
      "Automotive grade heat-shrink soldered wiring splicing"
    ],
    signs: [
      "Fuses constantly blowing immediately after replacement",
      "Power windows, power mirrors, or door locks failing to operate",
      "Headlights flickering or dimming intermittently",
      "Burning plastic or electrical insulation smell in the cabin",
      "Instrument cluster needles jumping erratically or LCD screen turning blank"
    ],
    process: [
      { step: 1, title: "Wiring Diagram Schematic Analysis", description: "Reviewing factory pinout diagrams and vehicle electrical schematics." },
      { step: 2, title: "Multi-Meter & Thermal Tracing", description: "Using digital multi-meters and thermal imaging cameras to locate hot-spot resistance faults." },
      { step: 3, title: "Soldering & Weatherproof Sealing", description: "Repairing damaged wires using solder and adhesive heat-shrink protection against moisture." },
      { step: 4, title: "Circuit Load Testing", description: "Verifying current draw and full functional operation of the repaired accessory." }
    ],
    faqs: [
      {
        question: "Why does my fuse keep blowing?",
        answer: "A constantly blowing fuse indicates a direct short circuit or an accessory drawing excessive current. Replacing with a higher amp fuse can cause a fire; the circuit must be traced and repaired."
      }
    ]
  },
  {
    slug: "air-conditioning",
    name: "Air Conditioning (AC)",
    category: "Auto Electrical & Diagnostics",
    categorySlug: "electrical",
    icon: "zap",
    shortDescription: "Complete AC regassing, vacuum pressure leak detection, compressor clutch repair, and climate control service.",
    fullDescription: "Stay comfortable in every season with Z.A Auto Workshop's specialized auto climate control services. We perform nitrogen pressure leak testing, ultraviolet dye inspections, condenser fan replacements, AC compressor clutch rebuilds, heater core repairs, and precision refrigerant vacuuming and regassing with manufacturer-certified R134a or modern refrigerants.",
    duration: "1 - 3 hours",
    warranty: "Guaranteed Ice-Cold Cooling & Leak-Free Seal Guarantee",
    included: [
      "Refrigerant evacuation, recovery, and precision gram-weighted regas",
      "Nitrogen pressure leak testing and UV fluorescent dye inspection",
      "Compressor, magnetic clutch, and condenser coil test",
      "Cabin air filter (pollen filter) replacement",
      "Evaporator sanitization and bacterial anti-odor treatment",
      "Vent temperature measurement before and after service"
    ],
    signs: [
      "AC blowing warm or ambient air instead of freezing cold air",
      "Weak airflow coming out of dashboard vents even on maximum fan setting",
      "Unusual rattling or squealing sounds when AC button is engaged",
      "Musty, moldy, or damp smell when turning on climate control",
      "Water pooling on passenger side floorboards (blocked evaporator drain)"
    ],
    process: [
      { step: 1, title: "Vent Output & Pressure Analysis", description: "Measuring high and low side refrigerant manifold gauge pressures and vent vent temps." },
      { step: 2, title: "Vacuum & Deep Leak Inspection", description: "Holding system under deep vacuum to detect micro-leaks in hoses, seals, or condenser." },
      { step: 3, title: "Oil Lubricant & Refrigerant Charge", description: "Adding PAG synthetic compressor lubricant and exact specified refrigerant weight." },
      { step: 4, title: "Cooling Performance Validation", description: "Ensuring vent temperature drops to 4°C - 7°C for instant ice-cold cabin cooling." }
    ],
    faqs: [
      {
        question: "Why is my car AC blowing warm air?",
        answer: "The most common culprit is low refrigerant due to a gradual leak, or a faulty AC compressor clutch, blend door actuator, or blown relay."
      },
      {
        question: "How often should car AC be serviced or regassed?",
        answer: "AC systems naturally lose 5-10% of refrigerant gas annually. We recommend a full AC service every 18 to 24 months."
      }
    ]
  },
  {
    slug: "advanced-diagnostics",
    name: "Advanced Computer Diagnostics",
    category: "Auto Electrical & Diagnostics",
    categorySlug: "electrical",
    icon: "zap",
    shortDescription: "Clearing check engine lights, live sensor data scanning, ECU reprogramming, and module fault diagnostics.",
    fullDescription: "Modern automobiles are sophisticated mobile computer networks featuring dozens of electronic control units (ECUs). Our workshop utilizes professional multi-brand diagnostic scanners, oscilloscope signal probes, and live sensor telemetry tools to read fault codes (DTCs), test live O2 sensors, calibrate throttle bodies, and solve stubborn warning lights.",
    duration: "1 - 2 hours",
    warranty: "Accurate Diagnostic Guarantee — No Guesswork",
    included: [
      "Complete vehicle health scan across all onboard electronic modules",
      "Engine (ECU), Transmission (TCU), ABS, and Airbag (SRS) code retrieval",
      "Live data stream recording (MAF sensor, fuel trims, oxygen sensors, boost)",
      "Actuator bi-directional functional testing (injectors, cooling fans, solenoids)",
      "Throttle body calibration and steering angle sensor reset",
      "Detailed diagnostic report printout with repair recommendations"
    ],
    signs: [
      "Check Engine Light (CEL) steadily on or flashing",
      "ABS or Traction Control (ESP) warning light illuminated",
      "Vehicle entering 'Limp Home' mode with severely restricted speed/power",
      "Intermittent stalling, rough surging, or erratic transmission shifting",
      "Failed emission test or sudden spike in fuel consumption"
    ],
    process: [
      { step: 1, title: "OBD-II Multi-Module Scan", description: "Connecting advanced diagnostic scanner to query all vehicle control units." },
      { step: 2, title: "Live Telemetry & Graph Analysis", description: "Capturing real-time waveform signals to identify malfunctioning sensors or misfire counts." },
      { step: 3, title: "Physical Pinpoint Verification", description: "Verifying wiring, voltage supply, and sensor resistance before replacing parts." },
      { step: 4, title: "Code Clearing & Adaptation Reset", description: "Clearing resolved fault codes and relearning engine baseline throttle parameters." }
    ],
    faqs: [
      {
        question: "What does a flashing Check Engine Light mean?",
        answer: "A flashing Check Engine Light signals a severe cylinder misfire that can rapidly melt your catalytic converter. You should pull over safely and stop driving."
      },
      {
        question: "Can I just clear the code and ignore it?",
        answer: "Clearing codes without fixing the underlying mechanical or electrical fault will only cause the code to return shortly, potentially causing expensive secondary damage."
      }
    ]
  },

  // 3. Denting & Painting Services
  {
    slug: "paintless-dent-repair",
    name: "Paintless Dent Repair (PDR)",
    category: "Denting & Painting Services",
    categorySlug: "denting-painting",
    icon: "paint",
    shortDescription: "Specialized removal of minor door dings, hail damage, and body dents while keeping factory paint 100% intact.",
    fullDescription: "Paintless Dent Repair (PDR) is an advanced technique that gently massages dented metal panels back into their original shape from behind using specialized rods and LED reflection boards. Because no repainting, body fillers, or sanding are required, your vehicle retains its original factory paint finish, rust warranty, and factory value.",
    duration: "1 - 3 hours",
    warranty: "Lifetime Workmanship Guarantee (Dent will never re-emerge)",
    included: [
      "High-precision LED line board dent assessment",
      "Accessing underside of body panel through factory access points",
      "Specialized PDR metal lever manipulation and crown blending",
      "Glue-pulling techniques for double-walled panels",
      "Zero bondo or synthetic body fillers used",
      "Preserves 100% original factory automotive paint finish"
    ],
    signs: [
      "Door dings caused by parking lot car doors or shopping carts",
      "Hail impact dimples on bonnet, roof, or boot lid",
      "Minor crease dents along body swage lines with unbroken paint",
      "Desire to maintain original factory paint for maximum vehicle resale value"
    ],
    process: [
      { step: 1, title: "LED Reflection Analysis", description: "Projecting high-contrast parallel light lines onto the damaged panel to map dent curvature." },
      { step: 2, title: "Panel Access Preparation", description: "Safely accessing the rear of the panel without damaging interior clips or acoustic liners." },
      { step: 3, title: "Micro-Pressure Massage", description: "Applying micro-pushes from the rear and light taps on surface tension ridges." },
      { step: 4, title: "High-Gloss Surface Polish", description: "Final compounding and waxing to ensure panel reflections are completely straight." }
    ],
    faqs: [
      {
        question: "Does Paintless Dent Repair affect my car's original paint?",
        answer: "Not at all. PDR is completely non-invasive and does not use sanding or paint. Your factory coat remains 100% intact."
      },
      {
        question: "Can any dent be repaired with PDR?",
        answer: "PDR is ideal for dents where the paint is not cracked or scratched, and the metal has not been severely stretched or torn."
      }
    ]
  },
  {
    slug: "baking-oven-paint",
    name: "Baking Oven Spray Painting",
    category: "Denting & Painting Services",
    categorySlug: "denting-painting",
    icon: "paint",
    shortDescription: "Climate-controlled dust-free spray booth baking for deep gloss, factory durability, and computerized color match.",
    fullDescription: "Our state-of-the-art baking oven spray booth ensures a completely dust-free environment with controlled airflow and high-temperature thermal curing. Using digital spectrophotometers for computerized color matching, premium multi-stage basecoats, and UV-resistant high-solid clearcoats, we achieve deep, long-lasting factory luster.",
    duration: "2 - 4 days",
    warranty: "3 Years Paint Warranty Against Peeling & Fading",
    included: [
      "Digital computerized color scanning & spectrophotometer paint matching",
      "Complete surface prep: sanding, degreasing, and anti-rust epoxy primer",
      "Sealed pressurized negative-air dust-filtered spray booth application",
      "Multiple basecoats followed by dual-layer high-solid 2K clear coat",
      "Infrared baking oven heat curing at 60°C - 70°C for glass-like hardness",
      "Multi-stage wet sanding, cut, and high-gloss machine mirror compounding"
    ],
    signs: [
      "Faded, oxidized, or peeling clear coat caused by harsh sunlight",
      "Mismatched body panels from previous low-quality backyard repaints",
      "Deep scratches or stone chips exposing bare metal",
      "Desire for full-body respray or color rejuvenation"
    ],
    process: [
      { step: 1, title: "Computerized Color Formulation", description: "Scanning manufacturer color codes and matching micro-metallic flakes with a spectrophotometer." },
      { step: 2, title: "Surface Preparation & Masking", description: "Feather-edging scratches, applying epoxy primer, and taping trim with automotive masking." },
      { step: 3, title: "Oven Application & High-Heat Bake", description: "Spraying in a dust-free booth and baking at high temperature for rock-hard durable curing." },
      { step: 4, title: "Mirror Compounding & Glaze", description: "Wet sanding 2000/3000 grit and machine polishing to eliminate orange peel." }
    ],
    faqs: [
      {
        question: "Why is an oven spray booth superior to open-air painting?",
        answer: "Open-air painting allows dust particles, bugs, and humidity into the wet clear coat, causing rough textures and premature peeling. A heated baking booth cures paint uniformly with zero dust."
      },
      {
        question: "Will the new paint match the rest of my vehicle?",
        answer: "Yes. We use computerized color-matching formulas accounting for vehicle age, sun exposure, and metallic particle distribution."
      }
    ]
  },
  {
    slug: "accident-collision-repair",
    name: "Accident & Collision Repair",
    category: "Denting & Painting Services",
    categorySlug: "denting-painting",
    icon: "paint",
    shortDescription: "Complete chassis straightening, structural body panel alignment, and total accident restoration.",
    fullDescription: "Following an accident or collision, vehicle structural integrity and crumple zone safety must be restored to exact manufacturer tolerances. Z.A Auto Workshop provides hydraulic frame pulling, panel beating, bumper replacement, and laser-guided alignment so your car looks and drives just like it did before the incident.",
    duration: "3 - 7 days (depending on collision damage)",
    warranty: "Structural Integrity & Workmanship Guarantee",
    included: [
      "Hydraulic chassis bench alignment and structural frame pulling",
      "Damaged fender, quarter panel, door, and bonnet replacement or beating",
      "Headlamp bracket, radiator support, and cross-member realignment",
      "Anti-corrosion underbody rust protection application",
      "Seamless body gap alignment matching original factory spacing",
      "Complete post-repair steering geometry & suspension check"
    ],
    signs: [
      "Vehicle involved in fender-benders, front-end impact, or side-swipe collision",
      "Misaligned door panels that scrape or refuse to latch smoothly",
      "Cracked, crushed, or detached plastic front or rear bumper bars",
      "Uneven panel gaps between bonnet, fenders, or trunk lid"
    ],
    process: [
      { step: 1, title: "Structural Assessment & Damage Estimation", description: "Inspecting hidden structural frame damage and providing itemized repair plan." },
      { step: 2, title: "Hydraulic Straightening & Panel Beating", description: "Pulling bent chassis rails to factory dimensional datum specs." },
      { step: 3, title: "Panel Replacement & Fitment Alignment", description: "Installing OEM panels and ensuring door gaps are uniform to millimeter accuracy." },
      { step: 4, title: "Refinishing, Painting & Road Testing", description: "Oven repainting repaired panels, assembling trim, and conducting road safety test." }
    ],
    faqs: [
      {
        question: "Can you assist with insurance claims and estimates?",
        answer: "Yes, we provide detailed repair assessments, photos, and itemized quotations for your insurance documentation."
      }
    ]
  },
  {
    slug: "scratch-bumper-restoration",
    name: "Scratch & Bumper Restoration",
    category: "Denting & Painting Services",
    categorySlug: "denting-painting",
    icon: "paint",
    shortDescription: "Fast turnaround plastic bumper welding, scuff removal, deep scratch touch-ups, and clear-coat blending.",
    fullDescription: "Plastic bumpers and side mirrors endure frequent curb scrapes, parking scuffs, and stone impacts. Rather than spending huge sums on costly total replacements, we utilize specialized plastic heat-welding, spot filler feathering, and precision clear-coat blending to eliminate blemishes quickly and affordably.",
    duration: "Same day or 24 hours",
    warranty: "1 Year Bumper Paint & Adhesion Guarantee",
    included: [
      "Plastic bumper crack stapling and ultrasonic heat welding",
      "Deep key scratch, shopping cart scuff, and curb rash repair",
      "Flexible primer application specifically designed for plastic bumper flex",
      "Precision localized paint blend with seamless feather-edge transition",
      "Machine ceramic polish and high-luster gloss sealing"
    ],
    signs: [
      "Scraped corners on front or rear plastic bumper bars",
      "Cracks or splits in bumper plastic after hitting a high curb",
      "Key scratches, bush scratches, or stone chip clusters along doors",
      "Dull or faded bumper sections contrasting with the car's body"
    ],
    process: [
      { step: 1, title: "Damage Clean & Plastic Welding", description: "Stapling internal cracks and melting reinforcement plastic for structural rigidity." },
      { step: 2, title: "Flexible Filler Sanding", description: "Applying flexible poly-fillers engineered to withstand minor flex without cracking." },
      { step: 3, title: "Spot Primer & Color Blending", description: "Blending paint seamlessly into surrounding panel color." },
      { step: 4, title: "High-Gloss Clear Buffing", description: "Buffing blend line with fine compound to make the repair totally invisible." }
    ],
    faqs: [
      {
        question: "Do I have to repaint the entire bumper for a small corner scrape?",
        answer: "In most cases, no. Our technicians excel at localized smart-blend repairs that fix only the damaged corner, saving you significant money."
      }
    ]
  }
];

// Main service categories with slugs
export const serviceCategories: ServiceCategory[] = [
  {
    id: 1,
    slug: "mechanical",
    title: "Core Mechanical Services",
    icon: "wrench",
    intro: "We handle all major and minor mechanical repairs for light vehicles, ensuring your engine runs smoothly and reliably.",
    services: [
      {
        slug: "logbook-servicing",
        name: "Logbook Servicing",
        description: "Keep your factory warranty intact with manufacturer-approved logbook servicing."
      },
      {
        slug: "brakes-suspension",
        name: "Brakes & Suspension",
        description: "Precision repairs on pads, rotors, shock absorbers, and steering components."
      },
      {
        slug: "engine-transmission",
        name: "Engine & Transmission",
        description: "From routine oil and filter changes to complex diagnostics and major overhauls."
      }
    ]
  },
  {
    id: 2,
    slug: "electrical",
    title: "Auto Electrical & Diagnostics",
    icon: "zap",
    intro: "Modern vehicles rely heavily on computer systems. Our specialized auto electrical team is equipped to diagnose and repair the most complex electronic faults.",
    services: [
      {
        slug: "battery-alternator",
        name: "Battery & Alternator",
        description: "Testing, replacement, and repairs for starting motors and charging systems."
      },
      {
        slug: "wiring-circuits",
        name: "Wiring & Circuits",
        description: "Expert wire tracing and repair for faulty lights, dashboard clusters, and windows."
      },
      {
        slug: "air-conditioning",
        name: "Air Conditioning",
        description: "Regassing, leak detection, and climate control repairs."
      },
      {
        slug: "advanced-diagnostics",
        name: "Advanced Diagnostics",
        description: "Clearing check engine lights and scanning onboard computers (ECUs)."
      }
    ]
  },
  {
    id: 3,
    slug: "denting-painting",
    title: "Denting & Painting Services",
    icon: "paint",
    intro: "Professional auto body restoration, precision dent repair, and climate-controlled oven spray painting for a showroom-quality finish.",
    services: [
      {
        slug: "paintless-dent-repair",
        name: "Paintless Dent Repair (PDR)",
        description: "Specialized removal of minor dents and body dings while preserving original factory paint."
      },
      {
        slug: "baking-oven-paint",
        name: "Baking Oven Spray Painting",
        description: "Dust-free climate-controlled paint booth finish with precision computerized color matching."
      },
      {
        slug: "accident-collision-repair",
        name: "Accident & Collision Repair",
        description: "Chassis alignment, body panel replacement, and comprehensive structural restoration."
      },
      {
        slug: "scratch-bumper-restoration",
        name: "Scratch & Bumper Restoration",
        description: "Bumper scuff repairs, deep scratch touch-ups, compounding, and high-gloss clear-coat finishing."
      }
    ]
  }
];

// Flat services list for home page cards
export const services: HomeService[] = [
  {
    id: 1,
    slug: "logbook-servicing",
    title: "Core Mechanical Services",
    description: "We handle all major and minor mechanical repairs for light vehicles, ensuring your engine runs smoothly and reliably.",
    icon: "wrench",
    features: [
      "Logbook Servicing (factory warranty approved)",
      "Brakes & Suspension precision repairs",
      "Engine & Transmission overhauls",
      "Routine oil, filter, and cooling changes"
    ]
  },
  {
    id: 2,
    slug: "advanced-diagnostics",
    title: "Auto Electrical & Diagnostics",
    description: "Specialized auto electrical team equipped to diagnose and repair the most complex electronic faults in modern vehicles.",
    icon: "zap",
    features: [
      "Battery & Alternator digital load testing",
      "Wiring & Circuit short fault tracing",
      "Air Conditioning regassing & leak testing",
      "Advanced ECU multi-module scan"
    ]
  },
  {
    id: 3,
    slug: "paintless-dent-repair",
    title: "Denting & Painting Services",
    description: "Precision auto body repairs and dust-free baking oven spray painting to restore your vehicle to immaculate showroom condition.",
    icon: "paint",
    features: [
      "Paintless Dent Repair (PDR)",
      "Baking Oven Spray Painting",
      "Accident & Collision Restoration",
      "Computerized Paint Color Matching"
    ]
  }
];

export const whyChooseUs: WhyChooseItem[] = [
  {
    title: "One-Stop Shop",
    description: "You don't need to visit a general mechanic, an auto electrician, and a body shop separately. We handle everything under one roof, saving you time and money."
  },
  {
    title: "Transparent Pricing",
    description: "We provide accurate, upfront quotes before any work begins. No hidden charges or unexpected fees."
  },
  {
    title: "Highly Trained Experts",
    description: "Our mechanics, auto electricians, and body paint craftsmen undergo ongoing training with modern tools and safety practices."
  }
];

export const aboutContent = {
  heading: "Our Dual & Triple Expertise",
  introduction: "We provide comprehensive vehicle care by combining advanced mechanical repairs with specialized auto electrical diagnostics and professional denting & painting. Whether your car is dealing with a blown head gasket, dead air conditioning, complex wiring faults, or collision dent repair, our certified team gets to the root of the problem and back on the road safely.",
  mission: "Our mission is to be your trusted one-stop shop for complete vehicle care, eliminating the need to visit separate workshops for mechanical, electrical, and body repairs.",
  experience: "With years of experience serving Sialkot's drivers, our team combines deep mechanical knowledge with cutting-edge electrical diagnostic equipment and an advanced baking paint oven."
};

// Form submission handler
export const submitContactForm = (formData: Record<string, string>): Promise<{ success: boolean; message: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Form submitted with data:', formData);
      resolve({ success: true, message: 'Thank you for contacting us! We will get back to you soon.' });
    }, 1000);
  });
};

