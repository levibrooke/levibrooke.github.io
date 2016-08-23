---
title: Home
text-color: 
layout: default
---

<h1>Digital strategist and front-end web designer and developer based in Honolulu, Hi.</h1>
<section class="writing-block">
    <h4>Latest Posts</h4>
    <ul>
        {% for post in site.posts limit:4 %}
        <li>
            <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
            <time datetime="{{ post.date }}">{{ post.date | date: '%b %-d' }}</time>
        </li>
        {% endfor %}
    </ul>
</section>
