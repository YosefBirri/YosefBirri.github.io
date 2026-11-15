---
title: "Predicting across states, years and a border"
summary: "Regression models trained on a 50-state, multi-year panel to predict a state-level outcome for an unseen year, then adapted to Canadian provinces that share only a subset of the features."
place: "United States and Canada"
locator: none
period: "Autumn 2025"
categories: ["Machine Learning", "Geospatial Data Science", "Data Science & Statistics"]
tools: ["Python", "scikit-learn", "XGBoost", "Random forest", "Ridge and lasso", "Feature engineering", "Transfer learning"]
metric: { value: "5 models", label: "compared for the US-to-Canada transfer" }
featured: true
order: 2
status: in-progress
context: "INFO 371, Advanced Methods in Data Science, University of Washington"
team: "Group project with two classmates"
---

Verified so far: XGBoost with state and lag features on 2010 to 2015 data; the random forest had the lowest error (MAE 0.81) of five models for the Canadian provinces. The model-selection step is being re-run with time-based validation before results are published.
