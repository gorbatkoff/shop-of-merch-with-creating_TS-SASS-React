import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

import Alert from '@mui/material/Alert';


export default function MyDropzone() {

    const [img, setImg] = useState("");

    let imageUrl = 'url(' + img + ')';

    const styles = {
        height: "340px",
        width: "430px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "3px solid #0034BB",
        margin: "2em 0",
        borderRadius: "23px",
        backgroundImage: imageUrl,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        cursor: "pointer"
    }


    const onDrop = useCallback((acceptedFiles: any[]) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                // Do whatever you want with the file contents
                const binaryStr = reader.result;
                const blob = new Blob([binaryStr as BlobPart], {
                    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                });
                var urlCreator = window.URL || window.webkitURL;
                var imageUrl = urlCreator.createObjectURL(blob);
                setImg(() => imageUrl);

                console.log(binaryStr)
            }
            reader.readAsArrayBuffer(file)
        })

    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()} style={styles}>
            <input {...getInputProps()} />

            {img
                ? <></>
                :
                isDragActive
                    ?
                    <center><h3 style={{color: "#0034BB"}}>Отпустите файл прямо здесь!</h3></center>
                    :
                    <center><h3 style={{color: "#0034BB"}}>Нажмите здесь чтоб выбрать файл или перенесите его прямо сюда!</h3></center>
            }
        </div>
    )
}