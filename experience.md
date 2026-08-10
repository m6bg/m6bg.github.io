---
layout: default
title: experience
permalink: /experience/
---
<main class="page-col experience-col">
  <h1 class="page-title">experience</h1>
  {% for entry in site.data.experience %}
  <section class="experience-entry">
    <h2 class="experience-org">{{ entry.org }}</h2>
    <div class="experience-roles">
      {% for role in entry.roles %}
      <div class="experience-role-entry">
        <div class="experience-top">
          <h3 class="experience-role">{{ role.title }}</h3>
          <span class="experience-dates">{{ role.dates }}</span>
        </div>
        {% if role.description and role.description != "" %}
        <p class="experience-description">{{ role.description }}</p>
        {% endif %}
      </div>
      {% endfor %}
    </div>
  </section>
  {% endfor %}
</main>
