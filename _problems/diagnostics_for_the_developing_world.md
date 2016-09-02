---
layout: page
title: Diagnostics for the developing world
tracking_name: diagnostics
description: Diagnostics are important for successful treatment, but are often unavailable in resource-poor settings
skills: [Biotechnology, Electrical engineering, Embedded software]
image: /assets/images/malaria_rapid_diagnostic_test.jpg
image_source: https://commons.wikimedia.org/wiki/File:Malaria_rapid_diagnostic_test_3.jpg
---

## The problem

The 50 Breakthroughs report [summarises the problem](https://ligtt.org/sites/all/files/page/50BTs-Consolidated.pdf#page=163):

  > Accurate and timely diagnosis increases the likelihood of successful treatment. Diagnostics play a particularly vital role in clinical scenarios where patients present with non-specific symptoms that are common to multiple diseases, or in situations where the specific strain of the disease must be identified to determine the correct treatment regimen. Since many infectious diseases are asymptomatic, diagnostics are necessary for screening asymptomatic patients. This helps prevent long term complications from untreated infections and decreases the rate of disease transmission within communities. Diagnostics are also essential for monitoring treatment effectiveness for chronic diseases like diabetes. Indeed, diagnostics inform and influence 60-70% of healthcare decisions.

  > Unfortunately, the diagnostics currently on the global market have a number of serious shortcomings for use in resource-poor settings. Most reliable diagnostics require clinical infrastructure, and need to be administered by highly trained healthcare workers; as such, they are not suitable for point-of-care use. Most of the simpler diagnostics that have been deployed on a large scale are proving to be inadequate due to low sensitivity or specificity, and the inability to determine the drug susceptibility of the infecting pathogen. Today, 60% of people in developing countries have access to only poorly equipped, peripheral health clinics. This means that their diagnoses are often unreliable, or they have to incur high out-of-pocket expenses at distant facilities with better equipment and more trained staff.

  > To meet the needs of these patients, a new generation of innovative diagnostics need to be developed. These tests must be portable and lightweight, capable of operating without grid electricity, be tolerant to high ambient temperature and humidity, be able to withstand physical shock while being transported, and be simple enough to be used by minimally trained healthcare workers at the point-of-care. There are 4 technological breakthroughs which can make that possible.

See the pages after this quote for more detail about the parts of the problem and weaknesses of current methods.

## What you could build

### Tests for specific diseases

A test for a globally important disease such as HIV or malaria could have huge impact (see the impact section below). Choosing which one to focus on will depend in large part on your skills and the tractability of the problem.

There are different needs and challenges for each major disease (table copied from [here](https://ligtt.org/sites/all/files/page/50BTs-Consolidated.pdf#page=167)):

![image alt text](/assets/images/diagnostics_specific_diseases_0.png)
![image alt text](/assets/images/diagnostics_specific_diseases_1.png)
![image alt text](/assets/images/diagnostics_specific_diseases_2.png)
![image alt text](/assets/images/diagnostics_specific_diseases_3.png)
![image alt text](/assets/images/diagnostics_specific_diseases_4.png)
![image alt text](/assets/images/diagnostics_specific_diseases_5.png)
![image alt text](/assets/images/diagnostics_specific_diseases_6.png)

### Components or tools common to many tests

It may be possible to accelerate progress on diagnostic tests for important diseases by creating better technology for use in many of them.

#### Improve a diagnostic method

There are [several types of diagnostics](https://ligtt.org/sites/all/files/page/50BTs-Consolidated.pdf#page=166):

* **Cell-based assays**, which detect whole cells such as those that count white blood cells for monitoring HIV/AIDS. There are now handheld devices using this method.
* **Immunoassays**, which use antibodies to detect protein markers of a disease. There has been good progress on developing low cost versions of these tests for use in the developing world.
* **Nucleic acid testing**, detect pathogen DNA or RNA. These tests are usually complex and expensive, which limits use in the developing world.
* **Clinical chemistry assays**, which measure a variety of blood chemistry parameters. There is very little use in developing world point of care, although it would be useful because test accuracy reduces when you transport samples to central laboratories.
* **Hematology tests**, which measure hemoglobin and hematocrit to test for anemia and measure blood coagulation. There are several point-of-care technologies for this.

Making one of these more accessible could help fight several diseases.

#### Make other generally-applicable improvements

The following are requirements for diagnostics in minimal infrastructure settings from [this report](http://www.bvgh.org/Portals/0/Reports/2010_the_diagnostics_innovation_map.pdf#page=22). You could work on making progression one of these for one or many diagnostic tests.

![image alt text](/assets/images/requirements_in_minimal_infrastructure_settings.png)

One additional idea would be to Improve sample collection. For example, [Orphidia](http://www.orphidia.com/) is a company that makes diagnoses from a drop of blood, meaning that a trained phlebotomist is not required.

### More advice on what to build

* The 50 Breakthroughs Report’s [section on diagnostics](https://ligtt.org/sites/all/files/page/50BTs-Consolidated.pdf#page=163)
* FIND’s [Target Product Profiles](http://www.finddx.org/target-product-profiles/)
* BVGH’s [Diagnostics innovation map](http://www.bvgh.org/Portals/0/Reports/2010_the_diagnostics_innovation_map.pdf)

## Impact

### Scale of potential impact

[Tayoun et al. (2014)](http://ajcp.oxfordjournals.org/content/ajcpath/141/1/17.full.pdf) summarise the findings of a Gates Foundation and RAND Corporation study that brought together experts in specific diseases, technology development, and disease modelling to estimate the impact of affordable diagnostics for specific diseases. Their estimates were measured in DALYs, a metric used by the World Health Organisation that can be thought of as one lost year of healthy life (more explanation on this metric can be found [here](https://www.givingwhatwecan.org/post/2014/03/measuring-benefits/) and [here](http://www.who.int/healthinfo/global_burden_disease/metrics_daly/en/)). Their results are summarised in the following graph, which shows the estimated disability adjusted life years that would be saved per year by the introduction of accessible diagnostics.

![image alt text](/assets/images/diagnostics_dalys_saved.png)

We haven’t looked closely yet at the methodology behind this estimates, although given the source, we think it would be difficult to do better than these estimates without a great deal of domain-relevant expertise.

These potential impacts are huge. However, it’s important to remember that your project’s expected impact will likely be significantly lower for several reasons:

* You may only solve a part of the problem or only get distribution in a small geographic area

* There is a chance of failure, as in any startup or R&D venture

* If you didn’t do your project, accessible diagnostic tools would eventually get developed. The difference you make is in bringing forward this date.

These estimates also help with choosing what to build - judging purely by these estimates it looks like STDs would be the most important diseases to develop diagnostics for. However, which disease you choose will also depend on other factors such as your skills and the business model for your project.

### Tractability

#### Technical tractability

Our guess is that the technical challenge required in developing accessible diagnostic tests is significant because there are [multiple barriers](http://ajcp.oxfordjournals.org/content/ajcpath/141/1/17.full.pdf#page=4) to developing accessible diagnostic technology such as temperature control, access to clean water, difficulty of obtaining some types of samples, and the cost and weight of diagnostic hardware.

#### Deployment tractability

The 50 breakthroughs report rates the difficulty of deployment for three of their [suggested diagnostics breakthroughs](https://ligtt.org/sites/all/files/page/50BTs-Consolidated.pdf#page=176) as ‘extremely challenging’ and the remaining one as ‘complex’. These include difficulties such as regulation, training users, a fragmented market, low existing demand, and a lack of clear business model.

### Neglectedness

We don’t have a good idea of how neglected the specific area of accessible diagnostics is, but it isn’t completely neglected. The Gates Foundation are making [grants](https://www.google.com/search?q=gates+foundation+diagnostics) in this area and there are some companies and nonprofits working on it (see the list at the end of this overview).

In general though, work on developing world problems is very neglected compared to work on developed world problems.

### What’s the bottleneck?

It only makes sense to start a project if the bottleneck on impact is a lack of good projects and the tech they develop, rather than, for example, a lack of available funding. We don’t know how much this field is constrained by lack of entrepreneurial projects.

## Next steps for if you’re interested

Read the reports linked to in the ‘further reading’ section below to get an idea of the parts of the problem. As you get deeper into this, talk to experts in the field for more information.

As you’re learning about the problem and possible solutions, focus on areas where you think you and your founders’ technical skills give you a particular [edge](https://medium.com/entrepreneur-first/finding-your-edge-41d3950b4506). An example of this would be John Lewandowski, who was a PhD student in mechanical engineering and invented a [mechanical device to diagnose malaria](http://money.cnn.com/2016/06/03/technology/malaria-blood-test-device/). It makes more sense for him to exploit his knowledge of mechanical engineering than for him to try to do develop a more biotech-based diagnostic test.

## Further reading

* The 50 Breakthroughs Report’s [section on diagnostics](https://ligtt.org/sites/all/files/page/50BTs-Consolidated.pdf#page=163)
* FIND’s [Target Product Profiles](http://www.finddx.org/target-product-profiles/)
* [Democratizing molecular diagnostics for the developing world](http://ajcp.oxfordjournals.org/content/ajcpath/141/1/17.full.pdf)
* The Gates Foundation and RAND Corporation’s [report](http://www.nature.com/nature/journal/v444/n1s/) on improved diagnostic technologies for the developing world, including models of impact for several important diseases
* [The Diagnostics Innovation Map](http://www.bvgh.org/Portals/0/Reports/2010_the_diagnostics_innovation_map.pdf)
* The Gates Foundation’s [grants](https://www.google.com/search?q=gates+foundation+diagnostics) for diagnostic test development

## Organisations in point of care diagnostics

* [Spartan Bio](http://www.spartanbio.com/) - DNA testing in a 10cm^3 cube
* [Biomeme](http://www.biomeme.com/)  - Smartphone-based DNA detection
* [Orphidia](http://www.orphidia.com/) - Test results from single drop of blood
* [Seventh Sense Biosystems](http://7sbio.com/) - blood collection without venipuncture
* [Diseased Diagnostic Group](http://www.diseasediagnostic.com/) - Malaria diagnosis
* [Abaxis](https://www.abaxis.com/) - point of care blood analysers
* [Axela](http://www.axela.com/) - protein, DNA, and RNA analysis
* [BioHelix](http://www.biohelix.com/) - nucleic acid diagnostics
* [Cellabs](http://www.cellabs.com.au/) - tropical disease diagnostics
* [Daktari Diagnostics](http://daktaridx.com/) - testing for various viruses, including Hepatitis C and HIV in both developing and developed world
* [Diagnostics for All](http://dfa.org/) - diagnostic devices for the developing world
* [Global Scientific Solutions for Health](http://www.gsshealth.com/) - consultancy for disease detection and testing networks
* [BioFire](http://www.biofiredx.com/) - symptom-driven diagnostics
* [InBios](http://www.inbios.com/) - immunodiagnostics for infectious diseases
* [Alere](http://www.alere.com/) - point of care molecular diagnostics, including HIV
* [Microsens Biotechnologies](http://microsensbp.com/) - extraction of pathogens from various samples
* [Omega Diagnostics Group](http://www.omegadiagnostics.com/) - various point of care diagnostics
* [Quanterix](http://www.quanterix.com/) - immunodiagnostics
* [Quidel](https://www.quidel.com/) - various diagnostics
* [Siemens Healthcare Diagnostics](https://www.healthcare.siemens.com/laboratory-diagnostics) - various diagnostics
* [Sierra Molecular](http://sierramolecular.com/) - sample preservatives to avoid need for refrigeration
* [SomaLogic](http://www.somalogic.com/) - protein based diagnostics
