import NavigationBar from "../../components/menu";
import SectionMain from "./components/SectionMain";
import SectionTitle from "./components/SectionTitle";

const Dashboard = () => {
    return (
        <>
            <NavigationBar />
            <SectionMain>
                <SectionTitle main title="Dashboard">
                </SectionTitle>
            </SectionMain>
        </>
    )
}

export default Dashboard;