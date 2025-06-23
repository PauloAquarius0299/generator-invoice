import { forwardRef } from "react";
import PropTypes from "prop-types";
import { templateComponents } from "../util/invoiceTemplates";

const InvoicePreview = forwardRef((props, ref) => {
  const { invoiceData, template } = props;

  const SelectedTemplate = templateComponents[template] || templateComponents['template1'];

  return (
    <div className="invoice-preview container px-2 py-2 overflow-x-auto" ref={ref}>
      <SelectedTemplate key={template} data={invoiceData} />
    </div>
  );
});

InvoicePreview.displayName = "InvoicePreview";

InvoicePreview.propTypes = {
  invoiceData: PropTypes.any,
  template: PropTypes.any,
};

export default InvoicePreview;
