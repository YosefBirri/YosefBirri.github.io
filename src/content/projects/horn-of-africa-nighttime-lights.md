---
title: "Nighttime light change across the Horn of Africa"
summary: "Annual VIIRS nighttime-light composites for 2018 and 2024, built in Google Earth Engine, to compare how brightness changed in Addis Ababa and major cities in neighboring countries, read alongside what satellite light can and cannot reveal about urban growth."
place: "Addis Ababa and the Horn of Africa"
coords: [38.74, 9.03]
locator: world
period: "2018 to 2024, analyzed in June 2026"
categories: ["Geospatial Data Science", "GIS & Spatial Analysis"]
tools: ["Google Earth Engine", "JavaScript", "VIIRS Day/Night Band", "Raster change detection", "Time series"]
metric: { value: "2018 to 2024", label: "annual radiance composites compared" }
featured: true
order: 1
status: in-progress
context: "University of Washington, remote sensing coursework"
---

Verified so far: VIIRS Day/Night Band monthly composites (about 464 m resolution) were averaged into annual means for 2018 and 2024 and differenced, and an annual radiance time series was exported for each city. Addis Ababa shows a clear increase; Khartoum declines. City-level values are being added from the exported data.
