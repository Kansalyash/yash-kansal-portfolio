const fs = require('fs');
let c = fs.readFileSync('src/lib/mockData.ts', 'utf8');

const newCompetition = `  {
    slug: 'techutopia-uem-jaipur-drone-competition',
    event: 'TECHUTOPIA 2026 - Drone Competition',
    institution: 'University of Engineering & Management (UEM), Jaipur',
    year: '2026',
    category: 'Drone Competition',
    weightClass: 'Open Category',
    result: '1st Prize',
    role: 'Participant & Pilot',
    mainImage: '/competitions/techutopia-uem-jaipur/cert.jpg',
    story: \`Secured the **1st Prize** in the Drone Competition at **TECHUTOPIA 2026**, the annual technical fest held at the University of Engineering & Management (UEM), Jaipur, on 5th - 6th October 2026.

This competition tested both custom drone building capabilities and precision piloting skills under pressure. Emerging victorious against a talented pool of participants was a proud moment and another validation of the countless hours spent refining my UAV systems and flight techniques.\`
  },
`;

c = c.replace('export const mockCompetitions = [', 'export const mockCompetitions = [\n' + newCompetition);
fs.writeFileSync('src/lib/mockData.ts', c, 'utf8');
console.log('Competition patched');
