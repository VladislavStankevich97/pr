import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import { randomizeText } from '../../helpers/text'

interface TemplateCreationMProps {
    seeTable: () => void
    openTemplateCreation: boolean,
    setOpenTemplateCreation: (value: boolean) => any,
    photoList: any[];
    description: string;
}

const TemplateCreation: React.FC<TemplateCreationMProps> = (props) => {
    const { openTemplateCreation, setOpenTemplateCreation, seeTable, photoList, description } = props
    const [loading, setLoading] = useState(true)

    const foo = () => {
        setOpenTemplateCreation(false);
        seeTable()
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])
    
    const length = randomizeText(description).length

    const min = photoList && Math.min.apply(null, (photoList.map(el => el && el.length)));
    const max = photoList && Math.max.apply(null, (photoList.map(el => el && el.length)));
    const title = `Миниальное количество фото: ${min}, максимальное количество фото: ${max}`;

    return (
        <div>
            <Dialog
                open={openTemplateCreation}
            >
                <DialogTitle style={{ padding: "10px" }}>
                    <div style={{ marginLeft: "25px", display: "flex", width: "370px", justifyContent: "space-between", alignItems: "center", height: "30px" }}>
                        <span>Формирование шаблона</span>
                        {!loading && <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none" style={{ cursor: "pointer" }} onClick={() => setOpenTemplateCreation(false)}>
                            ×
                         </span>
                        }
                    </div>
                </DialogTitle>
                <DialogContent style={{ display: "flex", justifyContent: "center", width: "430px", height: "100px" }}>
                    {loading ? <CircularProgress style={{ margin: "auto" }} /> :
                        <DialogContentText>
                            <span title={title} style={{ cursor: "pointer", display: "flex", justifyContent: "space-between" }}>Количество объявлений по фото: <strong>{min}</strong></span><br />
                            <span title={`Сформированно ${length} объявлений`} style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", marginTop: "-25px" }}>Количество объявлений по описанию: <strong style={{ marginLeft: "70px" }}>{length}</strong></span><br />
                            <span style={{ display: "flex", justifyContent: "space-between", marginTop: "-21px", textDecoration: "underline" }}><strong>Общее количество объявлений:</strong> <strong>3</strong></span>
                        </DialogContentText>
                    }
                </DialogContent>
                <DialogActions style={{ height: "50px" }}>
                    {!loading && <Button onClick={foo} variant="contained" color="primary">
                        Просмотр
                    </Button>}
                </DialogActions>
            </Dialog>
        </div>
    );
}


export default TemplateCreation