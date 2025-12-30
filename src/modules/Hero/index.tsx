import Navigation from "../Navigation";
import messageIcon from "../../assets/message-icon.svg";
import appleIcon from "../../assets/apple-icon.svg";
import arrowDown from "../../assets/arrow-down.svg";

const Hero = () => {
	return (
		<div className="max-w-300 mx-auto md:pt-10 z-1 relative h-full flex flex-col justify-between">
			<div>
				<Navigation />
				<div className="flex flex-col items-center justify-center mt-16 max-w-184 mx-auto gap-6 text-center px-3 md:px-0">
					<div className="shadow-primary flex bg-white pt-1 pb-1.25 px-2 rounded-primary gap-2">
						<img src={messageIcon} alt="Message Icon" />
						<p className="text-primary-600 leading-primary tracking-primary font-medium text-[16px]">
							#1 iMessage Automation Tool
						</p>
					</div>

					<h1 className="leading-primary tracking-primary text-[32px] md:text-[64px] font-bold text-gray-900">
						<span className="text-primary">iMessage</span> Automation for Teams
						and AI Workflows.
					</h1>
					<h3 className="md:max-w-146.5 mx-auto leading-[130%] text-[16px] md:text-[18px] text-black tracking-primary">
						Coup lets you, your team, or AI workflows send iMessages directly
						from your phone number, running securely on your Mac or Mac Mini.{" "}
					</h3>
					<div className="md:mt-6 flex flex-col md:flex-row gap-3">
						<button
							type="button"
							className="py-3 px-5 bg-primary rounded-[50px] text-white text-[18px] font-medium leading-primary tracking-primary custom-btn"
						>
							Get Started
						</button>
						<button
							type="button"
							className="border-[0.7px] border-gray-500 rounded-[50px] py-3 px-5 text-gray-900 text-[18px] leading-primary tracking-primary flex items-center gap-3 font-medium"
						>
							<img src={appleIcon} alt="Apple Icon" className="inline-block" />
							<p className="border-l-[0.5px] border-gray-500 pl-3">
								Download the Mac app
							</p>
						</button>
					</div>
				</div>
			</div>
			<button
				type="button"
				className="flex flex-col items-center gap-2 pb-10 bg-transparent border-0"
			>
				<p className="text-gray-900 leading-[130%] tracking-primary text-[18px] font-medium">
					Scroll to learn more
				</p>
				<img src={arrowDown} alt="Arrow Down" className="inline-block" />
			</button>
		</div>
	);
};

export default Hero;
