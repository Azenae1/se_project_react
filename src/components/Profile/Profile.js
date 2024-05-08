import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar.js";
import "../Profile/Profile.css";

const Profile = ({ cards, onCreateModal, onEditModal, onSelectCard }) => {
  return (
    <div className="profile">
      <SideBar onEditModal={onEditModal} />
      <ClothesSection
        cards={cards}
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
      />
    </div>
  );
};

export default Profile;
