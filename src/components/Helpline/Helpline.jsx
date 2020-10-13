import React ,{useEffect} from "react";
import "./helpline.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Helpline = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="helpline" data-aos="fade-right">
      <ul className="helpheading">
        <li>Helpline Number :</li>
        <li>Toll Free : </li>
        <li>Helpline Email ID :</li>
        <li>Technical Query</li>
      </ul>
      <ul className="helpheading">
        <li>+91-11-23978046</li>
        <li>1075 </li>
        <li> ncov2019@gov.in</li>
        <li>technicalquery.covid19@gov.in</li>
      </ul>
    </div>
  );
};

export default Helpline;
