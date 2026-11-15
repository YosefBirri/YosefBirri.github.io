---
title: Where Seattle builds housing
summary: A spatial analysis of 24,351 residential building permits that combines kernel density, Getis-Ord Gi* hot spot statistics and tract-level choropleths to show where new housing is concentrating in Seattle and how that pattern shifted after 2013.
place: Seattle, Washington
coords: [-122.33, 47.61]
locator: world
period: Permits from 2002 to 2024, analyzed in spring 2026
categories: ['GIS & Spatial Analysis', 'Data Science & Statistics']
tools: [ArcGIS Pro, Kernel density, Getis-Ord Gi*, Choropleth mapping, Jenks classification, Projections]
metric: { value: '24,351', label: 'residential permits analyzed' }
featured: true
order: 3
status: published
context: University of Washington, geography coursework
facts:
  - { label: Study area, value: 'City of Seattle, by permit point and census tract' }
  - { label: Data, value: 'City of Seattle residential permits (finaled and issued), census tracts' }
  - { label: Coordinate system, value: 'NAD83 StatePlane Washington North (FIPS 4601), meters' }
  - { label: Software, value: 'ArcGIS Pro' }
  - { label: My role, value: 'Sole analyst: data preparation, analysis, cartography and report' }
metrics:
  - { value: '24,351', label: 'permit records' }
  - { value: '75 m', label: 'kernel density cell size' }
  - { value: '355', label: 'net new units at the strongest Gi* hot spot feature' }
  - { value: '2', label: 'periods compared, 2002–2013 and 2014–2024' }
resumeLine: 'Analyzed 24,351 Seattle residential building permits in ArcGIS Pro using kernel density estimation (weighted by net housing units), Getis-Ord Gi* hot spot analysis and tract-level choropleths, identifying statistically significant development clusters in Downtown, South Lake Union and the U-District and a shift toward concentrated growth after 2013.'
---

## Overview

Seattle has added housing quickly over the past two decades, but not evenly. Planners, housing advocates and developers all need the same basic answer: where is new housing actually being built, how concentrated is it, and is the pattern changing?

I used the City of Seattle's residential permit records, 24,351 permits that have been issued or finaled, to map where development happens. I measured whether the clusters are statistically meaningful and compared the city before and after 2013.

## The problem

A map of permit points shows activity, but it hides two things that matter for policy. First, one permit can add one unit or several hundred, so counting permits alone misrepresents where housing supply grows. Second, a visual cluster is not evidence of a real pattern; dense areas can look clustered by chance. The analysis had to account for project size and test whether the clusters are significant.

## Objectives

- Locate the areas with the highest concentration of residential permits, both by permit count and by net housing units.
- Test whether high-development areas form statistically significant hot spots rather than visual clusters.
- Compare the spatial pattern of permits issued in 2002–2013 with those issued from 2014 onward.
- Relate development intensity to land area, land value and lot size at the census-tract level.

## Data and preparation

The primary dataset is the City of Seattle's residential permit layer: point features for permits that have been issued or finaled. It was first published on January 5, 2020, was last updated on October 22, 2024, and holds 24,351 records. The fields that drove the analysis were `YEAR_ISSUE` (year of issue), `NET_UNITS` (net change in housing units) and `EXPIRE_DAT` (permit expiration, stored as a date). Census tracts provided the areal units for the choropleth maps.

Exploring `YEAR_ISSUE` showed a positively skewed distribution, with the most permits issued in 2016. That is consistent with Seattle's mid-2010s construction boom, when the city led the country in active tower cranes. The skew mattered later when choosing a classification method.

I projected everything to NAD83 StatePlane Washington North (FIPS 4601, meters). Kernel density depends on distance between points, and a local state plane projection keeps distance distortion far lower than a national or web projection would at city scale.

## Methodology

