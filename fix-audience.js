const fs = require('fs');
let c = fs.readFileSync('src/lib/mockData.ts', 'utf8');

c = c.replace(
  "audience: 'School Students, Professionals & Army Personnel',",
  "audience: 'Faculty, Army Personnel, Students & Field Professionals',"
);

c = c.replace(
  "We had school students, working professionals, and Army personnel,",
  "We had faculty members, Army personnel, students, and professionals from various fields,"
);

fs.writeFileSync('src/lib/mockData.ts', c, 'utf8');
console.log('Fixed audience strings');
