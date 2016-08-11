---
layout: post
title:  "Biosurveillance shallow overview"
date:   2016-08-05 14:34:00
author: Richard Batty
categories:
---

## The problem
Natural pandemics have historically killed millions of people and caused widespread suffering [REF]. And they’re on the rise [^infectious disease rise][MORE REF].

[^infectious disease rise]: http://www.pnas.org/content/107/50/21701.full.pdf#page=1
“Infectious disease events, especially those resulting from novel emerging pathogens, have significantly increased over the past few decades, possibly as a result of alterations in various environmental, biological, socioeconomic, and political factors (1–4). Trends in globalization, including expansion in international travel and trade, have also extended the reach and increased the pace at which infectious diseases spread (5, 6), prompting the need for more rapid outbreak detection and reporting along with improved transparency to minimise the burden on global health and the economy”

As well as the risk of natural pandemics, advances in biotechnology[^advances in biotechnology] have opened up the possibility of novel diseases being accidentally or deliberately released, and these could cause more harm[^more harm] than natural diseases.

[^advances in biotechnology]: Nouri and Chyba, 450 …...

[^more harm]: http://globalprioritiesproject.org/wp-content/uploads/2015/04/Unprecedented-Technological-Risks.pdf#page=6, Nouri and Chyba, 464

## A solution: Technology to detect and monitor disease outbreaks
If outbreaks can be detected earlier, preventive action can have more effect [REF]. And once an epidemic is underway, data about its spread can help with further efforts [REF]

The field of biosurveillance aims to help this with technology[^what is biosurveillance]. It has two aims[^two aims of biosurveillance]:
Early event detection - detect as early as possible events that suggest a public health emergency
Situational awareness - to help response to outbreak and monitor it’s progress

[^what is biosurveillance]:http://faculty.nps.edu/rdfricke/docs/Encyclopedia%20Article.pdf#page=2
“Homeland Security Presidential Directive 21 (HSPD-21) defines biosurveillance as “the process
of active data-gathering with appropriate analysis and interpretation of biosphere data that
might relate to disease activity and threats to human or animal health — whether infectious,
toxic, metabolic, or otherwise, and regardless of intentional or natural origin — in order to
achieve early warning of health threats, early detection of health events, and overall situational
awareness of disease activity” (U.S. Government, 2007).”

http://goodtechnologyproject.org/blog/2016/06/11/interview-with-alex-demarsh
“Surveillance is the ongoing and systematic collection, analysis, and dissemination of health data. All public health institutions do this. It involves going out and collecting data on incidence or prevalence of disease, or on risk factors or precursors to disease. Surveillance systems are useful for early detection of anomalies so that we can act in response. It’s also used for census purposes to look at the stability of disease rates over time and across different regions so that we can decide whether to put more resources into helping one set of people or another.

Within surveillance, biosurveillance is more focussed on computational tools and early detection of outbreaks.”

[^two aims of biosurveillance]: http://faculty.nps.edu/rdfricke/docs/Encyclopedia%20Article.pdf#page=2

## What you could build
### The parts of a typical biosurveillance system[^parts]



[^parts]: http://faculty.nps.edu/rdfricke/docs/Encyclopedia%20Article.pdf#page=7

### Data collection
#### Syndromic surveillance

Syndromic surveillance[^syndromic surveillance] systems look for leading indicators of a disease outbreak. Unlike traditional health surveillance, which relies on confirmed cases of a disease, such a system may look for an increase in individuals presenting with sore-throats in a particular area.[^syndromic vs traditional] In theory, this can help spot an outbreak before the traditional methods do.

[^syndromic surveillance]: http://faculty.nps.edu/rdfricke/docs/Encyclopedia%20Article.pdf#page=2 ‘“the ongoing, systematic collection, analysis, interpretation, and application of real-time (or near-real-time) indicators of diseases and outbreaks that allow for their detection before public health authorities would otherwise note them” (Sosin, 2003). Thus, syndromic surveillance is epidemiologic surveillance restricted to using leading indicators of disease. In particular, syndromic surveillance is based on the notion of a syndrome which is a set of non-specific pre-diagnosis medical and other information that may indicate the release of a bioterrorism agent or natural disease outbreak.’

[^syndromic vs traditional]: http://faculty.nps.edu/rdfricke/docs/Encyclopedia%20Article.pdf#page=2
#### Participatory surveillance
It’s possible to gather data from individuals about health around them. Flu near you is an example of this.
#### Web-scraping
Scraping data from online news sites and social media could catch outbreaks before traditional methods. For example, HealthMap noted a “mystery hemorrhagic fever” spreading in Guinea nine days before the WHO issued its first statement on the outbreak. This was found from an online news source.

### Data management

### Analysis
Detecting an outbreak of disease is not enough. You also need to be able to judge whether this outbreak is likely to be important or not. While HealthMap did log early cases of Ebola, they don’t seem to have predicted the scale of the epidemic any earlier than anyone else. Historically, predicting the importance of an outbreak has been very difficult.[^failed disease prediction]

[^failed disease prediction]: The Signal and the Noise, …….[FORMAT] describes several failed disease predictions such as overestimating the importance of the 1976 Fort Dix H1N1 flu outbreak and the 2009 H1N1 outbreak; and underestimating the growth of the US HIV epidemic in the 80s and 90s.

### Reporting
Reporting reporting reporting
## Others working on this

## Evaluation of project impact
### Current system performance
#### Detection
WHO’s outbreak detection speed has improved. Median time from outbreak start to outbreak discovery and has decreased over time, from 29.5 days in 1996 to 13.5 days in 2009.[^WHO discovery times]

[^WHO discovery times]: http://www.pnas.org/content/107/50/21701.full.pdf#page=2
“Looking at our milestones of interest, median time from outbreak start to outbreak discovery and to public communication about the outbreak generally decreased over time, from 29.5 d [95% CI (13.5; 59.0)] in 1996 to 13.5 d [95% CI (3.5; 44.5)] in 2009 for outbreak discovery, and from 40 d [95% CI (23.5; 80)] in 1996 to 19 d [95% CI (11.5; 56.5)] in 2009 for public communication (Fig. 3). With respect to when the revised IHR went into force in 2007, median time from outbreak start to outbreak discovery was 28 d [95% CI (20; 32)] before their implementation and 7 d [95% CI (4; 14)] after implementation, whereas for public communication, it was 33 d [95% CI (29; 40)] and 23 d [95% CI (17; 43)], respectively.
These lags from outbreak start also varied by geographic region, with the longest delays, on average, in Africa [30 d, 95% CI (24; 41), and 43 d, 95% CI (31; 51), for outbreak discovery and public communication, respectively] and the Eastern Mediterranean [29 d, 95% CI (10; 44), and 39 d, 95% CI (20; 54)], and the shortest delays in South-East Asia [16.5 d, 95% CI (6; 34), and 15 d, 95% CI (11; 38)] and the Western Pacific [4 d, 95% CI (3; 7), and 18.5 d, 95% CI (12.5; 30.5)] (Fig. 4)”

The existing system uses [UNKNOWN]
