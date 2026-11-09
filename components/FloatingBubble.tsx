import React from 'react';
import Image from 'next/image';
import { getAssetPath } from './utils';

interface FloatingBubbleProps {
  portrait: string | null;
  name: string;
}

import React from 'react';
import Image from 'next/image';
import { getAssetPath } from './utils';

interface FloatingBubbleProps {
  portrait: string | null;
  name: string;
}

export default function FloatingBubble({ portrait, name }: FloatingBubbleProps) {
  if (!portrait) return null;
  return (
    <div className="absolute pointer-events-none animate-float">
      <Image
        src={getAssetPath(portrait)}
        alt={`Portrait of ${name}`}
        width={80}
        height={80}
        className="rounded-full border-2 border-icts-amber shadow-icts-glow"
      />
    </div>
  );
}

  if (!portrait) return null;
  return (
    <div className="absolute pointer-events-none animate-float">
      <Image
        src={getAssetPath(portrait)}
        alt={`Portrait of ${name}`}
        width={80}
        height={80}
        className="rounded-full border-2 border-icts-amber shadow-icts-glow"
      />
    </div>
  );
}
