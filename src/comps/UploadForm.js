import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];
    const changeHandler = (event) => {
        let selected = event.target.files[0]; //grab only the first (if someone imports multiple files)
        //check if the type of file is in types whitelist array
        if(selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            //reset in case of error
            setFile(null);
            setError('Please, select an image file (png or jpeg)');
        }
    }

    //right side of && is executed only if left side is true 
    return (
        <form>
            <label>
                <input onChange={changeHandler} type="file"/>
                Insert your images<span>+</span>
            </label>
            <div className="output">
                { error && <div className="error">{ error }</div>}
                { file && <div className="file">{ file.name }</div>}
                { file && <ProgressBar  file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default UploadForm;