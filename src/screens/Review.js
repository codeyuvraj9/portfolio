import React, { useState, useEffect } from 'react';
import axios from 'axios';
import bg from './darkbg.jpg';
import './Review.css';

export default function Review() {
    const containerStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        paddingTop: "10vh",
        height: "auto",
        width: "100vw",
        color: "white",
        padding: "6vh 15vw 4vh"
    };
    const redirectToAnotherPage = () => {
        window.location.href = '/';
    };
    const [submitted, setSubmitted] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const fetchReviews = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/reviews');
            setReviews(response.data);
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
            const response = await fetch("http://localhost:5000/api/reviews", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ firstName: formData.firstName, lastName: formData.lastName, email: formData.email, message: formData.message })
            });

            setFormData({ firstName: '', lastName: '', email: '', message: '' });
            const json = await response.json();
            console.log(json);
            if (!json.success) {
                alert("Enter valid credentials");
            } else {
                setSubmitted(true);
            }
        } catch (error) {
            console.error('Error submitting review:', error);
            alert('Failed to submit review. Please try again later.');
        }
    };

    return (
        <div>
            {!submitted ? (
                <div style={containerStyle}>
                    <form onSubmit={handleSubmit} className='container'>
                        <h3 style={{ textAlign: "center", paddingBottom: "2vh" }}>Your review is Valuable to me!!</h3>
                        <div className="input-group" style={{ paddingBottom: "1vh" }}>
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-dark text-white" id="">First and Last Name</span>
                            </div>
                            <input type="text" className="form-control bg-dark text-white" placeholder='First name' value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} required />
                            <input type="text" className="form-control bg-dark text-white" placeholder='Last name' value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />

                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control bg-dark text-white" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                            <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="form-group" style={{ paddingBottom: "1vh" }}>
                            <label htmlFor="comment">Review</label>
                            <textarea className="form-control bg-dark text-white" rows="5" id="comment" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required></textarea>
                        </div>
                        <button type="submit" className="btn btn-dark">Submit</button>
                    </form>

                    <h1 style={{ textAlign: "center", paddingBottom: "2vh" }}>All Reviews...</h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {reviews.map(review => (
                            <div className="col" key={review._id}>
                                <div className="card h-100 text-center text-white bg-dark mb-4">
                                    <div className="card-body">
                                        <h5 className="card-title">{review.firstName} {review.lastName}</h5>
                                        <p className="card-text">{review.message}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className='text-white' style={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundImage: `url(${bg})`, animation: 'fade-in 2s' }}>

                    <h1>Thank you for your submission!</h1>
                    <button type='button' style={{ margin: "7vh 0" }} className="btn btn-dark" onClick={redirectToAnotherPage}>Go to Profile</button>
                </div>
            )}

        </div>
    );
}
