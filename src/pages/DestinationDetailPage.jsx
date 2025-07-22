// src/pages/DestinationDetailPage.jsx
import { useParams } from 'react-router-dom';
import destinations from '../components/DestinationData';

export default function DestinationDetailPage() {
  const { id } = useParams();
  const destination = destinations.find((d) => d.id === parseInt(id));

  if (!destination) return <div className="p-10 text-red-500">Destination not found</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={destination.image} alt={destination.name} className="w-full h-64 object-cover rounded-lg mb-6" />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{destination.name}</h1>
      <p className="text-gray-700 leading-7">{destination.description}</p>
    </div>
  );
}
