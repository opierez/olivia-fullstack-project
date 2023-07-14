import Form from "./Form";
import toast, { Toaster } from 'react-hot-toast';

function Content() {
  return (
    <div className="content mt-4 mb-5">
        <h2>Register for a Workshop</h2>
        <Toaster />
        <Form toast={toast}/>
    </div>
  );
}

export default Content;
