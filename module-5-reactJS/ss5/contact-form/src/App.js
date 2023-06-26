import logo from './logo.svg';
import './App.css';
import {Formik} from "formik";
import {useState} from "react";


function App() {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        phone: /^0[1-9][0-9]{8}$/,
    }
    const [form, setForm] = useState({})
    const handleChange = (event) => {
        const {name, value} = event.target;
        setForm((prevForm) => ({...prevForm, [name]: value}));
    };
    const handleValidate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = "Required !"
        }
        if (!values.email) {
            errors.email = "Required !"
        } else if (!REGEX.email.test(values.email)) {
            errors.email = "Invalid email format !"
        }
        if (!values.phone) {
            errors.phone = " Required !"
        } else if (!REGEX.phone.test(values.phone)) {
            errors.phone = "Invalid phone number , 10 numbers needed  !"
        }
        return errors;
    }
    const handleSubmit = (values) => {
        alert("Add contact successfully!!!")
    }
    return (
        <div className="App">
            <h1>Contact Form</h1>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({values, errors, handleChange, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={values.name || ''}
                                onChange={handleChange}
                            />
                            {errors.name && <div className="error">{errors.name}</div>}
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={values.email || ''}
                                onChange={handleChange}
                            />
                            {errors.email && <div className="error">{errors.email}</div>}
                        </div>
                        <div>
                            <label htmlFor="phone">Phone:</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={values.phone || ''}
                                onChange={handleChange}
                            />
                            {errors.phone && <div className="error">{errors.phone}</div>}
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea id="message" name="message" value={values.message || ''} onChange={handleChange}/>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default App;
