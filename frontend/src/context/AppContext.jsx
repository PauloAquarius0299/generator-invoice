import React, { useState } from "react";

export const AppContext = React.createContext();

export const initialInvoiceData = {
    title: 'New Invoice',
    billing: {name: '', phone: '', address: ''},
    shipping: {name: '', phone: '', address: ''},
    invoice: {number: '', date: '', dueDate: ''},
    account: {name: '', number: '', ifiscode: ''},
    company: {name: '', number: '', address: ''},
    tax: 0,
    subtotal: 0,
    total: 0,
    notes: '',
    items : [
        {name: '', qty: '', amount: '', description: '', total: 0}
    ],
    logo: '',
}

// eslint-disable-next-line react/prop-types
export const AppContextProvider = ({ children }) => {

    const [invoiceTitle, setInvoiceTitle] = useState("new Invoice");
    const [invoiceData, setInvoiceData] = useState(initialInvoiceData);
    const [selectedTemplate, setSelectedTemplate] = useState("template1");

    const contextValue ={
        invoiceTitle,
        setInvoiceTitle,
        invoiceData,
        setInvoiceData,
        selectedTemplate,
        setSelectedTemplate,
        initialInvoiceData
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}