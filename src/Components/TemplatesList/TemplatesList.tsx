import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { TextField } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import './TemplatesList.css';

const names = [
    'Влад',
    'Ваня',
    'Игорь',
    'Никита',
    'Женя',
    'Андрей',
];

const arr = Array(30).fill("")

interface Props { }

function TemplatesList(props: Props) {
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event: any) => {
        setPersonName(event.target.value);
    };

    return (
        <div style={{ margin: "20px" }}>
            <Sidebar />
            <div className=" md:ml-64 bg-blueGray-100" style={{ paddingBottom: "10px", backgroundColor: "#e4e4e7" }}>
                <header className="header" >
                    <FormControl className="form">
                        <Select
                            multiple
                            displayEmpty
                            value={personName}
                            onChange={handleChange}
                            input={<Input />}
                            renderValue={() => <em>Кабинет 305</em>}
                        >
                            <MenuItem disabled value="">
                                <em>Имена всех работников</em>
                            </MenuItem>
                            {names.map((name) => (
                                <MenuItem key={name} value={name}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </header>
                <div className="overflow">
                    <main>
                        <div className="body">
                            <div className="picture-container">
                                <span className="picture-text">Первая фотография</span>
                                <img className="picture-img" src='./img/art.jpg' alt="nety" />
                            </div>
                            <div>
                                <div className="colvo-ob">
                                    <span >Доступно <strong>n</strong> объявлений</span>
                                </div>
                                <div className="container-yacheek">
                                    {arr.map((_, ind) => <div className="yacheika"><p className="yacheika-text">{ind + 1}</p><div className="yacheika-input"><TextField className="input-field" variant="outlined" /></div></div>)}
                                </div>
                            </div>
                            <div className="input-checkbox">
                                <div className="input">
                                    <Input placeholder="100" inputProps={{ 'aria-label': 'description' }} />
                                </div>
                                <div className="checkbox-container">
                                    <Checkbox color="primary" />
                                    <label className="checkbox-label">Распределить равномерно на задней</label>
                                </div>
                                <div className="checkbox-container">
                                    <Checkbox color="primary" />
                                    <label className="checkbox-label">Распределить равномерно вначале</label>
                                </div>
                            </div>
                            {
                            }
                        </div>
                    </main>
                    <main className="body">
                        <div className="picture-container">
                            <span className="picture-text">Вторая фотография</span>
                            <img className="picture-img" src='./img/team-3-800x800.jpg' alt="nety" />
                        </div>
                        <div>
                            <div className="colvo-ob">
                                <span >Доступно <strong>n</strong> объявлений</span>
                            </div>
                            <div className="container-yacheek">
                                {arr.map((_, ind) => <div className="yacheika"><p className="yacheika-text">{ind + 1}</p><TextField className="input-field" variant="outlined" /></div>)}
                            </div>
                        </div>
                        <div className="input-checkbox">
                            <div className="input">
                                <Input placeholder="100" inputProps={{ 'aria-label': 'description' }} />
                            </div>
                            <div className="checkbox-container">
                                <Checkbox color="primary" />
                                <label className="checkbox-label">Распределить равномерно на задней</label>
                            </div>
                            <div className="checkbox-container">
                                <Checkbox color="primary" />
                                <label className="checkbox-label">Распределить равномерно вначале</label>
                            </div>
                        </div>
                    </main>
                    <main className="body">
                        <div className="picture-container">
                            <span className="picture-text">Вторая фотография</span>
                            <img className="picture-img" src='./img/team-3-800x800.jpg' alt="nety" />
                        </div>
                        <div>
                            <div className="colvo-ob">
                                <span >Доступно <strong>n</strong> объявлений</span>
                            </div>
                            <div className="container-yacheek">
                                {arr.map((_, ind) => <div className="yacheika"><p className="yacheika-text">{ind + 1}</p><TextField className="input-field" variant="outlined" /></div>)}
                            </div>
                        </div>
                        <div className="input-checkbox">
                            <div className="input">
                                <Input placeholder="100" inputProps={{ 'aria-label': 'description' }} />
                            </div>
                            <div className="checkbox-container">
                                <Checkbox color="primary" />
                                <label className="checkbox-label">Распределить равномерно на задней</label>
                            </div>
                            <div className="checkbox-container">
                                <Checkbox color="primary" />
                                <label className="checkbox-label">Распределить равномерно вначале</label>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
export default TemplatesList
