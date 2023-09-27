export default function Footer() {
  return (
    <div className="footer">
      <h5 className="fw-semibold">Links:</h5>
      <a href="https://www.linkedin.com/in/ryan-payne-218378280/" target="_blank" rel="noopener noreferrer">
        <img className="myimg" src="public/images/Linkedin.png" alt="linkedin icon" height="50px" width="75px" />
      </a>
      <a href="https://github.com/Popiuy" target="_blank" rel="noopener noreferrer">
        <img className="myimg" src="/images/github.png" alt="github icon" height="50px" />
      </a>
      <a href="https://stackoverflow.com/users/22142295/ryan-payne" target="_blank" rel="noopener noreferrer">
        <img className="myimg" src="public/images/stackoverflow.png" alt="Stack overflow icon" height="50px" />
      </a>
    </div>
  );
}
