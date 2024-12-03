import React from 'react';
import { render } from '@testing-library/react';
import CharacterRadarGraph from './CharacterRadarGraph';

describe('CharacterRadarGraph', () => {
    it('renders without crashing', () => {
        render(<CharacterRadarGraph />);
    });

    it('displays character names in the legend', () => {
        const character1 = { name: 'Character 1', capacities: { force: 10, intelligence: 8 } };
        const character2 = { name: 'Character 2', capacities: { force: 7, intelligence: 9 } };
        const { getByText } = render(<CharacterRadarGraph character1={character1} character2={character2} />);

        expect(getByText('Character 1')).not.toBeNull();
        expect(getByText('Character 2')).not.toBeNull();
    });

    it('displays correct data points for characters', () => {
        const character1 = { name: 'Character 1', capacities: { force: 10, intelligence: 8, durability: 6, energy: 5, speed: 7, fighting: 9 } };
        const character2 = { name: 'Character 2', capacities: { force: 7, intelligence: 9, durability: 8, energy: 6, speed: 5, fighting: 7 } };
        const { container } = render(<CharacterRadarGraph character1={character1} character2={character2} />);

        const radarPaths = container.querySelectorAll('.recharts-radar-polygon');
        expect(radarPaths.length).toBe(2);
    });

    it('handles empty capacities gracefully', () => {
        const character1 = { name: 'Character 1' };
        const character2 = { name: 'Character 2' };
        const { container } = render(<CharacterRadarGraph character1={character1} character2={character2} />);

        const radarPaths = container.querySelectorAll('.recharts-radar-polygon');
        expect(radarPaths.length).toBe(2);
    });
});