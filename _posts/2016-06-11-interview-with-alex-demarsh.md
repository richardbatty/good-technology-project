---
layout: post
title:  "Technology for detecting and managing disease outbreaks: an interview with Alex Demarsh"
date:   2016-06-11 12:00:00
author: "Michael Peyton Jones"
categories:
---

![Alex Demarsh](/assets/images/alex_demarsh.jpg)

*Alex Demarsh is a PhD student at McGill University’s [surveillance lab](http://mchi.mcgill.ca/about-us/surveillance/) and works as an epidemiologist at the [Public Health Agency of Canada](http://www.phac-aspc.gc.ca/index-eng.php).*

**What are you working on and how did you get involved?**

First I did a masters in epidemiology, and found a job in government. Then I
got swept up in the 2008-2009 H1N1 pandemic. It was a great start to my career
because that's what public health infrastructure is for - worldwide
emergencies. I had an idea about how the infrastructure should work, but the
reality was a real surprise. People were sharing data by emailing each other
Excel spreadsheets and getting faxes of handwritten forms. This experience got
me interested in data issues, what software can do, and the need to improve our
infrastructure around data sharing and managing surveillance and critical
incidence data. 

I had already been interested in programming and I built my skills further
through [software carpentry](http://software-carpentry.org/) and a coding
bootcamp. This taught me how to actually code and manage data properly. I
worked for a few years but thought I had some skills missing. I looked around
for opportunities and found the [surveillance lab at McGill
University](http://mchi.mcgill.ca/about-us/surveillance/). They do awesome
technology development as well as good epidemiology. They build systems for
public health practitioners for epidemic detection, often using medical records
data.

**What did you learn from your epidemiology training?**

We were taught lots of statistics, but not much on software or on data
management - how to use data that is not in a form that you can run analysis on.
The training used very clean data sets but out in the world, the data is messy.

**Do you see your work as more focussed on the risk from catastrophic pandemics or disease more generally?**

Pandemics are an obvious catastrophic risk, but I'm focussing on building good
infrastructure that could help with any level of public health crisis. There is
work to be done that would help with both pandemics and lower level outbreaks -
piping data systems together and automating them, removing humans from
error-prone steps. There's really low hanging fruit here because things like
emailing Excel spreadsheets are common.

**What is biosurveillance?**

Surveillance is the ongoing and systematic collection, analysis, and
dissemination of health data. All public health institutions do this. It
involves going out and collecting data on incidence or prevalence of disease, or
on risk factors or precursors to disease. Surveillance systems are useful for
early detection of anomalies so that we can act in response. It’s also used for
census purposes to look at the stability of disease rates over time and across
different regions so that we can decide whether to put more resources into
helping one set of people or another.

Within surveillance, biosurveillance is more focussed on computational tools
and early detection of outbreaks.

**What are the main parts of the infrastructure we need?**

We need interoperable systems that can talk to one another. We need to be able
to link together e.g. survey data, administrative data, environmental data, road
networks, and maybe
[vector](https://en.wikipedia.org/wiki/Vector_(epidemiology)) populations and
movements. One thing that makes this difficult is that data is often hard to
move between administrative units (such as states or provinces). This data
infrastructure would help us to predict the spread of disease and would support
decision making on how to handle an outbreak.

**Have there been any cases when better tech infrastructure for surveillance has been put to the test?**

Bluedot have done work using data from mass gatherings such as [there have been
exercises to test human component of outbreak management. These exercises
involve many different parts of the health system, and often use actors for
realism. Then during the exercise the people running it might call you up and
say something like “there's Ebola at Ottawa airport” or “the stockpile of
personal protective equipment isn't available” and you have to handle that
situation. Promoting more real world simulation could be good - it's underused.
There’s some similarities here with military exercises, and the military do have
some similar aims in that both they and the public health community have to do
emergency response.

**What's the mechanism for this infrastructure helping the world? Will better data infrastructure help with early detection or is it more about better handling of the later stage of an outbreak?**

A bit of both, although it’s more about the latter. Early warning is a major
goal of surveillance, but in reality the tech improvements we're talking about
are more useful for managing the main body of the outbreak thus minimising the
impact, not preventing it entirely.

**What kind of projects would you like to see? Where would you direct a wave of tech talent?**

The first thing that comes to mind is influenza. It would be useful to link
hospital electronic medical records systems to public health monitoring so that
the public health people can see what’s going on more easily. The public health
people could then quickly detect an uptick of influenza cases. I’m not sure why
this hasn't happened yet but it’s probably some combination of a lack of
technical skills and it not seeming like a priority. There are a few isolated
systems that do something similar, but not anything close to national let alone
international scale.

In general, influenza is a good disease to work on as a lot of people die of it
each year, there's a risk of an influenza pandemic, and there’s a lot of data on
it.

One thing a lot of people are looking at is point of care diagnostics - tools
you can use to diagnose without a lab. This is especially useful in areas where
you can't access a lab.

One issue biosurveillance people think about a lot is the fact that doctors are
told 'When you see hoofprints think horses not zebras'. But in biosurveillance
we're looking for those zebras, unusual cases that could be the beginning of
something bigger. Given the way the health system works, the main way of
diagnosing these rare events will be through a doctor's brain, but they're
trained to underweigh these kinds of rare event. With my work I'm trying to
create computable case definitions so you can analyse them and pick up things
that the doctors may not have. The disease I'm looking at is unusual so
clinicians might not to pick up on it.

It would also be good to make it easier to communicate results of surveillance
an analysis to non-technical and non-scientific people who have to make
decisions. We need better tools for communicating data effectively to people in
government who make decisions on how to respond. Often agencies have to search
manually through data when there would be ways to make that process a lot
quicker using better software. Decision-makers tend to have medical advisors,
but maybe they could have technical advisors to help them with this.

**What kinds of data sources are promising, other than medical records?**

* Weather and landscape data when studying vector-borne diseases. This data
  exists because it’s collected for other purposes.
* Human movement data. For example, [Bluedot’s](http://bluedot.global) central
  data source is about the global air transport network.
* Data from the media. For example Canada’s Public Health Agency developed
  [GPHIN (Global Public Health Intelligence
  Network)](https://en.wikipedia.org/wiki/Global_Public_Health_Intelligence_Network)
  takes feeds of media articles in seven languages, does some automatic
  translation and keyword detection, and then sends them to human analysts who
  then send them off to groups that might be interested. It's got a lot of
  potential and it got people excited around the time of
  [SARS](https://en.wikipedia.org/wiki/Severe_acute_respiratory_syndrome)
  because they detected something was going on in China well before the Chinese
  admitted it. One of main things [Epidemico](http://epidemico.com/) does is
  curate and analyse media feeds to detect epidemic and outbreak information and
  pharmaceutical adverse event detection.

**Is there a community around using technology for public health?**

There is a [Journal of Public Health Informatics](http://ojphi.org/index), but
there is a relatively small awareness of tech for public health as a thing.

**Where can we look for more information on biosurveillance?**

* The [Handbook of
  Biosurveillance](http://www.amazon.com/Handbook-Biosurveillance-Michael-M-Wagner/dp/0123693780)
  is the best overview and has good detail on types of data available.
* [The EcoHealth Alliance](http://www.ecohealthalliance.org/) looks at emerging
  infections and does some technology/data science work.
* Nathan Wolfe’s [Metabiota](http://metabiota.com/) and [Global
  Viral](http://www.globalviral.org/).
* The World Health Organisation’s [Global Outbreak and Response
  Network](http://www.who.int/ihr/alert_and_response/outbreak-network/en/).
  They’re involved in international coordination, connecting early detection to
  response, although it’s more focussed on human systems than technology.
* [Real-Time Outbreak and Disease Surveillance](https://www.rods.pitt.edu/site/)
  at the University of Pittsburgh. They are big on outbreak detection
  technology.
* Harvard’s [Department of Biomedical
  Informatics](https://dbmi.hms.harvard.edu/) and especially John Brownstein who
  was the original head of Epidemico.
* McGill University’s [surveillance
  lab](http://mchi.mcgill.ca/about-us/surveillance/)
* UC Davis’ [Laboratory in Infectious Disease
  Ecology](http://www.vetmed.ucdavis.edu/foley_lab/) which does work on on
  veterinary and emerging disease
* [Bluedot](http://bluedot.global/).
* [Epidemico](http://epidemico.com/).
