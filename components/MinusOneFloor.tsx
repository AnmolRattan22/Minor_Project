'use client'

import React from 'react';

function MinusOneFloor() {
  const rooms = [
    { id: 'Basement Parking', name: 'Basement Parking', x: 20, y: 20, width: 420, height: 240 },
    { id: 'Electrical Room', name: 'Electrical Room', x: 455, y: 20, width: 200, height: 100 },
    { id: 'Storage', name: 'Storage', x: 455, y: 130, width: 200, height: 60 },
    { id: 'Boiler Room', name: 'Boiler Room', x: 455, y: 200, width: 200, height: 60 },
    { id: 'Lift', name: 'Lift', x: 350, y: 20, width: 40, height: 60 },
    { id: 'Maintenance', name: 'Maintenance', x: 20, y: 270, width: 200, height: 80 },
    { id: 'Corridor', name: 'Corridor', x: 230, y: 270, width: 425, height: 80 },
  ];

  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full h-full p-6 overflow-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Basement (-1) Floor Plan</h1>

        <div className="bg-gray-50 rounded-lg p-4 h-full">
          <svg viewBox="0 0 880 600" className="w-full h-full">
            <rect x="10" y="10" width="860" height="520" fill="none" stroke="#999" strokeWidth="3" strokeDasharray="10,5" />

            <text x="440" y="100" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#666" opacity="0.5">
              Basement (-1)
            </text>

            {rooms.map(room => {
              const nameLower = room.name ? room.name.trim().toLowerCase() : '';
              const isGarden = nameLower === 'mughal garden' || room.id === 'mughal-garden';
              const isCorridor = room.id.includes('corridor') || nameLower.includes('corridor') || nameLower === 'passage' || nameLower === 'lobby';
              const isWayPath = nameLower === 'way-to-green' || room.id === 'way-to-green';

              return (
                <g key={room.id}>
                  <rect
                    x={room.x}
                    y={room.y}
                    width={room.width}
                    height={room.height}
                    fill={isGarden ? '#d4edda' : isCorridor ? '#f8f9fa' : isWayPath ? '#fff3cd' : '#ffffff'}
                    stroke="#333"
                    strokeWidth="2"
                    rx="3"
                  />
                  {room.name && (
                    <text
                      x={room.x + room.width / 2}
                      y={room.y + room.height / 2}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize={room.width < 80 ? '10' : '12'}
                      fontWeight={isGarden ? 'normal' : 'bold'}
                      fill="#333"
                      style={{ fontStyle: isGarden ? 'italic' : 'normal' }}
                    >
                      {room.name}
                    </text>
                  )}
                </g>
              );
            })}

          </svg>
        </div>

        <div className="mt-4 text-center text-sm text-gray-500">EduNav Campus Navigation System</div>
      </div>
    </div>
  );
}

export default MinusOneFloor;
