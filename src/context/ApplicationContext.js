import React, {useState, createContext} from "react";

export const ApplicationContext = createContext ();

export const ApplicationProvider = (props) =>{
    const [records, setRecords] = useState([
        {
            Name: 'test record',
            link: 'www.google.com'
        },
        {
            Name: 'test record 2',
            link: 'www.github.com'
        }]
    );

    return (
        <ApplicationContext.Provider value={[records]}>
            {props.children}
        </ApplicationContext.Provider>
    )
}

