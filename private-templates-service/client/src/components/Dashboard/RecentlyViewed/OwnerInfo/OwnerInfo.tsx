import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../../../store/rootReducer";

import { OwnerType } from "../../../../store/templateOwner/types";

import { InfoWrapper } from "./styled";
import OwnerAvatar from "../OwnerAvatar";

const mapStateToProps = (state: RootState) => {
  return {
    owner: state.templateOwner.owners,
  };
};

interface Props {
  oID: string;
  owner?: OwnerType;
}

class OwnerInfo extends React.Component<Props> {
  render() {
    return (
      <InfoWrapper>
        <OwnerAvatar oID={this.props.oID} /> {(this.props.owner && this.props.owner.displayNames) ? this.props.owner.displayNames[this.props.oID] : ""}
      </InfoWrapper>
    );
  }
}

export default connect(mapStateToProps)(OwnerInfo);