import React from "react";
import { useState } from "react";

const BookingForm = (props) => {


    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventdefault();
        props.SubmitForm(e);
    }


    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                    <div>
                        <label htmlFor='book-date'>choose date:</label>
                        <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required/>
                    </div>

                    <div>
                        <label htmlFor='book-time'>Choose Time:</label>
                        <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                            <option value="">Select a Time</option>
                            {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}> {availableTimes} </option>})}
                        </select>
                    </div>


                    <div>
                        <label htmlFor='book-guests'>
                        Number of Guests
                        </label>
                        <input
                        id='book-guests' min='1' value={guests} onChange={(e) => setGuests(e.target.
                        value)}/>
                    </div>
                    {/* Occasion field */}
                    <div>
                        <label htmLFor='book-occasion'>Occasion: </label>
                        <select id='book-occasion' key={occasion} value={occasion} onChange={e => setOccasion
                        (e.target. value)}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        </select>
                    </div>
                    {/* submit button */}
                    <div>
                    <input aria-Label='On Click' type='submit' value={"Make Your Reservation"}/>
                    </div>
                </fieldset>
                </form>
            </section>
</header>

    );
};

export default BookingForm;






