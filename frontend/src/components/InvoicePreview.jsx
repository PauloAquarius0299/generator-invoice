import { forwardRef } from "react";
import PropTypes from "prop-types";
import Template1 from "../template/Template1/Template1";

const InvoicePreview = forwardRef((props, ref) => {
  const { invoiceData } = props;

  return (
    <div className="invoice-preview container px-2 py-2 overflow-x-auto" ref={ref}>
      <Template1 data={invoiceData} />
    </div>
  );
});

InvoicePreview.displayName = "InvoicePreview";

InvoicePreview.propTypes = {
  invoiceData: PropTypes.any,
  template: PropTypes.any,
};

export default InvoicePreview;
