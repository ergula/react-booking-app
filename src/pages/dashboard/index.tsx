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
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 mb-4">
                    <div>test1</div>
                    <div>test1</div>
                    <div>test1</div>
                    <div>test1</div>
                </div>
            </SectionMain>
        </>
    )
}

export default Dashboard;