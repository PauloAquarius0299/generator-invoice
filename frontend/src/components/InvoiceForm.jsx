import { Trash2 } from "lucide-react"
import { assets } from "../assets/assets"
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const InvoiceForm = () => {
    const {invoiceData, setInvoiceData} = useContext(AppContext);

    const addItem = () => {
        setInvoiceData((prev) => ({
            ...prev,
            items: [
                ...prev.items,
                {name: '', qty: '', amount: '', description: '', total: 0}
            ]
       }));
    };

    const deleteItem = (index) => {
       const items = invoiceData.items.filter((_, i) => i != index);
       setInvoiceData((prev) => ({...prev, items}));
    };

    const handleChange = (section, field, value) => {
        setInvoiceData((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }))
    };

    const handleSomeAsBilling = () => {
        setInvoiceData((prev) => ({
            ...prev,
            shipping: {
                ...prev.billing
            }
        }));
    };

    const handleItemChange = (index, field, value) => {
        const items = [...invoiceData.items];
        items[index][field] = value;
        if(field === 'qty' || field === 'amount') {
            items[index].total = (items[index].qty || 0) * (items[index].amount || 0);
        }
            setInvoiceData((prev) => ({
            ...prev,
            items,
        }));
    };

    const calculateTotals = () => {
        const subtotal = invoiceData.items.reduce((sum, item) => sum + (item.total || 0) , 0);
        const taxRate = Number(invoiceData.tax) || 0;
        const taxAmount = (subtotal * taxRate) / 100;
        const grandTotal = subtotal + taxAmount;
        return { subtotal, taxAmount, grandTotal };
    };

    const { subtotal, taxAmount, grandTotal } = calculateTotals();

    const handleLogoUpload = (e) => {
        const file = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload = (event) => {
                setInvoiceData((prev) => ({
                    ...prev,
                    logo: event.target.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
     if (!invoiceData.invoice.number) {
        const randomNumber = `INV-${Math.floor(10000 + Math.random() * 90000)}`;
        setInvoiceData((prev) => ({
            ...prev,
            invoice: {
                ...prev.invoice,
                number: randomNumber
            }
        }));
     }   
    }, []);


  return (
    <div className="invoiceform container py-4">
        {/* company logo*/}
        <div className="mb-4">
            <h5>Logo da empresa</h5>
            <div className="d-flex align-items-center gap-3">
                <label htmlFor="image" className="form-label">
                    <img src={invoiceData.logo ? invoiceData.logo : assets.upload} alt='upload' width={98} />
                </label>
                <input type="file" 
                name='logo' 
                id='image' 
                className="form-control" 
                accept="image/*" 
                onChange={handleLogoUpload}
                />
            </div>
        </div>
        {/* company info*/}
        <div className="mb-4">
            <h5>Sua empresa</h5>
            <div className="row g-3">
                <div className="col-md-6">
                    <input type="text" 
                    className="form-control" 
                    placeholder="Nome da empresa" 
                    onChange={(e) => handleChange('company', 'name', e.target.value)}
                    value={invoiceData.company.name}
                    />
                </div>
                 <div className="col-md-6">
                    <input type="text" 
                    className="form-control" 
                    placeholder="telefone" 
                     onChange={(e) => handleChange('company', 'phone', e.target.value)}
                    value={invoiceData.company.phone}
                    />
                </div>
                 <div className="col-md-12">
                    <input type="text" className="form-control" placeholder="endereço" 
                    onChange={(e) => handleChange('company', 'address', e.target.value)}
                    value={invoiceData.company.address}
                    />
                </div>
            </div>
        </div>
        {/* bill to*/}
        <div className="mb-4">
             <h5>Criado por</h5>
            <div className="row g-3">
                <div className="col-md-6">
                    <input type="text" 
                    className="form-control" 
                    placeholder="Nome" 
                    value={invoiceData.billing.name}
                    onChange={(e) => handleChange('billing', 'name', e.target.value)}
                    />
                </div>
                 <div className="col-md-6">
                    <input type="text" 
                    className="form-control" 
                    placeholder="telefone" 
                    value={invoiceData.billing.phone}
                    onChange={(e) => handleChange('billing', 'phone', e.target.value)}
                    />
                </div>
                 <div className="col-md-12">
                    <input type="text" 
                    className="form-control" 
                    placeholder="endereço"
                    value={invoiceData.billing.address}
                    onChange={(e) => handleChange('billing', 'address', e.target.value)}
                    />
                </div>
            </div>
        </div>
        {/* ship to*/}
        <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
            <h5>Enviar para</h5>
             <div className="form-check">
            <input type="checkbox" className="form-check-input" id='someAsBilling' onChange={handleSomeAsBilling} />
            <label htmlFor="someAsBilling" className="form-check-label">
                    Some as Billing
            </label>
             </div>
            </div>
            <div className="row g-3">
                <div className="col-md-6">
                    <input type="text" 
                    className="form-control" 
                    placeholder="Nome da empresa" 
                    value={invoiceData.shipping.name}
                    onChange={(e) => handleChange('shipping', 'name', e.target.value)}
                    />
                </div>
                 <div className="col-md-6">
                    <input type="text" 
                    className="form-control" 
                    placeholder="telefone" 
                       value={invoiceData.shipping.phone}
                    onChange={(e) => handleChange('shipping', 'phone', e.target.value)}
                    />
                </div>
                 <div className="col-md-12">
                    <input type="text" 
                    className="form-control" 
                    placeholder="Shipping address" 
                    value={invoiceData.shipping.address}
                    onChange={(e) => handleChange('shipping', 'address', e.target.value)}
                    />
                </div>
            </div>
        </div>
        {/* invoice info*/}
        <div className="mb-4">
             <div className="mb-4">
             <h5>Informações</h5>
            <div className="row g-3">
                <div className="col-md-4">
                    <label htmlFor="invoiceNumber" className="form-label">Numero da fatura</label>
                    <input type="text"  
                    className="form-control" 
                    placeholder="Numero da fatura" 
                    id='invoiceNumber' 
                    value={invoiceData.invoice.number}
                    onChange={(e) => handleChange('invoice', 'number', e.target.value)}
                    />
                </div>
                 <div className="col-md-4">
                     <label htmlFor="invoiceDate" className="form-label">Inicio</label>
                    <input type="date" 
                    className="form-control" 
                    id='invoiceDate' 
                    value={invoiceData.invoice.date}
                    onChange={(e) => handleChange('invoice', 'date', e.target.value)}
                    />
                </div>
                 <div className="col-md-4">
                     <label htmlFor="invoiceDueDate" className="form-label">Vencimento</label>
                    <input type="date" 
                    className="form-control" 
                    id='invoiceDueDate'  
                    value={invoiceData.invoice.dueDate}
                    onChange={(e) => handleChange('invoice', 'dueDate', e.target.value)}
                    />
                </div>
            </div>
        </div>
        </div>
        {/* item details*/}
        <div className="mb-4">
            <h5>Items Detalhes</h5>
           {invoiceData.items.map((item, index) => (
             <div key={index} className="card p-3 mb-3">
                <div className="row g-3 mb-2">
                    <div className="col-md-3">
                        <input type="text" 
                        className="form-control" 
                        placeholder="item name" 
                        value={item.name}
                        onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                        />
                    </div>
                    <div className="col-md-3">
                        <input type="number" 
                        placeholder="qty" 
                        className="form-control" 
                        value={item.qty}
                        onChange={(e) => handleItemChange(index, 'qty', e.target.value)}
                        />
                    </div>
                    <div className="col-md-3">
                        <input type="number" 
                        placeholder="Amount" 
                        className="form-control"
                        value={item.amount}
                        onChange={(e) => handleItemChange(index, 'amount', e.target.value)}
                        />
                    </div>
                    <div className="col-md-3">
                        <input type="number" 
                        placeholder="Total" 
                        className="form-control"
                        value={item.total}
                        disabled
                        />
                    </div>
                     <div className="d-flex gap-2">
                        <textarea  
                        className="form-control" 
                        placeholder="Descrinção" 
                        value={item.description}
                        onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                        ></textarea>
                       {invoiceData.items.length > 1 && (
                         <button className="btn btn-outline-danger" type='button' onClick={() => deleteItem(index)} >
                            <Trash2 size={18} />
                        </button>
                        )}
                    </div>
                </div>
                <div className="d-flex gap-2">

                </div>
            </div>
            ))}
            <button className="btn btn-primary" type='button' onClick={addItem} >Add item</button>
        </div>
        {/* bank account info*/}
        <div className="mb-4">
            <h5>Detalhes da conta bancária</h5>
            <div className="row g-3">
                <div className="col-md-4">
                    <input type="text"  
                    className="form-control" 
                    placeholder="Nome da conta"  
                    value={invoiceData.account.name}
                    onChange={(e) => handleChange('account', 'name', e.target.value)}
                    />
                </div>
                 <div className="col-md-4">
                    <input type="text" 
                    className="form-control" 
                    placeholder="Numero da conta" 
                    value={invoiceData.account.number}
                    onChange={(e) => handleChange('account', 'number', e.target.value)}
                    />
                </div>
                 <div className="col-md-4">
                    <input type="text" 
                    className="form-control" 
                    placeholder="Branch/IFSC Code"  
                    value={invoiceData.account.ifiscode}
                    onChange={(e) => handleChange('account', 'ifiscode', e.target.value)}
                    />
                </div>
            </div>
        </div>
        {/* totals*/}
        <div className="mb-4">
            <h5>Total</h5>
            <div className="d-flex justify-content-end">
                <div className="w-100 w-md-50">
                    <div className="d-flex justify-content-between">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center my-2">
                        <label htmlFor="taxInput" className="me-2">Tax rate(%)</label>
                        <input type="number" 
                        id='taxInput' 
                        className="form-control w-50 text-end" placeholder="2" 
                        value={invoiceData.tax}
                        onChange={(e) => setInvoiceData((prev) => ({...prev, tax: e.target.value }))}
                        />
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>Tax amount</span>
                        <span>${taxAmount.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between fw-bold mt-2">
                        <span>Grand total</span>
                        <span>${grandTotal.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
        {/* notes*/}
        <div className="mb-4">
            <h5>Notes:</h5>
            <div className="w-100">
                <textarea name="notes" 
                className="form-control" 
                rows='3'
                value={invoiceData.notes}
                onChange={(e) => setInvoiceData((prev) => ({...prev, notes: e.target.value }))}
                ></textarea>
            </div>
        </div>

        
    </div>
  )
}

export default InvoiceForm