// I'm using react hook form to construct my form component
import { useForm } from "react-hook-form";
import axios from "axios";
import "../styles/Form.css";

function Form({ toast }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:8000/api/form-submission/", data)
      .then((response) => {
        // success response
        console.log(response.data.message);
        toast.success(response.data.message, {
          autoDismiss: true,
        });
        reset();
      })
      .catch((error) => {
        // error response
        console.error(error.response.data.message);
        toast.error(error.response.data.message, {
          autoDismiss: true,
        });
      });
  };

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6">
        <form onSubmit={handleSubmit(onSubmit)} className="container">
          <div className="row">
            <div className="col">
              {/* First Name Input */}
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">
                  First Name *
                </label>
                <input
                  {...register("firstName", {
                    required: "Please enter your first name",
                  })}
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                  placeholder="First Name"
                ></input>
                {errors.firstName && (
                  <span className="invalid-feedback">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col">
              {/* Last Name Input */}
              <div className="form-group">
                <label htmlFor="lastName" className="form-label">
                  Last Name *
                </label>
                <input
                  {...register("lastName", {
                    required: "Please enter your last name",
                  })}
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                  placeholder="Last Name"
                ></input>
                {errors.lastName && (
                  <span className="invalid-feedback">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Email Input */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email *
            </label>
            <input
              {...register("email", {
                required: "Please enter your email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              })}
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="name@example.com"
            />
            {errors.email && (
              <span className="invalid-feedback">{errors.email.message}</span>
            )}
          </div>

          {/* Prior Attendance Selection */}
          <div className="form-group">
            <label htmlFor="priorAttendance" className="form-label">
              Prior Attendance *
            </label>
            <select
              {...register("priorAttendance", {
                required: "Please select yes or no",
              })}
              className={`form-select ${
                errors.priorAttendance ? "is-invalid" : ""
              }`}
            >
              <option value="">
                -- Have you taken a workshop with us before? --
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.priorAttendance && (
              <span className="invalid-feedback">
                {errors.priorAttendance.message}
              </span>
            )}
          </div>

          {/* Workshop Selection */}
          <div className="form-group">
            <label htmlFor="workshop" className="form-label">
              Workshop *
            </label>
            <select
              {...register("workshop", {
                required: "Please select a workshop",
              })}
              className={`form-select ${errors.workshop ? "is-invalid" : ""}`}
            >
              <option value="">-- Select Workshop --</option>
              <option value="landscape">Wet Plate Collodion</option>
              <option value="portrait">Kallitype</option>
              <option value="street">Silver Gelatin</option>
              <option value="street">Cyanotype</option>
            </select>
            {errors.workshop && (
              <span className="invalid-feedback">
                {errors.workshop.message}
              </span>
            )}
          </div>

          {/* Additional Comments */}
          <div className="form-group">
            <label htmlFor="additionalComments" className="form-label">
              Additional Comments
            </label>
            <textarea
              {...register("additionalComments")}
              className="form-control"
              placeholder="Additional Comments"
            />
          </div>

          <input type="submit" className="btn btn-primary" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Form;
