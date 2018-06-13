---
layout: default
title: Home
active: home
---
<div class="container">
    <div class="card home-card">
        <div class="profile">
            <img src="{{ site.picture }}" />
        </div>
        <div class="info">
            <h1>{{ site.name }}</h1>
            <h4>{{ site.username }}</h4>
            <span>{{ site.role }}</span>
            <div class="networks">
                {% if site.facebook %}
                <a href="{{ site.facebook }}" target="_blank" class="facebook"><i class="fa fa-facebook"></i></a>
                {% endif %}

                {% if site.twitter %}
                <a href="{{ site.twitter }}" target="_blank" class="twitter"><i class="fa fa-twitter"></i></a>
                {% endif %}

                {% if site.instagram %}
                <a href="{{ site.instagram }}" target="_blank" class="instagram"><i class="fa fa-instagram"></i></a>
                {% endif %}

                {% if site.linkedin %}
                <a href="{{ site.linkedin }}" target="_blank" class="linkedin"><i class="fa fa-linkedin"></i></a>
                {% endif %}

                {% if site.github %}
                <a href="{{ site.github }}" target="_blank" class="github"><i class="fa fa-github"></i></a>
                {% endif %}
            </div>
        </div>
        <div class="about">
            <p>{{ site.about }}</p>
        </div>
    </div>

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