import { Component } from "react";

export class Individuals extends Component {
	render() {
		return (
			<div>
				<div className="container custom-container1">
					<div className="row">
						<div className="col-md-6 section first-container2">
							<h3>
								The genius way to work{" "}
								<span style={{color: "#006aff"}}>better</span>
							</h3>
							<br />
							<p>
								Calendly makes it more easy to work smarter when you're working
								solo. Meetings, sessions and appointments become more efficient
								way to achieve success and accomplish goals.
							</p>

							<button
								className="btn btn-outline-secondary cst1"
								type="button"
								id="button-addon2"
							>
								SignUp For Free
							</button>
						</div>
						<div className="col-md-6 section second-container1">
							<img src="images/black suit.png" className="img-fluid" alt="" />
						</div>
					</div>

					<div className="row roww">
						<div className="col-md-6 section second-container1">
							<img
								src="images/roberto-shumski-RoUVV7i3iOg-unsplash.jpg"
								className="img-fluid"
								alt=""
							/>
						</div>

						<div className="col-md-6 section first-container2">
							<p style={{fontWeight: "600"}} className="text-muted">
								A CURATED CALENDAR
							</p>
							<h4>Book up efficiently</h4>
							<br />
							<p>
								When invitees select a meeting slot from your schedule, they
								only see the times you're available, and only the length and
								type of meeting you want to have. Your schedule fills up
								efficiently, and everyone avoids excess small exchanges .
							</p>
						</div>
					</div>

					<div className="row roww">
						<div className="col-md-6 section first-container2">
							<p style={{fontWeight: "600"}} className="text-muted">
								AUTOMATED NOTIFICATIONS & FOLLOW-UPS
							</p>
							<h4>Work like you have a personal assistant</h4>
							<br />
							<p>
								Because Calendly automates administrative tasks like sending
								reminder emails and follow-ups, you can focus on the work that
								builds your business and brings customers back for more.
							</p>
						</div>
						<div className="col-md-6 section second-container1">
							<img
								src="images/roberto-shumski-RoUVV7i3iOg-unsplash.jpg"
								className="img-fluid"
								alt=""
							/>
						</div>
					</div>
				</div>

				<div
					className="container"
					style={{marginTop: "4rem", marginBottom:"3rem", backgroundImage:"url(images/roberto-shumski-RoUVV7i3iOg-unsplash.jpg)", height:"400px" , backgroundSize: "cover", color:"white"}}
				>
					<div className="row">
						<div
							className="col-md-6 section first-container2"
							style={{boxSizing:"border-box", padding: "4.6rem"}}
						>
							<h4>Find just-right plans for individuals and small teams</h4>
							<button
								className="btn btn-outline-secondary "
								style={{color: "black", backgroundColor:"white !important", borderRadius:"13rem !important"}}
								type="button"
								id="button-addon2"
							>
								{" "}
								<span style={{fontWeight: "bold"}}>See our plans</span>{" "}
							</button>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<h3 style={{boxSizing: "border-box", fontWeight:"800", fontSize:"35px",width:"100px"}}>
								Easy <span style={{color: "#006aff"}}>ahead</span>
							</h3>
							<h6>
								We take the work out of connecting with others so you can
								accomplish more
							</h6>
							<form>
								<div className="form-group">
									<select
										className="form-control"
										id="exampleFormControlSelect1"
									>
										<option>English</option>
									</select>
								</div>
							</form>
						</div>

						<div className="col-md-3 custom-row4">
							<span style={{fontSize: "28px", fontWeight:"700"}}>About</span>
							<h6>About Calendly</h6>
							<h6>Contact Sales</h6>
							<h6>Newsroom</h6>
							<h6>Careers</h6>
							<h6>Security</h6>
						</div>
						<div className="col-md-3 custom-row4">
							<span style={{fontSize: "28px", fontWeight:"700"}}>Solutions</span>
							<h6>Customer Success</h6>
							<h6>Sales</h6>
							<h6>Recruiting</h6>
							<h6>Education</h6>
							<h6>Marketing</h6>
						</div>
						<div className="col-md-3 custom-row4">
							<span style={{fontSize: "28px", fontWeight:"700"}}>
								Popular Features
							</span>
							<h6>Embed Calendly</h6>
							<h6>Availability</h6>
							<h6>Sending Notifications</h6>
							<h6>Using Calendly Mobile</h6>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Individuals;
