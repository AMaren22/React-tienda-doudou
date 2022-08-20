import "./contact.css";

const Contact = ({ contact }) => {
  return (
    <div className="contactContainer">
      <div className="wavesContainer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#d7ab84"
            fillOpacity="1"
            d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,181.3C672,171,768,117,864,96C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <h1 className="titleContact">{contact}</h1>
      <div className="textContactContainer">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna
          etiam tempor orci eu lobortis. Eu consequat ac felis donec et odio
          pellentesque. Morbi tincidunt augue interdum velit euismod. Dictumst
          quisque sagittis purus sit amet volutpat consequat mauris. Nunc id
          cursus metus aliquam eleifend. Suspendisse faucibus interdum posuere
          lorem ipsum dolor sit amet. Suspendisse interdum consectetur libero id
          faucibus. Eget egestas purus viverra accumsan in. Iaculis at erat
          pellentesque adipiscing commodo elit at. Sapien et ligula ullamcorper
          malesuada proin libero. Duis ultricies lacus sed turpis tincidunt id
          aliquet. Justo eget magna fermentum iaculis eu non diam phasellus.
          Turpis tincidunt id aliquet risus feugiat. Quis eleifend quam
          adipiscing vitae proin sagittis nisl. Aliquam id diam maecenas
          ultricies mi eget. Maecenas volutpat blandit aliquam etiam erat velit.
          Est ultricies integer quis auctor elit sed vulputate mi.
        </p>
      </div>
      <div className="wavesContainer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#d7ab84"
            fillOpacity="1"
            d="M0,256L48,256C96,256,192,256,288,266.7C384,277,480,299,576,282.7C672,267,768,213,864,213.3C960,213,1056,267,1152,272C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Contact;
