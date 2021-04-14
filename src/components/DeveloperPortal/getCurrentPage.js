import { useEffect, useState } from "react";

function GetCurrentPage() {
  const pathname = window.location.hash;

  const getPageTitle = {
    "#/testnet": "Testnet",
    "#/sdk": "SDK",
    "#/example-client": "Example Client",
  };

  const [currentPageTitle, setCurrentPageTitle] = useState(
    getPageTitle[pathname]
  );

  useEffect(() => {
    setCurrentPageTitle(getPageTitle[window.location.hash]);
  }, [window.location.hash]);

  return currentPageTitle;
}

export default GetCurrentPage;
