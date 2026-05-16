export type Software = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  logo: string;
  whatItIs: string;
  howItHelps: string[];
  keyFeatures: string[];
  myProjects: {
    title: string;
    description: string;
  }[];
  website: string;
};

export const softwareList: Software[] = [
  {
    slug: "matlab-simulink",
    name: "MATLAB / Simulink",
    category: "Simulation & Modelling",
    tagline: "The language of technical computing",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png",
    description:
      "MATLAB is a powerful numerical computing environment used by engineers and scientists worldwide to analyse data, develop algorithms, and create mathematical models.",
    whatItIs:
      "MATLAB (Matrix Laboratory) is software designed for mathematical computation, data analysis, and visualisation. Simulink is an add-on that allows engineers to visually model and simulate dynamic systems — think of it like drawing a flow diagram that actually runs and shows you results.",
    howItHelps: [
      "Simulates how energy systems behave before any physical hardware is built",
      "Helps engineers test control strategies for motors, solar panels, and power grids",
      "Plots graphs and analyses large datasets quickly",
      "Models thermal behaviour — how heat moves through a system over time",
      "Designs and tests PID controllers for automated systems",
    ],
    keyFeatures: [
      "Matrix-based computation engine",
      "Simulink drag-and-drop simulation blocks",
      "Toolboxes for control systems, signal processing, and power electronics",
      "Real-time hardware-in-the-loop simulation",
      "Automated report generation",
    ],
    myProjects: [
      {
        title: "Fast EV Charger Prototype",
        description:
          "Used MATLAB/Simulink to model the power flow and thermal management system of a fast EV charger, simulating charging curves and heat dissipation before any physical build.",
      },
      {
        title: "Waste Heat Recovery Simulation",
        description:
          "Built a counter-flow heat exchanger model using MATLAB's LMTD and NTU methods to quantify how much waste energy could be recovered from industrial exhaust streams.",
      },
    ],
    website: "https://www.mathworks.com/products/matlab.html",
  },

  {
    slug: "solidworks",
    name: "SolidWorks",
    category: "CAD & Simulation",
    tagline: "3D design and engineering simulation",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d2/SolidWorks_Logo.svg",
    description:
      "SolidWorks is a 3D computer-aided design (CAD) software used to create detailed models of physical parts and assemblies, then simulate how they perform under real-world conditions.",
    whatItIs:
      "SolidWorks allows engineers to design objects in 3D on a computer — everything from a simple bracket to a complex machine assembly. It also includes simulation tools that test whether a design will survive real forces, heat, or vibration without needing to physically build and break it first.",
    howItHelps: [
      "Creates precise 3D models of mechanical parts ready for manufacturing",
      "Simulates stress, vibration, and thermal loads on a design",
      "Generates technical drawings for workshops and fabrication",
      "Allows virtual assembly of multiple parts to check fit and clearances",
      "Produces files ready for CNC machining or 3D printing",
    ],
    keyFeatures: [
      "Parametric 3D solid modelling",
      "FEA (Finite Element Analysis) stress simulation",
      "Thermal and fluid flow simulation",
      "Sheet metal and weldment design tools",
      "Photorealistic rendering",
    ],
    myProjects: [
      {
        title: "Fast EV Charger Enclosure",
        description:
          "Designed the structural housing for a fast EV charger prototype in SolidWorks, including ventilation slots, mounting brackets, and panel cutouts — optimised for CNC fabrication.",
      },
      {
        title: "Sensor Enclosure for IoT Devices",
        description:
          "Modelled a weatherproof enclosure for outdoor IoT sensor units, simulating thermal expansion and seal integrity under Rwandan climate conditions.",
      },
    ],
    website: "https://www.solidworks.com",
  },

  {
    slug: "homer-pro",
    name: "HOMER Pro",
    category: "Energy Modelling",
    tagline: "Optimise hybrid energy systems",
    logo: "https://www.homerenergy.com/images/HOMER-Pro-Logo.png",
    description:
      "HOMER Pro is specialised software for designing and optimising hybrid energy systems — combinations of solar, wind, batteries, diesel generators, and grid connections.",
    whatItIs:
      "HOMER (Hybrid Optimisation of Multiple Energy Resources) helps energy engineers figure out the best combination of power sources for a given location. You input local solar data, load demand, equipment costs, and fuel prices — HOMER runs thousands of simulations and tells you the cheapest, most reliable configuration.",
    howItHelps: [
      "Finds the optimal mix of solar panels, batteries, and generators for a site",
      "Calculates the cost of energy over a 20–25 year project lifetime",
      "Shows how a system behaves hour-by-hour over a full year",
      "Compares grid-tied vs. off-grid solutions economically",
      "Helps justify investment decisions with detailed financial reports",
    ],
    keyFeatures: [
      "Multi-technology system optimisation",
      "Hourly simulation over a full year",
      "Sensitivity analysis for uncertain inputs",
      "Levelised Cost of Energy (LCOE) calculation",
      "Load profile modelling",
    ],
    myProjects: [
      {
        title: "Off-Grid Solar System Design",
        description:
          "Used HOMER Pro to size a solar-battery-diesel hybrid system for a rural facility, identifying the optimal panel capacity and battery bank to minimise cost while ensuring 24/7 power reliability.",
      },
    ],
    website: "https://www.homerenergy.com/products/pro/index.html",
  },

  {
    slug: "leap",
    name: "LEAP",
    category: "Energy Planning",
    tagline: "Long-range energy scenario planning",
    logo: "https://www.sei.org/wp-content/uploads/2018/11/leap-logo.png",
    description:
      "LEAP (Long-range Energy Alternatives Planning) is a widely used tool for energy policy analysis, helping governments and researchers model future energy demand and supply scenarios.",
    whatItIs:
      "LEAP is a scenario-based modelling tool — it lets you ask 'what if?' questions about energy. What if the population grows by 30%? What if we switch 50% of cooking to electric? What if we add 500MW of solar? LEAP calculates how those changes affect total energy demand, costs, and emissions over decades.",
    howItHelps: [
      "Models national or regional energy demand across sectors like transport, industry, and households",
      "Projects how energy needs will grow as population and economy expand",
      "Evaluates the environmental impact of different energy policies",
      "Compares the cost-effectiveness of renewable vs. fossil fuel pathways",
      "Supports government decision-making on energy investment and policy",
    ],
    keyFeatures: [
      "Demand and supply scenario modelling",
      "Greenhouse gas emissions tracking",
      "Technology transition modelling",
      "Integration with national energy statistics",
      "Multi-year time horizon (up to 2050+)",
    ],
    myProjects: [
      {
        title: "Rwanda Energy Demand Projection",
        description:
          "Used LEAP to model Rwanda's residential and commercial energy demand growth through 2040 under different electrification scenarios, analysing the impact of clean cooking adoption and industrial expansion.",
      },
    ],
    website: "https://leap.sei.org",
  },

  {
    slug: "arduino-ide",
    name: "Arduino IDE",
    category: "Embedded Systems",
    tagline: "Programming microcontrollers for the real world",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg",
    description:
      "Arduino IDE is the development environment used to write, compile, and upload code to microcontroller boards like Arduino and NodeMCU — the brains inside IoT devices.",
    whatItIs:
      "A microcontroller is a tiny computer on a chip that reads sensors, makes decisions, and controls outputs like motors or lights. Arduino IDE is the tool used to program these chips. You write code in a simplified version of C/C++, and the IDE translates it into instructions the microcontroller can execute.",
    howItHelps: [
      "Programs sensors to detect distance, light, temperature, and motion",
      "Controls actuators like servo motors, relays, and LEDs",
      "Enables WiFi connectivity on NodeMCU for cloud data transmission",
      "Reads and processes analog and digital signals in real time",
      "Manages timing, interrupts, and low-power modes for battery devices",
    ],
    keyFeatures: [
      "Support for 100+ microcontroller boards",
      "Built-in library manager for sensors and communication protocols",
      "Serial monitor for real-time debugging",
      "C/C++ based programming language",
      "One-click upload to hardware",
    ],
    myProjects: [
      {
        title: "Smart Passenger Counting System",
        description:
          "Programmed a NodeMCU using Arduino IDE to process ultrasonic sensor signals, count passengers entering and exiting a vehicle, display counts on an LCD, and push data to the Blynk cloud.",
      },
      {
        title: "Dual-Axis Solar Tracker",
        description:
          "Wrote the control logic in Arduino IDE for a NodeMCU to read LDR sensor values and drive servo motors to reposition a solar panel toward the brightest light source.",
      },
    ],
    website: "https://www.arduino.cc/en/software",
  },

  {
    slug: "blynk",
    name: "Blynk",
    category: "IoT Platform",
    tagline: "Connect your hardware to the cloud",
    logo: "https://cdn.worldvectorlogo.com/logos/blynk.svg",
    description:
      "Blynk is an IoT platform that lets you build mobile dashboards and cloud backends for connected hardware projects — without needing to set up your own server.",
    whatItIs:
      "Blynk acts as the bridge between a physical device (like a NodeMCU sensor) and a smartphone app. Your hardware sends data to the Blynk cloud, and you can view it on a customisable dashboard from anywhere in the world. You can also send commands back to the hardware from your phone.",
    howItHelps: [
      "Displays real-time sensor data on a mobile phone dashboard",
      "Sends push notifications and alerts when thresholds are exceeded",
      "Allows remote control of hardware from anywhere via internet",
      "Stores historical data for trend analysis",
      "Requires no backend server setup — cloud is managed by Blynk",
    ],
    keyFeatures: [
      "Drag-and-drop mobile dashboard builder",
      "Real-time data streaming",
      "Event-based automations and alerts",
      "Device management for multiple hardware units",
      "REST API for custom integrations",
    ],
    myProjects: [
      {
        title: "Smart Passenger Counting System",
        description:
          "Integrated Blynk to display live passenger counts, daily totals, and peak-hour graphs on an operator's phone — replacing manual paper logs entirely.",
      },
      {
        title: "Dual-Axis Solar Tracker",
        description:
          "Used Blynk to remotely monitor the solar panel's real-time position and light sensor readings, with alerts sent when panel movement was restricted.",
      },
    ],
    website: "https://blynk.io",
  },

  {
    slug: "autocad",
    name: "AutoCAD",
    category: "Technical Drawing",
    tagline: "Precision 2D and 3D technical drafting",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Autocad_2024_badge.png",
    description:
      "AutoCAD is the industry-standard software for creating precise technical drawings — used in architecture, electrical engineering, civil engineering, and mechanical design.",
    whatItIs:
      "AutoCAD lets engineers and designers draw exact plans, layouts, and schematics on a computer. Everything is drawn to precise measurements, so a contractor or fabricator can use the drawing directly to build or install something. It's the digital replacement for the drawing board.",
    howItHelps: [
      "Creates accurate electrical single-line diagrams and wiring layouts",
      "Draws floor plans and site layouts for solar installations",
      "Produces fabrication drawings with exact dimensions and tolerances",
      "Generates as-built documentation for completed installations",
      "Enables collaboration — drawings can be shared and revised easily",
    ],
    keyFeatures: [
      "Precision 2D drafting with snap and dimension tools",
      "3D modelling capabilities",
      "Layer management for complex drawings",
      "Industry-standard DWG file format",
      "Electrical and mechanical symbol libraries",
    ],
    myProjects: [
      {
        title: "Solar Installation Layouts",
        description:
          "Created site layout drawings and single-line electrical diagrams for solar PV installations, showing panel arrangement, inverter location, cable routing, and earthing systems.",
      },
      {
        title: "Generator Room Schematics",
        description:
          "Drew electrical schematic diagrams for backup generator installations including automatic transfer switch wiring, battery connections, and load distribution panels.",
      },
    ],
    website: "https://www.autodesk.com/products/autocad/overview",
  },

  {
    slug: "python",
    name: "Python",
    category: "Data & Simulation",
    tagline: "Versatile programming for engineering and data",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    description:
      "Python is one of the world's most popular programming languages — widely used in engineering, data science, automation, and web development for its simplicity and powerful libraries.",
    whatItIs:
      "Python is a general-purpose programming language that reads almost like plain English, making it accessible to engineers who aren't professional software developers. With libraries like NumPy, Pandas, and Matplotlib, it becomes a powerful tool for scientific computing and data visualisation.",
    howItHelps: [
      "Processes and visualises large engineering datasets",
      "Builds interactive simulation tools with Streamlit",
      "Automates repetitive calculations and report generation",
      "Implements heat transfer and thermodynamic models numerically",
      "Connects to APIs and databases for data collection",
    ],
    keyFeatures: [
      "Simple, readable syntax ideal for engineers",
      "NumPy and SciPy for scientific computing",
      "Matplotlib and Plotly for data visualisation",
      "Streamlit for rapid web app development",
      "Pandas for data processing and analysis",
    ],
    myProjects: [
      {
        title: "Waste Heat Recovery Simulation",
        description:
          "Built a full Python simulation using LMTD and NTU methods to model a counter-flow heat exchanger, wrapped in a Streamlit web app so users can interactively adjust parameters and instantly see efficiency results.",
      },
    ],
    website: "https://www.python.org",
  },
];

export function getSoftware(slug: string) {
  return softwareList.find((s) => s.slug === slug);
}