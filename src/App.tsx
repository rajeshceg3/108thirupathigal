import { useState, memo, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Search } from 'lucide-react';

// Mock data generator
const generateLocations = () => {
  const locations = [];
  for (let i = 0; i < 108; i++) {
    locations.push({
      id: i,
      name: `Thirupathi ${i + 1}`,
      description: `This is the divine location number ${i + 1}`,
      lat: 8 + (Math.random() * 10), // Approx South India latitude
      lng: 76 + (Math.random() * 8),  // Approx South India longitude
    });
  }
  return locations;
};

const locations = generateLocations();

interface Location {
  id: number;
  name: string;
  description: string;
  lat: number;
  lng: number;
}

interface ListItemProps {
  loc: Location;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

// Optimization: Memoized list item to prevent unnecessary re-renders of the entire list
// when only the selected item changes. This reduces re-renders from N to 2 on selection change.
const ListItem = memo(({ loc, isSelected, onSelect }: ListItemProps) => {
  return (
    <div
      onClick={() => onSelect(loc.id)}
      style={{
        padding: '10px',
        borderBottom: '1px solid #f0f0f0',
        cursor: 'pointer',
        backgroundColor: isSelected ? '#f0f8ff' : 'white'
      }}
    >
      <div style={{ fontWeight: 'bold' }}>{loc.name}</div>
      <div style={{ fontSize: '12px', color: '#666' }}>{loc.lat.toFixed(2)}, {loc.lng.toFixed(2)}</div>
    </div>
  );
});

function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLocations = locations.filter(loc =>
    loc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = useCallback((id: number) => {
    setSelectedId(id);
  }, []);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '300px', borderRight: '1px solid #ccc', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '4px', padding: '4px 8px' }}>
            <Search size={16} color="#666" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ border: 'none', outline: 'none', padding: '4px', width: '100%' }}
            />
          </div>
        </div>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {filteredLocations.map(loc => (
            <ListItem
              key={loc.id}
              loc={loc}
              isSelected={selectedId === loc.id}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <MapContainer center={[11, 79]} zoom={6} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {filteredLocations.map(loc => (
            <Marker
              key={loc.id}
              position={[loc.lat, loc.lng]}
            >
              <Popup>
                <h3>{loc.name}</h3>
                <p>{loc.description}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
