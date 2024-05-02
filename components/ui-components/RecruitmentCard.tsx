import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

interface RecruitmentCardProps {
	title: string;
	description: string;
	imageUrl: string;
	links: {
		href: string;
	}[];
}

function RecruitmentCard(props: RecruitmentCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{props.title}</CardTitle>
				<CardDescription>{props.description}</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				<div className="relative w-full aspect-video">
					<Image
						src={props.imageUrl}
						alt={"Image"}
						fill
						className="object-cover rounded-lg"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
				<div className="flex gap-4 justify-center">
					<Button variant={"outline"}>Informacje o profilu</Button>
					<Button variant={"outline"}>Plan nauczania</Button>
					<Button variant={"outline"}>Harmonogram</Button>
				</div>
			</CardContent>
		</Card>
	);
}

export default RecruitmentCard;
