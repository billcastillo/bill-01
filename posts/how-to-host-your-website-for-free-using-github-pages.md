---
title: How to Host your website for Free Using Github pages
date: 2020-08-09
author: Bill Castillo
description: Save money using this one simple trick! Web host servers hate this article.
image: hosted-by-github.png
---

[Github](https://github.com) is a platform where indie developers and commercial companies store and manage their codes, projects, and software. It is a popular collaboration tool and a hub for open source applications. So go ahead and create your account if you haven't yet.

## Creating a Github repository

After logging in, [create a new repository](https://github.new/ "Create a new repository").

Repository name should be **<username\>.github.io** where <username\> is your Github username.

Check "Initialize this repository with a README"

![Create a new repository][step-1]

## Adding files

There are two ways to create/add files to your repo: Github GUI or via command line. In this section, we'll utilize the GUI. Alternatively, you can skip this section and go to [Adding files via command line](#adding-files-via-command-line).

Click **Add file** and select **Create new file** or Upload if you already have your `index.html`

Note that this article does not cover how to create the actual contents of your website. A quick way to create your site is to use pre-built HTML templates. Take a look and choose at [html5up](https://html5up.net/).

![Adding a new file][step-2]

### Creating your front page

On file creation, name your file as `index.html` and add this as content:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

`index.html` is where you add the contents of your home page.

![Creating index.html][step-2-1]

Next, scroll down at the bottom and add a commit message. Commit messages should just be a short description of the changes you just made e.g. `added index.html`

![Committing index.html][step-2-2]

<div className="bordered success">

#### Done! Your site is now available in **<username\>.github.io**

</div>

## Adding files via command line using Git (Alternative)

If you've already added files via Github's GUI, you can skip this section and go to [Setting up custom domain](#4) section.

In this section, we will be utilizing the Git system to manage our files.

#### What is Git?

[Git](https://git-scm.com/) is a version control system (VCS) for keeping track of revisions of your project. One of its main features is that it allows a team to work together simultaneously through branches.

Github is just one of the platforms that utilize the Git system. There are others like [Gitlab](https://about.gitlab.com/), [Bitbucket](https://bitbucket.org/product), etc.

[Install Git for Windows](https://git-scm.com/download/win) (preinstalled if you're using Mac).

#### Further Reading:

- [Get Started with Git](https://www.taniarascia.com/getting-started-with-git/)
- [What is Git](https://www.atlassian.com/git/tutorials/what-is-git)

### Clone your repo locally

Open your favorite terminal app. For windows, you can use Windows Powershell or install the [new Windows Terminal](https://www.microsoft.com/en-hk/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab). I use [Hyper](https://hyper.is/) terminal.

Run the following command (replace username with your username).

```shell
git clone https://github.com/username/username.github.io.git
```

This will create a folder with the same name as your repository. The folder should only have `README.md` if you haven't added any files yet.

Change the terminal directory so you're inside that folder.

```shell
cd username.github.io
```

### Creating and editing files

Go ahead and create and add all the files you want to add to your website. The only required file is `index.html` - this is where the contents of the home page of your site will go.

### Adding / uploading files to the repository

For now, all your files are not yet officially in your repo.
Run the `git status` command.

```shell
git status
```

This will list all the files added or changed.

```shell
C:\Documents\Github\billcasbie.github.io> git status
On branch master
Your branch is up to date with 'origin/master'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        index.html
        styles/

nothing added to commit but untracked files present (use "git add" to track)
```

Add all files using:

```shell
git add .
```

You can also add individual files if you don't want to add all. Add files via `git add <file>` command.

```shell
git add index.html
git add styles/style.css
```

Verify files added via `git status`

```shell
C:\Documents\Github\billcasbie.github.io> git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   index.html
        new file:   styles/style.css
```

You can also remove files via `git reset <file>`

```shell
git reset .
git reset index.html
```

### Committing and pushing files

After adding files, the next step is to commit it. Commit files via `git commit -m "<commit message>"`. Commit messages should just be a short description of your change.

```shell
git commit -m "added index and style"
```

This will create a hash code for that specific change. Each commit is like a record for the git versioning system to document your changes. This allows you to revert or review each commit but that is a topic for another article.

Push the code with `git push origin master`. Pushing is the actual _upload_ stuff. You can't upload without a commit and you can't commit without adding files.

```shell
git push origin master
```

<div className="bordered success">

#### Done! Your files should be uploaded to your repo

Visit **<username.github.io\>** to see your site.

</div>

---

## Setting up a custom domain (Optional)

To set up a custom domain, you have to own one or purchase it on a domain provider. I use [Namecheap](https://namecheap.com) to manage my domains. There are many providers out there, just make sure they are ICANN-accredited.

### Creating a CNAME record

1. Go to your repository settings
2. Scroll down to the **Github Pages** section
3. In the **Custom domain** area, enter your domain and click save.

![Creating a CNAME][step-4-1]

This will generate a CNAME file in your repo. All it does is redirect the url `username.github.io` to your newly added domain.

### Point your domain to Github

This is the part where we tell your custom domain to use Github as the platform to host your website.

Go to the dashboard of where you purchased your domain. There should be an option to modify its **Nameservers**. Then, select **Custom DNS**. Add the following IP Addresses:

- `192.30.252.153`
- `192.30.252.154`

![Custom DNS][custom-dns]

<div className="bordered">

#### You're all set up!

Note that changes to DNS might take a few minutes to an hour to take effect.
Also, the domain _username.github.io_ will now redirect to your custom domain.

</div>

## Setting up Cloudflare (Optional)

<div className="note">

Note that this is only for sites with a custom domain.

</div>

[Cloudflare](https://www.cloudflare.com) is a [content delivery network (CDN)](https://en.wikipedia.org/wiki/Content_delivery_network) service that makes your site faster by storing and caching your site to the closest server based on your location—this saves bandwidth on the client-side.

Another reason is that they equip your site with free SSL (https). Although you can also get certified with [Let's Encrypt](https://letsencrypt.org/getting-started/) for free, Cloudflare saves you time on setting up by just ticking one option in configurations. There's a lot of stuff behind the scenes but that's the gist of it. It is, once again, **FREE** but they have paid plans if you are interested in their services.

#### Further Reading:

- [Github Pages](https://pages.github.com/)
- [Official Docs](https://docs.github.com/en/github/working-with-github-pages)

[step-1]: /static/images/github-step-1.png "Create a new repository"
[step-2]: /static/images/github-step-2.png "Adding a new file"
[step-2-1]: /static/images/github-step-2-1.png "Creating index.html"
[step-2-2]: /static/images/github-step-2-2.png "Committing index.html"
[step-4-1]: /static/images/github-step-4-1.png "Creating a CNAME"
[custom-dns]: /static/images/custom-dns.png "Configuring custom DNS"
