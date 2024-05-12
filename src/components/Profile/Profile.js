import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar.js";
import "../Profile/Profile.css";

const Profile = ({
  cards,
  onCreateModal,
  onEditModal,
  onLogout,
  onSelectCard,
  isLoggedIn,
  onCardLike,
}) => {
  return (
    <div className="profile">
      <SideBar onLogout={onLogout} onEditModal={onEditModal} />
      <ClothesSection
        cards={cards}
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
        isLoggedIn={isLoggedIn}
        onCardLike={onCardLike}
      />
    </div>
  );
};

export default Profile;
