---
layout: post
title:  "ICT for international development: an interview with Sam Sudar"
date:   2016-04-29 18:35:26
author: Richard Batty
categories:
---
**Tell us a bit about your how you got into ICT for Development (ICTD).**

[I’m a PhD student](https://samsudar.com/) at the University of Washington in Seattle. I’m doing my thesis on leveraging web tech on poorly connected regions and this is the theme throughout everything I do.

I started in the tech for development group working on [Open Data Kit](https://opendatakit.org/) - a platform to help researchers and NGOs collect and manage data. The first version, which is widely used, is a way to use Excel to specify a form in native Android that looks a bit like a web form. This makes it easy to create a form and collect data from it. It’s used in over 100 countries and the Red Cross used it extensively after the Haiti earthquake. I was involved in [Open Data Kit 2.0](https://opendatakit.org/use/2_0_tools/) which has the same functionality but in JavaScript and HTML to make more it more customizable. I’m not as involved in that now, but the paper on [simplifying mobile deployments in low resource settings](https://samsudar.com/static/sudar_2015_duces.pdf) that I presented at the [London ICTD conference](http://acmdev.org/) was motivated by that work. It came out of dealing with researchers who I often felt tried to overcomplicate things.

Last summer I interned at Google working in the Chrome for emerging regions group.

<!--more-->

A couple of weeks ago I was in Peru working with researchers who have a medical boat which goes up some of the Amazonian rivers to provide medical care for remote communities. I built an app that allows community agents in these remote communities to submit Open Data Kit forms via SMS. It turned out that they preferred WhatsApp to SMS and were talking directly to the doctors using it. That was working much better and the users were buying into it a lot more. So I was down there assessing cell signal and then this week I built a new version of the app that uses WhatsApp rather than SMS.

**What do you think of the argument that it might be higher impact to use older technologies because remaining opportunities involving old technology may not get as much attention because they’re unfashionable?**

I agree and the work I’ve done thus far is not the bleeding edge - more like novel ways to use existing technologies. However, there are people who do more complicated things. For example [Shaddi Hasan](http://www.cs.berkeley.edu/~shaddi/) started [Endaga](https://www.endaga.com/) which sets up cell phone towers in remote places like Papua, Indonesia and they recently got bought by Facebook.

**What do you think is neglected in ICTD? Where would you direct resources?**

Not sure I have an answer, but a broad thing I’ve noticed is that the bigger problems are understanding how to use existing technology. Many of the existing problems that global health researchers have are not things that need new applications to solve. It’s more that they don’t have a good sense of what’s possible and what’s an easy way to do things, and even if they had an idea of that they wouldn’t know how to go about doing it.

It would be good if you could set up a website that provides step-by-step instructions on how to solve common problems in international development with technology. For example, ‘If you need to do data collection, here are the components and here’s how you set them up.’ Data collection is particularly amenable to this because you don’t need a programmer. As long as you know the tools to use and are computer literate and you could piece it together. Perhaps you could have instructions for a bunch of other common problems like this.

**Why don’t people in development know what’s possible in tech and why don’t they hire tech people?**

People in international development often value involvement of tech beyond the added value that tech brings. If they have a project and they think they could involve tech, that makes it sexier. The decision to involve technology is more of a knee-jerk reaction than something that comes after thinking ‘What do we really need technology for?’

Also, there is a shortage of people who have a good breadth of technical skills to be able to put all the parts of a solution together and to be able to advise on what is difficult and what is easy.

**Why aren’t those people in development organisations?**

I don’t know whether or not those kinds of people are being hired. But I know it’s expensive to do anything involving code and so often only the biggest organisations can afford it and these big organisations are less inclined to open-source their work and document what they did.

I think people often don’t know how to apply technology - it’s can be a bit of a hammer looking for a nail. There are cases like data collection where it works well, but other cases where it doesn’t work so well - such as when people build one-off applications. People don’t think ‘If only we had an app to do this’ because they don’t know what they need. Tech can be helpful but it’s not the missing link.

On the Open Data Kit message board there is a mix of people. Some people have well thought-out questions. And then there’s other people who don’t know how to get started because they need basic IT support and it’s hard to do that remotely. It’s also often hard to get a sense of what people want from tech. There is often disagreement within the organisation about what is wanted. It’s then very difficult to come in and solve their problems with technology because they don’t know what they want. Rarely do people have a problem that is well-specified. It’s more like ‘There is something that is hard for us, how can we make this easier’.

If the Good Technology Project had something where people could submit a request for help, that would be useful. It would need to filter out people who are not serious. But if you force people to put some effort then you could have tech people respond. That’s missing more than building code. For example, in Peru they had stopped using WhatsApp because every 3 months if you don’t upgrade WhatsApp it locks you out until you upgrade. Everyone using the app thought it was broken. I was baffled - I was expecting to be surprised, but I was surprised even more because it said clearly what the problem was.

**What do you think of the approach of academia to ICTD as compared to other groups?**

I am not thrilled with the academic approach. There are often a lot of throwaway prototypes and overreaching claims. It’s a weird space because people are doing work trying to solve real problems but they aren’t bound to deliver anything.

It’s rare to find a project that actually productizes a prototype that a paper was published about. Most people don’t have the resources or time to productize it and it’s really hard to do. It’s hard to release a project that is based on an academic project.

The alternative to that is a paper that may or may not work. I think if you don’t release the code you say you ran I’m suspicious. Especially in ICTD you have a problem where the paper says something works but you don’t actually know that. For example, people are really into SMS reminders at the moment. There are projects, but it takes more decision making and work than people realise. Just because a paper shows one can do something, doesn’t mean you can do it easily. Often people believe it can be done effortlessly and someone else can maintain it for free.

**Who does the best work in this field?**

I’ve heard great things about [Microsoft Research India](http://research.microsoft.com/en-us/labs/india/). They have a good reputation and seem to do stuff that does work. My favorite project of theirs one to make sure TB patients actually took their pills. They printed codes in pill containers so you when you push out the pill you can see the code and text it in.

I like what the Chrome team at Google does (although I’m biased) with [data saver](https://chrome.googleblog.com/2015/11/a-new-way-to-save-data-with-chrome-on.html). You can turn on an option in Chrome for Android that will send all of your traffic to a server they run then it compresses the data and prefetches things which speeds it up and lowers data use. They’ve got [a paper about it](http://research.google.com/pubs/pub43447.html). If this was an academic project there would be lots of implementation problems, but Google has managed to solve them.

Consultants can also do well because they have the resources to do projects that they know they can meet the requirements of. It’s very expensive though.

**What are the career paths in this field?**

The biggest thing is getting experience with groups that think they need some sort of technological assistance. It would be good if there was a way to put NGOs in touch with tech people, even just to answer questions on what kind of solution is needed for the NGO’s problems.

**Why doesn’t this communication between NGOs and tech people happen?**

Global health researchers usually don’t think to turn to the web and try to find someone to help. Often researchers don’t realise that they don’t need something complicated and just need someone to walk through things. The flip side of this is the Gates Foundation who will just hire a consultant and they can pay, and the consultants expect to get paid. But I think there would be tech people happy to do voluntary work.

I think there would be more to be gained by tech people giving the lay of the land to NGOs rather than building an app. There’s more to go wrong in building an app and often the NGOs don’t know what they need.
