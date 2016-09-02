---
layout: page
name: Biosurveillance
tracking_name: biosurveillance
description: Identifying disease outbreaks quickly can vastly reduce the harm that they do and tracking can aid efforts to tackle them
skills: [Data science, Data visualisation, Web development, Public health, Epidemiology]
image: /assets/images/snow_cholera_map.jpg
image_source: https://commons.wikimedia.org/wiki/File:Snow-cholera-map.jpg
comments: true
---

## The problem

Natural pandemics have historically killed millions of people and caused widespread suffering.

Advances in biotechnology[^advances_in_biotechnology] have opened up the possibility of novel diseases being accidentally or deliberately released, and these could cause more harm[^more_harm] than natural diseases.

## Biosurveillance as a possible solution

The field of biosurveillance aims to help with detecting and tracking outbreaks of disease[^what_is_biosurveillance] and is one component of improving biosecurity[^biosurveillance_for_biosecurity]. It has two aims:[^two_aims_of_biosurveillance]

* Early event detection - detect as early as possible events that suggest a public health emergency
* Situational awareness - to help response to outbreak and monitor it’s progress

## What you could build

### The parts of a typical biosurveillance system

To work out what you might build, it’s helpful to see the parts of a typical biosurveillance system:[^parts]

![image alt text](/assets/images/parts_of_biosurveillance_system.png)

We’ll explore what you could build for each part.

### Data collection

#### Syndromic surveillance

Syndromic surveillance[^syndromic_surveillance] systems look for leading indicators of a disease outbreak. Unlike traditional health surveillance, which relies on confirmed cases of a disease, such a system may, for example, look for an increase in individuals presenting with sore-throats in a particular area.[^syndromic_vs_traditional] In theory, this can help spot an outbreak before the traditional methods do.

#### Data from medical records

