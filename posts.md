---
layout: default
title: My Posts
active: posts
---
<div class="container">
    {% if site.posts.size > 0 %}
    <div class="card posts">
        <h1>Posts</h1>
        <section>
            {% for post in site.posts %}
            <article>
                <a href="{{ post.url }}">
                    <img src="{{ post.image }}" />
                    <span>{{ post.title }}</span>
                    <p>{{ post.subtitle }}</p>
                </a>
            </article>
            {% endfor %}
        </section>
    </div>
    {% endif %}
</div>