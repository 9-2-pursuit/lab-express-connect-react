import { Link } from "react-router-dom";


export default function FourOFour() {

  return (
    <div className="mt-4" style={{ textAlign: "center" }}>
      <h1>Sorry, No Page Found</h1>
      <img src="https://previews.123rf.com/images/2nix/2nix1408/2nix140800038/30543616-404-error-file-not-found-on-brown-wood-plank-wall-texture-background.jpg" alt="404"
        height="400"
        width="400" />
      <h1>Let's Go Back <Link to="/">Home</Link></h1>
    </div>
  );
}
