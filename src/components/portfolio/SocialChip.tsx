import type { ComponentType, SVGProps } from "react";

interface SocialChipProps {
	label: string;
	href: string;
	Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export default function SocialChip({ label, href, Icon }: SocialChipProps) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3.5 py-2 text-[13px] text-white/72 transition duration-300 hover:border-[#ff78e9]/35 hover:bg-[#ff78e9]/10 hover:text-[#ffb7f3]"
		>
			<Icon className="size-4 text-white/60 transition duration-300 group-hover:text-[#ff92ee]" />
			<span className="font-medium tracking-[0.01em]">{label}</span>
		</a>
	);
}
