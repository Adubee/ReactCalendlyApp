import { Component } from "react";
import { NavLink } from "react-router-dom";

export class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light navigation">
				<NavLink to={'/'} className="navbar-brand">
					<img
						src="images/sgdfg.png"
						width="190"
						className="d-inline-block align-top"
						alt=""
					/>
				</NavLink>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<div className="custom-nav">
						<ul className="navbar-nav mr-auto custom-nav2">
							<li className="nav-item">
								<NavLink to={"/individuals"} className="nav-link">
									Individuals
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to={"/teams"} className="nav-link">
									Teams
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to={"/enterprise"} className="nav-link">
									Enterprise
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
