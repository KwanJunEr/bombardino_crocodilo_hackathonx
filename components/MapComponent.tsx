// components/ReactGoogleMap.tsx
"use client";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

// Type definitions
interface Position {
  lat: number;
  lng: number;
}

interface FishingSpot {
  id: number;
  name: string;
  position: Position;
  description: string;
  fishTypes: string[];
}

interface Restaurant {
  id: string;
  name: string;
  position: Position;
  description: string;
}

interface BaitShop {
  id: string;
  name: string;
  position: Position;
  description: string;
}

interface ReactGoogleMapProps {
  center?: Position;
  zoom?: number;
}

type MarkerType = 'fishing' | 'restaurant' | 'bait' | 'university';
type ActiveMarkerType = string | null;

const containerStyle = {
  width: '100%',
  height: '700px' // Increased from 500px to 700px
};

// UMPSA Pekan coordinates
const umpsaCenter: Position = {
  lat: 3.5436,
  lng: 103.4289
};

// Fishing spots around Pekan area
const fishingSpots: FishingSpot[] = [
  {
    id: 1,
    name: "Sungai Pahang Estuary",
    position: { lat: 3.4895, lng: 103.3951 },
    description: "Great for beginner anglers - calm waters with plenty of fish",
    fishTypes: ["Tilapia", "Catfish", "Snakehead"]
  },
  {
    id: 2,
    name: "Pantai Cherating Beach",
    position: { lat: 3.9167, lng: 103.4167 },
    description: "Beach fishing spot perfect for beginners",
    fishTypes: ["Pomfret", "Queenfish", "Mackerel"]
  },
  {
    id: 3,
    name: "Tasik Chini",
    position: { lat: 3.4333, lng: 102.9167 },
    description: "Peaceful lake fishing - ideal for learning",
    fishTypes: ["Carp", "Tilapia", "Local species"]
  },
  {
    id: 4,
    name: "Kuala Pahang Jetty",
    position: { lat: 3.5025, lng: 103.4580 },
    description: "Easy access jetty fishing for beginners",
    fishTypes: ["Seabass", "Grouper", "Snapper"]
  },
  {
    id: 5,
    name: "Sungai Lepar",
    position: { lat: 3.6167, lng: 103.3833 },
    description: "River fishing with gentle current - beginner friendly",
    fishTypes: ["Catfish", "Carp", "Local river fish"]
  }
];

// Restaurants around the area
const restaurants: Restaurant[] = [
  {
    id: 'r1',
    name: "Restoran Makanan Laut Pekan",
    position: { lat: 3.4939, lng: 103.3950 },
    description: "Fresh seafood and local dishes"
  },
  {
    id: 'r2',
    name: "Warung Mak Yah",
    position: { lat: 3.5200, lng: 103.4100 },
    description: "Traditional Malay food"
  },
  {
    id: 'r3',
    name: "Restoran Floating Kuala Pahang",
    position: { lat: 3.5050, lng: 103.4600 },
    description: "Dining on water with fresh fish"
  }
];

// Fish bait shops
const baitShops: BaitShop[] = [
  {
    id: 'b1',
    name: "Kedai Umpan Pekan",
    position: { lat: 3.4950, lng: 103.3980 },
    description: "Complete fishing supplies and live bait"
  },
  {
    id: 'b2',
    name: "Fishing Tackle Pahang",
    position: { lat: 3.5300, lng: 103.4200 },
    description: "Rods, reels, and fishing equipment"
  },
  {
    id: 'b3',
    name: "Uncle Ah Beng Bait Shop",
    position: { lat: 3.5100, lng: 103.4450 },
    description: "Local bait shop with expert advice"
  }
];

