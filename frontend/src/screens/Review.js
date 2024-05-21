import React, { useState, useEffect } from 'react';
import './Review.css';
import Thanks from './Thanks';

export default function Review() {
    const [submitted, setSubmitted] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const fetchReviews = async () => {
        try {
            const response = await fetch(`${window.location.origin}/api/review/getreviews`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            const json = await response.json();
            setReviews(json);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${window.location.origin}/api/review/addreview`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ firstName: formData.firstName, lastName: formData.lastName, email: formData.email, message: formData.message })
            });

            setFormData({ firstName: '', lastName: '', email: '', message: '' });
            const json = await response.json();
            console.log(json);
            setSubmitted(true);

        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };

    const containerStyle = {
        paddingTop: "10vh",
        backgroundColor: "#D5E5E5",
        color: "#132E35"
    };
    return (
        <div>
            {!submitted ? (
                <div style={containerStyle}>
                    <form onSubmit={handleSubmit} className='container' style={{padding: "0 15vw 2vh"}}>
                        <h3 style={{ textAlign: "center", paddingBottom: "2vh" }}>What do you think?</h3>
                        <div>
                            <label htmlFor="name" className="form-label">First and Last Name</label>
                            <div className="input-group" style={{ paddingBottom: "1vh" }}>
                                <input type="text" className="form-control bg-dark text-white" placeholder='First name' value={formData.firstName}
                                    name='firstName' onChange={onChange} required />
                                <input type="text" className="form-control bg-dark text-white" placeholder='Last name' value={formData.lastName}
                                    name='lastName' onChange={onChange} />
                            </div>
                        </div>


                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control bg-dark text-white" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="Email Address" value={formData.email} name='email' onChange={onChange} required />

                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="form-group" style={{ paddingBottom: "1vh" }}>
                            <label htmlFor="comment">Review</label>
                            <textarea className="form-control bg-dark text-white" rows="4" id="comment" value={formData.message}
                                name='message' minLength={5} onChange={onChange} required></textarea>
                        </div>
                        <button type="submit" disabled={formData.message.length < 5} className="btn"
                            style={{ marginTop: "2vh", color: "#132E35" }}>Submit</button>
                    </form>

                    <div style={{padding: "0 15vw 3vh"}}>
                        <hr style={{ border: "bold", borderWidth: "0.2vw" }} />
                        <h1 style={{ textAlign: "center", padding: "2vh 0" }}>Reviews</h1>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 g-4">
                            {reviews.map((review) => (
                                <div className="col" key={review._id}>
                                    <div className="card h-100 text-center" style={{ color: "#D5E5E5", backgroundColor: "#132E35" }}>
                                        <div className="card-body">
                                            <h5 className="card-title">{review.firstName} {review.lastName}</h5>
                                            <p className="card-text">{review.message}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <Thanks />
            )}

        </div>
    );
}
