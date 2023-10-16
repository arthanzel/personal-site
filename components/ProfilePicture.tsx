import profilePicture from "@/r/profile.jpg";
import styles from "./ProfilePicture.module.scss";

export default ({ width = "180px", className = "" }) => (
    <div className={`${styles["profile-picture"]} ${className}`}>
        <img src={profilePicture.src}
             alt="Martin's beautiful face"
             style={{ width }} />
    </div>
)