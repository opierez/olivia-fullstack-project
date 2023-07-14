import Form from "./Form";
import toast, { Toaster } from "react-hot-toast";
import "../styles/Content.css";

function Content() {
  return (
    <div className="content mt-4 mb-5 text-center">
      <h3>Register for a Workshop</h3>
      <div className="description-container mb-5">
        <p>
          Discover the captivating world of early photographic processes with
          Lumi Foundation! Immerse yourself in the artistry and techniques of
          historical photography, and unlock the secrets of creating stunning
          images through workshops led by our expert instructors.
        </p>
        <p>
          To register for one of our workshops, please fill out the form below.
        </p>
      </div>
      <Toaster />
      <Form toast={toast} />
    </div>
  );
}

export default Content;
