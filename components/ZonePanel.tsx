export default function ZonePanel({ onSelect }) {
    return (
      <div className="grid grid-cols-3 gap-2">
        {['HRZ','MRZ','LRZ'].map(zone => (
          <button
            key={zone}
            className="p-2 rounded shadow hover:scale-105"
            onClick={() => onSelect(zone)}
          >
            {zone}
          </button>
        ))}
      </div>
    );
  }