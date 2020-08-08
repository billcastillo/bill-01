---
title: Create and publish your own website with free hosting using Github pages
date: 2018 Mar 24
author: Touko Peltomaa
description: Save money using this one simple trick! Web host servers hates this article.
---

[Github](https://github.com) is a platform where companies and indie developers store and manage their codes, projects, and software. It is a popular collaboration tool and a hub for open source applications. So go ahead and create your account if you haven't yet.

## 1. Creating your repository

After logging in, [create a new repository](https://github.new/ "Create new repository").

![Create a new repository][step-1]

#### Important Notes:
* Repository name should be _username_.github.io where _username_ is your username
* Check _Initialize this repository with a README_

### <a name="1.1"></a> 1.1 Adding your first files


There are two ways to create / add files to your repo: Github GUI or terminal. In this article we'll utilize the GUI. Click __Add file__ and select __Create new file__ or Upload if you already have your own `index.html`

![Adding a new file][step-2]

### 1.2 Creating your front page

[go to 1.1](#1.1)


## 4. Setting up a custom domain (Optional)
To set up a custom domain, you have to own one or purchase it on a domain provider. Personally, I use [Namecheap](https://namecheap.com) to manage my domains. There are many providers out there, just make sure they are ICANN-accredited.

### 4.1 Point your domain to Github
This is the part where we tell your custom domain to use Github as the platform to host your website.

Go to the dashboard of where you purchased your domain. There should be an option to modify its __Nameservers__. Then, select __Custom DNS__. Add the following IP Addresses:
* 192.30.252.153
* 192.30.252.154

![Custom DNS][custom-dns]

### 4.2 Creating CNAME record

## 5. Setting up Cloudflare (Optional)

<div className="note">

Note that this is only for sites with custom domain.

</div>

[Cloudflare](https://www.cloudflare.com) is a [content delivery network (CDN)](https://en.wikipedia.org/wiki/Content_delivery_network) service that makes your site faster by storing and caching your site to the closest server based on your location—this saves bandwidth on the client side.

Another reason is they equip your site with free SSL (https). Although you can also get certified with [Let's Encrypt](https://letsencrypt.org/getting-started/) for free, Cloudflare saves you time on setting up by just ticking one option in configurations. There's a lot of stuff behind the scenes but that's the gist of it. It is FREE but they have paid plans if you are interested in their services.


## More information

* [Github Pages](https://pages.github.com/)
* [Official Docs](https://docs.github.com/en/github/working-with-github-pages)


### This is Header Three
#### This is Header 4
##### This is Header 5

this is a paragraph <a href="https://billcastillo.me">with a link</a>

this is another paragraph but with a `markdown` [link](https://github.com) bitch

Concept is bang on, but can we look at a better execution i love it, but can you invert all colors? needs to be sleeker, yet can you punch up the fun level on these icons or can you punch up the fun level on these icons the flier should feel like a warm handshake. Can you put "find us on facebook" by the facebook logo? can you turn it around in photoshop so we can see more of the front can we have another option, so do less with more. I like it, but can the snow look a little warmer. I got your invoice...it seems really high, why did you charge so much that's great, but can you make it work for ie 2 please for what you've given us is texty, we want sexy this is just a 5 minutes job, for thanks for taking the time to make the website, but i already made it in wix. Just do what you think. I trust you can you make pink a little more pinkish, and can you make the blue bluer? can you lower the price for the website? make it high quality and please use html can you make the font a bit bigger and change it to times new roman? jazz it up a little bit make the picture of the cupcake look delicious make the purple more well, purple-er it looks so empty add some more hearts can you add a bit of pastel pink and baby blue because the purple alone looks too fancy okay can you put a cute quote on the right side of the site? oh no it looks messed up! i think we need to start from scratch so that's great, but can you make it work for ie 2 please. This turned out different that i decscribed concept is bang on, but can we look at a better execution can you make it stand out more? we exceed the clients' expectations. Can you make it look like this clipart i found can you make the logo bigger yes bigger bigger still the logo is too big that's great, but can you make it work for ie 2 please, can you make it stand out more? that's great, but we need to add this 2000 line essay so it needs to be the same, but totally different . Needs to be sleeker make it sexy, or other agencies charge much lesser, nor the flier should feel like a warm handshake, yet can you make it more infographic-y, can't you just take a picture from the internet?. Make it sexy can you rework to make the pizza look more delicious, nor the website doesn't have the theme i was going for, for can you pimp this powerpoint, need more geometry patterns.
```css
.js {
	position: relative;
}

.export {
	display: block;
}
```

---

## Second integration

I usually am too tired to do this but here I am. I'm not bitching, btw.

```js
(function({
	console.log('ugh');
})();
```

wallah habibi

[step-1]: /static/images/github-step-1.png "Create a new repository"
[step-2]: /static/images/github-step-2.png "Adding a new file"
[custom-dns]: /static/images/custom-dns.png "Configuring custom DNS"