const fs = require('fs');
let c = fs.readFileSync('src/lib/mockData.ts', 'utf8');

const newWorkshop = `  {
    slug: 'sgt-drone-mapping-workshop-2026',
    title: 'Two-Day Workshop on Drone Flying, Operation & Mapping',
    institution: 'SGT University',
    location: 'Gurugram, Haryana',
    date: 'Sep 2026',
    duration: '2 Days',
    audience: 'Engineering Students & Faculty',
    attendees: 100,
    topics: ['Drone Flying Techniques', 'Safe Operation', 'Basic Flight Planning', 'Mapping & Data Acquisition'],
    hardware: ['UAVs for Mapping', 'Flight Planning Software'],
    coverImage: '/workshops/sgt-drone-mapping-workshop-2026/img1.jpg',
    gallery: [
      '/workshops/sgt-drone-mapping-workshop-2026/img1.jpg',
      '/workshops/sgt-drone-mapping-workshop-2026/img2.jpg'
    ],
    content: \`**Workshop Overview**

Invited as an **Industry Expert** by the Department of Civil Engineering at SGT University, Gurugram, to conduct a comprehensive two-day workshop on Drone Flying, Operation, and Mapping.

**Key Highlights:**
- **Flight Operations:** Taught students practical drone flying techniques and safe operation protocols.
- **Mission Planning:** Guided participants through basic flight planning strategies essential for professional UAV operations.
- **Mapping & Data Acquisition:** Demonstrated real-world applications of drones in surveying, mapping, and acquiring critical geospatial data.
- **Interactive Sessions:** Provided hands-on exposure and shared professional industry insights with participating students to bridge the gap between academic theory and industry practice.

It was an honor to interact with the enthusiastic students and share my professional experience in the UAV sector.\`
  },
`;

c = c.replace('export const mockWorkshops = [', 'export const mockWorkshops = [\n' + newWorkshop);
fs.writeFileSync('src/lib/mockData.ts', c, 'utf8');
console.log('Workshop patched');
