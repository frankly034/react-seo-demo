# SEO in React

This is a simple implemention of SEO in react bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using:
+ [React-Helmet](https://github.com/nfl/react-helmet#readme):  manage changes to the react SPA.
+ [React-Snap](https://github.com/stereobooster/react-snap#readme): pre-renders web app into static html and enabling SEO
---
### `React-Helmet`

This package helps to modify the various page headers of our SPA by injecting head tags specified in those pages within the Helmet tags. 
```
import { Helmet } from "react-helmet";

<Helmet>
  <meta charSet="utf-8" />
  <title>Page Title</title>
  <link rel="canonical" href="http://mysite.com/home" />
  <meta name="description" content="description content for this page"/>
  {/* other head tags to enhance seo */}
</Helmet>

```

### `React-Snap`

Although google supports crawing javascript application, this further enhances the search optimization of the application by generating static files from our SPA so they are available as html for crawlers. One major advantage of this package is its framework agnostic.

This is applied at the root of our application as below:
```
import { Helmet } from "react-helmet";

<Helmet>
  <meta charSet="utf-8" />
  <title>Page Title</title>
  <link rel="canonical" href="http://mysite.com/home" />
  <meta name="description" content="description content for this page"/>
  {/* other head tags to enhance seo */}
</Helmet>

```