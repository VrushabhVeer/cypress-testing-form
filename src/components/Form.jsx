import { useState } from "react";

const initialData = {
  name: "",
  email: "",
  gender: "",
  role: "",
};

export default function Form() {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { value, name, type, checked } = e.target;

    const valueUpdate = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: valueUpdate,
    });
  };

  return (
    <div className="form">
      <div className="formContainer">
        <form>
          <div className="mb-3">
            <label for="exampleInputName1" className="form-label">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="exampleInputName1"
              onChange={handleChange}
              value={formData.name}
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              onChange={handleChange}
              value={formData.email}
            />
          </div>

          <br />
          <select
            onChange={handleChange}
            name="gender"
            value={formData.gender}
            defaultValue={formData.gender}
            className="form-select"
            aria-label="Default select example"
          >
            <option selected>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <br />

          <br />
          <select
            onChange={handleChange}
            name="role"
            value={formData.role}
            defaultValue={formData.role}
            className="form-select"
            aria-label="Default select example"
          >
            <option selected>Select Your Role</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
          </select>

          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <div className="dataContainer">
        <p>Name :- {formData.name}</p>
        <p>Eamil :- {formData.email}</p>
        <p>Gender :- {formData.gender}</p>
        <p>Role :- {formData.role}</p>
      </div>
    </div>
  );
}
