import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function App() {
  console.log("App component rendering");
  try {
    return (
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://maps.stamen.com/">Stamen Design</a>'
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
        />
      </MapContainer>
    );
  } catch (error) {
    console.error("Error rendering map:", error);
    return <div>Error rendering map.</div>;
  }
}

export default App;
