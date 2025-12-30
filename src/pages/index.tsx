import Hero from "../modules/Hero";
import circleCloud from "../assets/circle-cloud.svg";
import clouds from "../assets/clouds.svg";
import birds from "../assets/birds.svg";
import birdLeft from "../assets/bird-left.svg";
import birdRight from "../assets/bird-right.svg";

const Home = () => {
	return (
		<div
			className="w-screen h-screen bg-cover bg-center overflow-hidden"
			style={{
				backgroundImage: "url('/Hero.png')",
			}}
		>
			<img
				src={circleCloud}
				alt="Circle Cloud"
				className="absolute top-0 left-0 z-0 object-contain"
			/>
			<div className="animate-fade-in h-full z-1 relative">
				<Hero />
			</div>
			<img
				src={birds}
				alt="Birds"
				className="absolute bottom-17.5 left-1/2 -translate-x-1/2 z-0 object-contain animate-slide-up"
			/>
			<img
				src={clouds}
				alt="Clouds"
				className="absolute bottom-0 z-0 object-cover w-screen animate-slide-up-long"
			/>
			<img
				src={birdLeft}
				alt="Bird Left"
				className="absolute bottom-60 -left-80 z-10 object-contain animate-fly-right"
			/>
			<img
				src={birdRight}
				alt="Bird Right"
				className="absolute bottom-60 -right-80 z-20 object-contain animate-fly-left"
			/>
		</div>
	);
};

export default Home;
