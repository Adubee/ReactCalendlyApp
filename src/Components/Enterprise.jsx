import { Component } from "react";

export class Enterprise extends Component {
	render() {
		return (
			<div>
				<div className="container custom-container1">
					<div className="row">
						<div className="col-md-6 offset-4 section text-center first2-container1">
							<h3>
								{" "}
								<span>Way more</span> than a scheduling link
							</h3>
							<br />
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
								perspiciatis. Ipsa eos provident pariatur labore nostrum natus
								illum, quis earum, amet velit sequi. Porro consequuntur nisi.
							</p>
							<button className="btn btn-dark cst1">Contact Sales</button>
						</div>
					</div>
				</div>

				<div className="container-fluid custom-container">
					<div className="text-center box">
						<div style={{width: "430px", marginTop: "2rem"}}>
							<h3>
								Trusted by more than 50,000 of the world's leading organization
							</h3>
						</div>
					</div>
					<div className="row rowww photo-container">
						<div className="col-6 offset-3 ">
							<div className="row d-flex justify-content-center">
								<div className="col-lg-2 col-md-6 photo">
									<img src="images/master.png" alt="" />
								</div>
								<div className="col-lg-2 col-md-6 photo">
									<img src="images/ebay.png" alt="" />
								</div>
								<div className="col-lg-2 col-md-6 photo">
									<img src="images/lyft.png" alt="" />
								</div>
								<div className="col-lg-2 col-md-6 photo">
									<img src="images/visa.png" alt="" />
								</div>
								<div className="col-lg-2 col-md-6 photo">
									<img src="images/drop.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container" style={{width: "55rem", marginBottom:"7rem"}}>
					<div className="row">
						<div className="col-md-4">
							<div className="card custom-card" style={{width: "14rem"}}>
								<h5
									className="card-title custom-title"
									style={{marginTop: "1.1rem", marginLeft: "0.6rem"}}
								>
									{" "}
									<span>Sales</span>{" "}
								</h5>
								<div className="card-body d-flex justify-content-center">
									<img src="images/monitor.png" alt="" />
								</div>
								<div className="down-text">
									<p className="card-text">
										Convert more leads and prospects into meetings and revenue.
										Easily book demos and customer calls without the back and
										forth.
									</p>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="card custom-card" style={{width: "14rem"}}>
								<h5
									className="card-title custom-title"
									style={{marginTop: '1.1rem', marginLeft: "0.6rem"}}
								>
									{" "}
									<span>Customer Success</span>{" "}
								</h5>
								<div className="card-body d-flex justify-content-center">
									<img src="images/customer-service.png" alt="" />
								</div>
								<div className="down-text">
									<p className="card-text">
										Deliver better support interactions and customer
										consultations. Stay connected with automated reminders and
										follow-ups.
									</p>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="card custom-card" style={{width: "14rem"}}>
								<h5
									className="card-title custom-title"
									style={{marginTop: "1.1rem", marginLeft: "0.6rem"}}
								>
									{" "}
									<span>Recruiting</span>{" "}
								</h5>
								<div className="card-body d-flex justify-content-center">
									<img src="images/job-seeker.png" alt="" />
								</div>
								<div className="down-text">
									<p className="card-text">
										Fill your candidate pipeline and book more interviews and
										recuiter screens with easy, standardized scheduling.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="row justify-content-center" style= {{marginTop: "3rem"}}>
						<button className="btn btn-dark cst1">Learn more</button>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<h3 style={{boxSizing: "border-box", fontWeight:"800", fontSize: "35px", width: "100px"}}>
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
							<span style={{fontSize: "28px", fontWeight: "700"}}>About</span>
							<h6>About Calendly</h6>
							<h6>Contact Sales</h6>
							<h6>Newsroom</h6>
							<h6>Careers</h6>
							<h6>Security</h6>
						</div>
						<div className="col-md-3 custom-row4">
							<span style={{fontSize: "28px", fontWeight: "700"}}>Solutions</span>
							<h6>Customer Success</h6>
							<h6>Sales</h6>
							<h6>Recruiting</h6>
							<h6>Education</h6>
							<h6>Marketing</h6>
						</div>
						<div className="col-md-3 custom-row4">
							<span style={{fontSize: "28px", fontWeight: "700"}}>
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

export default Enterprise;
