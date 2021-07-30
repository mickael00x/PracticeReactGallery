import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from "../firebase/config";

const useStorage = (file) => {
    //progress of upload
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    //img url that we get back after it's been uploaded
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // create a references + ref methods
        const storageRef = projectStorage.ref(file.name);

        const collectionRef = projectFirestore.collection('images');

        // put file in ref (async)
        storageRef.put(file).on('state_changed', (snap) => {
            //snap when uploaded => may be several snap
            let pourcent = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(pourcent);
        }, (err) => {
            setError(err);
        }, async () => {
            //after completion
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ url, createdAt });
            setUrl(url);
        });
    }, [file]);

    return { progress, url, error };
}

export default useStorage;