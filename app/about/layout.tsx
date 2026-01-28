import Link from "next/link";
import { ReactNode } from "react";


interface AboutLayoutProps {
  children: ReactNode;
}

const AboutLayout = ({ children }: AboutLayoutProps) => {
    return (
        <section>
            <nav>
                <ul className="flex gap-6">
                    <Link href="/about/mission"><li>Mission</li></Link>
                    <Link href=""><li>Vission</li></Link>
                </ul>
            </nav>
            {children}
        </section>
    );
};

export default AboutLayout;