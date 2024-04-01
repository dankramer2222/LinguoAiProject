import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";

type CourseInfo = {
    imageSrc: string;
    title: string;
};

type Props = {
    activeCourse: CourseInfo;
    points: number;
    hearts: number;
    hasActiveSubscription: boolean;
};
    
export const UserProgress = ({ activeCourse, points, hearts, hasActiveSubscription }: Props) => {
    return (
        <div className="flex items-center justify-between gap-x-2 w-full">
            <Link href="/courses">
                <Button variant="ghost">
                    <Image
                        src={activeCourse.imageSrc}
                        alt={activeCourse.title}
                        className="rounded-md border"
                        width={32}
                        height={32}
                    />
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-orange-500">
                    <button>
                        <Image src="/points.svg" height={28} width={28} alt="Points" className="mr-2" />
                        {points}
                    </button>
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-rose-500">
                    <button>
                        <Image src="/heart.svg" height={28} width={28} alt="Hearts" className="mr-2" />
                        {hasActiveSubscription ? <InfinityIcon className="h-4 w-4 stroke-[3]" /> : hearts}
                    </button>
                </Button>
            </Link>
        </div>
    );
};
