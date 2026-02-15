'use client'

import React from 'react';

function FloorGround() {
  
  const rooms = [
  
    { id: ' Adm. off.', name: ' Adm. off.', x: 120, y: 13, width: 70, height: 90},
    { id: 'Lift', name: 'Lift', x: 207, y: 14, width: 45, height: 20 },
    { id: 'BW', name: 'BW', x: 255, y: 14, width: 38, height: 29 },
    { id: 'Gw', name: 'Gw', x: 255, y: 47, width: 38, height: 29 },

     { id: 'LT 2', name: 'LT 2', x: 313, y: 14, width: 100, height: 110},
    { id: 'DLC', name: 'DLC', x: 516, y: 14, width: 100, height: 110},
     { id: 'Library', name: 'Library', x: 415, y: 13, width: 100, height: 50 },
      { id: 'Saraswati ma', name: 'Saraswati ma', x: 415, y: 339, width: 100, height: 50 },
    { id: 'Lobby', name: 'Lobby', x: 620, y: 15, width: 58, height: 110 },
    { id: 'cr 3', name: 'cr 3', x: 777, y: 290, width: 90, height: 95 },
     { id: 'cr 4', name: 'cr 4', x: 680, y: 290, width: 90, height: 95 },
    { id: 'Lab', name: 'Lab', x: 680, y: 15, width: 90, height: 110 },
    { id: 'Adm. cell', name: 'Adm. cell', x: 775, y: 17, width: 88, height: 130  },

    // Middle corridor area
    { id: 'corridor-top', name: '', x: 20, y: 149, width: 845, height: 90},

    // Bottom section - Ground Floor area
    
    { id: 'lt3', name: 'Audi', x: 15, y: 15, width: 100, height: 388 },
   
    
    // Mughal Garden area
    { id: 'mughal-garden', name: 'Mughal Garden', x: 16, y: 390, width: 855, height: 130 },
    

    

    
  ];

  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full h-full p-6 overflow-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Campus Floor Plan</h1>
        
        <div className="bg-gray-50 rounded-lg p-4 h-full">
          <svg viewBox="0 0 880 600" className="w-full h-full">
            {/* Building outline */}
            <rect x="10" y="10" width="860" height="520" fill="none" stroke="#999" strokeWidth="3" strokeDasharray="10,5" />
            
            {/* Floor labels */}
            <text x="464" y="140" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#666" opacity="0.5">
              Ground floor
            </text>
            
            
            {/* Render all rooms */}
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
            
            {/* Stairway markers */}
            <rect x="600" y="30" width="15" height="50" fill="#666" stroke="#333" strokeWidth="1" />
            <text x="607" y="55" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">
              ↕
            </text>
            
          </svg>
        </div>
        
        <div className="mt-4 text-center text-sm text-gray-500">
          EduNav Campus Navigation System
        </div>
      </div>
    </div>
  );
}

export default FloorGround;