import React, { Component } from "react";
import { withTranslation } from "react-i18next";

class Home extends Component {
  state = {
    nextUsername: "",
    username: "User",
  };

  updateUsername = (e) => {
    this.setState({
      nextUsername: e.target.value,
    });
  };

  setUsername = () => {
    this.setState({
      username: this.state.nextUsername,
    });
  };

  changeLanguage = (e) => {
    const { i18n } = this.props;
    i18n.changeLanguage(e.target.value);
  };

  render() {
    const { username } = this.state;
    const { t } = this.props;

    return (
      <div className="mt-4">
        <h1 className="display-4">{`${t("welcome")}, ${username}!`}</h1>
        <p className="lead">{t("change-username")}</p>
        <div className="d-flex col-sm-12 col-lg-4">
          <input
            className="form-control"
            placeholder="Enter your name"
            onChange={this.updateUsername}
          />
          <button
            className="btn btn-outline-success mx-2"
            onClick={this.setUsername}
          >
            {t("submit")}
          </button>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Home);
