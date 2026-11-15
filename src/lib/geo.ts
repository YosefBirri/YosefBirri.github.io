// Build-time cartography: every map on the site is rendered to static SVG
// from Natural Earth (world-atlas) and US Census (us-atlas) geometry.
import { geoEqualEarth, geoOrthographic, geoAlbersUsa, geoPath, geoGraticule10, geoCircle } from 'd3-geo';
import { feature, mesh } from 'topojson-client';
import world110 from 'world-atlas/countries-110m.json';
import usStates from 'us-atlas/states-10m.json';

const w: any = world110;
const us: any = usStates;

export const land = feature(w, w.objects.land) as any;
export const countries = feature(w, w.objects.countries) as any;
export const borders = mesh(w, w.objects.countries, (a: any, b: any) => a !== b);
export const states = feature(us, us.objects.states) as any;
export const nation = feature(us, us.objects.nation) as any;
export const stateBorders = mesh(us, us.objects.states, (a: any, b: any) => a !== b);
const usa = countries.features.find((f: any) => f.properties.name === 'United States of America');

/** Wide locator for the homepage: North America to the Horn of Africa. */
export function overviewMap(width: number, height: number) {
  const extent = {
    type: 'Feature',
    geometry: {
      type: 'MultiPoint',
      coordinates: [
        [-128, 52],
        [-128, 22],
        [56, 22],
        [56, 2],
        [-60, 58],
      ],
    },
  };
  const projection = geoEqualEarth().fitExtent(
    [
      [12, 12],
      [width - 12, height - 12],
    ],
    extent as any,
  );
  const path = geoPath(projection);
  return {
    sphere: path({ type: 'Sphere' } as any) ?? '',
    graticule: path(geoGraticule10()) ?? '',
    land: path(land) ?? '',
    borders: path(borders) ?? '',
    usa: path(usa) ?? '',
    project: (lonlat: [number, number]) => projection(lonlat) as [number, number],
  };
}

/** Small orthographic globe centred on a study area. */
export function globeInset(lonlat: [number, number], size: number) {
  const projection = geoOrthographic()
    .rotate([-lonlat[0], -lonlat[1] * 0.6])
    .fitExtent(
      [
        [2, 2],
        [size - 2, size - 2],
      ],
      { type: 'Sphere' } as any,
    );
  const path = geoPath(projection);
  const ring = geoCircle().center(lonlat).radius(4)();
  return {
    sphere: path({ type: 'Sphere' } as any) ?? '',
    graticule: path(geoGraticule10()) ?? '',
    land: path(land) ?? '',
    ring: path(ring) ?? '',
    point: projection(lonlat) as [number, number],
  };
}

/** Small US inset for national-scale projects. */
export function usInset(width: number, height: number) {
  const projection = geoAlbersUsa().fitExtent(
    [
      [2, 2],
      [width - 2, height - 2],
    ],
    nation,
  );
  const path = geoPath(projection);
  return { nation: path(nation) ?? '', borders: path(stateBorders) ?? '' };
}
