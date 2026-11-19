import type { Metadata } from 'next';
import { HomeHero } from '@/components/home/HomeHero';
import { HomeProof } from '@/components/home/HomeProof';
import { HomeChallenges } from '@/components/home/HomeChallenges';
import { HomeProducts } from '@/components/home/HomeProducts';
import { HomeEngineering } from '@/components/home/HomeEngineering';
import { HomeManufacturing } from '@/components/home/HomeManufacturing';
import { HomeResults } from '@/components/home/HomeResults';
import { HomeClosing } from '@/components/home/HomeClosing';

export const metadata: Metadata = {
  title: 'Lith-On Bharat Energy | Industrial BESS & Commercial Energy Storage',
  description:
    'Lith-On manufactures heavy-duty Battery Energy Storage Systems (BESS) at its 20,000 sq. ft. Noida facility. Engineered for 60°C ambient heat, sub-10ms UPS switchover, and CAQM GRAP diesel generator replacement.',
  keywords: [
    'Battery Energy Storage System India',
    'BESS Manufacturer Noida',
    'C&I Energy Storage',
    'CAQM GRAP Diesel Replacement',
    'Sub-10ms Static Transfer Switch',
    'IceBattery Ceramic Cooling',
    'LiFePO4 Containerized BESS',
  ],
};

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Redesigned sections set their own rhythm (design.md §6). */}
      {/* 01 — HERO (HOME-01): one BESS shelter, switchable environments */}
      <HomeHero />

      {/* 02 — PROOF (HOME-02): open stat band */}
      <HomeProof />

      {/* 03 — CHALLENGES (HOME-03): scroll story with live diagrams */}
      <HomeChallenges />

      {/* 04 — PRODUCTS (HOME-04): pinned product rail with capacity axis */}
      <HomeProducts />

      {/* 05 — ENGINEERING (HOME-05): bento of four technology tiles */}
      <HomeEngineering />

      {/* 06 — MADE IN NOIDA (HOME-06): process beside factory photographs */}
      <HomeManufacturing />

      {/* 07 — RESULTS (HOME-07): Invertis feature, case rows, deployments */}
      <HomeResults />

      {/* 08 — CLOSING (HOME-08): statement, primary action, text routes */}
      <HomeClosing />
    </div>
  );
}