const ReactGoogleMap: React.FC<ReactGoogleMapProps> = ({ 
  center = umpsaCenter, 
  zoom = 13 
}) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [activeMarker, setActiveMarker] = useState<ActiveMarkerType>(null);
  const router = useRouter();

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const handleFishingSpotClick = (spot: FishingSpot): void => {
    // Route to fishing spot detail page
    router.push(`/tourist/map/${spot.id}`);
  };

  const handleMarkerClick = (markerId: string): void => {
    setActiveMarker(activeMarker === markerId ? null : markerId);
  };

  // Custom marker icons
  const getMarkerIcon = (type: MarkerType): string => {
    const baseUrl = 'http://maps.google.com/mapfiles/ms/icons/';
    switch (type) {
      case 'fishing':
        return baseUrl + 'blue-dot.png';
      case 'restaurant':
        return baseUrl + 'red-dot.png';
      case 'bait':
        return baseUrl + 'green-dot.png';
      case 'university':
        return baseUrl + 'purple-dot.png';
      default:
        return baseUrl + 'red-dot.png';
    }
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* UMPSA Main Campus Marker */}
        <Marker 
          position={umpsaCenter}
          icon={getMarkerIcon('university')}
          onClick={() => handleMarkerClick('umpsa')}
        />
        {activeMarker === 'umpsa' && (
          <InfoWindow
            position={umpsaCenter}
            onCloseClick={() => setActiveMarker(null)}
          >
            <div className="p-2">
              <h3 className="font-bold text-purple-600">UMPSA Pekan Campus</h3>
              <p className="text-sm">Universiti Malaysia Pahang Al-Sultan Abdullah</p>
            </div>
          </InfoWindow>
        )}

        {/* Fishing Spots Markers */}
        {fishingSpots.map((spot: FishingSpot) => (
          <div key={spot.id}>
            <Marker
              position={spot.position}
              icon={getMarkerIcon('fishing')}
              onClick={() => handleMarkerClick(`fishing-${spot.id}`)}
            />
            {activeMarker === `fishing-${spot.id}` && (
              <InfoWindow
                position={spot.position}
                onCloseClick={() => setActiveMarker(null)}
              >
                <div className="p-3 max-w-xs">
                  <h3 className="font-bold text-blue-600 mb-2">{spot.name}</h3>
                  <p className="text-sm mb-2">{spot.description}</p>
                  <p className="text-sm mb-3">
                    Fish Types: {spot.fishTypes.join(', ')}
                  </p>
                  <button
                    onClick={() => handleFishingSpotClick(spot)}
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </InfoWindow>
            )}
          </div>
        ))}

        {/* Restaurant Markers */}
        {restaurants.map((restaurant: Restaurant) => (
          <div key={restaurant.id}>
            <Marker
              position={restaurant.position}
              icon={getMarkerIcon('restaurant')}
              onClick={() => handleMarkerClick(`restaurant-${restaurant.id}`)}
            />
            {activeMarker === `restaurant-${restaurant.id}` && (
              <InfoWindow
                position={restaurant.position}
                onCloseClick={() => setActiveMarker(null)}
              >
                <div className="p-3 max-w-xs">
                  <h3 className="font-bold text-red-600 mb-2">{restaurant.name}</h3>
                  <p className="text-sm">{restaurant.description}</p>
                </div>
              </InfoWindow>
            )}
          </div>
        ))}

        {/* Bait Shop Markers */}
        {baitShops.map((shop: BaitShop) => (
          <div key={shop.id}>
            <Marker
              position={shop.position}
              icon={getMarkerIcon('bait')}
              onClick={() => handleMarkerClick(`bait-${shop.id}`)}
            />
            {activeMarker === `bait-${shop.id}` && (
              <InfoWindow
                position={shop.position}
                onCloseClick={() => setActiveMarker(null)}
              >
                <div className="p-3 max-w-xs">
                  <h3 className="font-bold text-green-600 mb-2">{shop.name}</h3>
                  <p className="text-sm">{shop.description}</p>
                </div>
              </InfoWindow>
            )}
          </div>
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default ReactGoogleMap;