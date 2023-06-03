import { Component } from "react";

export class Home extends Component {
	render() {
		return (
			<div>
				<div className="container custom-container1">
					<div className="row">
						<div className="col-md-6 section first-container1">
							<h3>Easy scheduling</h3>{" "}
							<h3 className="firstContainerh3" >
								ahead
							</h3>
							<br />
							<p>
								Calendly is your hun for scheduling meetings professionally and
								effeiciently, eliminate the hassle of back-and-forth emails so
								you can get back to work.
							</p>
							<div className="input-group mb-3  custom-form">
								<input
									type="text"
									className="form-control cst"
									placeholder="Recipient's username"
									aria-label="Recipient's username"
									aria-describedby="button-addon2"
								/>
								<div className="input-group-append">
									<button
										className="btn btn-outline-secondary cst1"
										type="button"
										id="button-addon2"
									>
										SignUp
									</button>
								</div>
							</div>
							<p className="text-muted down-text">
								Create your free account. No credit required
							</p>
						</div>
						<div className="col-md-6 section second-container1">
							<img src="images/black suit.png" className="img-fluid" alt="" />
						</div>
					</div>
				</div>

				<div className="container custom-footer">
					<div className="text-center box">
						<div style={{width: "430px", marginTop:"2rem"}}>
							<h3>
								Simplified scheduling for more than{" "}
								<b style={{color: "#006aff"}}>10,000,000</b> users worldwide
							</h3>
						</div>
					</div>
					<div className="row roww photo-container">
						<div className="col-md-3 photos">
							<img src="images/dropbox.png" alt="" />
						</div>
						<div className="col-md-3 photos">
							<img src="images/ebay.png" alt="" />
						</div>
						<div className="col-md-3 photos">
							<img src="images/visa.png" alt="" />
						</div>
						<div className="col-md-3 photos">
							<img src="images/sgdfg.png" alt="" />
						</div>
					</div>
				</div>

				<div className="container" style={{width: "55rem", marginBottom:"7rem"}}>
					<div className="row">
						<div className="col-md-4">
							<div className="card custom-card" style={{width: "14rem"}}>
								<div className="card-body">
									<h3 className="card-title">Create simple rules</h3>
									<p className="card-text">
										Let Calendy know your availablity preference and it'll do
										the work for you.
									</p>
									<div className="numbering text-center">1.</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card custom-card" style={{width: "14rem"}}>
								<div className="card-body">
									<h3 className="card-title">Share your link</h3>
									<p className="card-text">
										Send guests your Calendly link or embed it on your website..
									</p>
									<div className="numbering text-center">2.</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card custom-card" style={{width: "14rem"}}>
								<div className="card-body">
									<h3 className="card-title">Get booked </h3>
									<p className="card-text">
										They pick a time and the event is added to your calender.
									</p>
									<div className="numbering text-center">3.</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