**Kernel density surfaces.** I built density surfaces from the permit points to show where development concentrates. After testing several cell sizes I chose 75 m: smaller cells exaggerated the noise of individual permits, and larger ones blurred neighborhood-scale patterns. I produced two versions, one unweighted (each permit counts once) and one using `NET_UNITS` as the population field, so that a 300-unit tower counts as 300 units of housing rather than one permit.

**Classification.** I classified the density surfaces with Jenks natural breaks (7 classes). Because the data is strongly skewed, natural breaks groups similar values together better than equal intervals would. The trade-off is that the class breaks are specific to this dataset, so the maps are harder to compare with maps of other places or years.

**Temporal comparison.** I split the permits at 2013 and built separate density surfaces for 2002–2013 and for 2014 onward.

**Hot spot analysis.** I ran Getis-Ord Gi* to test whether high values cluster more than chance would predict. Gi* compares each feature's neighborhood to the city-wide distribution and returns a z-score: high positive values are statistically significant hot spots, and strongly negative values are cold spots. I applied it to net housing units and to building value.

**Tract-level choropleths.** Points and density surfaces show where activity is, not how intense it is relative to land. I aggregated net housing units to census tracts and normalized them by tract area. I then compared land value with lot size to see how development intensity relates to land cost.

## Results

The kernel density, hot spot and choropleth maps from the ArcGIS Pro project go here. Map exports are being added.

## Key findings

- **Development is concentrated, not citywide.** The strongest clusters are Downtown and South Lake Union, with secondary clusters in Ballard, Rainier and Delridge.
- **Weighting by housing units changes the picture.** With `NET_UNITS` as the weight, Downtown and South Lake Union dominate even more, because large apartment buildings add many units at a single location.
- **The pattern tightened after 2013.** Permits issued in 2002–2013 are spread across several neighborhoods (Ballard, Downtown, Rainier, Delridge). From 2014 onward the pattern is more concentrated, and Ballard stands out as a persistent cluster in both periods.
- **The hot spots are statistically significant.** Gi* identified hot spots in Westlake, Pike, South Lake Union, the Central District, the U-District and Northgate, and cold spots in lower-density parts of Ballard and Lake City. The feature with the highest Gi* z-score added 355 net units. The largest single gain in net units was at 1120 Denny Way, the Onni South Lake Union development.
- **Intensity follows land value.** Normalized by area, the highest net-unit densities are in First Hill, South Lake Union, the Central District and the U-District. Tracts with high land values and small lots (Downtown, South Lake Union, Pike) are where the densest development happens; southern and far-northern tracts with cheaper land and larger lots develop more slowly and more spread out.

## Applications

- **Urban planners** can use the hot spot map to see where growth is already concentrated and where infrastructure, transit and school capacity may need to follow.
- **Housing policy analysts** can compare the net-unit maps with zoning to see which neighborhoods are absorbing new supply and which are not.
- **Developers and lenders** can read the land value and lot size relationship as a signal of where dense projects have been feasible.

## Limitations

- Permits are not completions. The layer combines issued and finaled permits, so some issued projects may never be built.
- Kernel density results depend on cell size and search radius. I chose the cell size deliberately; a sensitivity check on the search radius would strengthen the result.
- Natural breaks classes are specific to this dataset, which limits comparison with other cities or years.
- Tract-level results are subject to the modifiable areal unit problem: different boundaries could produce somewhat different patterns.
- The two periods are not equal in length (12 years versus about 11), and the second includes the 2016 peak, so the comparison describes shape rather than volume.

## Future work

- Repeat the hot spot analysis separately for each period to test whether the clusters themselves moved.
- Overlay zoning and transit station areas to test how much of the concentration follows upzoning.
- Rebuild the analysis in Python (GeoPandas and PySAL) so it can be rerun as the city updates the permit data.
- Publish an interactive version of the hot spot map.

## Resources

The ArcGIS Pro project and report are available on request. A public repository with the methods, data dictionary and map exports is in progress.
