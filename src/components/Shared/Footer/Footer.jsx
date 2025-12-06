import { Link } from "react-router";
import logo from "../../../assets/images/logo.png";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare, FaYoutubeSquare  } from "react-icons/fa";
import Container from "../Container";

const Footer = () => {
  return (
    <footer className="text-white bg-[#607B8F] relative bottom-0 left-0">
      <Container>
        <div className="py-10">
          <Link to="/" className="flex gap-2 items-center mb-9">
            <img src={logo} alt="logo" width="60" height="60" />
            <div>
              <h5 className="font-bold">
                <span className="text-primary">SCHOLAR</span>STREAM
              </h5>
              <span className="text-sm text-neutral">Unlock You Potencial</span>
            </div>
          </Link>
          

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-40">
            <div>
              <h3 className={`text-xl font-semibold mb-2`}>Scholarship Directory</h3>
              <ul className={`text-md font-normal`}>
                <li>California Scholarships</li>
                <li>Texas Scholarships</li>
                <li>High School Freshman Scholarships</li>
                <li>High School Sophomore Scholarships</li>
                <li>High School Junior Scholarships</li>
              </ul>
            </div>

            <div>
              <h3 className={`text-xl font-semibold mb-2`}>Scholarships</h3>
              <ul className={`text-md font-normal`}>
                <li>Scholarships for Texas Students</li>
                <li>Scholarships for California Students</li>
                <li>Scholarships for Adult Students</li>
                <li>Graduate School Scholarships</li>
                <li>Scholarships for High School Sophomores</li>
                <li>Scholarships for High School Juniors</li>
              </ul>
            </div>

            <div>
              <h3 className={`text-xl font-semibold mb-2`}>Company</h3>
              <ul className={`text-md font-normal`}>
                <li>About Us</li>
                <li>FAQ</li>
                <li>Contact Us</li>
                <li>Career Opportunities</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
              </ul>
            </div>
          </div>

          <div className="mt-7">
            <h3 className="text-xl font-bold">Social Links</h3>
            <div className="flex gap-2 mt-2">
              <FaSquareXTwitter style={{ fontSize: "30px" }} />
              <FaLinkedin style={{ fontSize: "30px" }} />
              <FaFacebookSquare style={{ fontSize: "30px" }} />
              <FaYoutubeSquare  style={{ fontSize: "30px" }}/>
            </div>
          </div>
        </div>
      </Container>
      <div className="text-sm text-center text-white bg-gray-800 py-2">
        © 2025-2026 ScholarStream Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
