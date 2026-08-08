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
<script>
  // Hovering a project navigates straight to its detail page (per design spec).
  document.querySelectorAll('.project-link').forEach(function (link) {
    link.addEventListener('mouseenter', function () {
      window.location.href = link.href;
    });
  });
</script>
