import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

const PortfolioForm = ({ onSubmit }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        register({ name: "startDate" });
        register({ name: "endDate" });
    }, [register]);

    const handleDateChange = (dateType, setDate) => (date) => {
        setValue(dateType, date);
        setDate(date);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    name="title"
                    type="text"
                    className="form-control"
                    id="title"
                    ref={register}
                />
            </div>

            <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                    name="company"
                    type="text"
                    className="form-control"
                    id="company"
                    ref={register}
                />
            </div>

            <div className="form-group">
                <label htmlFor="companyWebsite">Company Website</label>
                <input
                    name="companyWebsite"
                    type="text"
                    className="form-control"
                    id="companyWebsite"
                    ref={register}
                />
            </div>

            <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                    name="location"
                    type="text"
                    className="form-control"
                    id="location"
                    ref={register}
                />
            </div>

            <div className="form-group">
                <label htmlFor="jobTitle">Job Title</label>
                <input
                    name="jobTitle"
                    type="text"
                    className="form-control"
                    id="jobTitle"
                    ref={register}
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    rows="5"
                    type="text"
                    className="form-control"
                    id="description"
                    ref={register}
                ></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="street">Start Date</label>
                <div>
                    <DatePicker
                        selected={startDate}
                        showYearDropdown
                        onChange={handleDateChange("startDate", setStartDate)}
                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="street">End Date</label>
                <div>
                    <DatePicker
                        disabled={!endDate}
                        showYearDropdown
                        selected={endDate}
                        onChange={handleDateChange("endDate", setEndDate)}
                    />
                </div>
            </div>
            <div className="form-group">
                {endDate && (
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() =>
                            handleDateChange("endDate", setEndDate)(null)
                        }
                    >
                        No End Date
                    </button>
                )}
                {!endDate && (
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() =>
                            handleDateChange(
                                "endDate",
                                setEndDate
                            )(new Date(new Date().setHours(0, 0, 0, 0)))
                        }
                    >
                        Set End Date
                    </button>
                )}
            </div>

            <button type="submit" className="btn btn-primary">
                Create
            </button>
        </form>
    );
};

export default PortfolioForm;
