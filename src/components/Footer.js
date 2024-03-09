function Footer(props) {
  return (
    <div className="copyright">
      <p>Made with love by {props.tasty.name}</p>
      <p>I am {props.tasty.age} years old</p>
      <p>I am {props.tasty.sex}</p>
    </div>
  );
}

export default Footer;
