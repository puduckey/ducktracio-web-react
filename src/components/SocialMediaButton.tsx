import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const SocialMediaButton = () => {
    return (
        <div className="col-span-1 flex items-center justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-400 p-2 ">
                <a href="">
                    <FontAwesomeIcon
                        icon={faInstagram}
                        style={{ color: "#000000" }}
                        width={25}
                    />
                </a>
            </div>
        </div>
    );
};

export default SocialMediaButton;
