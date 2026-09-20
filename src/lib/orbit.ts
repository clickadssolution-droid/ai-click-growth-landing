/** Posiciones circulares para HeroGrowthVisual y GrowthEcosystem (6 nodos evenly-spaced). */
export interface OrbitPosition {
  angleDeg: number;
}

export function getOrbitPositions(count: number, startAngleDeg = -90): OrbitPosition[] {
  const step = 360 / count;
  return Array.from({ length: count }, (_, i) => ({ angleDeg: startAngleDeg + i * step }));
}
