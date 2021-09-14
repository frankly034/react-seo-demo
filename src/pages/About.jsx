import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About page</title>
        <link rel="canonical" href="http://mysite.com/about" />
        <meta name="description" content="This is a descripition of the about page"/>
      </Helmet>
      <h1>About Page</h1>
    </div>
  );
};

export default About;
