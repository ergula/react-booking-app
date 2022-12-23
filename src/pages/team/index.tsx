import React from "react";
import NavigationBar from "../../components/menu";

import email from "../../assets/images/email.svg";
import linkedin from "../../assets/images/linkedin.svg";
import TeamCardContainer from "./components/TeamCardContainer";
import { link } from "fs";
import TeamCard from "./components/TeamCard";

const Team = () => {
  return (
    <div>
      <NavigationBar />
      <TeamCardContainer
        title="Our Team"
        subTitle="The talented people behind the scenes"
      >
        <TeamCard  name="Lorem" title="Frontend Developer" id="0"/>
        <TeamCard  name="Lorem" title="Frontend Developer" id="1"/>
        <TeamCard  name="Lorem" title="Frontend Developer" id="2"/>
        <TeamCard  name="Lorem" title="Frontend Developer" id="3"/>
        <TeamCard  name="Lorem" title="Frontend Developer" id="4"/>
        <TeamCard  name="Lorem" title="Frontend Developer" id="5"/>

      </TeamCardContainer>
    </div>
  );
};

export default Team;
