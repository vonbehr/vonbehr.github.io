---
title: Projects
permalink: /en/projects/
locale: en
lang_alt_url: /projekte/
description: >-
  Technology and infrastructure projects by Florian von Behr at The Scope GmbH, including the migration from Maxwell Render to V-Ray and building cloud-rendering infrastructure.
---

Alongside day-to-day production work, I have driven several fundamental technology and infrastructure projects at The Scope GmbH – from replacing the studio's renderer and building a local and cloud-based render farm to introducing an end-to-end production pipeline. The following sections give an overview of the starting point, the approach and my role in each of these projects.

# Switching from Maxwell Render to V-Ray

## Starting point

For a long time, Maxwell Render was the central renderer in our production. With a growing number of animation jobs, however, the software increasingly reached its limits: render times for moving images in particular were becoming hard to justify economically. On top of that, there was little visible development on Maxwell, and the future of the software as a whole seemed uncertain. We therefore needed a sustainable alternative.

## Evaluation

To make the choice, I ran a structured evaluation comparing Arnold and V-Ray for Maya. The assessment covered licensing costs, look & feel, integration into existing workflows and render performance. Based on the results, we decided on V-Ray.

## Migration

I then planned and guided the transition of the production. This included defining new standards and workflows as well as comprehensive documentation to make the switch easier for the team. In parallel, the entire asset base was migrated to V-Ray – from the shader library and individual assets to complete sets.

# Render Farm & Deadline

With the move to V-Ray and the growing share of animation work, the need for render capacity grew as well. I specified the hardware configuration of the render nodes and installed both hardware and software. After evaluating several render farm managers, we chose Deadline, which I then introduced, configured and documented. Ongoing troubleshooting in production was also my responsibility.

## AWS Cloud Rendering

To handle peak loads flexibly, I extended the render farm with cloud-based compute capacity. After a test phase, I introduced and configured Deadline with render nodes based on AWS Spot Fleet, allowing render jobs to be offloaded to the AWS cloud when needed. Besides configuring the AWS environment, my responsibilities included continuous cost monitoring. More details, including the reporting tool I built for it, can be found on the [Development](/en/development/#cloud-rendering) page.

# Production Pipeline

## openPipeline

The first step towards a structured production pipeline was the introduction of [openPipeline](https://openpipeline.cc). I defined and documented standards and workflows and adapted the tool to the studio's requirements, particularly regarding file naming and project structure.

## OpenPype (now AYON) & ftrack

As requirements grew, we moved to [OpenPype](https://ayon.app), now AYON, as our pipeline tool and [ftrack](https://www.ftrack.com/en) as our project management platform.

At the core of the new system is a clearly defined publishing process: before assets are processed further, they pass a series of defined validations that ensure they meet the requirements. Only then is an immutable master version saved, on which all subsequent steps are based. This makes it clear at all times which version is being worked with.

I defined the underlying standards for file naming, folder structure and asset validation and configured OpenPype accordingly – from studio standards and the integration of the software we use to the plugins. I also wrote the documentation, trained my colleagues and handled troubleshooting in day-to-day operation. Towards the OpenPype developers, I was the point of contact for issues and brought our studio's requirements into the planning of future development.

## Dataprep workflow for automotive assets

Within the new pipeline, I developed a completely new dataprep workflow that prepares automotive data for further processing in our pipeline. Data is sorted semi-automatically, shaders are synchronized across projects and converted automatically. For quality assurance, I defined suitable validations and implemented them in OpenPype. To sign off on product accuracy, standardized renders are produced and automatically compiled into PDF documents – a reliable basis for internal and external reviews.
