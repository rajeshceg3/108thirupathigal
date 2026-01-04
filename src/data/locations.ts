export interface Location {
  id: number;
  name: string;
  description: string;
  lat: number;
  lng: number;
  image?: string;
  tags?: string[];
}

export const generateLocations = (): Location[] => {
  const locations: Location[] = [];
  // Generating a few distinct locations for better visual testing
  // Real coordinates for some Thirupathigal approx
  const baseLocations = [
    { name: "Srirangam", lat: 10.86, lng: 78.69, desc: "The foremost of the 108 Divya Desams." },
    { name: "Tirumala", lat: 13.68, lng: 79.35, desc: "The abode of Lord Venkateswara." },
    { name: "Kanchipuram", lat: 12.82, lng: 79.70, desc: "City of a thousand temples." },
    { name: "Ahobilam", lat: 15.13, lng: 78.75, desc: "The place where Lord Narasimha appeared." },
    { name: "Thirukudanthai", lat: 10.96, lng: 79.37, desc: "Kumbakonam, home of Sarangapani." },
  ];

  baseLocations.forEach((base, i) => {
    locations.push({
      id: i,
      name: base.name,
      description: base.desc,
      lat: base.lat,
      lng: base.lng,
      tags: ["Temple", "Divya Desam"],
      image: `https://source.unsplash.com/random/200x200?temple&sig=${i}`
    });
  });

  for (let i = baseLocations.length; i < 108; i++) {
    locations.push({
      id: i,
      name: `Thirupathi ${i + 1}`,
      description: `This is the divine location number ${i + 1}`,
      lat: 8 + (Math.random() * 10), // Approx South India latitude
      lng: 76 + (Math.random() * 8),  // Approx South India longitude
      tags: ["Temple"],
      image: `https://source.unsplash.com/random/200x200?temple&sig=${i}`
    });
  }
  return locations;
};

export const locations = generateLocations();
