---
layout: default
title: portfolio
permalink: /portfolio/
---
<main class="page-col portfolio-col">
  {% assign sorted_projects = site.projects | sort: 'order' %}
  {% for project in sorted_projects %}
  <a class="project-link" href="{{ project.url | relative_url }}">{{ project.title }}</a>
  {% endfor %}
</main>
