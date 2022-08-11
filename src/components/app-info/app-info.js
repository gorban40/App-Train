import './app-info.css';

const AppInfo = (props) => {
    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании</h1>
            <h2>Общее число сотрудников: {props.employersCount}</h2>
            <h2>Премию получит премию: {props.increased} </h2>
        </div>
    );
}

export default AppInfo;