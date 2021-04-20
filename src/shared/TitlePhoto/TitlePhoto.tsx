import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../redux/reducers/rootReducer";
import './TitlePhoto.css';
import { SimpleImg } from 'react-simple-img';
import Tooltip from "@material-ui/core/Tooltip";

interface TitlePhotoProps {
    photoList: string[]
    path: string[]
    changeState: (open: boolean) => void;
}

interface TitlePhotoPrivateProps extends TitlePhotoProps {
    numberOfPhotos: number;
    
}

const TitlePhoto: React.FC<TitlePhotoPrivateProps> = (props) => {
    const {  photoList, changeState, numberOfPhotos,path } = props;

    const hideModal = () => {
        changeState(false)
    }

    return (
        <div className="container">
            <div className="header">
                <strong><span className="text">Количество фото: {photoList && photoList.length || 0}</span></strong>
                <span
                    className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
                    style={{ cursor: "pointer" }}
                    title="Закрыть"
                    onClick={hideModal}
                >
                    ×
                </span>
            </div>
            {
                photoList.map((photo, index) => <div >
                    <Tooltip title={path[index]}>
                    <SimpleImg className="image" height="100" width="100" animationDuration={1} src={photo } />
                    </Tooltip>
                    </div>)
            }
        </div>
    )
}


export default TitlePhoto

