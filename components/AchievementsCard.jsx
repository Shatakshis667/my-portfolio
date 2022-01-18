import React from "react";
import { Card, CardBody, Badge } from "reactstrap";

import { Fade } from "react-reveal";

const AchievementsCard = ({ data }) => {
	return (
		<Fade left duration={1000} distance="40px">
			<Card className="card-lift--hover shadow mt-4">
				<CardBody>
					<div className="d-flex px-3">
						<div className="pl-4">
							<h5 className="text-info">{data.name}</h5>
							{data.issuedby ? (
									<p className="description mt-3">{data.issuedby}</p>
								) : null}
							<p className="description mt-3">{data.achievement}</p>
							<ul>
								{data.achievementBullets
									? data.achievementBullets.map((achievement) => {
											return <li className="description mt-3" key={achievement}>{achievement}</li>;
									  })
									: null}
							</ul>
						</div>
					</div>
				</CardBody>
			</Card>
		</Fade>
	);
};

export default AchievementsCard;
