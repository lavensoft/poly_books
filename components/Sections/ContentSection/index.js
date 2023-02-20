import { Col, Row } from 'react-bootstrap';
import style from './index.module.scss';
import { Document, Page } from 'react-pdf';
import { useState } from 'react';
const content_section = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <div className={`container bg-white ${style.container_content}`}>
            <Row>
                <Document file="../../../public/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
            </Row>
        </div>
    )
}
export default content_section;