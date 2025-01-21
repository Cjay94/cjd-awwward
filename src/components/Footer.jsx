import { FaDiscord, FaYoutube, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
    { href: "https://discord.com", icon: <FaDiscord /> },
    { href: "https://twitter.com", icon: <FaXTwitter /> },
    { href: "https://youtube.com", icon: <FaYoutube /> },
    { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
    return (
        <footer className="w-screen bg-violet-300 py-4 text-yellow-300">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-12">
                <p className="text-center md:text-left text-sm font-light">
                    &copy; {(new Date().getFullYear())} {`</CJD>`}. All Rights reserved.
                </p>

                <div className="flex justify-center md:justify-start gap-8">
                    {socialLinks.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black transition-colors duration-500 ease-in-out hover:text-yellow-300 text-[24px]"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

                <a
                    href="#privacy-policy"
                    className="text-center md:text-right text-sm font-light hover:underline"
                >
                    Privacy Policy
                </a>
            </div>
        </footer>
    )
}

export default Footer