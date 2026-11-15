// Skills shown on the homepage. Each linked skill must match a tool listed in at
// least one project's frontmatter, so every claim points to work that shows it.
export const skillGroups: { name: string; skills: string[]; alsoUsed?: string }[] = [
  {
    name: 'GIS and remote sensing',
    skills: [
      'ArcGIS Pro',
      'ArcGIS Network Analyst',
      'Google Earth Engine',
      'VIIRS Day/Night Band',
      'Kernel density',
      'Getis-Ord Gi*',
      'Overlay analysis',
      'Bivariate choropleth',
    ],
    alsoUsed: 'QGIS, ArcGIS Online, ArcGIS StoryMaps, Sentinel-2 and Landsat imagery',
  },
  {
    name: 'Machine learning',
    skills: ['scikit-learn', 'XGBoost', 'Random forest', 'k-nearest neighbors', 'PyTorch', 'Speech embeddings', 'Transfer learning'],
  },
  {
    name: 'Programming and data',
    skills: ['Python', 'pandas', 'JavaScript', 'Feature engineering', 'Model evaluation'],
    alsoUsed: 'R and the tidyverse, SQL, Git',
  },
  {
    name: 'Web mapping and infrastructure',
    skills: ['MapLibre GL JS', 'Mapbox GL JS', 'Node.js', 'PostgreSQL', 'REST API', 'MapTiler geocoding'],
  },
];
