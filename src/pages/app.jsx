import React from "react";

import Header from "../organisms/header";
import Layout from "../templates/layout";
import Menu from "../organisms/menu";

function App() {
  return (
    <div>
      <Layout> 
        <Header />
        <Menu />
      </Layout>
    </div>
  );
}

export default App;

