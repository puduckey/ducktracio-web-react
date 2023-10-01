import BottomBar from "@/components/BottomBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const PrivacyPolicy = () => {
    return (
        <>
            <Navbar />
            <div className="bg-black p-8 text-center text-3xl text-white">
                Privacy Policy
            </div>
            <div className="privacy-policy bg-white px-2 py-4 text-justify text-sm text-black lg:px-36">
                <p className="mb-4 text-sm">
                    Privacy policy for games developed by Ducktracio
                </p>
                <p className="mb-4 text-sm">Last updated: 03/08/2023</p>
                <p className="mb-4 text-sm">
                    This privacy policy describes how personal information is
                    collected, used, and shared from users of games developed by
                    Ducktracio. By using the games, you agree to the terms of
                    this privacy policy.
                </p>
                <h1 className="text-base font-bold">
                    Collection of Information
                </h1>
                <p className="mb-4 text-sm">
                    The games do not directly collect personal information from
                    users. However, the games use third-party services Google
                    Play Games and Unity for features such as high score and
                    achievement registration. These third-party services may
                    collect user information in accordance with their own
                    privacy policies. We recommend reviewing the privacy
                    policies of Google Play Services and Unity for more
                    information on what information they collect and how they
                    use it.
                </p>
                <ul className="mb-4">
                    <li className="mb-1 ml-5">
                        <Link
                            href="https://policies.google.com/privacy"
                            className="text-pink-400 underline underline-offset-2 hover:font-bold"
                        >
                            Google Privacy Policy
                        </Link>
                    </li>
                    <li className="mb-1 ml-5">
                        <Link
                            href="https://unity.com/legal/privacy-policy"
                            className="text-pink-400 underline underline-offset-2 hover:font-bold"
                        >
                            Unity Privacy Policy
                        </Link>
                    </li>
                </ul>

                <h1 className="text-base font-bold">Use of Information</h1>
                <p className="mb-4 text-sm">
                    The information collected by Google Play Services and Unity
                    is used to enhance the gaming experience of users, such as
                    registering users high scores and achievements in the games.
                </p>
                <h1 className="text-base font-bold">Sharing of Information</h1>
                <p className="mb-4 text-sm">
                    The information collected by Google Play Services and Unity
                    is shared with their respective third-party services to
                    enhance their services and customize the user experience.
                    The games do not share this information with third parties
                    or use it for any other purposes.
                </p>
                <h1 className="text-base font-bold">
                    Links to Other Apps or Websites
                </h1>
                <p className="mb-4 text-sm">
                    The games may include links to other apps or websites that
                    are not owned or controlled by games developed by
                    Ducktracio. This privacy policy applies only to the games
                    and does not extend to any other apps or websites. We
                    recommend reviewing the privacy policies of any other
                    website or app before providing personal information.
                </p>
                <h1 className="text-base font-bold">Privacy for Minors</h1>
                <p className="mb-4 text-sm">
                    Games developed by Ducktracio are rated for audiences +3. If
                    you are a parent or legal guardian and believe your child
                    has provided us with personal information, please contact us
                    immediately. We do not knowingly collect personal
                    information from children under the age of 13. If we become
                    aware that we have collected personal information from a
                    child under the age of 13 without verified parental consent,
                    we will take steps to remove that information from our
                    servers.
                </p>
                <h1 className="text-base font-bold">
                    Changes to Privacy Policy
                </h1>
                <p className="mb-4 text-sm">
                    Games developed by Ducktracio reserve the right to update
                    this privacy policy at any time. Users should periodically
                    review this page for the most up-to-date information on the
                    games privacy policy. Continued use of the games after
                    changes to this privacy policy are posted will be considered
                    acceptance of those changes.
                </p>
                <h1 className="text-base font-bold">Contact</h1>
                <p className="mb-4 text-sm">
                    If you have any questions about this privacy policy, please
                    contact us at{" "}
                    <Link
                        href="mailto:ducktracio@gmail.com"
                        className="text-pink-400 underline underline-offset-2 hover:font-bold"
                    >
                        ducktracio@gmail.com
                    </Link>
                    .
                </p>
            </div>
            <BottomBar />
            <Footer />
        </>
    );
};

export default PrivacyPolicy;
