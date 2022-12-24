import NavigationBar from "../../components/menu";


import TeamCardContainer from "./components/TeamCardContainer";
import TeamCard from "./components/TeamCard";

const Team = () => {
  return (
    <div>
      <NavigationBar />
      {/* Card Info */}
      <TeamCardContainer
        title="Our Team"
        subTitle="The talented people behind the scenes"
      >
        {/* Card Content  */}
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
