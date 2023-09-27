import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SocialMediaButtonProps {
    url: string;
    isPink: boolean;
    icon: IconDefinition;
    width: number;
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
    url,
    isPink,
    icon,
    width,
}) => {
    const bgColorClass = isPink ? "bg-pink-400" : "bg-cyan-400";

    return (
        <div className="col-span-1 flex items-center justify-center">
            <a href={url}>
                <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${bgColorClass} border-x-white p-2 hover:text-white`}
                >
                    <FontAwesomeIcon icon={icon} width={width} />
                </div>
            </a>
        </div>
    );
};

export default SocialMediaButton;
