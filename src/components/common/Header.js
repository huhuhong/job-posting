import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout }  from "../../actions/accountActions";
import { toast } from "react-toastify";

export function Header ( { account, logout } ) {

  async function onLogout(){
    debugger;
    const result = await logout();
    if(result) {
      toast.success("Logout succesful");
    }
  }

  const isLogin = account && account.isLogin;
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      {!isLogin && (<NavLink to="/login" activeStyle={activeStyle}>
        Login
      </NavLink>
      )}
      {isLogin && (<NavLink to="#" onClick={onLogout}activeStyle={activeStyle}>
        Logout
      </NavLink>
      )}
    </nav>
  );
};

const mapStateToProps = state => ({
  account: state.account
});

const mapDispatchToProps = {
  logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

