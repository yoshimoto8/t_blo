import React from "react";
import Sidebar from "react-sidebar";
import { Route } from "react-router-dom";
import { SideBarComponents } from "./SideBarComponents";
import Blog from "./containers/Blog";

interface State {
  sidebarOpen: boolean;
}
interface Props {}
class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      sidebarOpen: true //今の所trueにしておく
    };
  }

  handleChangeSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  render() {
    const { sidebarOpen } = this.state;
    const { handleChangeSidebar } = this;
    return (
      <div>
        <Sidebar
          sidebar={<SideBarComponents />}
          open={sidebarOpen}
          shadow={false}
          docked
        >
          <Route path="/about-me" />
          <Route path="/blog" component={Blog} />
          <Route path="/tags" />
          <Route path="/archives" />
          <Route path="/contact" />
        </Sidebar>
      </div>
    );
  }
}

export default App;
