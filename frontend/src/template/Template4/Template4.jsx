import './Template4.css';
const Template4 = ({data}) => {
   console.log(data);
  return (
    <div className="template1 border rounded mx-auto my-4 px-sm-4 py-3 w-100">
      {/* Header section */}
      <div className="row mb-4">
        <div className="col-md-6 mb-3 mb-md-0">
          {data.logo && (
            <div className="mb-2">
              <img src={data.logo} alt="Company logo" width={98} />
            </div>
          )}
          <h3 className="mb-1 company-title">{data.company.name}</h3>
          <p className="mb-1">{data.company.address}</p>
          <p className="mb-0">{data.company.phone}</p>
        </div>
        <div className="col-md-6 text-start text-md-end">
          <h1 className="mb-2 invoice-title">Invoice</h1>
          <div className="d-flex flex-column flex-md-row justify-content-md-end gap-2 gap-md-4">
            <div className="w-100 w-md-50 mb-3 mb-md-0">
              <p className="mb-1">
                <strong>Invoice#:</strong> {data.invoice.number}
              </p>
              <p className="mb-1">
                <strong>Invoice Date:</strong> {data.invoice.date}
              </p>
              <p className="mb-1">
                <strong>Due Date:</strong> {data.invoice.dueDate}
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-3 orange-border" />

      {/* Billing section */}
    <div className="row mb-4">
  <div className="col-md-6">
    {data.shipping.name && data.shipping.phone && data.shipping.address && (
      <div className="p-3 rounded h-100 billing-box border">
        <h3 className="mb-2 billing-title">Shipped To</h3>
        <p className="mb-1">
          <strong>Name: {data.shipping.name}</strong>
        </p>
        <p className="mb-1">Address:{data.shipping.address}</p>
        <p className="mb-0">Phone: {data.shipping.phone}</p>
      </div>
    )}
  </div>
  <div className="col-md-6">
    <div className="p-3 rounded h-100 billing-box border">
      <h3 className="mb-2 billing-title">Billed To</h3>
      <p className="mb-1">
        <strong>Name: {data.billing.name}</strong>
      </p>
      <p className="mb-1">Address: {data.billing.address}</p>
      <p className="mb-0">Phone: {data.billing.phone}</p>
    </div>
  </div>
</div>
      {/* Items table */}
      <div className="mb-4">
        <div className="table-responsive">
          <table className="table table-bordered table-striped align-middle">
            <thead>
              <tr>
                <th className="p-2 table-header">Item #/Description</th>
                <th className="p-2 text-center table-header">Qty</th>
                <th className="p-2 table-header">Rate</th>
                <th className="p-2 table-header">Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((item, index) => (
                <tr key={index}>
                  <td className="p-2">{item.description}</td>
                  <td className="p-2 text-center">{item.qty}</td>
                  <td className="p-2 text-end">
                    ${Number(item.amount)?.toFixed(2) || '0.00'}
                  </td>
                  <td className="p-2 text-end">
                    ${(Number(item.qty) * Number(item.amount)).toFixed(2) || '0.00'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Totals section */}
      <div className="mb-4">
        <div className="d-flex justify-content-end">
          <div className="p-3 w-100 totals-box text-end" style={{ maxWidth: '300px' }}>
            <div className="d-flex justify-content-between">
              <span>Sub total:</span>
              <span>${Number(data.subtotal).toFixed(2) || '0.00'}</span>
              <span>${data.tax}</span>
              <span>${data.total}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bank account section */}
      {(data.account.name || data.account.number || data.account.ifiscode) && (
        <div className="mt-4">
          <h3 className="mb-2 billing-title">Bank Account Details</h3>
          {data.account && (
            <p className="mb-1">
              <strong>Account Holder:</strong> {data.account.name}
            </p>
          )}
          {data.account && (
            <p className="mb-1">
              <strong>Account Number:</strong> {data.account.number}
            </p>
          )}
          {data.account && (
            <p className="mb-1">
              <strong>Account IFSC Code:</strong> {data.account.ifiscode}
            </p>
          )}
        </div>
      )}

      {/* Notes section */}
      {data.notes && (
        <div className="mt-4">
          <h3 className="mb-2 billing-title">Remarks</h3>
          <p className="mb-0">{data.notes}</p>
        </div>
      )}
    </div>
  );
};
export default Template4