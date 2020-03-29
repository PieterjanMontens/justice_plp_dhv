## ⚖️ Justice pour le peuple, door het volk 🏛️
### Website content
Repo containing content from the website.

It's a workin progress, nothing really interesting going on right now.

### Technology stack:
 Website follows [JAMstack architecture](https://jamstack.org):
- [Netlify CMS](https://www.netlifycms.org)
- [Gatsby v2](https://www.gatsbyjs.org/) 
- [Gatsby Starter Business](https://gatsby-starter-business.netlify.com) template
- CDN distribution (netlify)
- GraphQL, ...

## Prerequisite
* Node
* Gatsby CLI (globally installed)

```shell
gatsby start
```

### Build
Get an optimized production build for your site generating static HTML and per-route JavaScript code bundles.
```shell
gatsby build
```

### Serve
gatsby serve — Gatsby starts a local HTML server for testing your built site.
```shell
gatsby serve
```

## Deployment
Clicking the button will ask for authentication via Github, which will create a repo in your github account with this starter. Then, it will build and deploy the site to Netlify.

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/v4iv/gatsby-starter-business&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>
