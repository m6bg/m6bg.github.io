---
layout: default
title: experience
permalink: /experience/
---
<main class="page-col experience-col">
  <h1 class="page-title">experience</h1>
  {% for entry in site.data.experience %}
  <section class="experience-entry">
    <div class="experience-top">
      <h2 class="experience-role">{{ entry.role }}</h2>
      <span class="experience-dates">{{ entry.dates }}</span>
    </div>
    <p class="experience-org">{{ entry.org }}</p>
    {% if entry.description and entry.description != "" %}
    <p class="experience-description">{{ entry.description }}</p>
    {% endif %}
  </section>
  {% endfor %}
</main>
