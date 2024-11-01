import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Sword } from 'lucide-react';

// Types for our armor pieces and skills
type ArmorPiece = {
  name: string;
  skills: string[];
  decorationSlots: number[];
  defense: number;
};

type SetBuilderProps = {
  title?: string;
};

const SetBuilder = ({ title = "Last Edited Set" }: SetBuilderProps) => {
  const [weaponSlots, setWeaponSlots] = useState<number[]>([]);
  
  return (
    <div className="flex gap-4 p-4 bg-gray-900 text-white min-h-screen">
      {/* Left sidebar for skills */}
      <div className="w-64 space-y-2">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm text-white">Equipped Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {/* Skill list will go here */}
          </CardContent>
        </Card>
      </div>

      {/* Main content area */}
      <div className="flex-1">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle className="text-white">{title}</CardTitle>
            <div className="flex gap-2">
              <button className="p-1 hover:bg-gray-700 rounded">
                <Shield className="h-5 w-5" />
              </button>
              <button className="p-1 hover:bg-gray-700 rounded">
                <Sword className="h-5 w-5" />
              </button>
            </div>
          </CardHeader>
          <CardContent>
            {/* Weapon slots */}
            <div className="border border-gray-700 rounded p-2 mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-700 rounded" />
                <span className="text-sm">Weapon Name</span>
                <div className="flex gap-1 ml-auto">
                  {[1, 2, 3].map((slot) => (
                    <div key={slot} className="w-4 h-4 rounded border border-gray-600" />
                  ))}
                </div>
              </div>
            </div>

            {/* Armor pieces */}
            {['Head', 'Chest', 'Arms', 'Waist', 'Legs'].map((piece) => (
              <div key={piece} className="border border-gray-700 rounded p-2 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-700 rounded" />
                  <span className="text-sm">{piece} Armor</span>
                  <div className="flex gap-1 ml-auto">
                    {[1, 2, 3].map((slot) => (
                      <div key={slot} className="w-4 h-4 rounded border border-gray-600" />
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Charm slot */}
            <div className="border border-gray-700 rounded p-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-700 rounded" />
                <span className="text-sm">Charm</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right sidebar for stats */}
      <div className="w-64">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm text-white">Status Info</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Defense</span>
                <span>0</span>
              </div>
              <div className="flex justify-between">
                <span>Fire Res</span>
                <span>0</span>
              </div>
              <div className="flex justify-between">
                <span>Water Res</span>
                <span>0</span>
              </div>
              <div className="flex justify-between">
                <span>Thunder Res</span>
                <span>0</span>
              </div>
              <div className="flex justify-between">
                <span>Ice Res</span>
                <span>0</span>
              </div>
              <div className="flex justify-between">
                <span>Dragon Res</span>
                <span>0</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SetBuilder;