const fs = require('fs');
let c = fs.readFileSync('src/lib/mockData.ts', 'utf8');

const newWorkshop = `  {
    slug: 'mnit-jaipur-aeromodelling-workshop',
    title: 'One-Day Workshop on Aeromodelling and Drones',
    institution: 'MNIT (Malaviya National Institute of Technology)',
    location: 'Jaipur, Rajasthan',
    date: '2026',
    duration: '1 Day',
    audience: 'School Students, Professionals & Army Personnel',
    attendees: 50,
    topics: ['Aeromodelling Basics', 'Drone Technology', 'Interactive Q&A', 'UAV Applications'],
    hardware: ['Various Drone Models', 'Fixed-Wing UAVs'],
    coverImage: '/workshops/mnit-jaipur-aeromodelling/img1.jpg',
    gallery: [
      '/workshops/mnit-jaipur-aeromodelling/img1.jpg',
      '/workshops/mnit-jaipur-aeromodelling/img2.jpg'
    ],
    content: \`**Workshop Overview**

It was a great experience being invited as an **Expert Member** at the Malaviya National Institute of Technology (MNIT), Jaipur—a prestigious government institution—to conduct a one-day workshop on Aeromodelling and Drones.

**A Diverse and Engaging Audience**
What made the workshop truly special was the incredibly diverse group of participants. We had school students, working professionals, and Army personnel, all coming together with a common curiosity to learn more about the world of drones and aeromodelling.

**Interactive Learning**
Rather than being just a one-way lecture, it turned into a very engaging discussion. Participants actively asked questions, shared their thoughts, and explored different aspects of the technology with me. 

The enthusiasm and curiosity of everyone in the room made the session both enjoyable and memorable. I was thrilled to see such a wide range of people taking a deep interest in this field. It was indeed a wonderful day of learning, interaction, and sharing knowledge at MNIT Jaipur.\`
  },
`;

c = c.replace('export const mockWorkshops = [', 'export const mockWorkshops = [\n' + newWorkshop);
fs.writeFileSync('src/lib/mockData.ts', c, 'utf8');
console.log('Workshop patched');
