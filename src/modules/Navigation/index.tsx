import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navigation = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	useEffect(() => {
		if (isDrawerOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isDrawerOpen]);

	const handleDrawerClose = () => {
		setIsDrawerOpen(false);
	};

	return (
		<>
			<div className="bg-white pl-6 py-5 pr-5 md:rounded-primary flex items-center justify-between shadow-primary">
				<Link to="/">
					<img
						src="/logo.png"
						alt="Logo"
						className="h-8.5 w-auto object-contain"
					/>
				</Link>
				<ul className="gap-7 font-medium text-[16px] text-gray [&_a]:hover:text-gray-900 [&_a]:transition-colors hidden md:flex">
					<li>
						<Link to="#">How it Works</Link>
					</li>
					<li>
						<Link to="#">Pricing</Link>
					</li>
					<li>
						<Link to="#">Use Case</Link>
					</li>
					<li>
						<Link to="#">FAQ</Link>
					</li>
				</ul>
				<Link
					to="#"
					className="text-[16px] font-medium px-4.5 py-2.75 rounded-[43.62px] custom-btn hidden md:inline-block"
				>
					Contact Sales
				</Link>

				{/* Mobile Hamburger Menu */}
				<button
					type="button"
					className="md:hidden flex flex-col gap-1.5"
					aria-label="Menu"
					onClick={() => setIsDrawerOpen(true)}
				>
					<span className="block w-6 h-0.5 bg-gray-900"></span>
					<span className="block w-6 h-0.5 bg-gray-900"></span>
					<span className="block w-6 h-0.5 bg-gray-900"></span>
				</button>
			</div>

			{/* Mobile Drawer */}
			{isDrawerOpen && (
				<div className="fixed inset-0 z-50 md:hidden">
					{/* Backdrop */}
					<div
						className="absolute inset-0 bg-black/50 animate-backdrop-fade-in"
						onClick={handleDrawerClose}
					></div>

					{/* Drawer Panel */}
					<div className="absolute inset-0 bg-white flex flex-col animate-drawer-slide-in">
						{/* Close Button */}
						<div className="flex justify-between p-6">
							<Link to="/">
								<img
									src="/logo.png"
									alt="Logo"
									className="h-8.5 w-auto object-contain"
								/>
							</Link>
							<button
								type="button"
								className="text-gray-900 text-2xl font-bold w-8 h-8 flex items-center justify-center"
								onClick={handleDrawerClose}
								aria-label="Close menu"
							>
								✕
							</button>
						</div>

						{/* Menu Items */}
						<nav className="flex-1 flex flex-col px-6 gap-6">
							<Link
								to="#"
								className="text-gray-900 text-lg font-medium hover:text-primary transition-colors"
								onClick={handleDrawerClose}
							>
								How it Works
							</Link>
							<Link
								to="#"
								className="text-gray-900 text-lg font-medium hover:text-primary transition-colors"
								onClick={handleDrawerClose}
							>
								Pricing
							</Link>
							<Link
								to="#"
								className="text-gray-900 text-lg font-medium hover:text-primary transition-colors"
								onClick={handleDrawerClose}
							>
								Use Case
							</Link>
							<Link
								to="#"
								className="text-gray-900 text-lg font-medium hover:text-primary transition-colors"
								onClick={handleDrawerClose}
							>
								FAQ
							</Link>
						</nav>

						{/* Contact Sales Button */}
						<div className="p-6">
							<button
								type="button"
								className="w-full py-3 px-5 rounded-[50px] custom-btn text-lg font-medium"
								onClick={handleDrawerClose}
							>
								Contact Sales
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Navigation;