Data from hospital medical records could be pulled into a more centralised public health monitoring system at local, national, or international levels. This could be used to detect changes in patterns of diseases that are diagnosed in the records. Alternatively, the symptoms mentioned in the records could be analysed to detect misdiagnoses of rare diseases that could have a big impact on public health. As [Alex Demarsh says](http://goodtechnologyproject.org/blog/2016/06/11/interview-with-alex-demarsh) "One issue biosurveillance people think about a lot is the fact that doctors are told ‘When you see hoofprints think horses not zebras’. But in biosurveillance we’re looking for those zebras, unusual cases that could be the beginning of something bigger."

However, it could be very difficult to access this data both because of regulations for patient privacy and because the IT systems that hospitals use may be very difficult to work with.

#### Participatory surveillance

It’s possible to gather data from individuals about health around them. [Flu near you](https://flunearyou.org/) is an example of this. If you build a system that can consistently get good data in different regions, you could then use it to enhance surveillance in high-risk areas or during an emergency. For example, [the WHO helped set up](http://www.irinnews.org/report/95878/philippines-texting-help-and-health-disaster-response) an SMS-based surveillance system for use during and after typhoons.

#### Web-scraping

Scraping data from online news sites and social media can catch outbreaks before traditional methods. An example of this is the [GPHIN system](http://www.who.int/csr/alertresponse/epidemicintelligence/en/), which proved useful during the [SARS](https://en.wikipedia.org/wiki/Severe_acute_respiratory_syndrome?oldformat=true) outbreak. According to [this paper](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2687026/) "GPHIN’s information was ≈2–3 days ahead of the official WHO report of confirmed and probable cases worldwide."

#### Data on factors that can affect spread

For example, human movement data can help with predicting the spread of many diseases; weather and landscape data can help when studying vector-borne diseases. [^context_data] For example, [this paper](https://www.researchgate.net/profile/Seth_Britch2/publication/221495666_Environmental_Biosurveillance_for_Epidemic_Prediction_Experience_with_Rift_Valley_Fever/links/554a3a3c0cf21ed21358e0c8.pdf) describes a system designed to warn of climate conditions favourable for an outbreak of the mosquito-born Rift Valley fever. As another example, much of [Bluedot’s work](http://bluedot.global/work) is on the spread of diseases (such as flu, ebola, and dengue) via global airline transport.

### Data management

#### Connect together multiple data sources

[Alex Demarsh says](http://goodtechnologyproject.org/blog/2016/06/11/interview-with-alex-demarsh) "We need interoperable systems that can talk to one another. We need to be able to link together e.g. survey data, administrative data, environmental data, road networks, and maybe vector populations and movements. One thing that makes this difficult is that data is often hard to move between administrative units (such as states or provinces). This data infrastructure would help us to predict the spread of disease and would support decision making on how to handle an outbreak."

### Analysis

Detecting an initial outbreak of disease is not enough. You also need to be able to judge whether a report indicates an outbreak, and if there’s an outbreak whether it’s likely to be important. Historically, predicting the importance of an outbreak has been very difficult.[^failed_disease_prediction]

### Reporting

#### Better tools for communicating to decision-makers

[Alex Demarsh mentions](http://goodtechnologyproject.org/blog/2016/06/11/interview-with-alex-demarsh) that "It would also be good to make it easier to communicate results of surveillance an analysis to non-technical and non-scientific people who have to make decisions. We need better tools for communicating data effectively to people in government who make decisions on how to respond. Often agencies have to search manually through data when there would be ways to make that process a lot quicker using better software"

## Which diseases should you concentrate on?

To make progress, you’ll need to start by working on a disease that has outbreaks often enough that you can test your system. Ideally you’d also work with a disease that is globally important, which will often mean diseases that are most prevalent in the developing world. See [Chan et al. 2010](http://www.pnas.org/content/107/50/21701.full.pdf) for data on outbreak frequency in different regions.

One good option would be flu. [According to Alex Demarsh](http://goodtechnologyproject.org/blog/2016/06/11/interview-with-alex-demarsh)  "In general, influenza is a good disease to work on as a lot of people die of it each year, there’s a risk of an influenza pandemic, and there’s a lot of data on it."

Alternatively, instead of working on detecting outbreaks of currently important diseases, you could work on detecting new diseases. According to [this paper](http://cid.oxfordjournals.org/content/50/12/1636.full) "The majority of all human infectious diseases and pandemics have originated through the cross-species transmission of microorganisms from animals to humans, overwhelmingly in the Old World." An example of this is HIV - according to the same paper “It is now generally accepted that the hunting and butchering of wild nonhuman primates in the early 20th century led to the introduction of simian immunodeficiency virus into the human population, giving rise to our modern day HIV pandemic.” If we had detected the early spread of HIV or the even earlier transmission of simian immunodeficiency virus into humans we would have been decades earlier than the [discovery of AIDS in the 80s](https://www.aids.gov/hiv-aids-basics/hiv-aids-101/aids-timeline/). [This TED talk](https://www.ted.com/talks/nathan_wolfe_hunts_for_the_next_aids?language=en) is a useful introduction to this issue.

## Commercial viability

We’re not sure how easy it is to build a viable business in this area. There are existing companies such as [Epidemico](http://www.epidemico.com/), [BlueDot](http://bluedot.global/), and [Metabiota](http://metabiota.com/) but it’s unclear from reading their websites how their business model works. A good next step would be to reach out to these companies and talk to them about their businesses and where they think there are gaps.

## Evaluation of potential impact

Based on the Open Philanthropy Project’s [research on the topic](http://www.openphilanthropy.org/focus/global-catastrophic-risks/biosecurity), we think that the biosecurity and pandemic preparedness is an important cause area. However, we’re unsure of how effective biosurveillance is at tackling this and have not looked into this question in depth. A discussion of the effectiveness of biosurveillance can be found [here](http://faculty.nps.edu/rdfricke/docs/Encyclopedia%20Article.pdf#page=7).

As well as looking at empirical work on the impact of biosurveillance, you could look at existing modelling of interventions to prevent disease spread to see if biosurveillance systems could affect some of the model parameters.

## Others working on this

* Governmental and intergovernmental organisations such as the [WHO](http://who.int/en/), [CDC](http://www.cdc.gov/), and the [Public Health Agency of Canada](http://www.phac-aspc.gc.ca/)
* Companies such as [Epidemico](http://www.epidemico.com/), [BlueDot](http://bluedot.global/), and [Metabiota](http://metabiota.com/)
* Academics such as in [Harvard’s Department of Biomedical Informatics](https://dbmi.hms.harvard.edu/), [McGill’s Surveillance lab](http://mchi.mcgill.ca/about-us/surveillance/), [UC Davis’ Infectious Disease Ecology lab](http://www.vetmed.ucdavis.edu/foley_lab/), and the [University of Pittsburgh’s Real-Time Outbreak and Disease Surveillance system](https://www.rods.pitt.edu/site/)
* Nonprofits such as [Global Viral](http://www.globalviral.org/) and [EcoHealth Alliance](http://www.ecohealthalliance.org/)

## Other resources

* Open Philanthropy Project’s [cause report on biosecurity](http://www.openphilanthropy.org/research/cause-reports/biosecurity), including the conversation notes linked to in the [sources section](http://www.openphilanthropy.org/research/cause-reports/biosecurity#sources)

* 80,000 Hours problem [profile on biosecurity](https://80000hours.org/problem-profiles/biosecurity/)
* Our interview with [Alex Demarsh](http://goodtechnologyproject.org/blog/2016/06/11/interview-with-alex-demarsh)
* This [encyclopedia article](http://faculty.nps.edu/rdfricke/docs/Encyclopedia%20Article.pdf#page=7) on biosurveillance
* The [Handbook of Biosurveillance](http://www.amazon.co.uk/Handbook-Biosurveillance-Michael-M-Wagner/dp/0123693780/)

## References

Beckstead, Nick, Niel Bowerman, Owen Cotton-Barratt, William MacAskill, Seán Ó hÉigeartaigh, and Toby Ord. "Unprecedented Technological Risks" Global Priorities Project, 2014. Accessed August 17, 2016. [http://globalprioritiesproject.org/wp-content/uploads/2015/04/Unprecedented-Technological-Risks.pdf](http://globalprioritiesproject.org/wp-content/uploads/2015/04/Unprecedented-Technological-Risks.pdf)

Chan, Emily H., Timothy F. Brewer, Lawrence C. Madoff, Marjorie P. Pollack, Amy L. Sonricker, Mikaela Keller, Clark C. Freifeld, Michael Blench, Abla Mawudeku, and John S. Brownstein. "[Global Capacity for Emerging Infectious Disease Detection](http://www.pnas.org/content/107/50/21701.full)." *Proceedings of the National Academy of Sciences* 107, no. 50 (December 14, 2010): 21701–6. doi:10.1073/pnas.1006219107.

Fricker, Ronald D. "[Biosurveillance: detecting, tracking, and mitigating the effects of natural disease and bioterrorism.](http://faculty.nps.edu/rdfricke/docs/Encyclopedia%20Article.pdf)" Wiley Encyclopedia of Operations Research and Management Science (2011).

Keller, Mikaela, Michael Blench, Herman Tolentino, Clark C. Freifeld, Kenneth D. Mandl, Abla Mawudeku, Gunther Eysenbach, and John S. Brownstein. "[Use of Unstructured Event-Based Reports for Global Infectious Disease Surveillance](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2687026/)." *Emerging Infectious Diseases* 15, no. 5 (May 2009): 689–95. doi:10.3201/eid1505.081114.

Nouri, Ali, and Christopher F. Chyba. "Biotechnology and biosecurity." Global catastrophic risks 1 (2008): 444.

Pike, Brian L., Karen E. Saylors, Joseph N. Fair, Matthew LeBreton, Ubald Tamoufe, Cyrille F. Djoko, Anne W. Rimoin, and Nathan D. Wolfe. "[The Origin and Prevention of Pandemics](http://cid.oxfordjournals.org/content/50/12/1636.full)." *Clinical Infectious Diseases* 50, no. 12 (June 15, 2010): 1636–40. doi:10.1086/652860.

Silver, Nate. The signal and the noise: Why so many predictions fail-but some don't. Penguin, 2012.

## Footnotes

[^advances_in_biotechnology]:
    Nouri and Chyba, 2008:

    > Biotechnological power is increasing exponentially, reminiscent of the increase in computing power since the invention of electronic computers. The co­ founder of Intel Corporation, Gordon Moore, pointed out in 1965 that the number of transistors per computer chip - a measure of how much computation can be done in a given volume - has doubled roughly every 18 months (Moore, 1965). This exponential increase in computing power, now called 'Moore's Law', has continued to hold in the decades since then (Lundstrom, 2003) and is the reason that individuals now have more computing power available in their personal computers than that was available only to the most advanced nations only decades ago. Although biotechnology's exponential lift off began decades after that of computing, its rate of increase, as measured, for example, by the time needed to synthesize a given DNA sequence, is as fast or faster than that of Moore's Law (Carlson, 2003). Just as Moore's Law led to a world of personal computing and home appliance microprocessors, so biotechnological innovation is moving us into a world where the synthesis of DNA, as well as other biological manipulations, will be increasingly available to small groups of technically competent and even individual users.

    > There is already a list of well-known experiments - and many others that have received less public attention - that illustrates the potential dangers intrinsic to modern biological research and development. We review several examples of these in some detail below, including: genetic manipulations that have rendered certain viruses far more deadly to their animal hosts (Jackson et al., 2001); the synthesis of polio virus from readily purchased chemical supplies (Cello et al., 2002) - so that even if the World Health Organization (WHO) succeeds in its important task for eradicating polio worldwide, the virus can be reconstituted in laboratories around the world; the reduction in the time needed to synthesize a virus genome comparable in size to the polio virus from years to weeks; the laboratory re-synthesis of the 1918 human influenza virus that killed tens of millions of people worldwide (Tumpey et al., 2005); the discovery of 'RNA interference', which allows researchers to turn off certain genes in humans or other organisms (Sen et al., 2006); and the new field of 'synthetic biology', whose goal is to allow practitioners to fabricate small 'biological devices' and ultimately new types of microbes (Fu, 2006).

[^more_harm]:
    [Beckstead et al. 2014](http://globalprioritiesproject.org/wp-content/uploads/2015/04/Unprecedented-Technological-Risks.pdf#page=6):

    > pressures from natural selection limit the destructive potential of pathogens. Synthetic biology can overcome these natural limits, allowing pandemics of unprecedented scale. Particularly worrying is a combination of high lethality, high infectiousness, and long incubation periods: properties that can occur individually in nature, but would cause a global catastrophe if combined."

    Also see (Nouri and Chyba, 2008)

[^what_is_biosurveillance]:
    [Fricker 2011](http://faculty.nps.edu/rdfricke/docs/Encyclopedia%20Article.pdf#page=2):

    > Homeland Security Presidential Directive 21 (HSPD-21) defines biosurveillance as "the process of active data-gathering with appropriate analysis and interpretation of biosphere data that might relate to disease activity and threats to human or animal health — whether infectious, toxic, metabolic, or otherwise, and regardless of intentional or natural origin — in order to achieve early warning of health threats, early detection of health events, and overall situational awareness of disease activity" (U.S. Government, 2007).

    [Interview with Alex Demarsh](http://goodtechnologyproject.org/blog/2016/06/11/interview-with-alex-demarsh):

    > Surveillance is the ongoing and systematic collection, analysis, and dissemination of health data. All public health institutions do this. It involves going out and collecting data on incidence or prevalence of disease, or on risk factors or precursors to disease. Surveillance systems are useful for early detection of anomalies so that we can act in response. It’s also used for census purposes to look at the stability of disease rates over time and across different regions so that we can decide whether to put more resources into helping one set of people or another.

    > Within surveillance, biosurveillance is more focussed on computational tools and early detection of outbreaks.

[^biosurveillance_for_biosecurity]:
    During [a conversation](http://files.givewell.org/files/conversations/Inglesby%2010-2-13%20(public).pdf) on biosecurity with Open Philanthropy Project, Tom Inglesby, M.D., Chief Executive Officer and Director, University of Pittsburgh Medical Center (UPMC) Center for Health Security mentions the following two areas as needing future work:

    > Stronger international disease surveillance systems with better interconnection and more	updated technologies.

    > Public health systems that can use electronic medical records to detect patterns in	 disease and to manage outbreaks.

[^two_aims_of_biosurveillance]: [Fricker 2011](http://faculty.nps.edu/rdfricke/docs/Encyclopedia%20Article.pdf#page=4)

[^parts]: [Fricker 2011](http://faculty.nps.edu/rdfricke/docs/Encyclopedia%20Article.pdf#page=7)

[^syndromic_surveillance]:
    [Fricker 2011](http://faculty.nps.edu/rdfricke/docs/Encyclopedia%20Article.pdf#page=2):

     > "the ongoing, systematic collection, analysis, interpretation, and application of real-time (or near-real-time) indicators of diseases and outbreaks that allow for their detection before public health authorities would otherwise note them" (Sosin, 2003). Thus, syndromic surveillance is epidemiologic surveillance restricted to using leading indicators of disease. In particular, syndromic surveillance is based on the notion of a syndrome which is a set of non-specific pre-diagnosis medical and other information that may indicate the release of a bioterrorism agent or natural disease outbreak.

[^syndromic_vs_traditional]: [Fricker 2011](http://faculty.nps.edu/rdfricke/docs/Encyclopedia%20Article.pdf#page=2)

[^context_data]: [Interview with Alex Demarsh](http://goodtechnologyproject.org/blog/2016/06/11/interview-with-alex-demarsh)

[^failed_disease_prediction]: Nate Silver's book *The Signal and the Noise* describes several failed_disease_predictions such as overestimating the importance of the 1976 Fort Dix H1N1 flu outbreak and the 2009 H1N1 outbreak; and underestimating the growth of the US HIV epidemic in the 80s and 90s.
