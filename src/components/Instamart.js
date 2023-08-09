import { useState } from "react";

const Section = ({ title, desc, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <h1 className="font-bold text-2xl p-3">{title}</h1>
      <button
        className="font-bold p-2 bg-green-400 rounded m-3"
        onClick={() => {
          // setIsVisible(!isVisible);
          setIsVisible(!isVisible);
        }}
      >
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <h2 className="border-2 mx-3 p-2">{desc}</h2>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <div>
      <h1 className="text-3xl font-bold m-2">Instamart About Section</h1>
      <Section
        title={"About Instamart"}
        desc={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose"
        }
        isVisible={visibleSection === "about"}
        setIsVisible={(flag) => {
          if (flag) setVisibleSection("about");
          else setVisibleSection("");
        }}
      />

      <Section
        title={"Careers"}
        desc={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose"
        }
        isVisible={visibleSection === "careers"}
        setIsVisible={(flag) => {
          if (flag) setVisibleSection("careers");
          else setVisibleSection("");
        }}
      />

      <Section
        title={"Details"}
        desc={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose"
        }
        isVisible={visibleSection === "details"}
        setIsVisible={(flag) => {
          if (flag) setVisibleSection("details");
          else setVisibleSection("");
        }}
      />
    </div>
  );
};

export default Instamart;
