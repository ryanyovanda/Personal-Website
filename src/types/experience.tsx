
export interface Experience {
    title: string
    description: string[]
    position: string
    status: string
    period: string
    logo: string
    href: string
  }
  
  export const experienceList: Experience[] = [
    {
      title: "Estuary Creative Agency",
      description: [
        "Led creative direction for 10+ campaigns, aligning with brand goals and deadlines",
        "Facilitated ideation workshops and oversaw visual and strategic execution",
        "Managed cross-functional teams and maintained project delivery within budget",
        "Acted as primary liaison for client communication and feedback integration"
      ]
      ,
       position: "Creative Director",
       period: "(Jan 2024 – Aug 2024)",
      status: "Fulltime",
      logo: "/estuary-logo.jpg",
      href: "/omkasir",
    },
    {
      title: "Mitra Adiperkasa",
      description: ["Designed and delivered 10+ training modules for brands like Lacoste and Sephora, integrated into LMS for 500+ users", 
        "Conducted training for 300+ store staff to enhance customer experience",
         "Maintained platform performance and user accessibility across locations",
          "Coordinated company-wide events to foster team engagement"],
      period:  "(Aug 2022 – Jan 2024)",
      position: "Training Associate",
      status: "Intern, Fulltime",
      logo: "/mitra-adiperkasa-logo.png",
      href: "/airgoda",
    },

  ]
  