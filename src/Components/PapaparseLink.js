import React from 'react';

import { useCSVDownloader } from 'react-papaparse';

export default function CSVDownloader() {
  const { CSVDownloader, Type } = useCSVDownloader();

  return (
   <button>
    <CSVDownloader
      type={Type.Link}
      filename={'filename'}
      bom={true}
      data={`Carrier Full Name,	Carrier Email,	Carrier Office Phone,	Carrier Cell Phone, Company Name, Company Website, Company Office Phone,	Company Fax Number,	Emergency Contact Full Name,	Emergency Contact Phone,	Emergency Contact Email, Notes 
 `}
    >
      CSV Template
    </CSVDownloader>
    </button>
  );
}