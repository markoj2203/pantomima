import React from "react";

const gridExamplesPage = () => {
  return (
    <div className="companies">
      {companyList.map(co => <div>{co.name}</div>)}
    </div>
  );
}

export default gridExamplesPage;