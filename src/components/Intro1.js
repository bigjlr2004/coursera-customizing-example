function Intro1(props) {
  return (
    <div className="blog-post-intro">
      <h2>I've become quite the React Developer</h2>
      <div>
        <p>
          I've completed the React Basics course and I am happy to announce that
          I'm now a Junior React Developer!
          <h2>{props.prop1}</h2>
        </p>
        <p className="link">Read more...</p>
      </div>
    </div>
  );
}

export default Intro1;
