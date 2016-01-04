---
layout: post
title:  "ACM Dev: Impressions and Thoughts"
date:   2015-12-13 13:30:26
author: Michael Peyton Jones
categories:
---

We attended the [ACM Dev](http://acmdev.org/) conference this year, which by
good fortune was happening in London! We'll be putting up our notes
shortly[^public], but this blog post will discuss some of the higher-level
considerations that came up as a result of the conference.

[^public]: We intend to make all of our notes and materials publically
    available, even if they're provisional or later revised.

## A hammer seeking nails

The first day of the conference was the GAIA (Global Access to the Internet for
All) workshop. There was a lot of good technical work at the workshop, and it
was encouraging to see empirical evaluations of the effectiveness of the
projects. However there was little discussion about whether the projects actually
improved welfare, or indeed whether they had an effect sustainably or
counterfactually.

This is probably to be expected from a workshop that is specifically about
extending internet access to all, but it was the first occurrence of a recurring
theme: as technologists, we are in danger of being the person with a hammer who
is looking for nails, without considering whether that is what is
currently most in need of attention.

We consider this to be a serious problem. Why *should* we focus on problems
that are addressable by technology (or, more narrowly, software)? Shouldn't we
look for the most pressing problems in any field, and then consider what we can
do about those? We're still thinking about what the implications are for our
strategy, and we'll discuss those in a later post.

## Start with the needs

When discussing the project, a common observation was that it can be very
difficult to accurately discern the needs of those on the ground. Arguably,
there is no substitute for actually living in Africa to become acquainted with
the needs of people who live there. Ken Banks, in particular, was even critical
of directed surveys - people will tell you what they think you want to hear,
and so in order to really find the problems you have to actually *observe* them
yourself. 

This is wise advice whenever you are starting a project - many successful
businesses are based on the needs that their founders saw, personally. And so
we would certainly agree that it's important to start from the needs of the
people you will actually be helping (rather than starting with your “hammer”).
But such knowledge may be transferrable. There are many people working in the
field, and it's unlikely that they are acting upon all (or even the most
pressing) of the problems they have observed. We should still expect to be able
to generate fruitful communication (and collaboration) between those people and
people who would be interested in implementing their suggestions. 

Furthermore, by aggregating this information we can start to evaluate and
prioritize possible courses of action. While being on the ground may be very
helpful for spotting *a* problem, it’s unlikely to lead you directly to the
*most important* problem. To discover that, we need to bring together the work
and observations of many people.

## Be realistic about the environment

Africa has astonishing mobile phone penetration - [almost
70%](http://www.pewglobal.org/2015/04/15/cell-phones-in-africa-communication-lifeline/)
of Africans have a mobile phone. But far fewer of them, only 15%, are
smartphones, and mobile internet is very expensive. So for an application to
have a broad reach, even if it is built on mobile technology it must be built
on the lowest common denominator. That means voice or SMS (or maybe
[USSD](https://en.wikipedia.org/wiki/Unstructured_Supplementary_Service_Data)),
and so while an internet-based application may be appealing, it may not be
realistic.

Other logistical challenges are simply unfamiliar to most Westerners. Africa
has [very low population
densities](http://opendataforafrica.org/UNWPP2015R/world-population-prospects-the-2015-revision)
compared to most of the developed world, and even a simple installation process
can be a huge problem if it is a two-day drive to the installation site.

Politics, as well, can prove a significant barrier to implementation. Many
developing countries have government-sponsored monopolies in certain areas, and
any attempt to undercut them may be viewed quite unfavourably. In general,
technology initiatives that empower the poor are likely to upset at least some
social power structures, and failure to consider the wider social consequences
of an intervention can doom it to eventual failure.

Once again, the problem here is knowledge. All of this information exists
already, but it is not accessible to the right people. We should expect to need
this information to succeed, but we should also be able to acquire it by
talking to people who already know it.

## Sustainability through business

The ICT4D community is very concerned with sustainability. Many of their
projects run with limited academic funding, and so amount to pilot projects that can
fizzle out after their term is complete. This is criticized as a
failure of sustainability - if the project only runs for a short time, then it
has not changed anything in the long run.

Pilot programs are certainly vital, especially in research. It may be
necessary to investigate and evaluate many options before the best solution is
found. However, once we've hit on a good solution, we want to implement it with
a long-term sustainable solution.

The best option seems to be to turn the program into an actual business.
Businesses are inherently sustainable as long as they are able to sustain their
profitability (and if they can't, perhaps the need for the program has passed).
Furthermore, they will naturally scale up successful interventions without the
need for additional donor funding (or if they do need funding, this can be
acquired through less constrained channels).

Some of the people we spoke to do work on spinning off their projects into
sustainable businesses, usually in collaboration with local partners. This could
be an opportunity for Western entrepreneurs to make themselves useful, either by
assisting existing spinoffs, or by taking over directly from the researchers.

Innovation in business models could also be very valuable by allowing more
programs to be feasible as businesses. Programs which have a high social impact
but are difficult to run as a for-profit business can only be implemented by
non-profits, with all the sustainability problems that that entails. If we can
expand the sphere of potential businesses we open up more opportunities.

## Why should we expect to be better than the poor themselves?

It's well known that people in developing countries are often astonishingly
entrepreneurial. They do very creative things with the resources available to
them, and often find niches for profitable businesses in remarkable places.

Furthermore, access to the internet and computing resources are also spreading.
That all adds up to a climate in which we might expect African entrepreneurs to
fill many of the needs that might be filled by a Western technologist. So we
should have good reasons to believe that we can supply a need better than the
local market, whether would do that with a novel business or a non-market
solution. Why do we think we can do better than the people on the ground?

This is a pertinent question, and in many cases if a niche hasn't been filled we
should take that as a tip that perhaps it's not as good an opportunity as we
thought, or that there is some obstacle which is currently invisible to us.

However, there are still things which Westerners have to offer. For one thing,
we have access to resources that the poor still do not, whether that be
capital, markets, greater pools of talent, knowledge, or just coordination.
There may well be high-impact opportunities in spreading access to these tools
(for example, running programming training courses), thus enhancing the ability
of locals to solve their own problems.

Secondly, many opportunities may have mixed benefits, in that while they are
profitable, they also have a large amount of positive spillover. The lack of
profitability can be because it is difficult to capture the value of the
program, perhaps because the beneficiaries are very distributed (as is common
with infrastructure projects), or because the value accrues in the longer-term
future (as may be the case with education programs). We should expect such
market failures to be relatively undersupplied relative to opportunities that
are more profitable. But from the point of view of the altruistic entrepreneur,
these are ideal opportunities, because positive externalities are also
desirable.

## Conclusion

It's clear that there's a lot we can learn from the ICT4D sector. We're
optimistic that we'll find some useful opportunities here, and we'll be writing
more about this area, as well as the implications for our strategy going forwards.
