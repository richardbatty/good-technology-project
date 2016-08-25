---
layout: post
title: "Data science competitions for good: an interview with Isaac Slavitt from DrivenData"
date:   2016-05-15 20:20:00
author: Mario Pinto
categories:
---

![The DrivenData team](/assets/images/drivendata.jpg)

*Isaac Slavitt (right) is a co-founder and data scientist at [DrivenData](https://www.drivendata.org/). Also pictured are co-founders Greg Lipstein (left) and Peter Bull (center). DrivenData hosts data science competitions that focus on social impact. The team also [works directly with organizations](http://drivendata.co/), helping them harness their data in order to work smarter and carry out their missions more effectively. We talked to Isaac to know more about how they are applying data science for doing good.*

**How did DrivenData get started? What are you trying to do and what are your future plans?**

DrivenData actually started off as a grad school project. My co-founders and I wanted to work on a research project in machine learning that was technically interesting but that also had some kind of social impact aspect, and we actually found it really hard to find relevant problems with available data. We knew there were many others in the field who were excited about that type of work, so we had the idea to build a platform specifically targeted at running data science competitions for social good. We started talking to nonprofits early on and the initial response was very positive, so we ended up launching our [first for-prize competition](https://www.drivendata.org/competitions/4/) soon after the platform was up and running.

With DrivenData, we have two main goals. The first is to get more people interested in applying their data skills to relevant problems, and providing an easy and fun way to start getting involved. The other goal is direct impact: working with mission-driven organizations to help them frame their data challenges, making those available to the data science community on our platform whenever possible, and helping them integrate the results back into their workflow. Of course, not all problems that nonprofits face fit neatly into a predictive modeling context, so our team also does consulting work for mission-driven organizations directly.

As far as future plans go, on the competition front there is a lot of overhead work in getting a competition ready, particularly if the organization we are working with doesn’t have data scientists on staff. We have been thinking about how to scale the competition preparation part of the platform, and in the medium term we want to figure out how to make this a more repeatable, streamlined process. In terms of the direct consulting work that we do, it has been really rewarding to work with organizations on their data and technology challenges and we plan to continue doing that.

**How do you factor-in impact in the work you do? Can you give us an example of a high-impact project you have undertaken?**

Working on projects with real impact is very important to us. We tend to think about the impact of the competitions we run in two ways:

One is the direct impact of the solution for the organization that we’re partnering with. We take that into account both while refining the problem as well as in finding partners to work with that we think will be able to benefit the most from winning solutions. Sometimes that means that they’re really interested in what insights they can learn from the models in carrying out their mission, and sometimes it means finding organizations who are in a good position to actually implement the winning solutions.

The second way we look at the platform’s impact is in raising awareness about the opportunities that exist in applying data science for good, and by providing people a platform to get involved. One metric for this is the participation level in our competitions. We get participants from all over the world, and the number of competitors and submissions has been increasing with each competition. Wherever possible, we try to look for ways to keep the data and problem open for people to keeping working on and learning from even after the main competition has ended. That’s one of the reasons we generally require winners to release their solutions under an open source license.

A good example of a high impact project is our [“Keeping It Fresh” competition](http://blog.drivendata.org/2015/11/06/keeping-it-fresh-results/). The basic setup there is that the City of Boston has a large number of restaurants but only a limited number of food inspectors. The idea of this competition was that there must be a better method for choosing restaurants to inspect than sending the inspectors out at random, so the task was to find predictive signal using a large dataset of Yelp reviews in order to flag restaurants that could be potential food safety violators. One of the fun things about this competition was that, for their final submissions, competitors were actually making food violations predictions about the next few months — so it wasn’t just hold-out data, they were actually testing their models by trying to predict future events.

After the competition, there was a [paper](http://www.hbs.edu/faculty/Pages/item.aspx?num=50429) published about it by economists at Harvard who concluded that these methods could make cities 30-50% more efficient in their use of food inspectors’ time. That’s a nice win for public health and public sector effectiveness. Even better, the same methodology could be applied to other cities as well, which could act as a multiplier for the impact of this work.


**What led you to choose the competition format as opposed to hackathons and/or volunteering?**

What interested us about the competition format is that it scales globally because of the way it is structured. This format is particularly well suited for complex problems that could benefit from a large number of people trying out a large number of different approaches. For some really hard problems, particularly involving [NLP](https://en.wikipedia.org/wiki/Natural_language_processing) or computer vision, it’s great to have hundreds of people trying thousands of different approaches to feature selection, model tuning, and so forth—far more than any one team could try in a reasonable amount of time.

The limitation of the format is that not all problems can be framed as competitions. For example, there are tons of really important problems that organizations face where the data doesn’t fit neatly into a statistical modeling question, or where the dataset is not large enough, or where they are looking for more open ended research or systems development. These problems are often better tackled through volunteering, and there are some fantastic organizations out there like [DataKind](http://www.datakind.org) who facilitate working directly with organizations.

**What factors do you consider while selecting partners to work with?**

There are three main considerations for selecting partners to work with: The first and most important is that the proposed problem should be interesting to participants and have a high potential for impact. The second is the technical and data maturity level of the organization. Third and equally important is having data-savvy people in the organization that could take the winning entry and integrate it into their workflow, or at least develop a plan for extracting value from the end products.

We are open to working with partners throughout the world — in fact our most recent [competition](https://www.drivendata.org/competitions/9/) centered on an organization based in Morocco.

**Based on your knowledge of applying data science for social good, do you see any problem or area that is neglected?**

I think just being able to capture and store the right data in general, and then data quality in particular, is a hard problem for many nonprofits. That challenge definitely isn’t specific to the social sector, but in our experience many organizations are struggling to keep up with the private sector in that respect. Even large organizations with permanent IT staff typically lack dedicated software engineers or data scientists, and the existing staff may not have the bandwidth to spend a lot of time thinking about how they generate and warehouse information. Taken together, that means that building systems and processes for data collection and preservation is often not an option.

Those data issues may not seem pressing on any given day because the nonprofit staff are busy working on the primary mission, but at some point they are probably going to want to learn from their data, and the missed opportunities happening right now are going to make that difficult.

The field will continue to get more mature and I think there are going to be more and more data scientists wanting to work with nonprofits which is great news, but five years down the line if organizations don’t have the right data or if the data has serious quality and consistency issues then they may find themselves starting from scratch. Since many nonprofits could use some help on this front, here’s a big opportunity for data practitioners to get involved right now.

**What advice do you have for someone wanting to use data science and software skills for good?**

Given the growing popularity of data science in recent years and the resulting surge in demand, nonprofits are finding it difficult to compete in hiring full time staff from that talent pool. That also means there are lots of great opportunities for people with the desire to help, and it isn’t necessary to know the latest machine learning algorithms to contribute — many organizations have a lot to gain even through relatively simple automation of their day to day processes, so there is huge opportunity for data scientists and software engineers of all skill levels. For example: at many nonprofits, basic projects like setting up a data collection pipeline would be a big win since that would enable them to apply more advanced techniques in the future.

The best way to get involved is by volunteering directly with nonprofits, volunteering through organizations such as [DataKind](http://www.datakind.org) or [Code For America](https://www.codeforamerica.org/), or by participating in competitions like the ones on [our platform](https://www.drivendata.org/). There is also still plenty of room in this space for new organizations that adopt one or a mix of the prevailing models, whether that is volunteer driven consulting, fee-based consulting, or online crowdsourcing.

Finally, I would encourage people to look locally. There is a lot of activity happening around data science for good in most cities, in the form of Meetups, DataKind chapters, conferences, and so on. But even if there aren’t many events in your area, there is almost certainly a nonprofit nearby that would love some help with their technical or data challenges. Even if you are just getting started in the field, you may be able to make a surprisingly meaningful contribution with your skills.

---
You can sign up [here](https://www.drivendata.org/accounts/signup/) to be notified about and participate in DrivenData competitions.
