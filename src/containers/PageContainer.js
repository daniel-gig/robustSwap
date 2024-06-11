import Sidebar from "../component/SideBar";

import "./PageContainer.css";

const PageContainer = ({ children }) => {
    return (
        <div className="page-container">
            <Sidebar />
            <div className="main-content">{children}</div>
        </div>
    );
};

export default PageContainer;
