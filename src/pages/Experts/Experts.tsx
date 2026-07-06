import { ExpertsHero } from "../../components/experts/ExpertsHero";
import { ExpertsFilters } from "../../components/experts/ExpertsFilters";
import { ExpertsGrid } from "../../components/experts/ExpertsGrid";

export function Experts() {
  return (
    <>
      <ExpertsHero />
      <ExpertsFilters />
      <ExpertsGrid />
    </>
  );
}