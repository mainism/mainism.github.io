// ============================================================================
// PORTFOLIO DATA
// ============================================================================
// This is the ONLY file you need to edit to update your portfolio.
// Be careful with the punctuation (keep the commas and quotes as they are!).
// If you want to add a new project, just copy the structure of an existing one.

const portfolioData = {
    // ------------------------------------------------------------------------
    // 1. PERSONAL INFORMATION
    // ------------------------------------------------------------------------
    personal: {
        name: "MD. MAINUL ISLAM",
        title: "Civil Engineering Final Year Student",
        email: "mainulislam.ruet20@gmail.com",
        phone: "+8801601018045",
        location: "Rajshahi, Bangladesh",
        github: "https://github.com/mainism",
        linkedin: "https://linkedin.com/in/yourusername",
        // A short, compelling introduction about yourself
        bio: "I am a dedicated Civil Engineering student with a passion for sustainable infrastructure and resilient structural design. Currently in my final year, I am actively seeking opportunities to apply my academic foundation to real-world engineering challenges. I excel in collaborative environments and am driven by the impact of well-designed built environments."
    },

    // ------------------------------------------------------------------------
    // 2. ACADEMIC BACKGROUND
    // ------------------------------------------------------------------------
    education: [
        {
            degree: "Bachelor of Science in Civil Engineering",
            institution: "Your University Name",
            period: "2020 - Present",
            details: "Expected graduation: May 2024. Current CGPA: 3.91/4.0.",
            // You can list relevant coursework here
            coursework: ["Structural Analysis", "Geotechnical Engineering", "Fluid Mechanics", "Transportation Engineering", "Environmental Engineering"]
        }
    ],

    // ------------------------------------------------------------------------
    // 3. SKILLS & TOOLS
    // ------------------------------------------------------------------------
    skills: {
        software: ["AutoCAD", "Civil 3D", "Revit", "SAP2000", "ETABS", "MATLAB"],
        technical: ["Structural Design", "Surveying", "Concrete Technology", "Soil Mechanics"],
        soft: ["Project Management", "Team Leadership", "Problem Solving", "Technical Writing"]
    },

    // ------------------------------------------------------------------------
    // 4. ACADEMIC & PERSONAL PROJECTS
    // ------------------------------------------------------------------------
    projects: [
        {
            title: "Sustainable Urban Drainage System Design",
            date: "Fall 2023",
            description: "Designed a comprehensive urban drainage system for a 50-acre residential development, incorporating green infrastructure like bioswales and permeable pavements to mitigate runoff volume and improve water quality.",
            tools: ["Civil 3D", "EPA SWMM", "Excel"],
            // Optional link to a report or GitHub repository
            link: "#"
        },
        {
            title: "Multi-Story Commercial Building Structural Analysis",
            date: "Spring 2023",
            description: "Performed linear static and dynamic analysis on a 10-story steel frame building under wind and seismic loads according to ASCE 7-16 standards.",
            tools: ["ETABS", "AutoCAD"],
            link: "#"
        }
    ],

    // ------------------------------------------------------------------------
    // 5. INTERNSHIPS & EXPERIENCE
    // ------------------------------------------------------------------------
    experience: [
        {
            role: "Structural Engineering Intern",
            company: "ABC Engineering Firm",
            period: "May 2023 - Aug 2023",
            description: "Assisted senior engineers in drafting construction documents using AutoCAD. Participated in site visits to monitor rebar placement and concrete pouring for a bridge substructure project. Conducted preliminary calculations for steel beam sizing."
        }
    ],

    // ------------------------------------------------------------------------
    // 6. RESEARCH PAPERS & PUBLICATIONS
    // ------------------------------------------------------------------------
    papers: [
        {
            title: "Evaluating the Use of Recycled Concrete Aggregate in Pavements",
            conference: "National Conference on Sustainable Civil Infrastructure",
            date: "November 2023",
            description: "Co-authored a paper investigating the mechanical properties and lifecycle cost benefits of incorporating recycled concrete aggregate into base layers of flexible pavements.",
            link: "#" // Link to the paper if it's published online
        }
    ],

    // ------------------------------------------------------------------------
    // 7. EXTRACURRICULAR ACTIVITIES (ECA)
    // ------------------------------------------------------------------------
    eca: [
        {
            role: "President",
            organization: "American Society of Civil Engineers (ASCE) Student Chapter",
            period: "2023 - Present",
            description: "Led a team of 15 executive members to organize guest lectures, site tours, and networking events for over 100 civil engineering students. Managed the chapter's annual budget."
        },
        {
            role: "Team Captain",
            organization: "Concrete Canoe Competition Team",
            period: "2022 - 2023",
            description: "Managed the mix design, hull structural analysis, and construction phases of the canoe. Secured 3rd place in the regional competition."
        }
    ]
};
